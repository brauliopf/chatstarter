// Defines the database tables and types

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// v is a helper object that will both define the TypeScript object type and validate it during runtime
export default defineSchema({
  messages: defineTable({
    sender: v.string(),
    content: v.string(),
  }),
});
