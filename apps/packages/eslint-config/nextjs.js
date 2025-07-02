module.exports = {
  extends: ["./index.js", "plugin:@next/next/recommended"],
  rules: {
    // Next.js 특화 룰들
    "@next/next/no-img-element": "error",
    "@next/next/no-html-link-for-pages": "error",
    "@next/next/no-page-custom-font": "warn",
  },
  overrides: [
    {
      files: ["pages/**/*", "app/**/*"],
      rules: {
        // Next.js 페이지/앱 디렉토리 전용 룰
        "import/no-default-export": "off",
      },
    },
  ],
};
