function Uint8ArrayToHexString(uint8Array) {
  console.log(uint8Array);
  return Array.from(uint8Array).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function HexStringToUint8Array(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}