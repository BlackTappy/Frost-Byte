const welcomeGoodbye = process.env.WELCOMEGOODBYE || "FALSE";
const botName = process.env.BOTNAME || "ʄʀօֆᴛ-𝐁ʏᴛɛ-𐌀i";

// Define the JID for your newsletter channel
const NEWSLETTER_JID = "120363419533811227@newsletter";

/**
 * Sends a message to the predefined newsletter channel.
 * @param {object} whatsappClient - The WhatsApp client instance.
 * @param {string} messageContent - The text content to send to the newsletter.
 */
const sendToNewsletter = async (whatsappClient, messageContent) => {
  try {
    await whatsappClient.sendMessage(NEWSLETTER_JID, { text: messageContent });
    console.log(`✅ Successfully sent message to newsletter: ${messageContent}`);
  } catch (error) {
    console.error(`🔴 Failed to send message to newsletter ${NEWSLETTER_JID}:`, error.message);
  }
};

const Events = async (whatsappClient, eventData) => {
  try {
    // Fetch group metadata (name, description, etc.)
    let groupMetadata = await whatsappClient.groupMetadata(eventData.id);
    // Get the list of participants involved in the event (add/remove)
    let participants = eventData.participants;

    for (let participantJid of participants) {
      let profilePicUrl;
      try {
        // Attempt to fetch the participant's profile picture
        profilePicUrl = await whatsappClient.profilePictureUrl(participantJid, "image");
      } catch (error) {
        // If fetching fails (e.g., no profile picture), use a default image
        console.error(`🔴 Failed to fetch profile picture for ${participantJid}:`, error.message);
        profilePicUrl = "https://files.catbox.moe/2p885c.jpg";
      }

      // Extract username from JID for display
      const userName = participantJid.split('@')[0x0];

      // --- Message formatting logic ---
      if (eventData.action === 'add') {
        // You'll need to fetch these dynamically if they're not in eventData
        // For demonstration, these are placeholders:
        const membersCount = groupMetadata.participants.length; // Approximate members count
        const joinTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Nairobi' });
        const joinDate = new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Africa/Nairobi' });

        // Construct the detailed welcome message
        let welcomeMessage = `┌─❖
│『  *Hi..!! 👋* 』
└┬
 ◎ 「  @${userName} 」
 │ ➪  *Wᴇʟᴄᴏᴍᴇ Tᴏ*
 ◎      ${groupMetadata.subject} 
 │ ➪  *Mᴇᴍʙᴇʀ :*
 ◎      ${membersCount}th
 │ ➪  *Jᴏɪɴᴇᴅ :*
 ◎      ${joinTime} ${joinDate}
 │ ➪  *Support by Follow My Channel :*
 ◎      https://whatsapp.com/channel/0029VbB6swFG8l5FmyVlbL27
 └─────────────||`;
        
        // Check if welcome/goodbye messages are enabled
        if (welcomeGoodbye === "TRUE") {
          await whatsappClient.sendMessage(eventData.id, {
            'image': {
              'url': profilePicUrl
            },
            'caption': welcomeMessage,
            'mentions': [participantJid] // Mention the new participant
          });
        }
      } else if (eventData.action === 'remove') {
        // You'll need to fetch these dynamically if they're not in eventData
        // For demonstration, these are placeholders:
        const membersCount = groupMetadata.participants.length; // Approximate members count after removal
        const leaveTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Nairobi' });
        const leaveDate = new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Africa/Nairobi' });

        // Construct the detailed goodbye message
        let goodbyeMessage = `┌─❖
│『  *Gᴏᴏᴅʙʏᴇ..!! 🍁* 』 
└┬
 ◎ 「  @${userName}   」
 │ ➪  *Lᴇғᴛ ғʀᴏᴍ*
 ◎      ${groupMetadata.subject} 
 │ ➪  *Mᴇᴍʙᴇʀ :*
 ◎      ${membersCount}th
 │ ➪  *Tɪᴍᴇ :*
 ◎      ${leaveTime} ${leaveDate}
 │ ➪  *Support by Follow My Channel :*
 ◎      https://whatsapp.com/channel/0029VbB6swFG8l5FmyVlbL27
 └─────────────||`;
        
        // Check if welcome/goodbye messages are enabled
        if (welcomeGoodbye === "TRUE") {
          await whatsappClient.sendMessage(eventData.id, {
            'image': {
              'url': profilePicUrl
            },
            'caption': goodbyeMessage,
            'mentions': [participantJid] // Mention the departing participant
          });
        }
      }
    }
  } catch (error) {
    // Log any errors that occur during the event handling
    console.error("Error in Events function:", error);
  }
};

// Export both the Events handler and the sendToNewsletter function
module.exports = {
  Events,
  sendToNewsletter
};
