



















import _0x5129ad from '@whiskeysockets/baileys';
const {
  downloadMediaMessage
} = _0x5129ad;
import _0x3c8090 from '../../config.cjs';
const OwnerCmd = async (_0x2b3b65, _0x130df6) => {
  const _0x4a6973 = _0x130df6.user.id.split(':')[0x0] + '@s.whatsapp.net';
  const _0x231f31 = _0x3c8090.OWNER_NUMBER + "@s.whatsapp.net";
  const _0x7c2b06 = _0x3c8090.PREFIX;
  const _0x348a61 = _0x2b3b65.body.startsWith(_0x7c2b06) ? _0x2b3b65.body.slice(_0x7c2b06.length).split(" ")[0x0].toLowerCase() : '';
  const _0x7ab3cf = _0x2b3b65.sender === _0x231f31;
  const _0x128111 = _0x2b3b65.sender === _0x4a6973;
  if (!['vv', "vv2", 'vv3'].includes(_0x348a61)) {
    return;
  }
  if (!_0x2b3b65.quoted) {
    return _0x2b3b65.reply("⚠️ *Reply to a View Once message!*");
  }
  let _0x231e3e = _0x2b3b65.quoted.message;
  if (_0x231e3e.viewOnceMessageV2) {
    _0x231e3e = _0x231e3e.viewOnceMessageV2.message;
  } else {
    if (_0x231e3e.viewOnceMessage) {
      _0x231e3e = _0x231e3e.viewOnceMessage.message;
    }
  }
  if (!_0x231e3e) {
    return _0x2b3b65.reply("*This is not a View Once message!*");
  }
  if (["vv2", "vv3"].includes(_0x348a61) && !_0x7ab3cf && !_0x128111) {
    return _0x2b3b65.reply("*Only the owner or bot can use this command!*");
  }
  if (_0x348a61 === 'vv' && !_0x7ab3cf && !_0x128111) {
    return _0x2b3b65.reply("*Only the owner or bot can use this command to send media!*");
  }
  try {
    const _0x28c5a1 = Object.keys(_0x231e3e)[0x0];
    let _0x50c307;
    if (_0x28c5a1 === "audioMessage") {
      _0x50c307 = await downloadMediaMessage(_0x2b3b65.quoted, "buffer", {}, {
        'type': "audio"
      });
    } else {
      _0x50c307 = await downloadMediaMessage(_0x2b3b65.quoted, "buffer");
    }
    if (!_0x50c307) {
      return _0x2b3b65.reply("*Failed to retrieve media!*");
    }
    let _0x1656e1 = _0x231e3e.audioMessage?.['mimetype'] || 'audio/ogg';
    let _0x2fb66a;
    if (_0x348a61 === 'vv') {
      _0x2fb66a = _0x2b3b65.from;
    } else {
      if (_0x348a61 === "vv2") {
        _0x2fb66a = _0x4a6973;
      } else if (_0x348a61 === "vv3") {
        _0x2fb66a = _0x231f31;
      }
    }
    if (_0x28c5a1 === "imageMessage") {
      await _0x130df6.sendMessage(_0x2fb66a, {
        'image': _0x50c307,
        'caption': "*downloaded viewonce by Trex Md*"
      });
    } else {
      if (_0x28c5a1 === "videoMessage") {
        await _0x130df6.sendMessage(_0x2fb66a, {
          'video': _0x50c307,
          'caption': "*downloaded viewonce by Trex Md*",
          'mimetype': "video/mp4"
        });
      } else {
        if (_0x28c5a1 === "audioMessage") {
          await _0x130df6.sendMessage(_0x2fb66a, {
            'audio': _0x50c307,
            'mimetype': _0x1656e1,
            'ptt': true
          });
        } else {
          return _0x2b3b65.reply("*Unsupported media type!*");
        }
      }
    }
  } catch (_0x218cae) {
    console.error(_0x218cae);
    await _0x2b3b65.reply("*Failed to process View Once message!*");
  }
};
export default OwnerCmd;
