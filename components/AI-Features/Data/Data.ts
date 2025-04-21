import { Brain, FileCheck, Headset, MapPin, MessageSquare, Shield } from "lucide-react";

export const features = [
    {
      title: "AI-Powered Matchmaking",
      description:
        "Our algorithm suggests the best rental options based on your preferences like budget, location, amenities, and commute distance.",
      icon: Brain,
      iconColor: "blue",
      listItems: [
        "Personalized property recommendations",
        "Learning from your feedback and preferences",
        "Price prediction based on market trends",
      ],
    },
    {
      title: "Fraud Prevention & Verification",
      description:
        "AI scans for fake listings and flags suspicious activity. Landlords can verify properties with video walkthroughs or government-approved documents.",
      icon: Shield,
      iconColor: "green",
      listItems: [
        "Automated scam detection",
        "Verified property badges",
        "Secure identity verification",
      ],
    },
    {
      title: "Smart Contracts & Agreements",
      description:
        "Blockchain-backed smart contracts for secure rental agreements with digital signatures for hassle-free tenant onboarding.",
      icon: FileCheck,
      iconColor: "purple",
      listItems: [
        "Tamper-proof rental agreements",
        "Digital signature capabilities",
        "Automated payment schedules",
      ],
    },
    {
      title: "AR/VR Virtual Tours",
      description:
        "Experience immersive 3D walkthroughs of rental properties without physically visiting them, saving you time and effort.",
      icon: Headset,
      iconColor: "orange",
      listItems: [
        "360° property visualization",
        "Virtual furniture placement",
        "Mobile AR compatibility",
      ],
    },
    {
      title: "Community Insights",
      description:
        "Crowdsourced reviews of neighborhood safety, accessibility, and commute quality, plus integration with local crime rate data.",
      icon: MapPin,
      iconColor: "teal",
      listItems: [
        "Neighborhood safety scores",
        "Commute time analysis",
        "Local amenities mapping",
      ],
    },
    {
      title: "AI-Assisted Negotiation",
      description:
        "AI helps tenants negotiate rental prices based on market conditions with direct chat to landlords for quick inquiries.",
      icon: MessageSquare,
      iconColor: "red",
      listItems: [
        "Market-based price suggestions",
        "Negotiation templates and scripts",
        "Real-time landlord messaging",
      ],
    },
  ]