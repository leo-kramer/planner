// src/services/supabase/connect.tsx
import React, { ReactNode } from 'react';
import { SupabaseContext, supabase } from './client'; // Import the supabase client and context from client.tsx

// Type for DbProvider component props
interface DbProviderProps {
  children: ReactNode;
}

// DbProvider component that wraps children with context
export const DbProvider: React.FC<DbProviderProps> = ({ children }) => {
  return <SupabaseContext.Provider value={{ supabase }}>{children}</SupabaseContext.Provider>;
};
