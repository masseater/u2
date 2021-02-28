import { CommandoClient, SQLiteProvider } from 'discord.js-commando'
import { join } from 'path'
import sqlite from 'sqlite'

const client = new CommandoClient({
  commandPrefix: 'tc!',
  owner: [
    '1234567890',
    '9876543210'
  ]
})

client
  .on('error', console.error)
  .once('ready', () => {
    console.log('Ready!')
  })

client.registry
  .registerDefaults()
  .registerGroup('test', 'Test - テスト')
  .registerCommandsIn(join(__dirname, 'commands'))

client.setProvider(
  sqlite.open(join(__dirname, 'database', 'settings.sqlite3')).then((db) => new SQLiteProvider(db))
).catch(console.error)

client.login('your token')
