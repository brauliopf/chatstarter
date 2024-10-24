// functions to interact with the messages table

import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// return all messages
// query is a function that fetches data
// 'collect()' gathers and returns it all
// ctx: is a common object in convex. It is used to provide access to utilities and services, such as the DB.
// query functions use ".collect()" to gather the output and expose in the return statement.
// handler: is a function that defines the logic for processing a query or mutation.
export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});

// create a new message
// mutation is a function that modifies data in a db (also creates it)
// conve requires use the "v" object to assign types and enable runtime verification
export const create = mutation({
  args: {
    sender: v.string(),
    content: v.string(),
  },
  handler: async (ctx, { sender, content }) => {
    await ctx.db.insert("messages", { sender, content });
  },
});
