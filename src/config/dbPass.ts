export const dbPass =
  typeof process.env !== 'undefined' && typeof process.env.DB_PASS !== 'undefined'
    ? process.env.DB_PASS
    : '';
