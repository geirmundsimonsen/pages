import { getEncryptedData } from './querydb.js';
import { getApiKey, getSupabaseProjectId } from './dbcredentials.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', async () => {
    console.log(await getEncryptedData(getSupabaseProjectId(), getApiKey()));
  });
});