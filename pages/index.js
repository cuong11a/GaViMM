import { useState, useRef } from "react";

export default function Home() {
  const [userIds, setUserIds] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#00ff00");
  const [thumbnail, setThumbnail] = useState("");
  const intervalRef = useRef(null);

  const phrases = [
    "Great person!",
    "Highly recommended!",
    "Trusted user!",
    "Awesome collaborator!"
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
    setStatus(prev => prev + "\nAuto Vouch stopped.");
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
