const encodeLookup = /* @__PURE__ */ Array.from(
  { length: 256 },
  (_, i) => i.toString(16).padStart(2, "0"),
)

export function encodeHex(bytes: Uint8Array): string {
  let str = ""
  for (let i = 0; i < bytes.length; i++) {
    str += encodeLookup[bytes[i]!]
  }
  return str
}

export function encodeHexPrefixed(bytes: Uint8Array): string {
  let str = "0x"
  for (let i = 0; i < bytes.length; i++) {
    str += encodeLookup[bytes[i]!]
  }
  return str
}
