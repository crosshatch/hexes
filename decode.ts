const decodeLookup = /* @__PURE__ */ Array.from(
  { length: 128 },
  (_, i) => parseInt(String.fromCharCode(i), 16) | 0,
)

export function decodeHex(hex: string): Uint8Array {
  if (hex.startsWith("0x")) hex = hex.slice(2)
  if (hex.length % 2 === 1) hex = "0" + hex
  const array = new Uint8Array(hex.length >> 1)
  for (let i = 0; i < array.length; i++) {
    array[i] = (decodeLookup[hex.charCodeAt(i << 1)!]! << 4)
      | decodeLookup[hex.charCodeAt(i << 1 | 1)!]!
  }
  return array
}
