import { CardType } from "./Card";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";
import image17 from "./images/17.jpg";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";
import image20 from "./images/20.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

const topics = [
  {
    title: "Mountain Adventure",
    text: "Discover the breathtaking views from the summit of Mount Everest, where every step brings you closer to touching the sky.",
  },
  {
    title: "Ocean Exploration",
    text: "Dive into the mysterious depths of the Pacific Ocean, where bioluminescent creatures create nature's own light show.",
  },
  {
    title: "Urban Photography",
    text: "Capture the essence of city life through the lens, where every street corner tells a unique story of human experience.",
  },
  {
    title: "Desert Journey",
    text: "Experience the golden silence of the Sahara, where endless dunes shape-shift with the whispers of the wind.",
  },
  {
    title: "Forest Tales",
    text: "Walk through ancient redwood forests, where centuries-old trees stand as silent guardians of countless natural mysteries.",
  },
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function getDummyCard(seed: number): CardType {
  // Use the seed to generate consistent random numbers
  const imageIndex = Math.floor(seededRandom(seed) * images.length);
  const topicIndex = Math.floor(seededRandom(seed + 1) * topics.length);

  return {
    id: seed.toString(),
    title: topics[topicIndex].title,
    text: topics[topicIndex].text,
    imageSrc: images[imageIndex].src,
  };
}

// Generate initial cards with sequential seeds
export const defaultCards: CardType[] = [
  getDummyCard(1),
  getDummyCard(2),
  getDummyCard(3),
];
