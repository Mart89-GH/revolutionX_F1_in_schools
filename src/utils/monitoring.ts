/**
 * Monitoring and Logging Utilities for AI Assistant
 * Provides comprehensive monitoring, error tracking, and performance metrics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

export interface ErrorLog {
  id: string;
  timestamp: Date;
  level: 'error' | 'warning' | 'info';
  message: string;
  stack?: string;
  context?: Record<string, unknown>;
  userId?: string;
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  uptime: number;
  memoryUsage: number;
  responseTime: number;
  errorRate: number;
  lastCheck: Date;
}

interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

class MonitoringService {
  private static instance: MonitoringService;
  private metrics: PerformanceMetric[] = [];
  private errors: ErrorLog[] = [];
  private startTime: Date = new Date();
  private healthChecks: (() => Promise<boolean>)[] = [];

  private constructor() {
    this.setupErrorHandling();
    this.startHealthMonitoring();
  }

  static getInstance(): MonitoringService {
    if (!MonitoringService.instance) {
      MonitoringService.instance = new MonitoringService();
    }
    return MonitoringService.instance;
  }

  private setupErrorHandling(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.logError('error', event.message, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.logError('error', `Unhandled promise rejection: ${event.reason}`, {
        reason: event.reason
      });
    });
  }

  private startHealthMonitoring(): void {
    setInterval(() => {
      this.performHealthCheck();
    }, 30000); // Check every 30 seconds
  }

  recordMetric(name: string, value: number, metadata?: Record<string, unknown>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date(),
      metadata
    };

    this.metrics.push(metric);

    // Keep only last 1000 metrics to prevent memory issues
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendMetricToService(metric);
    }
  }

  logError(
    level: ErrorLog['level'],
    message: string,
    context?: Record<string, unknown>,
    userId?: string
  ): void {
    const error: ErrorLog = {
      id: this.generateId(),
      timestamp: new Date(),
      level,
      message,
      context,
      userId
    };

    this.errors.push(error);

    // Keep only last 500 errors
    if (this.errors.length > 500) {
      this.errors = this.errors.slice(-500);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      const logLevel = level === 'warning' ? 'warn' : level;
      console[logLevel](`[${error.timestamp.toISOString()}] ${message}`, context);
    }

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendErrorToService(error);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private async sendMetricToService(metric: PerformanceMetric): Promise<void> {
    // Implementation would send to monitoring service like DataDog, New Relic, etc.
    console.log('Metric sent:', metric);
  }

  private async sendErrorToService(error: ErrorLog): Promise<void> {
    // Implementation would send to error tracking service like Sentry, Bugsnag, etc.
    console.log('Error sent:', error);
  }

  getMetrics(name?: string, since?: Date): PerformanceMetric[] {
    let filtered = this.metrics;

    if (name) {
      filtered = filtered.filter(m => m.name === name);
    }

    if (since) {
      filtered = filtered.filter(m => m.timestamp >= since);
    }

    return filtered;
  }

  getErrors(level?: ErrorLog['level'], since?: Date): ErrorLog[] {
    let filtered = this.errors;

    if (level) {
      filtered = filtered.filter(e => e.level === level);
    }

    if (since) {
      filtered = filtered.filter(e => e.timestamp >= since);
    }

    return filtered;
  }

  getAverageMetric(name: string, since?: Date): number {
    const metrics = this.getMetrics(name, since);
    if (metrics.length === 0) return 0;

    const sum = metrics.reduce((acc, m) => acc + m.value, 0);
    return sum / metrics.length;
  }

  getErrorRate(since?: Date): number {
    const errors = this.getErrors('error', since);
    const totalRequests = this.getMetrics('request', since).length;

    if (totalRequests === 0) return 0;
    return (errors.length / totalRequests) * 100;
  }

  addHealthCheck(check: () => Promise<boolean>): void {
    this.healthChecks.push(check);
  }

  private async performHealthCheck(): Promise<SystemHealth> {
    const startTime = performance.now();

    try {
      // Run all health checks
      const results = await Promise.all(
        this.healthChecks.map(check =>
          check().catch(() => false)
        )
      );

      const allHealthy = results.every(result => result);
      const responseTime = performance.now() - startTime;
      const uptime = Date.now() - this.startTime.getTime();
      const errorRate = this.getErrorRate(new Date(Date.now() - 300000)); // Last 5 minutes

      const health: SystemHealth = {
        status: allHealthy ? 'healthy' : 'degraded',
        uptime,
        memoryUsage: this.getMemoryUsage(),
        responseTime,
        errorRate,
        lastCheck: new Date()
      };

      this.recordMetric('health_check_duration', responseTime);
      this.recordMetric('error_rate', errorRate);

      return health;
    } catch (error) {
      this.logError('error', 'Health check failed', { error });

      return {
        status: 'unhealthy',
        uptime: Date.now() - this.startTime.getTime(),
        memoryUsage: this.getMemoryUsage(),
        responseTime: performance.now() - startTime,
        errorRate: 100,
        lastCheck: new Date()
      };
    }
  }

  private getMemoryUsage(): number {
    if ('memory' in performance) {
      return (performance as unknown as PerformanceWithMemory).memory.usedJSHeapSize / 1024 / 1024; // MB
    }
    return 0;
  }

  async getSystemHealth(): Promise<SystemHealth> {
    return this.performHealthCheck();
  }

  generateReport(): string {
    const now = new Date();
    const lastHour = new Date(now.getTime() - 3600000);

    const recentMetrics = this.getMetrics(undefined, lastHour);
    const recentErrors = this.getErrors(undefined, lastHour);

    const report = {
      timestamp: now.toISOString(),
      uptime: Date.now() - this.startTime.getTime(),
      metrics: {
        total: recentMetrics.length,
        averageResponseTime: this.getAverageMetric('response_time', lastHour),
        errorRate: this.getErrorRate(lastHour)
      },
      errors: {
        total: recentErrors.length,
        byLevel: {
          error: recentErrors.filter(e => e.level === 'error').length,
          warning: recentErrors.filter(e => e.level === 'warning').length,
          info: recentErrors.filter(e => e.level === 'info').length
        }
      },
      memoryUsage: this.getMemoryUsage()
    };

    return JSON.stringify(report, null, 2);
  }

  // Utility methods for common monitoring patterns
  timeFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();

    return fn().then(
      result => {
        this.recordMetric(name, performance.now() - start);
        return result;
      },
      error => {
        this.recordMetric(name, performance.now() - start);
        this.logError('error', `Function ${name} failed`, { error });
        throw error;
      }
    );
  }

  trackUserAction(action: string, userId?: string, metadata?: Record<string, unknown>): void {
    this.recordMetric('user_action', 1, { action, userId, ...metadata });
  }

  trackAPICall(endpoint: string, duration: number, success: boolean): void {
    this.recordMetric('api_call_duration', duration, { endpoint, success });

    if (!success) {
      this.logError('warning', `API call failed: ${endpoint}`, { endpoint, duration });
    }
  }
}

export const monitoring = MonitoringService.getInstance();

// Convenience functions
export const recordMetric = (name: string, value: number, metadata?: Record<string, unknown>) => {
  monitoring.recordMetric(name, value, metadata);
};

export const logError = (level: ErrorLog['level'], message: string, context?: Record<string, unknown>) => {
  monitoring.logError(level, message, context);
};

export const timeFunction = <T>(name: string, fn: () => Promise<T>): Promise<T> => {
  return monitoring.timeFunction(name, fn);
};

export const trackUserAction = (action: string, userId?: string, metadata?: Record<string, unknown>) => {
  monitoring.trackUserAction(action, userId, metadata);
};