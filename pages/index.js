import { useState } from "react";

export default function Home() {
  const [userIds, setUserIds] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#00ff00");
  const [thumbnail, setThumbnail] = useState("");

  const phrases = [
    "Great person!",
    "Highly recommended!",
    "Trusted user!",
    "Awesome collaborator!"
  ];

  const handleVouch = async () => {
    const idsArray = userIds
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);

    if (!idsArray.length) return setStatus("Enter at least one User ID.");

    setStatus("Sending vouches...");

    const res = await fetch("/api/vouch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userIds: idsArray,
        phrases,
        embedOptions: { title, color: parseInt(color.replace("#",""),16), thumbnail }
      }),
    });

    const data = await res.json();

    const summary = data.results
      .map((r) =>
        r.success
          ? `${r.userId}: ✅ "${r.phrase}"`
          : `${r.userId}: ❌ ${r.error}`
      )
      .join("\n");

    setStatus(summary);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Auto Vouch Web App (Embed Version)</h1>
      <textarea
        placeholder="Enter User IDs separated by commas"
        value={userIds}
        onChange={(e) => setUserIds(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <input
        placeholder="Embed Title (optional)"
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
      <button onClick={handleVouch} style={{ padding: 8 }}>Send Vouches</button>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 10 }}>{status}</pre>
    </div>
  );
}