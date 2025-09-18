import { useState, useRef } from "react";

export default function Home() {
  const [userIds, setUserIds] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#00ff00");
  const [thumbnail, setThumbnail] = useState("");
  const intervalRef = useRef(null);

  const phrases = [
  "This trader is super trustworthy, always gives what he promises in trades!",
  "Really nice trader, completed the trade fast and everything went smoothly.",
  "I can recommend this person, trades are always fair and no scamming.",
  "Very friendly and reliable, always makes sure the trade is safe for both sides.",
  "Fast and honest, every trade I did with them went perfectly fine.",
  "Always a pleasure trading with this user, honest and easy to communicate.",
  "Really solid trader, delivers items exactly as agreed every single time.",
  "Safe and trustworthy, never had any problems trading with this person.",
  "Super nice, fair trades and very clear about what’s being traded.",
  "Can vouch for them, completed the trade quickly and no issues at all.",
  "Friendly and honest trader, always keeps promises and communicates well.",
  "Very reliable, I never had a single problem trading with this user.",
  "They always complete trades fairly, I trust them with my items.",
  "Honest and fast, it’s easy to trade with this person anytime.",
  "A good trader, fair value and no funny business in any trade.",
  "Quick, honest, and polite, always a good experience trading with them.",
  "Trustworthy trader, gives exactly what was promised every single time.",
  "I’ve traded with them multiple times, always fair and reliable.",
  "Friendly, honest, and very easy to deal with in all trades.",
  "Super reliable, I can always count on them to complete a trade safely.",
  "This person is very nice, always ensures trades are fair and smooth.",
  "Fast and honest trader, never had any issues or misunderstandings.",
  "Safe and trustworthy, a pleasure to trade with every single time.",
  "Reliable and fair, always delivers what was agreed upon in trades.",
  "Polite and honest, makes trading a simple and stress-free experience.",
  "I highly recommend them, very trustworthy and easy to trade with.",
  "Friendly and fast, always completes trades as promised without issues.",
  "Honest and dependable, never tries to scam or take advantage.",
  "Very polite and trustworthy, trading with them is always smooth.",
  "Quick, fair, and reliable, a top choice for any Roblox trade.",
  "Consistently fair and honest, always completes trades safely.",
  "I’ve never had a bad trade with this user, very trustworthy.",
  "Friendly and reliable, makes trading in Roblox very easy and safe.",
  "Honest, fast, and polite, always a smooth trade experience.",
  "Reliable trader, completes all trades as agreed with no problems.",
  "Super trustworthy, I can always rely on them for fair trades.",
  "They are honest and polite, trading with them is stress-free.",
  "Fast, reliable, and fair, a very good trader in Roblox.",
  "Always fair and honest, it’s a pleasure trading with them.",
  "Polite and trustworthy, makes every trade simple and reliable.",
  "Very nice and honest, always completes trades exactly as promised.",
  "Reliable and fair, I trust them with my items every time.",
  "Quick and trustworthy, every trade went smoothly without problems.",
  "Friendly and honest, ensures trades are always safe and fair.",
  "Fast and polite, a very trustworthy Roblox trader.",
  "Consistently fair and reliable, never had any problems trading.",
  "Super reliable and honest, always delivers what was promised.",
  "Very trustworthy, makes trading in-game easy and smooth.",
  "Polite and fair, always completes trades without any issues.",
  "Friendly, honest, and reliable, a great trader to deal with.",
  "Fast, safe, and reliable, a highly recommended Roblox trader.",
  "Reliable and honest, always ensures a smooth trading experience.",
  "Very polite and trustworthy, never had any issues trading with them.",
  "Quick, honest, and fair, I can always count on them for trades.",
  "Super friendly and reliable, trading with them is always smooth.",
  "Honest and fast, ensures trades are completed exactly as agreed.",
  "Friendly and trustworthy, makes every Roblox trade easy and safe.",
  "Reliable and polite, always completes trades fairly and quickly.",
  "Very honest and trustworthy, a great person to trade with.",
  "Quick, fair, and friendly, I can fully vouch for them.",
  "Safe and reliable trader, always delivers what is promised.",
  "Polite and fast, trading with them is always a smooth process.",
  "Friendly, honest, and reliable, a pleasure to trade with them.",
  "Fast and trustworthy, I’ve never had any problems trading.",
  "Reliable and polite, always ensures a fair and smooth trade.",
  "Honest, quick, and friendly, a very trustworthy Roblox trader.",
  "Very reliable and fair, consistently completes trades as agreed.",
  "Polite and safe, trading with this person is stress-free and smooth.",
  "Friendly and quick, always delivers items exactly as promised.",
  "Honest and reliable, makes every trade easy and enjoyable.",
  "Fast, trustworthy, and polite, a top Roblox trader to vouch for.",
  "Reliable and fair, ensures all trades are safe and smooth.",
  "Super friendly and honest, trading with them is always simple.",
  "Quick, reliable, and polite, a very trustworthy trading partner.",
  "Honest and fast, always completes trades safely and fairly.",
  "Polite and reliable, makes every trade in Roblox easy and smooth.",
  "Friendly, safe, and honest, a highly recommended Roblox trader.",
  "Fast and trustworthy, ensures all trades are completed without issues.",
  "Reliable, fair, and polite, trading with them is always pleasant.",
  "Honest and friendly, a safe and trustworthy person to trade with.",
  "Quick, polite, and reliable, a top choice for any Roblox trade.",
  "Super honest and friendly, every trade with them goes smoothly.",
  "Reliable and fair, I can fully vouch for their trades.",
  "Polite, honest, and fast, makes trading in Roblox stress-free.",
  "Friendly and trustworthy, always completes trades as promised.",
  "Fast and reliable, ensures trades are safe and items delivered correctly.",
  "Reliable, honest, and polite, always a smooth trading experience.",
  "Very friendly and trustworthy, a great person to trade Roblox items with.",
  "Quick, honest, and reliable, ensures all trades go without issues.",
  "Safe and polite, trading with this person is easy and smooth.",
  "Friendly, fair, and reliable, every trade went perfectly without problems.",
  "Fast and trustworthy, consistently completes trades exactly as agreed.",
  "Reliable and honest, makes trading in Roblox very easy and safe.",
  "Polite, quick, and reliable, always a smooth trade experience.",
  "Friendly and trustworthy, a pleasure to trade with any time.",
  "Honest and reliable, I always get what was promised in trades.",
  "Quick, safe, and friendly, makes trading Roblox items very easy.",
  "Reliable, polite, and honest, every trade completed without issues.",
  "Super friendly and honest, ensures a safe and smooth trading experience.",
  "Fast, trustworthy, and reliable, always delivers items exactly as agreed.",
  "Friendly and honest, never had problems with any trade completed by them.",
  "Reliable and polite, trading Roblox items with this user is always easy.",
  "Honest, fast, and friendly, ensures trades go smoothly without any problems.",
  "Polite and reliable, always completes trades fairly and efficiently.",
  "Quick, trustworthy, and safe, every trade is completed without issues.",
  "Friendly and honest, delivers exactly what was agreed upon in trades.",
  "Reliable, fast, and polite, always ensures a smooth trading experience.",
  "Super friendly and trustworthy, makes trading Roblox items stress-free.",
  "Fast, honest, and reliable, I can always vouch for this trader.",
  "Polite, friendly, and safe, completes trades exactly as promised every time.",
  "Reliable and honest, a very good Roblox trader I recommend to everyone.",
  "Quick, friendly, and trustworthy, trading items with them is always easy.",
  "Honest and reliable, ensures all trades are completed safely and fairly.",
  "Fast, polite, and friendly, a very trustworthy Roblox trading partner.",
  "Reliable, honest, and friendly, always makes trades smooth and safe.",
  "Quick and polite, completes every trade without any problem or delay.",
  "Safe and trustworthy, never had a bad experience trading with this person.",
  "Friendly and reliable, ensures items are delivered exactly as promised.",
  "Honest and professional, a great Roblox trader I can fully vouch for.",
  "Fast, polite, and trustworthy, makes every trade simple and enjoyable.",
  "Reliable and honest, always communicates clearly and completes trades quickly.",
  "Super friendly and reliable, every trade went perfectly with no issues.",
  "Quick, safe, and fair, ensures trades are done exactly as agreed upon.",
  "Polite and trustworthy, always a smooth experience trading Roblox items.",
  "Friendly, honest, and safe, can fully recommend this user for trading.",
  "Fast and reliable, completes all trades fairly and without any problems.",
  "Honest and friendly, makes trading in Roblox easy and stress-free.",
  "Reliable, polite, and safe, every trade is completed as promised.",
  "Quick, friendly, and trustworthy, ensures a smooth and fair trading process.",
  "Super honest and polite, always delivers items exactly as agreed.",
  "Fast, reliable, and friendly, trading with them is always a good experience.",
  "Friendly and trustworthy, a pleasure to trade Roblox items with anytime.",
  "Reliable, honest, and polite, never had any problems trading with them.",
  "Quick, safe, and friendly, makes trading Roblox items simple and enjoyable.",
  "Polite and trustworthy, ensures trades go smoothly every single time.",
  "Fast and honest, always delivers exactly what was agreed upon in trades.",
  "Friendly and reliable, makes trading easy and stress-free in Roblox.",
  "Reliable, polite, and honest, completes all trades quickly and safely.",
  "Quick, friendly, and trustworthy, always ensures a smooth trade experience.",
  "Super honest and safe, a reliable Roblox trader I can vouch for fully.",
  "Fast, polite, and friendly, ensures every trade is completed properly.",
  "Friendly, trustworthy, and reliable, every trade went perfectly fine.",
  "Reliable and honest, always communicates clearly and delivers items safely.",
  "Quick, safe, and polite, makes trading Roblox items easy and smooth.",
  "Polite, friendly, and trustworthy, ensures trades are fair and efficient.",
  "Fast and reliable, always completes trades as agreed with no issues.",
  "Honest, friendly, and safe, trading with them is a smooth experience.",
  "Reliable and polite, ensures all trades are completed exactly as promised.",
  "Quick, trustworthy, and friendly, a great Roblox trader to deal with.",
  "Super honest and reliable, every trade completed without any problems.",
  "Fast, polite, and safe, always delivers items as agreed in trades.",
  "Friendly, honest, and reliable, trading Roblox items is always easy.",
  "Reliable, safe, and polite, ensures every trade goes smoothly and fairly.",
  "Quick, honest, and friendly, I can fully vouch for this Roblox trader.",
  "Polite and reliable, makes every trade simple, safe, and stress-free.",
  "Fast, friendly, and trustworthy, completes all trades fairly and efficiently.",
  "Friendly and honest, ensures every trade is completed exactly as agreed.",
  "Reliable, polite, and safe, trading with this person is always smooth.",
  "Quick, trustworthy, and friendly, delivers items exactly as promised.",
  "Super reliable and honest, makes trading Roblox items easy and safe.",
  "Fast, polite, and friendly, every trade is smooth and completed fairly.",
  "Friendly, honest, and trustworthy, a top Roblox trader I recommend to everyone.",
  "Reliable, safe, and polite, always completes trades without any issues.",
  "Quick, friendly, and honest, ensures trades are completed safely and fairly.",
  "Polite and trustworthy, every trade went perfectly with no problems.",
  "Fast, reliable, and friendly, a trustworthy Roblox trader I fully recommend.",
  "Friendly and honest, always completes trades exactly as agreed upon.",
  "Reliable, polite, and safe, makes trading Roblox items stress-free and smooth.",
  "Quick, honest, and friendly, ensures a smooth trading experience every time.",
  "Super honest, polite, and reliable, every trade completed exactly as promised.",
  "Fast, friendly, and trustworthy, trading Roblox items with them is easy and safe.",
  "Friendly, reliable, and polite, ensures trades go smoothly without issues.",
  "Reliable, honest, and safe, always completes trades fairly and efficiently.",
  "Quick, friendly, and trustworthy, every trade completed perfectly as agreed.",
  "Polite and reliable, a trustworthy Roblox trader I can fully vouch for.",
  "Fast, honest, and friendly, makes trading in Roblox easy and enjoyable.",
  "Friendly, trustworthy, and safe, ensures all trades are completed exactly as promised.",
  "Reliable, polite, and honest, always communicates clearly and completes trades quickly.",
  "Quick, friendly, and trustworthy, trading Roblox items is easy and stress-free.",
  "Super honest and polite, a very reliable Roblox trader I can recommend to anyone.",
  "Fast, friendly, and trustworthy, always delivers exactly what was agreed upon in trades.",
  "Friendly, reliable, and safe, every trade goes smoothly and without problems.",
  "Reliable, honest, and polite, makes trading Roblox items simple, safe, and enjoyable.",
  "Quick, friendly, and trustworthy, always ensures trades are completed fairly and efficiently.",
  "Polite and honest, a safe and trustworthy trader I fully recommend for Roblox trades.",
  "Fast, reliable, and friendly, every trade completed exactly as agreed without issues.",
  "Friendly, trustworthy, and honest, ensures all trades go smoothly every single time.",
  "Reliable, safe, and polite, a top Roblox trader to deal with anytime.",
  "Quick, honest, and friendly, makes trading items in Roblox easy and stress-free.",
  "Super reliable and polite, every trade completed perfectly and fairly.",
  "Fast, friendly, and trustworthy, ensures items are delivered exactly as promised in trades.",
  "Friendly, honest, and safe, makes trading Roblox items a smooth experience every time.",
  "Reliable, polite, and trustworthy, completes trades fairly and efficiently without issues.",
  "Quick, friendly, and honest, a trustworthy Roblox trader I can fully vouch for.",
  "Polite and reliable, ensures every trade is completed exactly as agreed upon.",
  "Fast, friendly, and trustworthy, trading Roblox items with them is always easy and safe.",
  "Friendly, honest, and reliable, makes every trade smooth, safe, and stress-free.",
  "Reliable, safe, and polite, always completes trades fairly, efficiently, and on time.",
  "Quick, trustworthy, and friendly, ensures all trades are completed as promised in Roblox.",
  "Super honest, polite, and reliable, every trade goes smoothly and items delivered correctly.",
  "Fast, friendly, and trustworthy, trading Roblox items with them is simple and safe.",
  "Friendly, reliable, and honest, makes all trades smooth, fair, and efficient in Roblox.",
  "Reliable, polite, and safe, a trustworthy Roblox trader I can recommend to everyone.",
  "Quick, honest, and friendly, ensures every trade is completed exactly as agreed in Roblox.",
  "Polite and trustworthy, every trade went perfectly and safely without any problems.",
  "Fast, reliable, and friendly, a very trustworthy Roblox trader I can fully vouch for.",
  "Friendly, honest, and safe, ensures trades go smoothly and items delivered exactly as promised.",
  "Reliable, polite, and trustworthy, completes every trade fairly, efficiently, and without issues.",
  "Quick, friendly, and honest, makes trading Roblox items easy, safe, and stress-free.",
  "Super honest, polite, and reliable, every trade completed exactly as agreed and smooth.",
  "Fast, friendly, and trustworthy, a Roblox trader I can fully recommend to anyone for safe trades.",
  "Friendly, reliable, and honest, ensures trades go smoothly every single time with no problems.",
  "Reliable, polite, and safe, always completes trades fairly, efficiently, and exactly as agreed.",
  "Quick, trustworthy, and friendly, trading Roblox items with them is always easy and enjoyable.",
  "Polite, honest, and reliable, a very trustworthy Roblox trader I can fully vouch for.",
  "Fast, friendly, and trustworthy, every trade completed safely and exactly as promised in Roblox.",
  "Friendly, honest, and safe, makes trading Roblox items smooth, easy, and stress-free.",
  "Reliable, polite, and trustworthy, ensures every trade is fair, smooth, and efficient.",
  "Quick, friendly, and honest, a top Roblox trader I can recommend to anyone for safe trades.",
  "Super reliable, polite, and honest, every trade completed exactly as promised without issues.",
  "Fast, friendly, and trustworthy, trading Roblox items with them is easy, safe, and smooth.",
  "Friendly, honest, and reliable, ensures all trades go smoothly, items delivered exactly as agreed.",
  "Reliable, polite, and safe, a very trustworthy Roblox trader I can fully vouch for.",
  "Quick, trustworthy, and friendly, every trade completed fairly, safely, and efficiently in Roblox.",
  "Polite, honest, and reliable, ensures trading Roblox items is smooth, easy, and stress-free."
];


  const startAutoVouch = () => {
    if (intervalRef.current) return; // tránh chạy nhiều lần
    const idsArray = userIds.split(",").map(id => id.trim()).filter(Boolean);
    if (!idsArray.length) return setStatus("Enter at least one User ID.");

    setStatus("Auto Vouch started...");

    let index = 0;
    intervalRef.current = setInterval(async () => {
      const userId = idsArray[index];
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];

      try {
        const res = await fetch("/api/vouch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            phrase,
            embedOptions: {
              title,
              color: parseInt(color.replace("#",""),16),
              thumbnail
            }
          })
        });
        const data = await res.json();
        if (data.success) {
          setStatus(prev => `${prev}\n${userId}: ✅ "${phrase}"`);
        } else {
          setStatus(prev => `${prev}\n${userId}: ❌ ${data.error}`);
        }
      } catch (err) {
        setStatus(prev => `${prev}\n${userId}: ❌ ${err.message}`);
      }

      index = (index + 1) % idsArray.length;
    }, 2000); // mỗi 2 giây gửi 1 user
  };

  const stopAutoVouch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus(prev => prev + "\nAuto Vouch stopped23.");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Auto Vouch Web App (Continuous)</h1>
      <textarea
        placeholder="Enter User IDs separated by commas"
        value={userIds}
        onChange={(e) => setUserIds(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <input
        placeholder="Embed Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <input
        placeholder="Thumbnail URL (optional)"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button onClick={startAutoVouch} style={{ padding: 8, marginRight: 10 }}>
        Start Auto Vouch
      </button>
      <button onClick={stopAutoVouch} style={{ padding: 8 }}>
        Stop
      </button>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 10 }}>{status}</pre>
    </div>
  );
}
