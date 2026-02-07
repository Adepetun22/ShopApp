import Hashids from 'hashids';

// Configure Hashids with a salt for security
const hashids = new Hashids('shop-app-product-ids', 8);

/**
 * Encode a numeric ID to a hashed string
 * @param {number} id - The numeric ID to encode
 * @returns {string} - The encoded hash string
 */
export const encodeId = (id) => {
  return hashids.encode(id);
};

/**
 * Decode a hashed string back to the original numeric ID
 * @param {string} hash - The hashed string to decode
 * @returns {number|null} - The original numeric ID or null if invalid
 */
export const decodeId = (hash) => {
  const decoded = hashids.decode(hash);
  return decoded.length > 0 ? decoded[0] : null;
};

export default { encodeId, decodeId };

