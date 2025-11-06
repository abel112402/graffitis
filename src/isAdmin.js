
import { supabase } from './supabaseClient.js';

const isAdmin = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { data, error } = await supabase
    .from('admins')
    .select('user_id')
    .eq('user_id', user.id);

  return (data && data.length > 0);
}
export default isAdmin;