/**
 * Content data for Pakzameen Travels and Tours.
 * Prices, durations and inclusions are PLACEHOLDERS — update with real offers.
 */

export interface Service {
  icon: string; // inline SVG path data or key handled by Icon component
  title: string;
  desc: string;
  href: string;
}

export const services: Service[] = [
  {
    icon: 'kaaba',
    title: 'Umrah Services',
    desc: 'Economy to VIP Umrah packages with visa, flights, hotels near Haram and guided ziyarat.',
    href: '/umrah',
  },
  {
    icon: 'plane',
    title: 'Airline Tickets',
    desc: 'Best fares on all major airlines for international destinations worldwide.',
    href: '/services#ticketing',
  },
  {
    icon: 'passport',
    title: 'Visit Visa',
    desc: 'Visit and tourist visa processing for the UAE, Schengen, Thailand, Malaysia, Bahrain and more.',
    href: '/visa',
  },
  {
    icon: 'graduation',
    title: 'Study Visa',
    desc: 'Student visa guidance and processing — admissions support, documents and applications.',
    href: '/services#specialist',
  },
  {
    icon: 'globe',
    title: 'Tour Packages',
    desc: 'Memorable Azerbaijan tour packages — Baku, Gabala and the Caspian coast.',
    href: '/tours',
  },
  {
    icon: 'hotel',
    title: 'Hotel Booking',
    desc: 'Reserve hotels worldwide, including premium stays in Makkah and Madinah.',
    href: '/services#hotels',
  },
  {
    icon: 'shield',
    title: 'Travel Insurance',
    desc: 'Affordable travel insurance covering medical emergencies, delays and lost baggage.',
    href: '/services#insurance',
  },
  {
    icon: 'shieldcheck',
    title: 'E-Protector',
    desc: 'Fast E-Protector registration and processing for overseas Pakistani workers.',
    href: '/services#specialist',
  },
  {
    icon: 'medical',
    title: 'GAMCA Medical Token',
    desc: 'Quick, correct GAMCA (Gulf) medical slip and token booking for Gulf-bound employment.',
    href: '/services#specialist',
  },
  {
    icon: 'doc',
    title: 'Wakala Services',
    desc: 'Wakala (power of attorney) and agency services prepared and processed on your behalf.',
    href: '/services#specialist',
  },
  {
    icon: 'stamp',
    title: 'Documents Attestation',
    desc: 'Attestation of educational, personal and commercial documents for home and abroad.',
    href: '/services#specialist',
  },
];

// Specialist & document services shown in a dedicated grid on the Services page.
export const specialistServices: Service[] = [
  {
    icon: 'graduation',
    title: 'Study Visa',
    desc: 'End-to-end student visa support — choosing a country, admission guidance, documentation and a complete, correct application.',
    href: '#specialist',
  },
  {
    icon: 'shieldcheck',
    title: 'E-Protector',
    desc: 'Hassle-free E-Protector (Protector of Emigrants) registration and processing for overseas Pakistani workers.',
    href: '#specialist',
  },
  {
    icon: 'medical',
    title: 'GAMCA Medical Token',
    desc: 'We book your GAMCA / Gulf medical appointment slip and token quickly and correctly for Gulf-bound employment.',
    href: '#specialist',
  },
  {
    icon: 'doc',
    title: 'Wakala Services',
    desc: 'Preparation and processing of Wakala (power of attorney) and agency documents on your behalf.',
    href: '#specialist',
  },
  {
    icon: 'stamp',
    title: 'Documents Attestation',
    desc: 'Attestation of educational, personal and commercial documents for use within Pakistan and abroad.',
    href: '#specialist',
  },
];

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  photo?: string; // path in /public; falls back to initials monogram if empty
  phoneDisplay: string;
  phoneIntl: string; // for tel: links
  whatsapp: string; // digits only, for wa.me links
}

export const team: TeamMember[] = [
  {
    name: 'Muhammad Zeeshan',
    initials: 'MZ',
    role: 'Ticketing Department',
    photo: '/zeeshan.jpeg',
    phoneDisplay: '0306 0918868',
    phoneIntl: '+923060918868',
    whatsapp: '923060918868',
  },
  {
    name: 'Zuhaib Hassan',
    initials: 'ZH',
    role: 'Sales',
    photo: '/zohaib.jpeg',
    phoneDisplay: '0306 7022095',
    phoneIntl: '+923067022095',
    whatsapp: '923067022095',
  },
];

export interface Leader {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  facts: { icon: string; text: string }[];
  email?: string;
  phoneDisplay?: string;
  phoneIntl?: string;
  whatsapp?: string;
}

export const leadership: Leader[] = [
  {
    name: 'Muhammad Adnan',
    role: 'Chief Executive Officer',
    photo: '/adnan.jpeg',
    bio: [
      'Muhammad Adnan is the Chief Executive Officer of Pakzameen Travels and Tours. He drives the company’s vision and day-to-day operations, bringing years of hands-on experience across visa processing, ticketing and international travel.',
      'A specialist in visa and documentation, Adnan has guided countless clients through smooth applications for destinations across the GCC, Europe and Asia. He is known for his attention to detail, honest advice and a commitment to getting every traveller to their destination with confidence.',
    ],
    facts: [
      { icon: 'star', text: 'Chief Executive Officer' },
      { icon: 'passport', text: 'Visa & documentation specialist' },
      { icon: 'pin', text: 'Based in Sargodha, Pakistan' },
    ],
    email: 'adnan@pakzameentravels.com',
    phoneDisplay: '0312 7092424',
    phoneIntl: '+923127092424',
    whatsapp: '923127092424',
  },
  {
    name: 'Muhammad Owais',
    role: 'Managing Director',
    photo: '/owais.jpeg',
    bio: [
      'Muhammad Owais leads Pakzameen Travels and Tours as Managing Director. A passionate traveller who has explored 10+ countries, he is dedicated to making every journey — from Umrah to international tours — simple, affordable and reliable.',
    ],
    facts: [
      { icon: 'star', text: 'Managing Director & travel specialist' },
      { icon: 'plane', text: 'Passionate traveller — visited 10+ countries' },
      { icon: 'pin', text: 'Based in Sargodha, Pakistan' },
    ],
    email: 'owais@pakzameentravels.com',
  },
];

export interface Package {
  name: string;
  duration: string;
  price: string;
  note?: string;
  featured?: boolean;
  features: string[];
}

export const umrahPackages: Package[] = [
  {
    name: 'Economy Umrah',
    duration: '14 Nights',
    price: 'PKR 285,000',
    note: 'per person (sharing)',
    features: [
      'Umrah visa processing',
      'Return air ticket',
      '3★ hotels — walking distance',
      'Ground transport (airport & ziyarat)',
      'Group ziyarat in Makkah & Madinah',
    ],
  },
  {
    name: 'Standard Umrah',
    duration: '14 Nights',
    price: 'PKR 385,000',
    note: 'per person (sharing)',
    featured: true,
    features: [
      'Umrah visa processing',
      'Return air ticket',
      '4★ hotels — close to Haram',
      'Private A/C transport',
      'Guided ziyarat & full support',
      'Zam Zam water included',
    ],
  },
  {
    name: 'VIP Umrah',
    duration: '10 Nights',
    price: 'PKR 585,000',
    note: 'per person (sharing)',
    features: [
      'Fast-track Umrah visa',
      'Premium airline ticket',
      '5★ hotels facing Haram',
      'Private luxury transport',
      'Dedicated group leader (mualim)',
      'Full-board meals',
    ],
  },
];

export interface TourPackage {
  destination: string;
  duration: string;
  priceFrom: string;
  blurb: string;
}

// Pakzameen tour packages — Azerbaijan only.
export const tours: TourPackage[] = [
  {
    destination: 'Baku Explorer',
    duration: '5 Days / 4 Nights',
    priceFrom: 'PKR 235,000',
    blurb: 'Old City, Flame Towers, Heydar Aliyev Center and a walk along the Caspian sea-front.',
  },
  {
    destination: 'Baku & Gabala',
    duration: '7 Days / 6 Nights',
    priceFrom: 'PKR 310,000',
    blurb: 'Baku highlights plus the Gabala mountains, cable car, waterfalls and alpine scenery.',
  },
  {
    destination: 'Azerbaijan Deluxe',
    duration: '8 Days / 7 Nights',
    priceFrom: 'PKR 420,000',
    blurb: 'Baku, Gabala and Shahdag with premium hotels, private transfers and guided sightseeing.',
  },
];

export interface VisaCountry {
  country: string;
  flag: string;
  type: string;
}

export const visaCountries: VisaCountry[] = [
  { country: 'UAE — Dubai & Abu Dhabi', flag: '🇦🇪', type: 'Visit / Tourist Visa' },
  { country: 'Saudi Arabia', flag: '🇸🇦', type: 'Umrah / Visit Visa' },
  { country: 'Qatar', flag: '🇶🇦', type: 'Tourist Visa' },
  { country: 'Bahrain', flag: '🇧🇭', type: 'Visit / Tourist Visa' },
  { country: 'Oman', flag: '🇴🇲', type: 'Tourist Visa' },
  { country: 'Thailand', flag: '🇹🇭', type: 'Tourist Visa' },
  { country: 'Malaysia', flag: '🇲🇾', type: 'Tourist Visa' },
  { country: 'Singapore', flag: '🇸🇬', type: 'Tourist Visa' },
  { country: 'Schengen (Europe)', flag: '🇪🇺', type: 'Tourist / Visit Visa' },
  { country: 'Turkey', flag: '🇹🇷', type: 'Tourist / e-Visa' },
  { country: 'Azerbaijan', flag: '🇦🇿', type: 'Tourist / e-Visa' },
  { country: 'United Kingdom', flag: '🇬🇧', type: 'Visit Visa' },
  { country: 'China', flag: '🇨🇳', type: 'Tourist / Business Visa' },
  { country: 'Indonesia', flag: '🇮🇩', type: 'Tourist Visa' },
];

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const whyUs: Feature[] = [
  {
    icon: 'shield',
    title: 'Trusted & Transparent',
    desc: 'Clear pricing, honest advice and no hidden charges — the way pilgrims and travellers deserve.',
  },
  {
    icon: 'star',
    title: 'Years of Experience',
    desc: 'A dedicated Sargodha team that has served thousands of happy travellers and pilgrims.',
  },
  {
    icon: 'headset',
    title: '24/7 Support',
    desc: 'Real people on WhatsApp and phone before, during and after your journey.',
  },
  {
    icon: 'wallet',
    title: 'Best Value',
    desc: 'Competitive fares and package deals negotiated with airlines and hotels on your behalf.',
  },
];

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Muhammad Asif',
    location: 'Sargodha',
    quote:
      'Alhamdulillah, our family Umrah was perfectly arranged. Hotels were close to Haram and the team guided us at every step.',
  },
  {
    name: 'Ayesha Khan',
    location: 'Faisalabad',
    quote:
      'Booked our Azerbaijan tour with Pakzameen. Everything from visa to hotels and transport was smooth. Highly recommended!',
  },
  {
    name: 'Bilal Ahmed',
    location: 'Lahore',
    quote:
      'Got my Dubai visa and tickets at a great price. Very responsive on WhatsApp and completely reliable.',
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'How do I book a package?',
    a: 'Simply call or WhatsApp us with your preferred package and dates. We will confirm availability, share the requirements and guide you through payment and documents.',
  },
  {
    q: 'What documents do I need for Umrah?',
    a: 'A passport valid for at least 6 months, passport-size photographs, CNIC and a vaccination certificate. Our team handles the visa processing for you.',
  },
  {
    q: 'Can packages be customised?',
    a: 'Absolutely. We tailor hotels, duration, airlines and transport to your budget and family size. Tell us what you need and we will build a package around it.',
  },
  {
    q: 'Do you arrange group and family bookings?',
    a: 'Yes. We regularly arrange group Umrah, family tours and corporate travel with special group rates.',
  },
];
