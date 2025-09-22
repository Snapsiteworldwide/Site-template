import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch(() => setContent({ title: "Snapsite", slogan: "Template prêt", about: "Contenu par défaut", services: [] }));
  }, []);

  if (!content) return <p style={{ padding: "2rem", fontFamily: "Arial" }}>Chargement…</p>;

  return (
    <main style={{ fontFamily: "Arial", padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: 0 }}>{content.title}</h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginTop: 8 }}>{content.slogan}</p>

      <section style={{ marginTop: 24 }}>
        <h3>À propos</h3>
        <p>{content.about}</p>
      </section>

      {Array.isArray(content.services) && content.services.length > 0 && (
        <section style={{ marginTop: 24 }}>
          <h3>Services</h3>
          <ul>
            {content.services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>
      )}
    </main>
  );
}
