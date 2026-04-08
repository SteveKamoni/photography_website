// src/data/servicesData.js
// ─────────────────────────────────────────────────────────
// Single source of truth for all service data.
// Used by: Services.jsx, ServiceDetail.jsx, Portfolio.jsx
// ─────────────────────────────────────────────────────────

export const services = [
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    tagline: "Every vow. Every tear. Every laugh. Preserved forever.",
    description:
      "Capturing your special day with elegance and emotion. From intimate ceremonies to grand celebrations, we document every precious moment with a fine-art eye and an unobtrusive presence.",
    heroImage:
      "https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODE5NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1765350226723-a96ab0705403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1684244177286-8625c54bce6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    includes: [
      "Full-day coverage (up to 10 hours)",
      "Two professional photographers",
      "Engagement session included",
      "500+ fully edited high-resolution images",
      "Private online gallery for 12 months",
      "Premium printed album (optional add-on)",
      "Same-week sneak peek delivery",
    ],
    process: [
      {
        step: "01",
        title: "Consultation",
        body: "We begin with a relaxed conversation — in person or over a call — to understand your vision, venue, timeline, and the moments that matter most to you.",
      },
      {
        step: "02",
        title: "Planning",
        body: "We visit the venue, build a shot list together, and coordinate with your planner and vendors so nothing is left to chance on the day.",
      },
      {
        step: "03",
        title: "The Day",
        body: "We arrive early, stay late, and move through your day with quiet confidence — capturing the candid, the choreographed, and everything in between.",
      },
      {
        step: "04",
        title: "Delivery",
        body: "Your gallery of fully edited images is delivered within four weeks. Each photograph is carefully retouched to our fine-art standard.",
      },
    ],
    startingPrice: "KES 180,000",
  },
  {
    slug: "portrait-photography",
    title: "Portrait Photography",
    tagline: "The image the world sees. Made to last.",
    description:
      "Professional portraits that capture your essence. Perfect for executives, creatives, and individuals seeking timeless imagery that communicates presence, confidence, and character.",
    heroImage:
      "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    includes: [
      "2-hour studio or location session",
      "Professional lighting and direction",
      "30 fully edited, high-resolution images",
      "Multiple outfit changes accommodated",
      "Private online gallery",
      "Commercial usage rights available",
      "48-hour turnaround option available",
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        body: "We discuss your goals — LinkedIn, press, personal brand, or editorial — and align on style, location, wardrobe, and mood.",
      },
      {
        step: "02",
        title: "Session",
        body: "A relaxed, directed shoot where we guide you through natural poses and expressions. Most clients are surprised at how easy it feels.",
      },
      {
        step: "03",
        title: "Selection",
        body: "You receive a proof gallery and select your favourites. We then apply our full retouching process to every chosen image.",
      },
      {
        step: "04",
        title: "Delivery",
        body: "Final high-resolution files delivered within 5 business days, ready for print or digital use at any size.",
      },
    ],
    startingPrice: "KES 35,000",
  },
  {
    slug: "commercial-photography",
    title: "Commercial Photography",
    tagline: "Imagery that sells. Content that converts.",
    description:
      "Elevate your brand with striking commercial imagery. Product photography, corporate events, and architectural shoots — all crafted to communicate your brand's value at a glance.",
    heroImage:
      "https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1543707751-e3e5a9359e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1648917861061-5329e39b118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    includes: [
      "Pre-production planning and mood boarding",
      "Full-day shoot (up to 8 hours)",
      "Art direction and styling guidance",
      "Unlimited product or subject setups",
      "60+ fully retouched images",
      "Full commercial licensing",
      "RAW files available on request",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        body: "We analyse your brand, competitors, and target audience to build a creative brief that guarantees the imagery works as hard as your product.",
      },
      {
        step: "02",
        title: "Pre-production",
        body: "Shot lists, mood boards, prop sourcing, and location scouting — all handled before the shoot day so we hit the ground running.",
      },
      {
        step: "03",
        title: "Production",
        body: "A focused, efficient shoot day guided by the brief. We shoot for variety and always deliver more than the minimum.",
      },
      {
        step: "04",
        title: "Post & Delivery",
        body: "Full retouching, colour grading, and format optimisation for web, print, and social. Delivered via private gallery within 10 business days.",
      },
    ],
    startingPrice: "KES 75,000",
  },
  {
    slug: "event-photography",
    title: "Event Photography",
    tagline: "The energy of the room. Captured as it happens.",
    description:
      "Comprehensive event coverage from corporate galas to private celebrations. We capture the atmosphere, the detail, and the human moments that define your event.",
    heroImage:
      "https://images.unsplash.com/photo-1658063715878-bff71ed96a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1765350226723-a96ab0705403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1618239265038-9e4c865fbd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1636969386919-b90cad8216e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    includes: [
      "Coverage up to 6 hours (extensions available)",
      "Candid and directed coverage",
      "Speaker and panel photography",
      "200+ fully edited images",
      "Online gallery within 72 hours",
      "Social-ready web exports included",
      "Second shooter available for large events",
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        body: "We review your event programme, key moments, VIP guests, and brand requirements so we know exactly where to be and when.",
      },
      {
        step: "02",
        title: "Venue Walk",
        body: "Where possible we scout the venue in advance — understanding lighting conditions, key spaces, and logistics.",
      },
      {
        step: "03",
        title: "Coverage",
        body: "Unobtrusive, professional coverage throughout. We work around your event, not the other way around.",
      },
      {
        step: "04",
        title: "Fast Delivery",
        body: "Edited gallery delivered within 72 hours for social media use, with full-resolution files to follow within 7 days.",
      },
    ],
    startingPrice: "KES 45,000",
  },
  {
    slug: "fashion-photography",
    title: "Fashion Photography",
    tagline: "Where style meets storytelling.",
    description:
      "Editorial and commercial fashion photography with a luxury aesthetic. We bring vision, sophistication, and a deep understanding of light and form to every frame.",
    heroImage:
      "https://images.unsplash.com/photo-1717766293792-e78ea97e9d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1700150595270-499a1ce07804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1724866525512-5658ee2e2d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    includes: [
      "Half or full-day shoot options",
      "Studio or location (Kenya-wide)",
      "Creative direction and styling input",
      "Model coordination support",
      "40–80 fully retouched images",
      "Full editorial and commercial licensing",
      "Behind-the-scenes content available",
    ],
    process: [
      {
        step: "01",
        title: "Concept",
        body: "We develop the creative concept together — references, mood, colour palette, narrative — until the vision is crystal clear.",
      },
      {
        step: "02",
        title: "Casting & Prep",
        body: "Model selection, wardrobe review, hair and makeup coordination. We ensure every element is in place before the shoot day.",
      },
      {
        step: "03",
        title: "The Shoot",
        body: "A collaborative, energetic shoot day with clear creative direction and space for spontaneous moments that elevate the work.",
      },
      {
        step: "04",
        title: "Post-Production",
        body: "High-end retouching, colour grading, and file preparation for print, digital, or campaign use. Delivered within 14 days.",
      },
    ],
    startingPrice: "KES 65,000",
  },
  {
    slug: "lifestyle-photography",
    title: "Lifestyle Photography",
    tagline: "Authentic moments. Beautifully told.",
    description:
      "Genuine lifestyle imagery that tells your story. From family sessions to personal branding — we capture the real, unposed moments that matter most.",
    heroImage:
      "https://images.unsplash.com/photo-1724866525512-5658ee2e2d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1494782611507-95b6d139e677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1618239265038-9e4c865fbd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    includes: [
      "2–3 hour outdoor or home session",
      "Natural light and candid direction",
      "Up to 6 people (family or group)",
      "40+ fully edited images",
      "Private online gallery",
      "Print release included",
      "Wardrobe guidance provided",
    ],
    process: [
      {
        step: "01",
        title: "Conversation",
        body: "A relaxed chat about who you are, what you want to remember, and which locations or settings feel most like you.",
      },
      {
        step: "02",
        title: "Location Scout",
        body: "We suggest and visit locations that match your personality — whether that's Nairobi's streets, the hills, or your own home.",
      },
      {
        step: "03",
        title: "The Session",
        body: "We guide gently and photograph naturally. You will forget the camera is there — and that is exactly when the best images happen.",
      },
      {
        step: "04",
        title: "Delivery",
        body: "Your edited gallery arrives within 7 days. Every image is colour-graded to our warm, natural signature style.",
      },
    ],
    startingPrice: "KES 28,000",
  },
];

// Helper: get service by URL slug
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}
