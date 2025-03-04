


import _0x24006a from '../../config.cjs';
import _0x5eb628, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import _0x537eef from 'jimp';
const {
  generateWAMessageFromContent,
  proto
} = _0x5eb628;
const alive = async (_0x33d31f, _0x4619d5) => {
  const _0x59d8df = process.uptime();
  const _0x1e5e9d = Math.floor(_0x59d8df / 86400);
  const _0x20b06b = Math.floor(_0x59d8df % 86400 / 0xe10);
  const _0x12b549 = Math.floor(_0x59d8df % 0xe10 / 0x3c);
  const _0x8ad68a = Math.floor(_0x59d8df % 0x3c);
  const _0x400cc0 = String(_0x1e5e9d).padStart(0x2, '0') + '-' + String(_0x20b06b).padStart(0x2, '0') + '-' + String(_0x12b549).padStart(0x2, '0') + '-' + String(_0x8ad68a).padStart(0x2, '0');
  const _0x36a8e8 = _0x24006a.PREFIX;
  const _0x771f1d = _0x33d31f.body.startsWith(_0x36a8e8) ? _0x33d31f.body.slice(_0x36a8e8.length).split(" ")[0x0].toLowerCase() : '';
  if (["alive", "uptime", "bera"].includes(_0x771f1d)) {
    const _0x5bd07c = new _0x537eef(0x320, 0x1f4, "black");
    const _0x373a8c = await _0x537eef.loadFont(_0x537eef.FONT_SANS_128_WHITE);
    const _0x8ff952 = _0x537eef.measureText(_0x373a8c, _0x400cc0);
    const _0x59452a = _0x537eef.measureTextHeight(_0x373a8c, _0x400cc0, 0x320);
    const _0x1d48d6 = 400 - _0x8ff952 / 0x2;
    const _0x1807b4 = 250 - _0x59452a / 0x2;
    _0x5bd07c.print(_0x373a8c, _0x1d48d6, _0x1807b4, _0x400cc0, 0x320, _0x537eef.HORIZONTAL_ALIGN_CENTER | _0x537eef.VERTICAL_ALIGN_MIDDLE);
    const _0x3f75fb = await _0x5bd07c.getBufferAsync(_0x537eef.MIME_PNG);
    const _0x315bfd = "╭───────────────━⊷\n║ 𝖳𝖱𝖤𝖷 𝖬𝖣 𝖴𝖯𝖳𝖨𝖬𝖤\n╰───────────────━⊷\n╭───────────────━⊷\n║- *" + _0x1e5e9d + " Day(s)*\n║- *" + _0x20b06b + " Hour(s)*\n║- *" + _0x12b549 + " Minute(s)*\n║- *" + _0x8ad68a + " Second(s)*\n╰───────────────━⊷\n╭───────────────━⊷\n║ sᴛᴀʀ ᴛʜᴇɴ ғᴏʀᴋ ᴍʏ ʀᴇᴘᴏ\n║ ʀᴇᴘᴏ: https://shorturl.at/MV98C\n╰───────────────━⊷";
    const _0x5b7e3d = [{
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "TREX MD MENU",
        'id': _0x36a8e8 + "menu"
      })
    }, {
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "TREX MD PING",
        'id': _0x36a8e8 + "ping"
      })
    }];
    const _0x5c94f7 = generateWAMessageFromContent(_0x33d31f.from, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0x315bfd
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "AM ALWAYS COOL😎"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                'image': _0x3f75fb
              }, {
                'upload': _0x4619d5.waUploadToServer
              })),
              'title': '¹²³⁴⁵⁶⁷⁸⁹',
              'gifPlayback': false,
              'subtitle': "𝖶𝖤𝖫𝖢𝖮𝖬𝖤 𝖳𝖮 𝖬𝖸 𝖶𝖱𝖫𝖣",
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x5b7e3d
            }),
            'contextInfo': {
              'quotedMessage': _0x33d31f.message,
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': '120363317462952356@newsletter',
                'newsletterName': "BERA TECH",
                'serverMessageId': 0x1
              }
            }
          })
        }
      }
    }, {});
    await _0x4619d5.relayMessage(_0x5c94f7.key.remoteJid, _0x5c94f7.message, {
      'messageId': _0x5c94f7.key.id
    });
  }
};
export default alive;
