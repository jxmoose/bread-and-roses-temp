import { UUID } from 'crypto';
import supabase from '../createClient';

export async function fetchVolunteerPreferences(user_id: UUID) {
  const { data, error } = await supabase
    .from('volunteers')
    .select('first_name, last_name, phone_number')
    .eq('user_id', user_id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function fetchPerformer(event_id: UUID) {
  const { data, error } = await supabase
    .from('event_signups')
    .select('*')
    .eq('event_id', event_id)
    .eq('role', 'PERFORMER')
    .eq('is_accepted', true)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const { data: performer, error: performererror } = await supabase
    .from('volunteers')
    .select('*')
    .eq('user_id', data.user_id)
    .single();

  if (performererror) {
    throw new Error(performererror.message);
  }

  return performer;
}
