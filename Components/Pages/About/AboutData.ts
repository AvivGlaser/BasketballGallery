import { nanoid } from "@reduxjs/toolkit";
import covidLogo from "../../../Assets/Images/covid.jpg";
import johnBryceLogo from "../../../Assets/Images/johnBryceLogo.png";
import equalWebLogo from "../../../Assets/Images/equalWeb.jpg";
import { ICareerTimeline } from "../../../Helpers/Interfaces";

const aboutTimelineData: Array<ICareerTimeline> = [
  {
    id: nanoid(),
    img: equalWebLogo,
    alt: "EqualWeb Logo",
    date: {
      day: "23",
      month: "Jan",
      year: "2023",
    },
    timelineTitle: "Starting a JavaScript Developer position ",
    description:
      "After completing my full-stack development bootcamp at John Bryce, I landed my first professional role as a JavaScript developer at EqualWeb, the #1 online solution for web accessibility. At EqualWeb, we make websites accessible, helping people with disabilities worldwide while also supporting small business owners in complying with accessibility standards.",
  },
  {
    id: nanoid(),
    img: johnBryceLogo,
    alt: "John Bryce Logo",
    date: {
      day: "01",
      month: "Sep",
      year: "2021",
    },
    timelineTitle: "Full StackW Web Development Bootcamp",
    description:
      "I realized I needed a career change and took a leap into tech, enrolling in the Full Stack Development Bootcamp at John Bryce High-Tech Academy. At 28, with no prior experience and coming from the education field, it was the hardest year of my life—learning to code from scratch while surrounded by peers who mostly had some background. The year-long course started with 26 students but ended with just 12, and I was the only one who came in with zero experience, pushing myself beyond limits to make it through.",
  },
  {
    id: nanoid(),
    img: covidLogo,
    alt: "Covid-19",
    date: {
      day: "19",
      month: "Dec",
      year: "2019",
    },
    timelineTitle: "Covid-19 Pandemic ",
    description:
      "When COVID-19 broke out, it made me stop and rethink my life—what I had accomplished and what I still wanted to achieve. I realized it was time for a change, to challenge myself in new ways and build a future that truly excited me. That realization set me on a completely different path, one that demanded resilience, growth, and a willingness to start from scratch.",
  },
];

export default aboutTimelineData;
