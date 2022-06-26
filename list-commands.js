const { clientId, token } = require('./config.json');

const { Client } = require("discord-slash-commands-client");
// TypeScript: import { Client } from "discord-slash-commands-client";

const client = new Client(
  token,
  clientId
);

// list all your existing commands.
client.getCommands().then(console.log).catch(console.error);