export const dbUser =
  typeof process.env !== 'undefined' && typeof process.env.DB_USER !== 'undefined'
    ? process.env.DB_USER
    : '';
