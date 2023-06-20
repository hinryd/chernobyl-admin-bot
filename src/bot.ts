import { Bot } from "grammy";
import { db } from "./db";

if (!process.env.BOT_TOKEN) throw new ReferenceError();

export const bot = new Bot(process.env.BOT_TOKEN, {
  botInfo: {
    id: 6257163183,
    is_bot: true,
    first_name: "屌你老味無得走盞",
    username: "chernobyl_admin_bot",
    can_join_groups: true,
    can_read_all_group_messages: false,
    supports_inline_queries: false,
  },
});

bot.use(async (ctx, next) => {
  console.log("BOT LOGGER", ctx.message);
  next();
});

bot.command("start", (ctx) => ctx.reply("Hello from Deta1! 🚀"));

bot.on("message", async (ctx) => {
  if (ctx.message.text) {
    await db.put({
      chatId: ctx.message.chat.id,
      fromId: ctx.message.from.id,
      text: ctx.message.text,
      length: ctx.message.text?.length ?? 0,
    });
  }
});
