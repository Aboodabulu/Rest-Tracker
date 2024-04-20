import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://erpenyoneqmetqpscztm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVycGVueW9uZXFtZXRxcHNjenRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2Mzg3MDAsImV4cCI6MjAyOTIxNDcwMH0.dt47zRHJL0ZM7mok9tuq1idp7gQO0ckt6pd8v7j5lZ4';
export const supabase = createClient(supabaseUrl, supabaseKey);