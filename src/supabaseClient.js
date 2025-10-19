import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://rpflbcwtcibudswdndzr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZmxiY3d0Y2lidWRzd2RuZHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MDIyMDUsImV4cCI6MjA3NjE3ODIwNX0.mzVExoFHZoQXbxiUJV4vMRNNct8TwUy8Maniu4wN6LU'

/*
const SUPABASE_URL = 'https://<PROJECT_REF>.supabase.co'
const SUPABASE_ANON_KEY = '<ANON_PUBLIC_KEY>'
*/

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)