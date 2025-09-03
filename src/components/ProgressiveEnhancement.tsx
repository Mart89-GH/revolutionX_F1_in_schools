import React from 'react';

interface ProgressiveEnhancementProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

const ProgressiveEnhancement: React.FC<ProgressiveEnhancementProps> = ({ children, fallback }) => {
  const [hasJavaScript, setHasJavaScript] = React.useState(false);

  React.useEffect(() => {
    setHasJavaScript(true);
  }, []);

  if (!hasJavaScript) {
    return (
      <noscript>
        {fallback}
      </noscript>
    );
  }

  return <>{children}</>;
};

export default ProgressiveEnhancement;