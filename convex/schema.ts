// Defines the database tables and types

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// v is a helper object that will both define the TypeScript object type and validate it during runtime
export default defineSchema({
  users: defineTable({
    username: v.string(),
    image: v.string(),
    clerkId: v.string(),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_username", ["username"]),
  friends: defineTable({
    sender: v.id("users"),
    target: v.id("users"),
    status: v.union(
      v.literal("pending"),
      v.literal("accepted"),
      v.literal("rejected")
    ),
  })
    .index("by_sender_status", ["sender", "status"])
    .index("by_target_status", ["target", "status"]),
  messages: defineTable({
    sender: v.string(),
    content: v.string(),
  }),
});
