export const dbHost =
  typeof process.env !== 'undefined' && typeof process.env.DB_HOST !== 'undefined'
    ? process.env.DB_HOST
    : 'db-dolomite';
