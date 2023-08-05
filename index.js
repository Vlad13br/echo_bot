const TelegramApi = require('node-telegram-bot-api');
const token = '5550576189:AAGRHtF5vVH9DFgdMO2idJYfmn8yiinorBc'; 
const bot = new TelegramApi(token, { polling: true });

const start = async () => {
  bot.on('message', async (msg) => {
      const text = msg.text;
    const chatId = msg.chat.id;
    return bot.sendMessage(chatId, text);
  })
}

start()