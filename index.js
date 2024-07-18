const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('𝐁𝐋 丶𝐒𝐲𝐬𝐭𝐞𝐦 is Fixed In VC room!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Array of target channel IDs
const targetChannelIds = [
  '1241353038237536306', // Original channel
  '1242415802104414239', // Room 2
];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Check if the message is in one of the target channels
  if (targetChannelIds.includes(message.channel.id)) {
    // Your auto-response message
    const response = 'https://cdn.discordapp.com/attachments/1248603957262155877/1260223919890366516/line.gif?ex=668e8a7c&is=668d38fc&hm=192ecfba5cc1f2a0fb53d340b395fec190772b9fbb3c4fd0edbda8cf22501a50&';

    // Send the response
    message.channel.send(response);
  }
});

// Log in to Discord with your bot's token from environment variable
client.login(process.env.token);
