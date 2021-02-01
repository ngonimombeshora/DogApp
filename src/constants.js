export const CACHE_ENTRY_TTL = 90  //better use process.env instead...

// ------------------------------------
// headers
// ------------------------------------

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,PATCH,POST",
}

// ------------------------------------
// Error Messages
// ------------------------------------
export const ERROR_MESSAGES = {
  invalid: "Invalid request",
  notFound: "Requested resource could not be found",
  unknown: "Internal Server Error",
}
