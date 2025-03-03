
module.exports = {
    
    getContextInfo: (m) => {
        return {
            mentionedJid: [m.sender], 
            forwardingScore: 999, 
            isForwarded: true, 
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363409740714758@g.us@s.whatsapp.net', 
                newsletterName: 'Bera Support',
                serverMessageId: 143 
            }
        };
    },

    
    sendReply: async (client, m, text) => {
        const contextInfo = module.exports.getContextInfo(m); 
        await client.sendMessage(m.chat, { 
            text: text, 
            contextInfo: contextInfo 
        }, { quoted: m }); 
    },

    
    sendMediaMessage: async (client, m, options) => {
        const contextInfo = module.exports.getContextInfo(m); 
        await client.sendMessage(m.chat, { 
            ...options, 
            contextInfo: contextInfo 
        }, { quoted: m }); 
    }
};
