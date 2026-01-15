/*
 *  --------------------------------------------------------------------------
 *   TECHITHON 2026 | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: Vijay Sangani, Mayank Bhuvad, Shlok Nair, Yug Sawant
 *
 *   (c) 2026 All Rights Reserved.
 *  --------------------------------------------------------------------------
 */

import Welcome from "../assests/Welcome.jpeg";
import Speech from "../assests/speech.jpeg";
import Exhibition from "../assests/exhibition.jpeg";
import Hack from "../assests/hackathon.jpeg";
import Valedictory from "../assests/Valedictory.jpeg";
import end from "../assests/end.jpeg";
import TT1 from "../assests/medium_long-tech-conferences.jpg";

export const SCHEDULE = {
  day1: {
    id: "day1",
    title: "Day 01: Welcome Ceremony & Launch of Project Exhibition",
    date: "28th Jan",
    theme: "Exhibition and Hackathon",
    color: "#00f3ff",
    events: [
      { 
        id: 1, 
        title: "Welcome Ceremony", 
        time: "09:00 AM", 
        location: "AUDITORIUM",
        speaker: "Shri Sunil Rane Sir & Guest of Honor",
        image: Welcome,
        description: "Join us for the grand welcome ceremony where Shri Sunil Rane Sir and our esteemed Guest of Honor will inaugurate the Techithon 2026. Kickstart your journey with inspiring words and a vision for the days ahead."
      },
      { 
        id: 2, 
        title: "Speech", 
        time: "10:15 AM", 
        location: "AUDITORIUM",
        speaker: "Shri Sunil Rane Sir & Guest of Honour",
        image: Speech,
        description: "Hear from Shri Sunil Rane Sir and our Guest of Honour as they share their insights on the future of technology, innovation, and the importance of events like Techithon in shaping the next generation of tech leaders."
      },
      { 
        id: 3, 
        title: "Launch of Project Exhibition & Guided Exhibition by Industry People", 
        time: "11:15 AM", 
        location: "DOME",
        speaker: "Industry Experts",
        image: Exhibition,
        description: "Experience the launch of our Project Exhibition, showcasing innovative projects from participants. Industry experts will guide you through the exhibits, providing valuable feedback and insights into the latest technological advancements."
      }, 
      { 
        id: 4, 
        title: "Inaugration of Atharva Hackathon", 
        time: "12:00 PM", 
        location: "Library(Phase 01, Phase 02, and Phase 03)",
        speaker: "Shri Sunil Rane Sir & Guest of Honour",
        image: Hack,
        description: "Witness the official inauguration of the Atharva Hackathon by Shri Sunil Rane Sir and our Guest of Honour. Get ready to innovate, collaborate, and create solutions that can make a difference in the tech world."
      },
    ]
  },
  day2: {
    id: "day2",
    title: "Day 02: Tech Talks",
    date: "29th Jan",
    theme: "Tech Seminars",
    color: "#bc13fe",
    events: [
      { 
        id: 1, 
        title: "Tech Talk 1", 
        time: "9:30 AM", 
        location: "Seminar Hall(Phase 03)",
        speaker: "Speaker 1",
        image: TT1,
        description: "Join us for an engaging tech talk by Speaker 1, where they will share insights on the latest trends in technology and innovation."
      },
      { 
        id: 2, 
        title: "Tech Talk 2", 
        time: "11:15 AM", 
        location: "Seminar Hall(Phase 03)",
        speaker: "Speaker 2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62kxbawR7SWW4meZYKDQm8kPUroD2CB1wcQ&s",
        description: "Don't miss the second tech talk of the day by Speaker 2, focusing on emerging technologies and their impact on various industries."
      },
      { 
        id: 3, 
        title: "Hands on CyberSecurity Workshop", 
        time: "01:15 PM", 
        location: "PHASE 02 AIML LAB",
        speaker: "Expert",
        image: "https://www.picochip.com/wp-content/uploads/1562154922-7235-tech-workshop-facil-1024x682.png",
        description: "Participate in an interactive cybersecurity workshop led by Expert. Learn about the latest security threats and how to protect digital assets effectively."
      },
      { 
        id: 4, 
        title: "Exhibition Walk", 
        time: "03:15 PM", 
        location: "DOME",
        speaker: "Organizing Committee.",
        image: Exhibition,
        description: "Take a guided walk through the exhibition with experts from the Organizing Committee, exploring innovative projects and cutting-edge technologies on display."
      },
    ]
  },
  day3: {
    id: "day3",
    title: "Day 03: Human upgrade",
    date: "30th Jan",
    theme: "Industry Walk",
    color: "#faff00",
    events: [
      { 
        id: 1, 
        title: "Industry Walk", 
        time: "09:30 AM", 
        location: "DOME",
        speaker: "Organizing Committee",
        image: Exhibition,
        description: "Join us for an industry walk led by the Organizing Committee, where you'll explore the latest advancements in biotechnology and their real-world applications."
      },
      { 
        id: 2, 
        title: "Hands On Tech Projects", 
        time: "12:00 PM", 
        location: "Phase 02 AIML LAB",
        speaker: "Industry Experts",
        image: "https://pidora.ca/wp-content/uploads/2025/08/community-tech-workshop-collaboration.jpeg",
        description: "Engage in hands-on tech projects with Industry Experts, focusing on innovative solutions in real world issues."
      },
      { 
        id: 3,
        title: "Valedictory",
        time: "02:30 PM",
        location: "Auditorium",
        speaker: "Shri Sunil Rane Sir",
        image: Valedictory,
        description: "Conclude the Techithon 2026 with the valedictory session led by Shri Sunil Rane Sir, reflecting on the event's highlights and future directions in technology."
      },
      { 
        id: 4,
        title: "Prize DistributionClosing Ceremony",
        time: "06:00 PM",
        location: "MAIN STAGE",
        speaker: "The Organizing Committee",
        image: end,
        description: "Celebrate the achievements of participants during the prize distribution and closing ceremony, marking the successful conclusion of Techithon 2026."
      }
    ]
  }
}; 