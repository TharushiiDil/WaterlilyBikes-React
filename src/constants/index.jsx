import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";

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
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
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
    icon: <BotMessageSquare />,
    text: "Light Weight",
    description:
      "special features special features special features special features",
  },
  {
    icon: <Fingerprint />,
    text: "Colors Wide Range",
    description:
      "special features special features special features special features",
  },
  {
    icon: <ShieldHalf />,
    text: "Aerograde Aluminium",
    description:
      "special features special features special features special features",
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
