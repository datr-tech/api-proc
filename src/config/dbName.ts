export const dbName =
  typeof process.env !== 'undefined' && typeof process.env.DB_NAME !== 'undefined'
    ? process.env.DB_NAME
    : 'dolomite';
