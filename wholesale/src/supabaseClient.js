import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://rdhsmvmatruicbsfaijq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkaHNtdm1hdHJ1aWNic2ZhaWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NTM5NTcsImV4cCI6MjA0NDMyOTk1N30.FMOIrcnAC7Cxg-gsprNSykUvocPJv6VqWKJwY12UnOQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
