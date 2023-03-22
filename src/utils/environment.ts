export const IS_DEVELOPMENT =
  process.env.NODE_ENV === 'development' &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'development');
export const IS_PREVIEW =
  process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'preview';
export const IS_PRODUCTION =
  process.env.NODE_ENV === 'production' &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production');
