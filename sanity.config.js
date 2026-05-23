import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";
import { apiVersion, dataset, projectId } from "./sanity/client";

export default defineConfig({
  name: "ap_concrete",
  title: "A&P Concrete",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
