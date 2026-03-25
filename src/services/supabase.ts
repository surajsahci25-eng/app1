import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? 'https://demo.supabase.co';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? 'demo-anon-key';

// Supabase client is initialized now for future backend wiring.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
