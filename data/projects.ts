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

import LangBuddy from '../assests/langbuddy.jpeg';
import Glove from '../assests/Glove.jpeg';
import HumanoidRobot from '../assests/HumanoidRobot.jpeg';
import Ecofin from '../assests/EcoFin.jpeg';
import MTPY from '../assests/MTPY.jpeg';
import FogHandwash from '../assests/Fog_Handwash.jpeg';
import Judge from '../assests/JudgeOfHades.jpeg';
import FPV from '../assests/FPVNanodrone.jpeg';
import ARON from '../assests/aron.jpeg';
import RoboticArm from '../assests/RoboticArm.jpeg';
import ISRUAV from '../assests/ISRUAV.jpeg';
import EcoGrip from '../assests/ecogrip.jpeg';
import CNC from '../assests/cnc.jpeg';
import LearnitAR from '../assests/AR.jpeg';
import SatelliteGroundStation from '../assests/satellite.jpeg';
import SolarBot from '../assests/solarboat.jpeg';
import KrishiKaushal from '../assests/krishikaushal.jpeg';
import Margdarshak from '../assests/marg.jpeg';
import AI3DPrinter from '../assests/aiprint.jpeg';

export const PROJECTS = [
  /* B.Sc Done */
  {
    id: 1, // Done excet pt image
    title: "ARON Model",
    category: ["IoT", "Robotics"],
    degree: "B.Sc",
    image: ARON,
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
    id: 6, // Done
    title: "FPV Nanon Drone",
    degree: "B.Sc",
    category: ["IoT"],
    image: FPV,
    description: "Engineered for environments where standard aircraft cannot go, this ultra-compact drone delivers high-level agility and precision. It navigates confined structures and narrow passages with ease, serving as the ultimate tool for critical inspections in tight quarters and advanced maneuvering exercises.",
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
    id: 9, // done, ask if image ok
    title: "Judges of Hades",
    category: ["AI"],
    degree: "B.Sc",
    image: Judge,
    description: "An Agentic Modern Decision Support System useful for new startup entrepreneurs making decision making and perspective professional advices easy to access and available.",
    tech: ["Python", "LangGraph", "Groq", "Supabase"]
  },
  /* B.E, B.Tech, and others */
  {
    id: 10, // Image
    title: "Eco grip",
    category: ["Robotics", "Computer Vision"],
    degree: "B.E",
    image: EcoGrip,
    description: "Eco Grip is an autonomous robotic arm system designed to identify and sort various objects using real-time computer vision algorithms. The arm interprets visual data from a camera to execute precise physical actions upon detected items, automating handling tasks based on what it 'sees'.",
    tech: ["Python", "OpenCV", "YOLO", "TensorFlow", "Raspberry Pi", "Servo Motors", "Webcam"]
  },
  {
    id: 11, // Image
    title: "ISR UAV",
    category: ["Aerial Robotics", "Surveillance"],
    degree: "B.E",
    image: ISRUAV,
    description: "AEGIS is an advanced aerial intelligence system designed to provide real-time surveillance and critical situational awareness from the sky. It offers RC flight control and a low altitude camera feed for monitoring and reconnaissance missions.",
    tech: ["Python", "FPV Camera", "Brushless Motors", "Flight Controller", "LiPo Battery"]
  },
  {
    id: 12, // Ask
    title: "CNC Machine",
    category: ["Mechatronics", "Advanced Manufacturing"],
    degree: "B.E",
    image: CNC,
    description: "A hybrid manufacturing unit that integrates 3D printing, laser engraving, and CNC milling into a single gantry system to save workspace and hardware costs. It enables seamless transitions between additive and subtractive manufacturing processes within one coordinated setup.",
    tech: ["Stepper Motors", "Laser Module", "CNC Milling Module","Spindle Motor"]
  },
  {
    id: 13, // Done
    title: "Robotic arm/Wall-E Bot",
    category: ["Robotics"],
    degree: "B.E",
    image: RoboticArm,
    description: "Unlock the power of personal automation with this high-precision robotic manipulator. Designed for versatility and adaptability, it seamlessly bridges the gap between digital commands and physical action, serving as a reliable platform for everything from educational research to complex industrial prototyping.",
    tech: ["Stepper Motors", "Inverse Kinematics", "C++", "Custom Chassis"]
  },
  {
    id: 14, // Ask
    title: "Learn IT using AR",
    category: ["AR/VR"],
    degree: "B.E",
    image: LearnitAR,
    description: "An interactive educational platform that transforms static 2D technical blueprints into immersive 3D augmented reality models. It bridges the gap between theory and practice by allowing users to visualize complex structures and assembly processes directly through their smartphones.",
    tech: ["Unity", "Vuforia", "C#", "Firebase", "Blender"]
  },
  {
    id: 15, // Ask
    title: "Atharva Satellite Ground Station",
    category: ["Satellite Communications"],
    degree: "B.E",
    image: SatelliteGroundStation,
    description: "An advanced ground station infrastructure capable of full-duplex communication with Low Earth Orbit (LEO) satellites. It utilizes automated tracking systems and high-gain antenna arrays to secure high-fidelity telemetry and payload data for academic research and mission control operations.",
    tech: ["MATLAB & Simulink", "GNU Rado Companion"]
  },
  {
    id: 16, // Ask
    title: "Solar Powered Water Surface Cleaning Boat",
    category: ["Robotics"],
    degree: "B.E",
    image: SolarBot,
    description: "An eco-friendly autonomous vehicle designed to skim and collect floating debris from water surfaces. Powered entirely by solar energy, it offers a sustainable, low-maintenance solution for maintaining cleanliness in lakes, ponds, and small waterways.",
    tech: ["Solar Panel", "Arduino", "Lead-Acid Battery", "Geared Motors"]
  },
  {
    id: 17, // Ask
    title: "Margdarshak",
    category: ["AR/VR", "IoT","Wearables"],
    degree: "B.E",
    image: Margdarshak,
    description: "A smart wearable system designed to assist visually impaired individuals by narrating their surroundings. It captures visual data through camera-equipped glasses and processes it using cloud-based AI to provide real-time audio feedback via a voice assistant.",
    tech: ["Python", "OpenCV", "Text-to-Speech", "Pi Camera Module"]
  },
  {
    id: 18, // Ask
    title: "AI optimized 3D printing for structural and electrical component fabrication.",
    category: ["AI", "Advanced Manufacturing"],
    degree: "B.E",
    image: AI3DPrinter,
    description: "A hybrid 3D printing system capable of fabricating structural parts and embedded electrical circuits simultaneously. It utilizes computer vision and machine learning to optimize print parameters in real-time, automatically adjusting material flow and toolpaths to ensure both high structural integrity and reliable conductivity in the printed circuits.",
    tech: ["OpenCV", "TensorFlow Lite", "Python", "Klipper Firmware"]
  },
  {
    id: 19, // Ask
    title: "Krishi Kaushal.",
    category: ["Robotics", "AI"],
    degree: "B.E",
    image: KrishiKaushal,
    description: "An intelligent autonomous rover engineered to assist farmers by performing real-time soil health analysis and targeted crop monitoring. It utilizes deep learning algorithms to navigate crop rows safely while collecting environmental data to optimize yield and reduce reliance on manual labor.",
    tech: ["High Torque DC Motors", "TensorFlow", "OpenCV", "Nvidia Jetson Nano"]
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