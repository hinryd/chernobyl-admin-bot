import "dotenv/config";
import express from "express";
import { webhookCallback } from "grammy";
import { bot } from "./bot";

async function createExpressServer() {
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    console.log("LOGGER:", req.method, req.url, req.body);
    next();
  });
  app.post(`/${bot.token}`, webhookCallback(bot));
  app.post("/test", (req, res) => {
    res.send({
      ok: true,
      hello: "world",
    });
  });
  app.get("/", (req, res) => {
    res.send(
      `${process.env.DETA_SPACE_APP_HOSTNAME}\n${process.env.DETA_SPACE_APP_VERSION}`,
    );
  });
  app.listen(Number(process.env.PORT) || 4201, () => {
    console.log(`🚀 on ${process.env.PORT || 4201}`);
  });
}

createExpressServer();
