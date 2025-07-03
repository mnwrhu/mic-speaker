// Inisialisasi Supabase client
const supabaseUrl = 'https://zdwjuwbbhqzoqapvhiwn.supabase.co';
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkd2p1d2JiaHF6b3FhcHZoaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTQxNjEsImV4cCI6MjA2NzEzMDE2MX0.62anUbI3t_5Acd_Zbv57y5f5G59KRC07hwx9ovsf-W0'; // kamu sudah benar
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
