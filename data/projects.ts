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

import LangBuddy from '../assests/langbuddy.png';
import Glove from '../assests/Glove.png';
import HumanoidRobot from '../assests/Humanoid Robot.png';
import Ecofin from '../assests/EcoFin.png';
import MTPY from '../assests/MTPY.png';
import FogHandwash from '../assests/Fog_Handwash.jpeg';

export const PROJECTS = [
  {
    id: 1, // Done excet pt image
    title: "ARON Model",
    category: ["IoT", "Robotics"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description: "ARON Model is an automated robotic system designed for safe and efficient manhole and sewer cleaning. It eliminates the need for manual scavenging by using smart sensors, real-time monitoring, and a crane-assisted mechanism to inspect, detect, and remove waste—ensuring zero human entry into hazardous environments.",
    tech: ["Thony", "Raspberry Pi", "Python", "OpenCV", "Ultrasonic Sensors"]
  },
  {
    id: 2, // Done
    title: "Smart Glove Safety",
    category: ["IoT", "Wearables"],
    degree: "B.Sc",
    image: Glove,
    description: "The Smart Glove acts as an intelligent barrier against electric shocks, extreme heat, and hazardous vibrations. By transforming standard protective gear into a responsive guardian, it provides real-time alerts to keep you safe in high-risk environments. Work with total confidence knowing that advanced protection is always at your fingertips.",
    tech: ["Esp 32", "Multiple Sensors", "C++"]
  },
  {
    id: 3, // Done
    title: "Humanoid Robot",
    category: ["Robotics", "AI"],
    degree: "B.Sc",
    image: HumanoidRobot,
    description: "Redefining safety with human-like adaptability, this humanoid robot provides tireless 24/7 surveillance and hazard detection for college campus. Equipped with intelligent navigation and real-time monitoring, it autonomously patrols to identify threats before they escalate. It stands as a vigilant, reliable guardian, ensuring complete peace of mind through seamless automation.",
    tech: ["Nvidia Jetson Eagle 101", "Raspberry Pi", "AI-powered camera module", "High-Torque Motors", "Python"]
  },
  {
    id: 4, // Done, ask if image ok
    title: "Ecofin",
    category: ["IoT", "Robotics"],
    degree: "B.Sc",
    image: Ecofin,
    description: "EcoFin is a biomimetic aquatic robotic system engineered for efficient environmental monitoring and intelligent water ecosystem management.",
    tech: ["Raspberry Pi", "Servos", "Batteries", "Quality Detection Modules"]
  },
  {
    id: 5, // Done
    title: "LangBuddy",
    category: ["AI", "IoT"],
    degree: "B.Sc",
    image: LangBuddy,
    description: "LangBuddy is a language assistant that enables real-time voice translation, grammar correction, and interactive language learning to break communication barriers.",
    tech: ["Gradio", "Raspberry Pi", "Python", "Transformers", "Speech-to-Text models", "Text-to-Speech models"]
  },
  {
    id: 6, //Ask
    title: "FPV Nanon Drone",
    degree: "B.Sc",
    category: ["IoT"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    description: "A small, compact drone with high level maneuvering and agility. Developed for going into cramped spaces or manuvering exercises.",
    tech: ["ROSS", "C", "Kinematics", "MATLAB"]
  },
  {
    id: 7, // Done
    title: "MTPY-Moving Technology Powering Youth",
    category: ["Robotics", "AI", "IoT"],
    degree: "B.Sc",
    image: MTPY,
    description: "MTPY is an interactive humanoid robot designed to assist and guide students through voice-based communication. MTPY uses AI voice assistance, servo-based movements, and Bluetooth control to provide information, answer questions, and demonstrate smart robotics applications for youth and educational institutions.",
    tech: ["Arduino", "Raspberry Pi", "Python", "Servo Motors", "Speech Recognition module", "Text-to-Speech module", "Bluetooth Integration"]
  },
  {
    id: 8, // Done
    title: "Fog Handwash",
    category: ["IoT"],
    degree: "B.Sc",
    image: FogHandwash,
    description: "A Fog Handwash Machine sanitizes hands using a fine mist, offering fast, touchless, and water-saving hygiene.",
    tech: ["Disinfectant Tank", "Enclosure & Mounting Frame", "Ultrasonic Sensor"]
  },
  {
    id: 9, // Ask
    title: "Judges of Hades",
    category: ["AI"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    description: "An Agentic Modern Decision Support System useful for new startup entrepreneurs making decision making and perspective professional advices easy to access and available.",
    tech: ["Python", "LangGraph", "Groq", "Supabase"]
  },
  {
    id: 10, // Ask
    title: "Eco grip",
    category: ["IoT"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "IoT-based smart farming solution monitoring crop health, soil moisture, and weather conditions to optimize yield and reduce water usage by 30%.",
    tech: ["ESP32", "Node-RED", "React", "Firebase"]
  },
  {
    id: 11, // Ask
    title: "ISR UAV",
    category: ["AR/VR"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "Immersive virtual learning environment for students to explore historical events and scientific concepts in a 3D space.",
    tech: ["Unity", "C#", "ARCore", "Vuforia"]
  },
  {
    id: 12, // Ask
    title: "CNC Machine",
    category: ["Blockchain"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1579761160399-112ba8d25d1d?w=800&q=80",
    description: "Blockchain platform incentivizing carbon offsetting through tradable carbon credits verified via IoT sensors.",
    tech: ["Ethereum", "Solidity", "React", "IPFS"]
  },
  {
    id: 13, // Ask
    title: "Robotic arm/Wall-E Bot",
    category: ["AI"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "AI-powered tutoring system that adapts to individual learning styles and provides personalized feedback.",
    tech: ["Python", "TensorFlow", "React", "Firebase"]
  },
  {
    id: 14, // Ask
    title: "Learn IT using AR",
    category: ["IoT"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "IoT-based urban sensing platform monitoring air quality, noise levels, and traffic patterns to improve city planning.",
    tech: ["ESP32", "Node-RED", "React", "Firebase"]
  },
  {
    id: 15, // Ask
    title: "Atharva Satellite Ground Station",
    category: ["Blockchain"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1579761160399-112ba8d25d1d?w=800&q=80",
    description: "Blockchain platform for secure and transparent health records management.",
    tech: ["Ethereum", "Solidity", "React", "IPFS"]
  },
  {
    id: 16, // Ask
    title: "Solar Powered Water Surface Cleaning Boat",
    category: ["AI"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "AI-powered smart mirror that displays weather, news, and personal information.",
    tech: ["Python", "TensorFlow", "React", "Firebase"]
  },
  {
    id: 17, // Ask
    title: "Margdarshak",
    category: ["AR/VR"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "Immersive virtual learning environment for students to explore historical events and scientific concepts in a 3D space.",
    tech: ["Unity", "C#", "ARCore", "Vuforia"]
  },
  {
    id: 18, // Ask
    title: "AI optimized 3D printing for structural and electrical component fabrication.",
    category: ["Blockchain"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1579761160399-112ba8d25d1d?w=800&q=80",
    description: "Blockchain platform incentivizing carbon offsetting through tradable carbon credits verified via IoT sensors.",
    tech: ["Ethereum", "Solidity", "React", "IPFS"]
  },
  {
    id: 19, // Ask
    title: "Krishi Kaushal.",
    category: ["AI"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "AI-powered tutoring system that adapts to individual learning styles and provides personalized feedback.",
    tech: ["Python", "TensorFlow", "React", "Firebase"]
  },
  {
    id: 20, // Ask
    title: "",
    category: ["IoT"],
    degree: "",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "IoT-based smart farming solution monitoring crop health, soil moisture, and weather conditions to optimize yield and reduce water usage by 30%.",
    tech: ["ESP32", "Node-RED", "React", "Firebase"]
  }
];