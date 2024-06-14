import { getEncryptedData } from './querydb.js';
import { fillTableWithEncryptedData } from './dom.js';
import { getSupabaseProjectId, getApiKey } from './dbcredentials.js';

document.addEventListener('DOMContentLoaded', async () => {
  console.log('asd');
  fillTableWithEncryptedData(await getEncryptedData(getSupabaseProjectId(), getApiKey()), document.querySelector('#data-table tbody'));
});