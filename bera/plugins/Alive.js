import config from '../../config.cjs';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import Jimp from 'jimp';

const { generateWAMessageFromContent, proto } = pkg;
const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (3600 * 24));
  const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  const timeString = `${String(days).padStart(2, '0')}-${String(hours).padStart(2, '0')}-${String(minutes).padStart(2, '0')}-${String(seconds).padStart(2, '0')}`;
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();
if (['alive', 'uptime', 'runtime'].includes(cmd)) {
    const width = 800;
    const height = 500;
    const image = new Jimp(width, height, 'black');
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    const textMetrics = Jimp.measureText(font, timeString);
    const textHeight = Jimp.measureTextHeight(font, timeString, width);
    const x = (width / 2) - (textMetrics / 2);
    const y = (height / 2) - (textHeight / 2);
    image.print(font, x, y, timeString, width, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    
    const uptimeMessage =
 `*🤖 TREX-MD Status Overview*
_________________________________________

*📆 ${days} Day(s)*
*🕰️ ${hours} Hour(s)*
*⏳ ${minutes} Minute(s)*
*⏲️ ${seconds} Second(s)*
_________________________________________
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
             caption: status,
             contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363354023106228@newsletter',
                    newsletterName: 'bera tech',
                    serverMessageId: 143
                 }
                }
            }, {
    quoted: m
  });
};

export default alive;
