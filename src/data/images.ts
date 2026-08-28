/**
 * Stock image URLs (Unsplash CDN hotlinks) used across the site.
 * These load in the visitor's browser. Swap any URL for your own photo
 * (or a local file in /public) at any time — the layout stays the same.
 *
 * Every <Figure> falls back to a branded gradient if an image fails to load,
 * so the design never shows a broken box.
 */

const u = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`;

export const img = {
  // Faith / pilgrimage
  kaaba: u('1591604442649-6d2c8f8b3f5b'),
  makkahHaram: u('1519861531473-9200262188bf'),
  madinah: u('1564769662533-4f00a87b4056'),
  praying: u('1542816417-0983c9c9ad53'),

  // Flights / airport
  airplane: u('1436491865332-7a61a109cc05'),
  airport: u('1556388158-158ea5ccacbd'),

  // Northern Pakistan
  hunza: u('1589553416260-f586c8f1514f'),
  mountains: u('1626621341517-bbf3d9990a23'),
  lake: u('1464822759023-fed622ff2c3b'),

  // International
  dubai: u('1512453979798-5ea266f8880c'),
  istanbul: u('1541432901042-2d8bd64b4a9b'),
  baku: u('1601921004897-b7d1f0e0f0f8'),

  // People / support
  team: u('1521737604893-d14cc237f11d'),
  happyTravellers: u('1488646953014-85cb44e25828'),
};

/** Map a tour destination name to an image key. */
export const tourImage: Record<string, string> = {
  'Hunza & Skardu': img.hunza,
  'Naran & Kaghan': img.lake,
  'Swat & Kalam': img.mountains,
  'Dubai & Abu Dhabi': img.dubai,
  'Turkey Highlights': img.istanbul,
  'Baku, Azerbaijan': img.baku,
};
