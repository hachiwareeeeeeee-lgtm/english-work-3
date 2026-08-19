export interface Question {
  text: string;
  options: string[];
  correctIndex: number;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface Biome {
  id: string;
  name: string;
  emoji: string;
  photo: string;
  photoCredit: string;
  intro: string;
  questions: Question[];
}

/**
 * Five biomes, two real "tiny creatures" facts each. Background photos
 * are free-to-use Pexels stock photography (see photoCredit on each).
 */
export const biomes: Biome[] = [
  {
    id: "rainforest",
    name: "Rainforest",
    emoji: "🌴",
    photo:
      "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=1600",
    photoCredit: "Photo: David Riaño / Pexels",
    intro:
      "You push through the giant leaves of the Amazon rainforest. The air is thick and humid, and something is moving on the trunk right next to you.",
    questions: [
      {
        text: "How many times its own body weight can a leafcutter ant carry?",
        options: ["Double", "10 times", "50 times", "200 times"],
        correctIndex: 2,
        feedbackCorrect:
          "Correct! A leafcutter ant can carry up to 50 times its own body weight — imagine lifting a car with one hand.",
        feedbackIncorrect:
          "The right answer was 50 times its own body weight — imagine lifting a car with one hand.",
      },
      {
        text: "Which body part do butterflies use to \u2018taste\u2019 their food?",
        options: ["Their tongue", "Their antennae", "Their feet", "Their eyes"],
        correctIndex: 2,
        feedbackCorrect:
          "Exactly! Butterflies have taste receptors on their feet — the moment they land on a fruit, they already know if they like it.",
        feedbackIncorrect:
          "The right answer was their feet. Butterflies have taste receptors there, so they know if they like a fruit the moment they land on it.",
      },
    ],
  },
  {
    id: "coral-reef",
    name: "Coral Reef",
    emoji: "🐠",
    photo:
      "https://images.pexels.com/photos/3100361/pexels-photo-3100361.jpeg?auto=compress&cs=tinysrgb&w=1600",
    photoCredit: "Photo: Francesco Ungaro / Pexels",
    intro:
      "You dive into a coral reef bursting with color. What looks like a giant rock is actually alive.",
    questions: [
      {
        text: "What is coral actually made of?",
        options: ["A rock", "A plant", "Thousands of tiny animals", "A type of algae"],
        correctIndex: 2,
        feedbackCorrect:
          "Correct! Coral is a colony made of thousands of tiny animals called polyps, all living together as one structure.",
        feedbackIncorrect:
          "The right answer was thousands of tiny animals. Coral is a colony of tiny animals called polyps.",
      },
      {
        text: "How much of the oxygen we breathe is estimated to come from ocean plankton?",
        options: ["Almost none", "About 10%", "More than half", "100%"],
        correctIndex: 2,
        feedbackCorrect:
          "That's right! Microscopic phytoplankton is estimated to produce more than half of the oxygen in the air we breathe.",
        feedbackIncorrect:
          "The right answer was more than half. Microscopic phytoplankton produces an enormous share of the planet's oxygen.",
      },
    ],
  },
  {
    id: "desert",
    name: "Desert",
    emoji: "🏜️",
    photo:
      "https://images.pexels.com/photos/18672830/pexels-photo-18672830.jpeg?auto=compress&cs=tinysrgb&w=1600",
    photoCredit: "Photo: Mo Eid / Pexels",
    intro:
      "The sun beats down and sand stretches to the horizon. But the desert is full of tiny life that knows exactly how to survive.",
    questions: [
      {
        text: "How does a Namib Desert beetle get its water?",
        options: [
          "It doesn't need water",
          "It collects fog on its own shell",
          "It drinks from hidden puddles",
          "It gets it from plants",
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Nice! This beetle stands on its head on the dunes at dawn and lets fog droplets collect on its shell, then trickle down to its mouth.",
        feedbackIncorrect:
          "The right answer was that it collects fog on its own shell — standing on its head at dawn until the droplets trickle to its mouth.",
      },
      {
        text: "What's special about Saharan silver ants?",
        options: [
          "They're the largest ants in the world",
          "They're the slowest",
          "They're among the fastest land animals for their size",
          "They live underwater",
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Correct! They can sprint over 100 times their own body length per second to escape the scorching desert heat.",
        feedbackIncorrect:
          "The right answer was that they're among the fastest land animals for their size — they sprint to escape the scorching heat.",
      },
    ],
  },
  {
    id: "grassland",
    name: "Grassland",
    emoji: "🌾",
    photo:
      "https://images.pexels.com/photos/30109534/pexels-photo-30109534.jpeg?auto=compress&cs=tinysrgb&w=1600",
    photoCredit: "Photo: Pexels",
    intro:
      "You walk through tall grass and wildflowers. There's a buzzing sound — a lot is happening between the plants.",
    questions: [
      {
        text: "How does a bee tell other bees where to find nectar?",
        options: [
          "With a high-pitched call",
          "With a kind of dance",
          "By leaving a scent trail in the air",
          "They don't communicate",
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Exactly! It's the famous 'waggle dance': moving in a figure eight, a bee shows the others the direction and distance to the flowers.",
        feedbackIncorrect:
          "The right answer was a kind of dance — the 'waggle dance,' which shows direction and distance to the flowers.",
      },
      {
        text: "How do crickets \u2018hear\u2019?",
        options: [
          "With ears on their head",
          "They can't hear",
          "With an organ on their front legs",
          "With their antennae",
        ],
        correctIndex: 2,
        feedbackCorrect:
          "That's right! Crickets have a hearing organ on their front legs, not on their head.",
        feedbackIncorrect:
          "The right answer was an organ on their front legs — crickets don't have ears on their head.",
      },
    ],
  },
  {
    id: "forest-floor",
    name: "Forest Floor",
    emoji: "🍄",
    photo:
      "https://images.pexels.com/photos/19044775/pexels-photo-19044775.jpeg?auto=compress&cs=tinysrgb&w=1600",
    photoCredit: "Photo: Peter Holmboe / Pexels",
    intro:
      "You crouch down among the moss and fallen leaves. Down here, in a tiny world, incredible things are happening.",
    questions: [
      {
        text: "How does an earthworm breathe without lungs?",
        options: ["It doesn't breathe", "Through its skin", "With gills", "With one tiny lung"],
        correctIndex: 1,
        feedbackCorrect:
          "Correct! Earthworms breathe through their skin, which is why it always needs to stay moist.",
        feedbackIncorrect:
          "The right answer was through its skin — that's why an earthworm's skin always needs to stay moist.",
      },
      {
        text: "Despite the name, why does a centipede almost never have exactly 100 legs?",
        options: [
          "It always has fewer than 10",
          "It always has an even number of leg pairs",
          "It always has an odd number of leg pairs",
          "It keeps losing legs",
        ],
        correctIndex: 2,
        feedbackCorrect:
          "That's right! Centipede species always have an odd number of leg pairs, so the count never lands on exactly 100 — they can have anywhere from 30 to over 300.",
        feedbackIncorrect:
          "The right answer was an odd number of leg pairs — that's why the total never lands on exactly 100.",
      },
    ],
  },
];
