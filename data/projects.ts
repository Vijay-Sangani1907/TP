/*
 *  --------------------------------------------------------------------------
 *   TECHITHON 2026 | OFFICIAL SOURCE CODE
 *  --------------------------------------------------------------------------
 *
 *   Designed & Developed by: Vijay Sangani
 *   
 *   Contributors: Mayank Bhuvad, Shlok Nair, Yug Sawant
 *
 *   (c) 2026 All Rights Reserved.
 *  --------------------------------------------------------------------------
 */
import LangBuddy from '../assests/langbuddy.png';
import Glove from '../assests/Glove.png';
import HumanoidRobot from '../assests/Humanoid Robot.png';
import Ecofin from '../assests/EcoFin.png';

export const PROJECTS = [
  {
    id: 1,
    title: "ARON Model",
    category: ["IoT", "Robotics"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    description: "ARON Model is an automated robotic system designed for safe and efficient manhole and sewer cleaning. It eliminates the need for manual scavenging by using smart sensors, real-time monitoring, and a crane-assisted mechanism to inspect, detect, and remove waste—ensuring zero human entry into hazardous environments.",
    tech: ["Thony", "Raspberry Pi", "Python", "OpenCV", "Ultrasonic Sensors"]
  },
  {
    id: 2,
    title: "Smart Glove Safety",
    category: ["Blockchain"],
    degree: "B.Sc",
    image: Glove,
    description: "The Smart Glove acts as an intelligent barrier against electric shocks, extreme heat, and hazardous vibrations. By transforming standard protective gear into a responsive guardian, it provides real-time alerts to keep you safe in high-risk environments. Work with total confidence knowing that advanced protection is always at your fingertips.",
    tech: ["Raspberry Pi", "Multi-Hazard Detection Module", "Python"]
  },
  {
    id: 3,
    title: "Humanoid Robot",
    category: ["AR/VR"],
    degree: "B.Sc",
    image: HumanoidRobot,
    description: "Redefining safety with human-like adaptability, this humanoid robot provides tireless 24/7 surveillance and hazard detection for homes and facilities. Equipped with intelligent navigation and real-time monitoring, it autonomously patrols to identify threats before they escalate. It stands as a vigilant, reliable guardian, ensuring complete peace of mind through seamless automation.",
    tech: ["Raspberry Pi", "AI-powered camera module", "High-Torque Motors", "Python"]
  },
  {
    id: 4,
    title: "Ecofin",
    category: ["IoT", "Robotics"],
    degree: "B.Sc",
    image: Ecofin,
    description: "EcoFin is a biomimetic aquatic robotic system engineered for efficient environmental monitoring and intelligent water ecosystem management.",
    tech: ["Raspberry Pi", "Servos", "Batteries", "Quality Detection Modules"]
  },
  {
    id: 5,
    title: "LangBuddy",
    category: ["AI", "IoT"],
    degree: "B.Sc",
    image: LangBuddy,
    description: "LangBuddy is a language assistant that enables real-time voice translation, grammar correction, and interactive language learning to break communication barriers.",
    tech: ["Gradio", "Raspberry Pi", "Python", "Transformers", "Speech-to-Text models", "Text-to-Speech models"]
  },
  {
    id: 6,
    title: "FPV Nanon Drone",
    degree: "B.Sc",
    category: ["IoT"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    description: "Home energy management system optimizing power usage based on real-time grid pricing and renewable energy availability. Reduces average household energy bills by 25%.",
    tech: ["Node.js", "MQTT", "React Native", "InfluxDB"]
  },
  {
    id: 7,
    title: "MTPY-Moving Technology Powering Youth",
    category: ["Blockchain"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    description: "MTPY is an interactive robotic companion designed to ignite curiosity and foster essential STEM skills in the next generation. By transforming complex engineering concepts into an accessible, hands-on experience, it empowers young minds to learn through direct interaction. This simple yet powerful platform serves as the perfect launchpad for future innovators to explore the world of robotics.",
    tech: ["Arduinos", "High Torque Motors", "Python"]
  },
  {
    id: 8,
    title: "Fog Handwash",
    category: ["AR/VR"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "Augmented reality surgical overlay system helping students practice complex procedures with real-time anatomical guidance.",
    tech: ["Unity", "ARCore", "Hololens", "C#"]
  },
  {
    id: 9,
    title: "Judges of Hades",
    category: ["AI"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    description: "Experimental neural network optimized for quantum simulation processing, attempting to bridge classical ML with quantum states.",
    tech: ["Qiskit", "Python", "PyTorch", "IBM Q"]
  },
  {
    id: 10,
    title: "Eco grip",
    category: ["IoT"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "IoT-based smart farming solution monitoring crop health, soil moisture, and weather conditions to optimize yield and reduce water usage by 30%.",
    tech: ["ESP32", "Node-RED", "React", "Firebase"]
  },
  {
    id: 11,
    title: "ISR UAV",
    category: ["AR/VR"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "Immersive virtual learning environment for students to explore historical events and scientific concepts in a 3D space.",
    tech: ["Unity", "C#", "ARCore", "Vuforia"]
  },
  {
    id: 12,
    title: "CNC Machine",
    category: ["Blockchain"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1579761160399-112ba8d25d1d?w=800&q=80",
    description: "Blockchain platform incentivizing carbon offsetting through tradable carbon credits verified via IoT sensors.",
    tech: ["Ethereum", "Solidity", "React", "IPFS"]
  },
  {
    id: 13,
    title: "Robotic arm/Wall-E Bot",
    category: ["AI"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "AI-powered tutoring system that adapts to individual learning styles and provides personalized feedback.",
    tech: ["Python", "TensorFlow", "React", "Firebase"]
  },
  {
    id: 14,
    title: "Learn IT using AR",
    category: ["IoT"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "IoT-based urban sensing platform monitoring air quality, noise levels, and traffic patterns to improve city planning.",
    tech: ["ESP32", "Node-RED", "React", "Firebase"]
  },
  {
    id: 15,
    title: "Atharva Satellite Ground Station",
    category: ["Blockchain"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1579761160399-112ba8d25d1d?w=800&q=80",
    description: "Blockchain platform for secure and transparent health records management.",
    tech: ["Ethereum", "Solidity", "React", "IPFS"]
  },
  {
    id: 16,
    title: "Solar Powered Water Surface Cleaning Boat",
    category: ["AI"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "AI-powered smart mirror that displays weather, news, and personal information.",
    tech: ["Python", "TensorFlow", "React", "Firebase"]
  },
  {
    id: 17,
    title: "Margdarshak",
    category: ["AR/VR"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "Immersive virtual learning environment for students to explore historical events and scientific concepts in a 3D space.",
    tech: ["Unity", "C#", "ARCore", "Vuforia"]
  },
  {
    id: 18,
    title: "AI optimized 3D printing for structural and electrical component fabrication.",
    category: ["Blockchain"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1579761160399-112ba8d25d1d?w=800&q=80",
    description: "Blockchain platform incentivizing carbon offsetting through tradable carbon credits verified via IoT sensors.",
    tech: ["Ethereum", "Solidity", "React", "IPFS"]
  },
  {
    id: 19,
    title: "Krishi Kaushal.",
    category: ["AI"],
    degree: "B.E",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    description: "AI-powered tutoring system that adapts to individual learning styles and provides personalized feedback.",
    tech: ["Python", "TensorFlow", "React", "Firebase"]
  },
  {
    id: 20,
    title: "",
    category: ["IoT"],
    degree: "",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "IoT-based smart farming solution monitoring crop health, soil moisture, and weather conditions to optimize yield and reduce water usage by 30%.",
    tech: ["ESP32", "Node-RED", "React", "Firebase"]
  }
];