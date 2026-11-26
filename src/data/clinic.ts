export const clinic = {
  name: "DENTORA",
  descriptor: "PREMIUM DENTAL STUDIO",
  tagline: "Where Technology Meets Your Perfect Smile.",
  phone: "+1 (555) 010-2040",
  email: "hello@dentora.example",
  whatsapp: "15550102040",
  address: "123 Placeholder Avenue, Your City, ST 00000",
  hours: [
    ["Monday – Friday", "8:00 am – 6:00 pm"],
    ["Saturday", "9:00 am – 2:00 pm"],
    ["Sunday", "By appointment"],
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: "sparkles" | "smile" | "sun" | "scan" | "heart" | "gem" | "shield" | "star";
  image: string;
};

export const treatments = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "A confident, lasting solution designed to feel like you.",
    description:
      "Explore modern tooth replacement options with a considered treatment plan tailored to your needs, comfort and long-term oral health.",
    icon: "sparkles",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    short: "Thoughtful details. A smile that feels like your own.",
    description:
      "From subtle refinements to a complete smile design, discover personalized cosmetic options with a natural-looking point of view.",
    icon: "smile",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "A brighter smile, guided by professional care.",
    description:
      "Discuss safe, professionally guided whitening options and find an approach designed around your goals and dental health.",
    icon: "sun",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    short: "A discreet path to a more confident smile.",
    description:
      "Learn whether clear aligner treatment may suit your smile, with a personal assessment and a plan explained at every step.",
    icon: "scan",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Care",
    short: "Comfort-first treatment focused on preserving your tooth.",
    description:
      "When a tooth needs extra care, our team will explain your options and help you feel informed and supported throughout treatment.",
    icon: "heart",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "dental-veneers",
    name: "Dental Veneers",
    short: "Personalized smile details with a natural finish.",
    description:
      "Explore custom veneer options, materials and care considerations in a consultation shaped around your preferences.",
    icon: "gem",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    short: "A considered way to restore and protect a tooth.",
    description:
      "Learn about crown materials and treatment steps with a dentist who will take time to discuss the right option for you.",
    icon: "shield",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85",
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    short: "Gentle, encouraging dental visits for little smiles.",
    description:
      "We create a welcoming environment where children can feel at ease and families can build positive oral-care routines.",
    icon: "star",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
  },
] satisfies Treatment[];

export const dentists = [
  {
    name: "Dr. [Dentist Name]",
    qualification: "[DDS / DMD / Local qualification]",
    specialty: "General & restorative dentistry",
    experience: "[Years of experience]",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. [Dentist Name]",
    qualification: "[DDS / DMD / Local qualification]",
    specialty: "Cosmetic dentistry",
    experience: "[Years of experience]",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. [Dentist Name]",
    qualification: "[DDS / DMD / Local qualification]",
    specialty: "Family & pediatric dentistry",
    experience: "[Years of experience]",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
  },
];

export const testimonials = [
  {
    quote: "Demonstration testimonial text — replace with a verified review shared with the patient’s consent.",
    author: "Sample patient",
    context: "Demonstration content",
  },
  {
    quote: "Example review copy belongs here. Add only a genuine, approved patient testimonial before publishing.",
    author: "Sample patient",
    context: "Demonstration content",
  },
  {
    quote: "This placeholder is for a real patient’s words and should not be presented as an authentic review.",
    author: "Sample patient",
    context: "Demonstration content",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    alt: "Bright contemporary dental studio reception",
    label: "A warm welcome",
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern dental care room",
    label: "Thoughtful spaces",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
    alt: "Dental professional at work",
    label: "Care with intention",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
    alt: "Dental equipment in a clinic",
    label: "Modern technology",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
    alt: "Comfortable treatment suite",
    label: "Made for comfort",
  },
];
