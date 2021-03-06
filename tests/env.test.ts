import * as ENV from "../env";

describe("Environment Variables Configuration", () => {
  test("Contains the same keys - if this test fails a key was added. Be sure to update the create_env.sh script!", () => {
    const vars = Object.keys(ENV).sort();
    expect(vars).toMatchInlineSnapshot(`
Array [
  "ANDROID_CLIENT_ID",
  "DRAGON_URI",
  "FORVO_API_KEY",
  "GOOGLE_TRANSLATE_API_KEY",
  "IOS_CLIENT_ID",
  "PINYIN_CONVERSION_SERVICE_API_KEY",
  "SENTRY_AUTH_TOKEN",
  "SENTRY_DSN",
  "STARGAZER_SERVER_URL",
]
`);
  });
});
