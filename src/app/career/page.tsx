import Link from "next/link";
import "./career.css";

// Job listings data
const jobListings = {
  engineering: [
    {
      title: "Senior AI Engineer",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced AI Engineer to lead the development of our core AI solutions and mentor junior team members.",
      applyLink: "/career/apply/senior-ai-engineer"
    },
    {
      title: "Machine Learning Engineer",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our ML team to develop and deploy state-of-the-art machine learning models for our enterprise clients.",
      applyLink: "/career/apply/ml-engineer"
    }
  ],
  research: [
    {
      title: "AI Research Scientist",
      location: "Remote",
      type: "Full-time",
      description: "Lead research initiatives in advanced AI technologies and contribute to the development of innovative solutions.",
      applyLink: "/career/apply/research-scientist"
    }
  ],
  product: [
    {
      title: "Product Manager - AI Solutions",
      location: "Remote",
      type: "Full-time",
      description: "Drive the product vision for our AI solutions and work closely with engineering teams to deliver value to our clients.",
      applyLink: "/career/apply/product-manager"
    },
    {
      title: "UX Designer",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive and user-friendly interfaces for our AI-powered applications and tools.",
      applyLink: "/career/apply/ux-designer"
    }
  ]
};

export default function Career() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-container">
          <div className="career-hero-content">
            <h1 className="career-hero-title">
              Join Our <span className="career-hero-highlight">Team</span>
            </h1>
            <p className="career-hero-description">
              Help us shape the future of AI. We're looking for passionate individuals
              who want to make a difference in the world of artificial intelligence.
            </p>
          </div>
        </div>
        <div className="career-hero-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="wave-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="job-listings">
        <div className="job-listings-container">
          {/* Engineering Positions */}
          <div className="job-category">
            <h2 className="category-title">Engineering</h2>
            {jobListings.engineering.map((job, index) => (
              <div key={index} className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-meta-item">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <Link href={job.applyLink} className="apply-button">
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Research Positions */}
          <div className="job-category">
            <h2 className="category-title">Research</h2>
            {jobListings.research.map((job, index) => (
              <div key={index} className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-meta-item">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <Link href={job.applyLink} className="apply-button">
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Product Positions */}
          <div className="job-category">
            <h2 className="category-title">Product</h2>
            {jobListings.product.map((job, index) => (
              <div key={index} className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-meta-item">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <Link href={job.applyLink} className="apply-button">
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}