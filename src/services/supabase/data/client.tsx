import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const createDbClient = (): SupabaseClient => {
  return createClient(supabaseUrl, apiKey);
};

export const SupabaseContext = createContext<SupabaseClient | null>(null);

export const useDb = (): SupabaseClient => {
  const context = useContext(SupabaseContext);
  if (!context) throw new Error('useDB must be used within a DBProvider');
  return context;
};
