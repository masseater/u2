import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";

export default class TestCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: "test",
            memberName: "test",
            description: "テストコマンド",
            group: "test",
        });
    }

    public async run(message: CommandoMessage) {
        return message.say("hi");
    }
}
