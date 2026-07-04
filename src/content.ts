// Single source of truth for site copy. Edit here, components stay untouched.

export const SIGNUP_URL = "https://ville-signup.vercel.app/";
export const IG_URL = "https://instagram.com/_thevillag3";
export const CONTACT_EMAIL = "hello@thevillage.community"; // TODO: replace with real

export const brand = {
  // Wordmark in the UI = "villee" (matches signup page).
  // Voice/copy can call it "the village" colloquially.
  wordmark: "villee",
  nickname: "the village",
};

export const hero = {
  eyebrow: "founding members — now open",
  headline: ["a city.", "a chat.", "a card that gets you in."],
  sub: "the village is a community for young creatives and working people. real friendships, real perks at real places, real reasons to leave the house.",
  primaryCta: { label: "become a founding member", href: SIGNUP_URL },
  secondaryCta: { label: "see what's on", href: "#events" },
  scribble: "↓ keep scrolling, it's a vibe",
};

// Blind8-style minimal landing. One screen, one message, one button.
export const landing = {
  navLinks: [
    { label: "what is this", href: "/about" },
    { label: "faq", href: "/faq" },
    {
      label: "partner with us",
      href: `mailto:${CONTACT_EMAIL}?subject=Villee%20partnership`,
    },
  ],
  rotatingWords: ["spontaneous", "welcoming", "real", "alive"],
  headline: { pre: "the most", post: "community in your city." },
  taglines: ["arrive as strangers.", "leave as the village."],
  body: "your journey starts with one rsvp: a bbq, a dinner, a run club — you and the people you've been meaning to meet. after that, the group chat is yours.",
  curated: "curated by real people. not an algorithm.",
  cheer: "cheers to leaving the house!",
  cta: { label: "become a founding member", href: SIGNUP_URL },
  secondary: { label: "already in the village? find us on instagram", href: IG_URL },
} as const;

export const marqueeWords = [
  "bbqs",
  "dinners",
  "perks",
  "real ones",
  "no clout",
  "showing up",
  "the group chat irl",
  "your city",
  "join the village",
];

export const pitch = {
  eyebrow: "what is this",
  title: "three things, no fluff.",
  cards: [
    {
      tag: "01",
      title: "perks",
      body: "we bring the group. you get the rate. food spots, gyms, studios and venues at a price you'd actually pay — booked per event for now, always-on card coming.",
      tint: "rust",
    },
    {
      tag: "02",
      title: "events",
      body: "bbqs, dinners, parties, run clubs, gallery nights. dropped in the chat. show up.",
      tint: "forest",
    },
    {
      tag: "03",
      title: "people",
      body: "a group chat that grew up. now it's looking for more of you.",
      tint: "plum",
    },
  ],
} as const;

export const perks = {
  eyebrow: "the perks",
  title: "group rates at the spots you'd actually go.",
  sub: "we book group bookings with venues across food, fitness, nightlife and experiences — you pay per event, at a price below what you'd pay walking in alone. the always-on member card is what we're building toward.",
  categories: [
    {
      label: "food + drink",
      sample: "the brunch spot you keep going back to",
      icon: "🍳",
    },
    {
      label: "fitness + wellness",
      sample: "studios, gyms, the spa day",
      icon: "🥊",
    },
    {
      label: "nightlife",
      sample: "the bar with the line + the venue with the line",
      icon: "🍷",
    },
    {
      label: "experiences",
      sample: "gallery nights, supper clubs, day trips",
      icon: "🎟",
    },
  ],
  partnerCta: {
    label: "run a business? partner with us",
    href: `mailto:${CONTACT_EMAIL}?subject=Villee%20partnership`,
  },
} as const;

export const events = {
  eyebrow: "what we've been up to",
  title: "the village, irl.",
  sub: "the first bbq was 40 people. the last one was 120. the next one is yours.",
  past: [
    {
      title: "summer bbq vol. 01",
      meta: "toronto",
      caption: "the first one — 40 of us, mostly strangers.",
      photo: "/collage/villee-01.jpg",
    },
    {
      title: "summer bbq vol. 02",
      meta: "toronto",
      caption: "back for more, plus everyone's friends.",
      photo: "/collage/villee-17.jpg",
    },
    {
      title: "summer bbq vol. 03",
      meta: "toronto",
      caption: "120 deep, one rooftop, zero strangers by sundown.",
      photo: "/collage/villee-28.jpg",
    },
  ],
  next: {
    label: "next event",
    title: "dropping in the chat soon.",
    cta: { label: "get on the list", href: SIGNUP_URL },
  },
} as const;

export const cities = {
  eyebrow: "the map",
  title: "starting in toronto.",
  sub: "the village starts where the chat already lives. tell us where to go next and we'll meet you there.",
  active: ["Toronto"],
  soon: [], // intentionally empty — growth comes from waitlist demand, not a roadmap
  waitlistLabel: "not in toronto?",
  waitlistCta: { label: "tell us where to go next", href: SIGNUP_URL },
} as const;

export const founders = {
  eyebrow: "why we started this",
  quote:
    "we kept saying 'we should do something' in the group chat. so we did. one bbq became a hundred-person dinner became a community that needed a name. that's all this is — a place for the people you actually want to spend a friday with.",
  signoff: "— the village, founding team",
} as const;

export const faq = {
  title: "questions, answered.",
  items: [
    {
      q: "what does it actually cost?",
      a: "no monthly fee right now — you pay per event. we negotiate group rates with the venues so the number is below walking-in price. the always-on monthly pass (think classpass, but for the whole city) is on the roadmap — founding members get first dibs when it lands.",
    },
    {
      q: "who's this for?",
      a: "young working people and creatives, 22–32-ish, who want a better social life than another doom-scroll on a sunday. open to all.",
    },
    {
      q: "how do the perks work?",
      a: "we run events at partner spots — restaurants, studios, bars, venues — and lock in a group rate. you see what's on, rsvp, pay the event price, show up. that's the model for now. the always-on member card is the goal once we hit enough partners.",
    },
    {
      q: "is this only in toronto?",
      a: "for now, yes — we're starting where the chat already is. if you're somewhere else, sign up anyway and tell us where to come next. the more of you ask, the sooner we land.",
    },
    {
      q: "do i have to come to events?",
      a: "nope. some people show up to everything, some just use the card and lurk the chat. both are valid.",
    },
    {
      q: "i run a business — can you bring my spot in?",
      a: "yes please. email hello@thevillage.community and we'll talk.",
    },
  ],
} as const;

export const footerCta = {
  bigText: "ready?",
  sub: "founding membership closes when we hit cap. it won't take long.",
  cta: { label: "become a founding member", href: SIGNUP_URL },
} as const;
