import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const newsSchema = defineCollection({
  schema: z.object({}),
  loader: glob({
    base: "./src/posts/news",
    pattern: "**/*.md",
  }),
});

export const collections = {
  news: newsSchema,
};
