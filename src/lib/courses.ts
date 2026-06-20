export type Course = {
  badge: string;
  title: string;
  meta: string[];
  color: string;
  lessons: string[];
};

export const COURSES: Course[] = [
  {
    badge: "Bestseller · Certificate",
    title: "Phone Screen & Display Repair — Complete Course",
    meta: ["4 weeks", "Hands-on", "Beginner to Advanced"],
    color: "linear-gradient(90deg,#005843,#008560)",
    lessons: [
      "How phone screens and displays work (LCD, OLED, touch layers)",
      "Safely opening different phone models",
      "Removing and replacing broken screens",
      "Fixing touch and display faults",
      "Testing and quality-checking your repair",
      "Customer service and pricing your work",
    ],
  },
  {
    badge: "Most Popular",
    title: "Laptop Repair & Servicing — Beginner to Advanced",
    meta: ["6 weeks", "Classroom + practical"],
    color: "linear-gradient(90deg,#3D2000,#A05000)",
    lessons: [
      "Laptop parts and how they work together",
      "Diagnosing common faults (won't power on, screen, keyboard, battery)",
      "Replacing screens, keyboards, batteries, and storage",
      "Cleaning, servicing, and software basics",
      "Safe handling and tools",
      "Running it as a business",
    ],
  },
  {
    badge: "Advanced · Certificate",
    title: "Circuit Board Micro-Soldering — Board-Level Repair",
    meta: ["8 weeks", "Lab-based", "Advanced"],
    color: "linear-gradient(90deg,#1A2050,#2E45A0)",
    lessons: [
      "Reading circuit boards and schematics",
      "Safe soldering and micro-soldering techniques",
      "Using tools (microscope, hot air, soldering station)",
      "Finding and fixing faults on the board",
      "Replacing tiny components",
      "Advanced fault-finding",
    ],
  },
  {
    badge: "New · Specialist",
    title: "EV Battery Diagnostics & Repair Technology",
    meta: ["5 weeks", "Workshop", "Specialist"],
    color: "linear-gradient(90deg,#1E2738,#3A4A6A)",
    lessons: [
      "How EV batteries work and staying safe around them",
      "Battery health checks and diagnostics",
      "Finding faulty cells and modules",
      "Battery management systems (BMS) basics",
      "Safe handling, testing, and maintenance",
      "The growing EV repair industry in Africa",
    ],
  },
];

export const SEARCH_INDEX = [
  { name: "Phone Screen Repair", keywords: ["screen", "phone", "display", "iphone", "samsung", "lcd", "oled", "glass", "digitiser", "mobile"], index: 0 },
  { name: "Laptop Repair", keywords: ["laptop", "computer", "pc", "notebook", "mac", "macbook", "servicing", "keyboard"], index: 1 },
  { name: "Circuit Board Soldering", keywords: ["circuit", "board", "solder", "soldering", "micro", "bga", "chip", "ic", "component", "pcb"], index: 2 },
  { name: "EV Battery Diagnostics", keywords: ["ev", "battery", "electric", "vehicle", "diagnostic", "bms", "cell", "tesla", "car"], index: 3 },
];
