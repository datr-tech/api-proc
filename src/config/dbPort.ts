export const dbPort =
  typeof process.env !== 'undefined' && typeof process.env.DB_PORT !== 'undefined'
    ? process.env.DB_PORT
    : 27017;
