import { Award } from "lucide-react";
import { Feather } from "lucide-react";
import { Palette } from "lucide-react";
import { Box } from "lucide-react";
import { Leaf } from "lucide-react";
import { User} from "lucide-react";



import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import bikePrice1 from "../assets/Price/bikePrice1.png";
import bikePrice2 from "../assets/Price/bikePrice2.png";
import bikePrice3 from "../assets/Price/bikePrice3.png";

export const navItems = [
  { label: "Home", href: "#hero"},
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testinonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Feather />,
    text: "Light Weight",
    description:
      "Designed for effortless handling, this bicycle offers a lightweight frame for easy maneuverability and speed.",
  },
  {
    icon: <Palette />,
    text: "Colors Wide Range",
    description:
      "Available in a vibrant palette of colors to suit every personality and preference.",
  },
  {
    icon: <Award />,
    text: "Premium Quality",
    description:
      "special features special features special features special features",
  },
  {
    icon: <Box />,
    text: "Aerograde Aluminium",
    description:
      "Crafted using aerospace-grade aluminum, delivering unmatched strength and resilience without added weight.",
  },
  {
    icon: <Leaf />,
    text: "Eco Friendly Design",
    description:
      "Highlight that the bicycle is crafted using sustainable materials and production processes, making it an environmentally friendly choice for riders who care about the planet.",
  },
  {
    icon: <User />,
    text: "Advanced Ergonomic",
    description:
      "Showcase the bicycle's rider-friendly design, ensuring optimal comfort and posture for long rides, suitable for both casual and professional cyclists.",
  },
];

export const checklistItems = [
  {
    title: "easy",
    description:
      "special features special features special features special features",
  },
  {
    title: "Review without worry",
    description:
      "Tspecial features special features special features special features.",
  },
  {
    title: "reduce time",
    description:
      "special features special features special features special features",
  },
  {
    title: "start ride in minutes",
    description:
      "special features special features special features special features.",
  },
];

export const pricingOptions = [
  {
    image: bikePrice1,
    title: "Mountain Bikes",
    price: "$0",
    features: [
      "Delivery free",
    ],
  },
  {
    image: bikePrice2,
    title: "Children",
    price: "$10",
    features: [
      "Delivery free",
    ],
  },
  {
    image: bikePrice3,
    title: "dffsbgndghdsf",
    price: "$200",
    features: [
      "Delivery free",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
