import React from 'react'
import './App.css'


import Card from './components/Card';
export const jobData = [
  {
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    jobTitle: "Software Engineer",
    tags: ["Full Time", "Remote", "Senior"],
    salary: "$150,000",
    location: "Mountain View, CA",
    postedDaysAgo: 3,
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    jobTitle: "Frontend Developer",
    tags: ["Full Time", "Hybrid"],
    salary: "$135,000",
    location: "Menlo Park, CA",
    postedDaysAgo: 4,
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    jobTitle: "Backend Engineer",
    tags: ["Contract", "On-site"],
    salary: "$120,000",
    location: "Seattle, WA",
    postedDaysAgo: 5,
  },
  {
    logo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    jobTitle: "iOS Developer",
    tags: ["Full Time"],
    salary: "$145,000",
    location: "Cupertino, CA",
    postedDaysAgo: 2,
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    jobTitle: "Cloud Engineer",
    tags: ["Part Time", "Remote"],
    salary: "$125,000",
    location: "Redmond, WA",
    postedDaysAgo: 6,
  },

  // ------------------ MORE JOBS BELOW ------------------

  {
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    jobTitle: "Machine Learning Engineer",
    tags: ["Full Time", "Senior"],
    salary: "$180,000",
    location: "Los Gatos, CA",
    postedDaysAgo: 1,
  },
  {
    logo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    jobTitle: "Autopilot Engineer",
    tags: ["Full Time", "On-site"],
    salary: "$160,000",
    location: "Austin, TX",
    postedDaysAgo: 2,
  },
  {
    logo: "https://logo.clearbit.com/openai.com",
    company: "OpenAI",
    jobTitle: "AI Researcher",
    tags: ["Remote", "Full Time"],
    salary: "$200,000",
    location: "San Francisco, CA",
    postedDaysAgo: 3,
  },
  {
    logo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    jobTitle: "GPU Software Engineer",
    tags: ["Full Time", "Hybrid"],
    salary: "$170,000",
    location: "Santa Clara, CA",
    postedDaysAgo: 5,
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    jobTitle: "UI/UX Designer",
    tags: ["Full Time", "Design"],
    salary: "$130,000",
    location: "San Jose, CA",
    postedDaysAgo: 7,
  },
  {
    logo: "https://logo.clearbit.com/intel.com",
    company: "Intel",
    jobTitle: "Embedded Engineer",
    tags: ["Full Time", "On-site"],
    salary: "$125,000",
    location: "Hillsboro, OR",
    postedDaysAgo: 4,
  },
  {
    logo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    jobTitle: "Backend Developer",
    tags: ["Hybrid", "Full Time"],
    salary: "$140,000",
    location: "San Francisco, CA",
    postedDaysAgo: 6,
  },
  {
    logo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    jobTitle: "Full Stack Engineer",
    tags: ["Remote", "Full Time"],
    salary: "$150,000",
    location: "San Francisco, CA",
    postedDaysAgo: 1,
  },
  {
    logo: "https://logo.clearbit.com/stripe.com",
    company: "Stripe",
    jobTitle: "Payments Engineer",
    tags: ["Full Time"],
    salary: "$175,000",
    location: "San Francisco, CA",
    postedDaysAgo: 2,
  },
];

export default function App() {
  return (
    <div id="Card-container">
     {jobData.map((ele) => {
      return (
        <Card
          company={ele.company}
          image={ele.logo}
          job={ele.jobTitle}
          arr={ele.tags}
          price={ele.salary}
          place={ele.location}
          days={ele.postedDaysAgo}
        />
      );
     })}
    </div>
  );
}
