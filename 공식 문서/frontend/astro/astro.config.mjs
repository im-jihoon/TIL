// @ts-check
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  integrations: [
    expressiveCode({
      themes: ["dracula-soft"],
      defaultLocale: "ko-KR",
      styleOverrides: {
        // codeFontFamily: "Pretendard",
      },
    }),
    mdx(),
  ],
});
