/**
 * GDPR Compliance and Data Privacy Utilities
 * Ensures proper handling of user data and privacy requirements
 */

export interface PrivacySettings {
  dataCollection: boolean;
  analytics: boolean;
  personalization: boolean;
  marketing: boolean;
}

export interface DataProcessingLog {
  timestamp: Date;
  action: 'collect' | 'process' | 'store' | 'delete' | 'export';
  dataType: string;
  purpose: string;
  legalBasis: string;
  userId?: string;
}

class DataPrivacyManager {
  private static instance: DataPrivacyManager;
  private logs: DataProcessingLog[] = [];
  private settings: PrivacySettings;

  private constructor() {
    this.settings = this.loadPrivacySettings();
  }

  static getInstance(): DataPrivacyManager {
    if (!DataPrivacyManager.instance) {
      DataPrivacyManager.instance = new DataPrivacyManager();
    }
    return DataPrivacyManager.instance;
  }

  private loadPrivacySettings(): PrivacySettings {
    const stored = localStorage.getItem('privacy-settings');
    return stored ? JSON.parse(stored) : {
      dataCollection: false,
      analytics: false,
      personalization: false,
      marketing: false
    };
  }

  updatePrivacySettings(settings: Partial<PrivacySettings>): void {
    this.settings = { ...this.settings, ...settings };
    localStorage.setItem('privacy-settings', JSON.stringify(this.settings));
    this.logDataProcessing('process', 'privacy-settings', 'User preference management', 'Consent');
  }

  getPrivacySettings(): PrivacySettings {
    return { ...this.settings };
  }

  logDataProcessing(
    action: DataProcessingLog['action'],
    dataType: string,
    purpose: string,
    legalBasis: string,
    userId?: string
  ): void {
    const log: DataProcessingLog = {
      timestamp: new Date(),
      action,
      dataType,
      purpose,
      legalBasis,
      userId
    };

    this.logs.push(log);
    
    // Keep only last 1000 logs to prevent memory issues
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000);
    }

    // In production, send to secure logging service
    if (process.env.NODE_ENV === 'production') {
      this.sendToSecureLog(log);
    }
  }

  private async sendToSecureLog(log: DataProcessingLog): Promise<void> {
    // Implementation would send to secure, GDPR-compliant logging service
    console.log('Data processing logged:', log);
  }

  sanitizeUserInput(input: string): string {
    // Remove potential PII and sensitive information
    return input
      .replace(/\b\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\b/g, '[CARD-REDACTED]') // Credit cards
      .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, '[EMAIL-REDACTED]') // Emails
      .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[SSN-REDACTED]') // SSN
      .replace(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g, '[PHONE-REDACTED]'); // Phone numbers
  }

  canCollectData(dataType: string): boolean {
    switch (dataType) {
      case 'analytics':
        return this.settings.analytics;
      case 'personalization':
        return this.settings.personalization;
      case 'marketing':
        return this.settings.marketing;
      default:
        return this.settings.dataCollection;
    }
  }

  exportUserData(userId: string): any {
    this.logDataProcessing('export', 'user-data', 'GDPR data export request', 'Legal obligation', userId);
    
    // Collect all user data for export
    const userData = {
      privacySettings: this.settings,
      chatHistory: this.getChatHistory(userId),
      processingLogs: this.logs.filter(log => log.userId === userId),
      exportDate: new Date().toISOString()
    };

    return userData;
  }

  deleteUserData(userId: string): void {
    this.logDataProcessing('delete', 'user-data', 'GDPR deletion request', 'Legal obligation', userId);
    
    // Remove user data from all storage
    this.logs = this.logs.filter(log => log.userId !== userId);
    localStorage.removeItem(`chat-history-${userId}`);
    localStorage.removeItem(`user-preferences-${userId}`);
  }

  private getChatHistory(userId: string): any[] {
    const stored = localStorage.getItem(`chat-history-${userId}`);
    return stored ? JSON.parse(stored) : [];
  }

  getDataRetentionInfo(): { [key: string]: string } {
    return {
      'Chat Messages': '30 days',
      'Privacy Settings': 'Until withdrawal of consent',
      'Performance Metrics': '90 days (anonymized)',
      'Error Logs': '30 days',
      'Usage Analytics': '12 months (if consented)'
    };
  }

  generatePrivacyReport(): string {
    const report = {
      totalLogs: this.logs.length,
      dataTypes: [...new Set(this.logs.map(log => log.dataType))],
      purposes: [...new Set(this.logs.map(log => log.purpose))],
      legalBases: [...new Set(this.logs.map(log => log.legalBasis))],
      currentSettings: this.settings,
      retentionPolicies: this.getDataRetentionInfo(),
      lastUpdated: new Date().toISOString()
    };

    return JSON.stringify(report, null, 2);
  }
}

export const dataPrivacy = DataPrivacyManager.getInstance();

// Utility functions for common privacy operations
export const sanitizeInput = (input: string): string => {
  return dataPrivacy.sanitizeUserInput(input);
};

export const logDataUsage = (
  action: DataProcessingLog['action'],
  dataType: string,
  purpose: string,
  legalBasis: string = 'Legitimate interest'
): void => {
  dataPrivacy.logDataProcessing(action, dataType, purpose, legalBasis);
};

export const canUseData = (dataType: string): boolean => {
  return dataPrivacy.canCollectData(dataType);
};

// Privacy-compliant localStorage wrapper
export const privacyStorage = {
  setItem: (key: string, value: string, dataType: string = 'general'): void => {
    if (dataPrivacy.canCollectData(dataType)) {
      localStorage.setItem(key, value);
      dataPrivacy.logDataProcessing('store', dataType, 'Local storage', 'Consent');
    }
  },

  getItem: (key: string, dataType: string = 'general'): string | null => {
    if (dataPrivacy.canCollectData(dataType)) {
      dataPrivacy.logDataProcessing('collect', dataType, 'Local storage retrieval', 'Consent');
      return localStorage.getItem(key);
    }
    return null;
  },

  removeItem: (key: string, dataType: string = 'general'): void => {
    localStorage.removeItem(key);
    dataPrivacy.logDataProcessing('delete', dataType, 'Local storage cleanup', 'User request');
  }
};