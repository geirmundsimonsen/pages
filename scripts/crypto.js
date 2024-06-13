async function encrypt(text, password) {
  const key = new TextEncoder().encode(password.padEnd(32, '\0'));
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const cryptoKey = await window.crypto.subtle.importKey('raw', key, 'AES-GCM', false, ['encrypt']);
  const encryptedData = new Uint8Array(await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, cryptoKey, new TextEncoder().encode(text)));
  return { encryptedData, iv };
}

async function decrypt(data, password, iv) {
  const key = new TextEncoder().encode(password.padEnd(32, '\0'));
  const cryptoKey = await window.crypto.subtle.importKey('raw', key, 'AES-GCM', false, ['decrypt']);
  const decryptedData = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, cryptoKey, data);
  return new TextDecoder().decode(decryptedData);
}