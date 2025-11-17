import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandlogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandlogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Menlo Park, USA",
    },
    {
      brandlogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India",
    },
    {
      brandlogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Cupertino, USA",
    },
    {
      brandlogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Los Gatos, USA",
    },
    {
      brandlogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Seattle, USA",
    },
    {
      brandlogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "4 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Austin, USA",
    },
    {
      brandlogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      post: "Research Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "San Francisco, USA",
    },
    {
      brandlogo: "https://logo.clearbit.com/stripe.com",
      companyName: "Stripe",
      datePosted: "5 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hr",
      location: "Dublin, Ireland",
    },
    {
      brandlogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Noida, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              brandlogo={elem.brandlogo}
              datePosted={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>

    // brandlogo: "https://logo.clearbit.com/google.com",
    //   companyName: "Google",
    //   datePosted: "5 days ago",
    //   post: "Software Engineer",
    //   tag1: "Full Time",
    //   tag2: "Junior Level",
    //   pay: "$65/hr",
    //   location: "Bangalore, India",
  );
};

export default App;
