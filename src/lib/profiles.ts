export const REGISTER_URL = "https://adsblog.app/page/reg.php?reg=MrBusiness";

export const CONTACTS = {
  sms: "0743871339",
};

export type Profile = {
  name: string;
  emoji: string;
  img: number;
  rating: string;
  minutes: number;
  wants: string;
  tzs: number;
};

const raw: Array<[string, string, number, string, number, string]> = [
  ["Harper", "🎧", 20, "4.6", 34, "Casual Audio & Chat Practice"],
  ["William", "⚽", 3, "4.8", 55, "Sports & Football Chat"],
  ["Emily", "🏖️", 24, "4.8", 37, "Vacation & Beach Chat"],
  ["Ava", "☕", 12, "4.7", 33, "Friendly Daily Chat"],
  ["Scarlett", "🎬", 38, "5.0", 55, "Movies & Entertainment"],
  ["Olivia", "✈️", 4, "4.9", 38, "Learn Culture & Travel Tips"],
  ["Christopher", "🛠️", 15, "4.8", 56, "Engineering & Construction"],
  ["Elizabeth", "📜", 26, "4.9", 46, "Swahili History & Stories"],
  ["Joshua", "📖", 25, "4.7", 30, "Reading & Books in Swahili"],
  ["Mia", "🎵", 45, "4.9", 41, "Music & Afrobeats Talk"],
  ["Daniel", "💼", 33, "4.7", 48, "Business & Hustle Ideas"],
  ["Sophia", "🍲", 47, "4.8", 36, "Cooking & Swahili Food"],
  ["Benjamin", "📱", 11, "4.6", 52, "Tech & Smartphones"],
  ["Charlotte", "🌸", 9, "5.0", 44, "Beauty & Lifestyle"],
  ["Ethan", "🏋️", 13, "4.7", 39, "Fitness & Gym Talk"],
  ["Amelia", "📷", 49, "4.9", 50, "Photography & Travel"],
  ["Henry", "🎮", 14, "4.6", 31, "Gaming & Fun Chat"],
  ["Grace", "🙏", 5, "4.8", 43, "Faith & Encouragement"],
  ["Samuel", "🚗", 51, "4.7", 57, "Cars & Road Trips"],
  ["Chloe", "🐘", 27, "4.9", 35, "Wildlife & Safari Chat"],
  ["Jack", "🎣", 52, "4.6", 46, "Fishing & Coastal Life"],
  ["Ella", "📚", 21, "4.8", 40, "Study & Language Exchange"],
  ["Ryan", "🏀", 60, "4.7", 53, "Basketball & Sports",],
  ["Zoe", "🎨", 29, "5.0", 32, "Art & Creativity"],
  ["Lucas", "🌍", 56, "4.8", 49, "Culture & Geography"],
  ["Nora", "💃", 44, "4.9", 38, "Dance & Bongo Flava"],
  ["Owen", "🧑‍🌾", 57, "4.6", 45, "Farming & Agribusiness"],
  ["Lily", "🛍️", 32, "4.8", 34, "Shopping & Fashion"],
  ["Caleb", "✝️", 8, "4.7", 51, "Life Advice & Motivation"],
  ["Hannah", "🩺", 41, "4.9", 47, "Health & Wellness"],
  ["Isaac", "🎙️", 17, "4.7", 42, "Podcast & Storytelling"],
  ["Ruby", "🌦️", 30, "4.8", 33, "Daily Life & Weather Talk"],
  ["Leo", "🐾", 54, "4.6", 55, "Pets & Animals"],
  ["Aria", "☀️", 31, "5.0", 37, "Morning Motivation Chat"],
  ["Nathan", "🧮", 18, "4.7", 44, "Maths & Tutoring"],
  ["Stella", "🌙", 22, "4.9", 50, "Evening Relaxed Chat"],
];

export const PROFILES: Profile[] = raw.map(([name, emoji, img, rating, minutes, wants]) => ({
  name,
  emoji,
  img,
  rating,
  minutes,
  wants,
  tzs: Math.round((minutes * 950) / 500) * 500,
}));

export const usd = (tzs: number) => (tzs * 0.0004).toFixed(2);

export const fmt = (n: number) => n.toLocaleString("en-US");
