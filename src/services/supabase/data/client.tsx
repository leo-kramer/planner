// src/services/supabase/client.tsx
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

// Supabase client setup
const supabaseUrl = import.meta.env.SUPABASE_URL as string;
const apiKey = import.meta.env.SUPABASE_ANON_KEY as string;

// Export the Supabase client for use elsewhere
export const supabase: SupabaseClient = createClient(supabaseUrl, apiKey);

// Supabase context setup
export const SupabaseContext = createContext<{ supabase: SupabaseClient } | undefined>(undefined);

// Hook to access the Supabase context
export const useDb = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useDb must be used within a DbProvider');
  }
  return context.supabase; // Now returns the supabase client directly
};
