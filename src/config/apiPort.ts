export const apiPort =
  typeof process.env !== 'undefined' && typeof process.env.API_PORT !== 'undefined'
    ? process.env.API_PORT
    : 3070;
