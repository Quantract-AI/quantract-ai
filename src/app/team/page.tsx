import Link from "next/link";
import "./team.css";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="min-h-screen team-page">
      <section className="team-hero">
        <div className="team-hero-container">
          <h1 className="team-title">Our Team</h1>
          <p className="team-sub">Meet the people powering Quantract AI.</p>
        </div>
      </section>

      <section className="team-grid">
        {teamMembers.map((m) => (
          <div key={m.id} className="team-card">
            <div className="team-avatar">
              <img src={m.image} alt={m.name} width={120} height={120} />
            </div>
            <h3 className="team-name">{m.name}</h3>
            <p className="team-role">{m.role}</p>
            <p className="team-bio">{m.bio}</p>
          </div>
        ))}
      </section>

      <section className="team-cta">
        <div className="team-cta-container">
          <Link href="/contact" className="team-cta-btn">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}