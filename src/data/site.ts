/**
 * Central site configuration for Pakzameen Travels and Tours.
 * Edit values here and they update across the whole site.
 *
 * NOTE: Items marked `PLACEHOLDER` are best-guess defaults — replace them
 * with the real values (email, prices, package inclusions, socials).
 */

export const site = {
  name: 'Pakzameen Travels and Tours',
  shortName: 'Pakzameen',
  tagline: 'Your journey, our passion — Hajj, Umrah & tours made easy',
  category: 'Travel company',

  // Real contact details provided by the business.
  phoneDisplay: '0310 1113941',
  phoneIntl: '+923101113941',
  whatsappDisplay: '+92 310 1113941',
  whatsappNumber: '923101113941', // digits only, for wa.me links
  email: 'info@pakzameen.com', // PLACEHOLDER — replace with real email

  address: {
    line1: 'Mian Khan Road, Block 15',
    line2: 'Near Dr. Younas Clinic, Sargodha',
    city: 'Sargodha',
    region: 'Punjab',
    country: 'Pakistan',
    postal: '40100',
  },
  serviceArea: 'Sargodha, Punjab, Pakistan',

  // Business hours — PLACEHOLDER, adjust as needed.
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM',

  // Social links — PLACEHOLDER. Leave a value empty ('') to hide that icon.
  socials: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
  },
};

/** Pre-built links used across the site. */
export const links = {
  tel: `tel:${site.phoneIntl}`,
  whatsapp: (message = "Assalam-o-Alaikum! I'd like to enquire about your travel packages.") =>
    `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`,
  mailto: `mailto:${site.email}`,
  mapsQuery:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Pakzameen Travels and Tours, Mian Khan Road, Block 15, Sargodha, Pakistan'),
};
