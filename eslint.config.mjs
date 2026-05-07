import nextConfig from "eslint-config-next";

export default [
  ...nextConfig.configs.recommended,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];
