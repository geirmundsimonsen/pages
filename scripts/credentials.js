import { getSupabaseProjectId, setSupabaseProjectId, getApiKey, setApiKey } from './dbcredentials.js';

document.addEventListener('DOMContentLoaded', () => {
  let supabaseProjectId = getSupabaseProjectId();
  if (!supabaseProjectId) {
    supabaseProjectId = '';
  }
  const supabaseProjectIdInput = document.querySelector('#supabaseProjectId');
  supabaseProjectIdInput.value = supabaseProjectId;
  supabaseProjectIdInput.addEventListener('input', () => {
    setSupabaseProjectId(supabaseProjectIdInput.value);
  });

  let supabaseApiKey = getApiKey();
  if (!supabaseApiKey) {
    supabaseApiKey = '';
  }
  const supabaseApiKeyInput = document.querySelector('#supabaseApiKey');
  supabaseApiKeyInput.value = supabaseApiKey;
  supabaseApiKeyInput.addEventListener('input', () => {
    setApiKey(supabaseApiKeyInput.value);
  });
});