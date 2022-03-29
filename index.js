const { Collection, MessageEmbed } = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");
const cron = require("cron");

const Client = require("./src/Structures/Client");

const client = new Client({
  intents: 32767,
});

client.once("ready", () => {
  console.log(`[READY]: ${client.user.tag} is ready`);
});

client.login(token);
