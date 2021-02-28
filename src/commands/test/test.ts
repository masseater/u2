import { Command, CommandoClient, CommandMessage } from 'discord.js-commando'

export default class TestCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: 'test',
      memberName: 'test',
      description: 'テストコマンド',
      group: 'test'
    })
  }

  public async run (message: CommandMessage) {
    return message.say('hi')
  }
}