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

export const PROJECTS = [
  {
    id: 1,
    title: "Aron Model",
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
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    description: "Decentralized voting platform ensuring transparency and anonymity for student council elections using smart contracts. Features a zero-knowledge proof authentication system.",
    tech: ["Solidity", "React", "Ethereum", "Web3.js"]
  },
  {
    id: 3,
    title: "Humanoid Robot",
    category: ["AR/VR"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
    description: "A full digital twin of the university campus allowing remote tours, virtual lectures, and multiplayer social spaces for students. Includes spatial audio and avatar customization.",
    tech: ["Unity", "C#", "Oculus SDK", "Photon"]
  },
  {
    id: 4,
    title: "Ecofin",
    category: ["IoT", "Robotics"],
    degree: "B.Sc",
    image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=800&q=80",
    description: "EcoFin is a biomimetic aquatic robotic system engineered for efficient environmental monitoring and intelligent water ecosystem management.",
    tech: ["Arduino", "C++", "LoRaWAN", "GPS Module"]
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
    description: "Peer-to-peer lending protocol on the Polygon network allowing under-collateralized loans based on on-chain reputation scores.",
    tech: ["Solidity", "Polygon", "Hardhat", "React"]
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