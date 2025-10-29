import "./team.css";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="min-h-screen team-page">
      <h1 className="team-title">Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((m) => (
          <div key={m.id} className="team-card">
            <img src={m.image} alt={m.name} width={120} height={120} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
