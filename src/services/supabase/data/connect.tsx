import React, { ReactNode } from 'react';
import { SupabaseContext, supabase } from './client';

interface DbProviderProps {
  children: ReactNode;
}

export const DbProvider: React.FC<DbProviderProps> = ({ children }) => {
  return <SupabaseContext.Provider value={{ supabase }}>{children}</SupabaseContext.Provider>;
};
