import { createClient } from '@supabase/supabase-js';

// Lấy URL và API Key từ environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL hoặc API Key chưa được cấu hình. Vui lòng thêm VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY vào file .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
