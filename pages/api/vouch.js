import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { userIds, phrases, embedOptions } = req.body;
  const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
  const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

  if (!BOT_TOKEN || !CHANNEL_ID)
    return res.status(500).json({ error: "Bot token or channel ID missing" });

  if (!userIds || !Array.isArray(userIds) || !phrases || !Array.isArray(phrases))
    return res.status(400).json({ error: "Invalid request body" });

  const results = [];

  // Hàm delay 2 giây
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (const userId of userIds) {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];

    const payload = {
      embeds: [
        {
          title: embedOptions?.title || "Vouch Notification",
          description: `<@${userId}> ${phrase}`,
          color: embedOptions?.color || 0x00ff00,
          thumbnail: embedOptions?.thumbnail ? { url: embedOptions.thumbnail } : undefined,
          timestamp: new Date(),
        },
      ],
    };

    try {
      const response = await fetch(
        `https://discord.com/api/v10/channels/${CHANNEL_ID}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bot ${BOT_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        results.push({ userId, success: false, error: errText });
      } else {
        results.push({ userId, success: true, phrase });
      }
    } catch (err) {
      results.push({ userId, success: false, error: err.message });
    }

    // Delay 2 giây trước khi gửi user tiếp theo
    await wait(2000);
  }

  res.status(200).json({ results });
}
