import { decrypt } from './crypto.js';
import { HexStringToUint8Array } from './hexbinary.js';

document.addEventListener('DOMContentLoaded', async () => {
  const decryptButton = document.querySelector('#decrypt');
  decryptButton.addEventListener('click', async () => {
    const data = document.querySelector('#data').value;
    const iv = document.querySelector('#iv').value;
    const password = document.querySelector('#password').value;
    const decryptedData = await decrypt(HexStringToUint8Array(data), HexStringToUint8Array(iv), password);
    document.querySelector('#decryptedData').textContent = decryptedData;
  });
});