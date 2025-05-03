import React, { useState, useEffect } from 'react';
import { createDbClient, SupabaseContext } from './services/supabase/data/client.tsx';
import { breakpointContext, getBreakpoint } from './types/breakpoint-context.ts';

const db = createDbClient();

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SupabaseContext.Provider value={db}>
      <breakpointContext.Provider value={breakpoint}>{children}</breakpointContext.Provider>
    </SupabaseContext.Provider>
  );
};
