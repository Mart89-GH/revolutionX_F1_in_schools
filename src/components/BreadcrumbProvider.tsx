import * as React from 'react';

interface Breadcrumb {
  name: string;
  item: string;
}

interface BreadcrumbContextType {
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
  addBreadcrumb: (breadcrumb: Breadcrumb) => void;
  removeBreadcrumb: (item: string) => void;
  clearBreadcrumbs: () => void;
}

const BreadcrumbContext = React.createContext<BreadcrumbContextType>({
  breadcrumbs: [],
  setBreadcrumbs: () => { },
  addBreadcrumb: () => { },
  removeBreadcrumb: () => { },
  clearBreadcrumbs: () => { }
});

export const useBreadcrumbs = () => {
  const context = React.useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider');
  }
  return context;
};

interface BreadcrumbProviderProps {
  children: React.ReactNode;
}

export const BreadcrumbProvider = ({ children }: BreadcrumbProviderProps): JSX.Element => {
  const [breadcrumbs, setBreadcrumbs] = React.useState<Breadcrumb[]>([]);

  const addBreadcrumb = React.useCallback((breadcrumb: Breadcrumb) => {
    setBreadcrumbs(prev => {
      const exists = prev.some(b => b.item === breadcrumb.item);
      if (exists) return prev;
      return [...prev, breadcrumb];
    });
  }, []);

  const removeBreadcrumb = React.useCallback((item: string) => {
    setBreadcrumbs(prev => prev.filter(b => b.item !== item));
  }, []);

  const clearBreadcrumbs = React.useCallback(() => {
    setBreadcrumbs([]);
  }, []);

  const value = React.useMemo(() => ({
    breadcrumbs,
    setBreadcrumbs,
    addBreadcrumb,
    removeBreadcrumb,
    clearBreadcrumbs,
  }), [breadcrumbs, addBreadcrumb, removeBreadcrumb, clearBreadcrumbs]);

  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbProvider;