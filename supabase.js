
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bphjwhhyqeegriawjqnb.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = "test";
// console.log(process.env.SUPABASE_KEY);
console.log(process.env.SUPABASE_KEY)

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };