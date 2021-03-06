import {
  ANDROID_CLIENT_ID,
  DRAGON_URI,
  FORVO_API_KEY,
  GOOGLE_TRANSLATE_API_KEY,
  IOS_CLIENT_ID,
  PINYIN_CONVERSION_SERVICE_API_KEY,
  SENTRY_AUTH_TOKEN,
  SENTRY_DSN,
  STARGAZER_SERVER_URL,
} from "../../env";

/** ========================================================================
 * Environment variables config.
 * =========================================================================
 */

const CONFIG = {
  DRAGON_URI: process.env.DRAGON_URI || DRAGON_URI,
  ANDROID_CLIENT_ID: process.env.ANDROID_CLIENT_ID || ANDROID_CLIENT_ID,
  IOS_CLIENT_ID: process.env.IOS_CLIENT_ID || IOS_CLIENT_ID,
  SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN || SENTRY_AUTH_TOKEN,
  SENTRY_DSN: process.env.SENTRY_DSN || SENTRY_DSN,
  FORVO_API_KEY: process.env.FORVO_API_KEY || FORVO_API_KEY,
  PINYIN_CONVERSION_SERVICE_API_KEY:
    process.env.PINYIN_CONVERSION_SERVICE_API_KEY ||
    PINYIN_CONVERSION_SERVICE_API_KEY,
  GOOGLE_TRANSLATE_API_KEY:
    process.env.GOOGLE_TRANSLATE_API_KEY || GOOGLE_TRANSLATE_API_KEY,
  STARGAZER_SERVER_URL:
    process.env.STARGAZER_SERVER_URL || STARGAZER_SERVER_URL,
};

/** ========================================================================
 * Export
 * =========================================================================
 */

export default CONFIG;
