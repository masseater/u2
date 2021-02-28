import { CommandoClient } from "discord.js-commando";
import { join } from "path";

const client = new CommandoClient({
    commandPrefix: "tc!",
});

client.on("error", console.error).once("ready", () => {
    console.log("Ready!");
});

client.registry
    .registerDefaults()
    .registerGroup("test", "Test - テスト")
    .registerCommandsIn(join(__dirname, "commands"));

client.login(process.env.DISCORD_TOKEN);
