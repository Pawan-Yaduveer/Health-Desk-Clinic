import {
  Award,
  Dna,
  Heart,
  HeartHandshake,
  Leaf,
  Rabbit,
  Sparkles,
  Stethoscope,
  Zap
} from "lucide-react";

// --- 1. IMPORT YOUR IMAGES HERE ---
// Make sure the filenames (.png, .jpg, .webp) match your actual files exactly!
import dentPureImg from '../assets/DentPure.png';
import trueFemImg from '../assets/TrueFem.png';
import vitaRenewImg from '../assets/VitaRenew.png';
import prostaZenImg from '../assets/ProstaZen.png';
import nerveFreedomImg from '../assets/NerveFreedom.png';

import naturalImg from '../assets/AllNatural.png'; // Use your real filenames
import crueltyFreeImg from '../assets/Cruelty-Free.png';
import guaranteeImg from '../assets/Money.png';
import givingBackImg from '../assets/Giving-Back.png';
import nonGmoImg from '../assets/NoGMO.png';


import ProCanImg from '../assets/ProCan.png';
import AmeTinImg from '../assets/AmeTin.png';
import USPainImg from '../assets/USPain.png';
import AmeDieImg from '../assets/AmeDie.png';
import AmeHeartImg from '../assets/AmeHeart.png';

import TestoBitesImg from '../assets/TestoBites.png';
import DermaCare from '../assets/DermaCare.png';
import NerveFlow from '../assets/NerveFreedom.png';

export const navLinks = [
  "Home",
  "Shop",
  "About Us",
  "FAQ",
  "Blog",
  "Contact Us"
];
export const solutions = [
  {
    title: "Weight Loss",
    description:
      "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you.",
    icon: Award,
    badge: "bg-indigo-100"
  },
  {
    title: "Nerve Pain",
    description:
      "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function.",
    icon: Zap,
    badge: "bg-blue-100"
  },
  {
    title: "Skin Care",
    description:
      "Explore premium skincare products that nourish, protect, and enhance your natural glow.",
    icon: Sparkles,
    badge: "bg-cyan-100"
  },
  {
    title: "Men’s Health",
    description:
      "Discover men's health products designed to boost energy, strength, and overall well-being.",
    icon: Stethoscope,
    badge: "bg-blue-100"
  },
  {
    title: "Women's Health",
    description:
      "Explore women's health products that support hormonal balance, vitality, and overall wellness.",
    icon: Heart,
    badge: "bg-pink-100"
  },
  {
    title: "Dental",
    description:
      "Shop dental care products that keep your smile bright, healthy, and confident.",
    icon: Rabbit,
    badge: "bg-cyan-100"
  },
  {
    title: "Memory",
    description:
      "Discover memory support products that help enhance focus, clarity, and cognitive performance.",
    icon: Dna,
    badge: "bg-indigo-100"
  }
];


export const products = [
  {
    name: "Dent Pure",
    // --- 2. USE THE IMPORTED VARIABLE HERE ---
    image: dentPureImg 
  },
  {
    name: "True Fem",
    image: trueFemImg
  },
  {
    name: "Vita Renew",
    image: vitaRenewImg
  },
  {
    name: "ProstaZen",
    image: prostaZenImg
  },
  {
    name: "Nerve Freedom",
    image: nerveFreedomImg
  }
];

export const features = ["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"];

export const trustIcons = [
  { icon: naturalImg, label: "All Natural" },
  { icon: crueltyFreeImg, label: "Cruelty-Free" },
  { icon: guaranteeImg, label: "Money-back Guarantee" },
  { icon: givingBackImg, label: "Giving Back" },
  { icon: nonGmoImg, label: "Non-GMO" }
];


export const charities = [
  { icon: ProCanImg },
  { icon: AmeTinImg },
  { icon: USPainImg },
  { icon: AmeDieImg },
  { icon: AmeHeartImg }
];


export const testimonials = [
  {
    name: "TestoBites",
    product: TestoBitesImg,   // ← using imported file
    review: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    author: "Ryan R.",
    // image: "https://....",
  },
  {
    name: "Vita Renew",
    product: DermaCare,
    review: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    author: "Jamie Fields",
    image: "https://....",
  },
  {
    name: "Nerve Freedom",
    product: NerveFlow,
    review: "I have been an RN for 20 years and love helping people find solutions to their health issues.NF Product is the best natural product for neuropathy pain hands down.",
    author: "Anonymous",
    image: "https://....",
  }
];

export const footerProducts = [
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro Flow"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Memof"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Derma Care"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "TestoZen"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "True Fem"]
];