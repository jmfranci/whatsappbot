const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { getExchangeRate } = require("./kinguilahojeAPI/index");
const client = new Client();
const CONSTANTS = require("./util/constants");

client.on("qr", (qr) => {
  // Generate and scan this code with your phone
  console.log("QR RECEIVED", qr);
  qrcode.generate(qr, { small: true }, function (qrcode) {
    console.log(qrcode);
  });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (msg) => {
  if (msg.body == "!ping") {
    msg.reply("pong");
  }
  if (CONSTANTS.ASKING_DOLLAR.includes(msg.body)) {
    console.log("Mensagem recebida para usd");
    getExchangeRate((rates) => {
      msg.reply(`O dólar está à *${rates.USD}*`);
    });
  }
  if (CONSTANTS.ASKING_EURO.includes(msg.body)) {
    console.log("Mensagem recebida para eur");
    getExchangeRate((rates) => {
      msg.reply(`O Euro está à *${rates.EUR}*`);
    });
  }
});

client.initialize();
