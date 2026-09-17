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
    name: 'Muhammad Adnan',
    initials: 'MA',
    role: 'Visa Department',
    photo: '/adnan.jpeg',
    phoneDisplay: '0312 7092424',
    phoneIntl: '+923127092424',
    whatsapp: '923127092424',
  },
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

export const services: Service[] = [
  {
    icon: 'kaaba',
    title: 'Umrah Packages',
    desc: 'Economy to VIP Umrah packages with visa, flights, hotels near Haram and guided ziyarat.',
    href: '/umrah',
  },
  {
    icon: 'mosque',
    title: 'Hajj Packages',
    desc: 'Government-approved Hajj packages with complete guidance from application to return.',
    href: '/hajj',
  },
  {
    icon: 'plane',
    title: 'Air Ticketing',
    desc: 'Best fares on all major airlines for domestic and international destinations.',
    href: '/services#ticketing',
  },
  {
    icon: 'passport',
    title: 'Visa Services',
    desc: 'Visit, tourist and work visa processing for the GCC, Europe, UK, Turkey and more.',
    href: '/services#visa',
  },
  {
    icon: 'globe',
    title: 'Tour Packages',
    desc: 'Northern Pakistan tours and international holidays — Turkey, Dubai, Malaysia, Azerbaijan.',
    href: '/tours',
  },
  {
    icon: 'hotel',
    title: 'Hotel Booking',
    desc: 'Reserve hotels worldwide, including premium stays in Makkah and Madinah.',
    href: '/services#hotels',
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

export const hajjPackages: Package[] = [
  {
    name: 'Economy Hajj',
    duration: '35 – 40 Days',
    price: 'On Request',
    note: 'per person',
    features: [
      'Government-approved scheme guidance',
      'Return air ticket',
      'Sharing accommodation in Makkah & Madinah',
      'Aziziah / camp arrangements in Mina & Arafat',
      'Trained Hajj group leader',
    ],
  },
  {
    name: 'Deluxe Hajj',
    duration: '25 – 30 Days',
    price: 'On Request',
    note: 'per person',
    featured: true,
    features: [
      'Shorter, comfortable duration',
      'Return air ticket',
      'Hotels close to Haram',
      'Upgraded Mina tents (VIP camp)',
      'Full-board meals throughout',
      'Complete manasik training',
    ],
  },
];

export interface TourPackage {
  destination: string;
  region: 'Domestic' | 'International';
  duration: string;
  priceFrom: string;
  blurb: string;
}

export const tours: TourPackage[] = [
  {
    destination: 'Hunza & Skardu',
    region: 'Domestic',
    duration: '7 Days / 6 Nights',
    priceFrom: 'PKR 65,000',
    blurb: 'Attabad Lake, Khunjerab Pass, Deosai Plains and the mighty Karakoram.',
  },
  {
    destination: 'Naran & Kaghan',
    region: 'Domestic',
    duration: '4 Days / 3 Nights',
    priceFrom: 'PKR 32,000',
    blurb: 'Saif-ul-Malook Lake, Babusar Top and the green Kaghan valley.',
  },
  {
    destination: 'Swat & Kalam',
    region: 'Domestic',
    duration: '5 Days / 4 Nights',
    priceFrom: 'PKR 38,000',
    blurb: 'The Switzerland of the East — rivers, waterfalls and alpine meadows.',
  },
  {
    destination: 'Dubai & Abu Dhabi',
    region: 'International',
    duration: '5 Days / 4 Nights',
    priceFrom: 'PKR 185,000',
    blurb: 'City tours, desert safari, Burj Khalifa and theme-park add-ons.',
  },
  {
    destination: 'Turkey Highlights',
    region: 'International',
    duration: '8 Days / 7 Nights',
    priceFrom: 'PKR 320,000',
    blurb: 'Istanbul, Bursa, Cappadocia and Pamukkale with guided sightseeing.',
  },
  {
    destination: 'Baku, Azerbaijan',
    region: 'International',
    duration: '6 Days / 5 Nights',
    priceFrom: 'PKR 235,000',
    blurb: 'Old City, Gabala mountains and the Caspian coast.',
  },
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
      'Booked our Hunza tour with Pakzameen. Everything from transport to hotels was smooth. Highly recommended!',
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
