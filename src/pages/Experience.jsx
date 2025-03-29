import React from "react";
import TimelineSection from "@/components/TimelineSection";

const educationData = [
  {
    year: "2017 - 2019",
    title: "Master's in Computer Science",
    subtitle: "Arizona State University",
  },
  {
    year: "2013 - 2017",
    title: "Bachelor's in Computer Science",
    subtitle: "Gandhi Institute of Technology and Management",
  },
];

const workData = [
  {
    year: "2021 - Present",
    title: "Full Stack Developer",
    subtitle: "PwC",
  },
  {
    year: "2019 - 2021",
    title: "Full Stack Developer",
    subtitle: "CRMC",
  },
];

const ExperiencePage = () => {
  return (
    <div className="bg-black min-h-screen text-white px-6">
      <TimelineSection type="education" data={educationData} />
      <TimelineSection type="work" data={workData} />
    </div>
  );
};

export default ExperiencePage;
