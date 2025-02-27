import React from 'react'
import './index.css'

const ExperiencePage = () => {
  const work = [
    {
      id: "1",
      date: "2024",
      title: "Software Engineer Intern",
      location: "Remote - USA",
      company: "Birdie AI Company - Startup",
      description: [
        "Developed an AI-driven prompt search system, with React and TypeScript, implementing Debounce techniques to reduce API calls and fuzzy string matching to enhance response accuracy and search effiency",
        "Revamped the codebase system architecture to support more new product offrings and reducing bugs over 30%",
        "Deployed backend infrastructure on AWS, utilizing AWS lambda, API Gateway, and SAM (Serverless Application Model) to optimize performance, reducing server costs by 45% through optimized resource allocation",
        " Automated the deployment pipeline by creating a Bash Script to streamline backend production updates, reducing manual deployment time by 60% and minimizing errors"
      ]
    },
    {
      id: "2",
      date: "2024",
      title: "Software Engineer Team Lead",
      location: "Chicago, Illinois",
      company: "Finbud AI Compny - Startup",
      description: [
        "Developed a full-stack fiancial app using OpenAI APIs, Vue JS and Netlify to track stock on real-time, getpersonalized trade suggestions, and get fiancial guidance by AI Chatbot",
        "Design a system with multi-threaded authentication flw using Passport.js, reducing authentication latency by 25%, and ensuring 99% reliability through integration testing of OAuth and JWT verifiation",
        "Led a team of 15 to integrate Alpha Vantage and Polyon.io APIs, providing real-time fiancial market data of companies, which attracted key investment partner, and boosted user adoption by 40%",
      ]
    },
    {
      id: "3",
      date: "2023",
      title: "Software Engineer Intern",
      location: "Hanoi, Vietnam",
      company: "Tinh Van Software Organization",
      description: [
        "Achieved a 30% boost in user engagement, quantifid by increased interaction, through a strategic migration to Next.js and WebSocket, enhancing the website interface and interactive UI elements",
        "Developed a scalable microservices backend utilizing RabbitMQ for asynchronous messaging, leading to 20% API response effiency, and enhancing system with MongoDB indexing, Redis caching, and Docker container",
      ]
    }
  ];
  return (
    <section className='exp-container' id="experience">
      <div className="exp-title">Experience</div>
      <div className="exp-work">
        {work.map((job) => (
          <div className="job" date={job.date} key={job.id}>
            <div className="job-company-date">
              <span className='job-company'>{job.company}</span>
              <span className='job-location'>{job.location}</span>
            </div>
            <div className="job-title">{job.title}</div>
            <ul className="job-description">
              {job.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage;
