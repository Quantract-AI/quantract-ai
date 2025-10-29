export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string; // path under /public/images/team/ or an external URL
};

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Aisha Khan",
    role: "Founder & CEO",
    bio: "Building human-centered AI products that scale.",
    image: "/images/team/aisha.jpg"
  },
  {
    id: "2",
    name: "Liam Ortega",
    role: "Lead ML Engineer",
    bio: "Designs production-ready ML pipelines and models.",
    image: "/images/team/liam.jpg"
  },
  {
    id: "3",
    name: "Priya Singh",
    role: "Product Designer",
    bio: "Focuses on delightful UX for complex AI products.",
    image: "/images/team/priya.jpg"
  }
];