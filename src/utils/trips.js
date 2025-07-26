// mock trip data for testing
import bali from "../assets/bali.jpg";
import newyork from "../assets/newyork.jpg";
import tokyo from "../assets/tokyo.jpg";
import sydney from "../assets/sydney.jpg";
import london from "../assets/london.jpg";
import paris from "../assets/paris.jpg";
import dubai from "../assets/dubai.jpg";
import rome from "../assets/rome.jpg";

export const mockTrips = [

  {
    "id": 1,
    "destination": "Bali, Indonesia",
    "image": bali,
    "price": "800",
    "duration": "7 days",
    "rating": "4.8",
    "images": ["image1.jpg", "image2.jpg"],
    "itinerary": [
      "Day 1: Arrival in Bali",
      "Day 2: Visit to Uluwatu Temple",
      "Day 3: Snorkeling at Nusa Dua",
      "Day 4: Local market tour",
      "Day 5-7: Relax at beach resort"
    ]
  },
  {
    "id": 2,
    "destination": "Tokyo, Japan",
    "image": tokyo,
    "price": "1200",
    "duration": "5 days",
    "rating": "4.7",
    "itinerary": [
      "Day 1: Arrival in Tokyo",
      "Day 2: Tour of Kinkaku-ji Temple",
      "Day 3: Cherry blossom viewing",
      "Day 4: Local food experience",
      "Day 5: Departure"
    ]
  },
    {
        "id": 3,
        "destination": "Paris, France",
        "image": paris,
        "price": "1500",
        "duration": "6 days",
        "rating": "4.9",
        "itinerary": [
        "Day 1: Arrival in Paris",
        "Day 2: Visit to Eiffel Tower",
        "Day 3: Louvre Museum tour",
        "Day 4: Seine River cruise",
        "Day 5-6: Explore Montmartre and local cuisine"
        ]
    },
    {
        "id": 4,
        "destination": "New York, USA",
        "image": newyork,
        "price": "1000",
        "duration": "4 days",
        "rating": "4.6",
        "itinerary": [
            "Day 1: Arrival in New York",
            "Day 2: Statue of Liberty tour",
            "Day 3: Broadway show experience",
            "Day 4: Central Park exploration"
        ]
    },
    {
        "id": 5,
        "destination": "Sydney, Australia",
        "image": sydney,
        "price": "1300",
        "duration": "5 days",
        "rating": "4.8",
        "itinerary": [
            "Day 1: Arrival in Sydney",
            "Day 2: Sydney Opera House tour",
            "Day 3: Bondi Beach relaxation",
            "Day 4: Blue Mountains day trip",
            "Day 5: Departure"
        ]
    },
    {
        "id": 6,
        "destination": "London, UK",
        "image": london,
        "price": "1100",
        "duration": "5 days",
        "rating": "4.7",
        "itinerary": [
            "Day 1: Arrival in London",
            "Day 2: Buckingham Palace visit",
            "Day 3: British Museum tour",
            "Day 4: Thames River cruise",
            "Day 5: Explore Camden Market"
        ]
    },
    {
        "id": 7,
        "destination": "Dubai, UAE",
        "image": dubai,
        "price": "1400",
        "duration": "6 days",
        "rating": "4.9",
        "itinerary": [
            "Day 1: Arrival in Dubai",
            "Day 2: Burj Khalifa visit",
            "Day 3: Desert safari experience",
            "Day 4: Shopping at Dubai Mall",
            "Day 5-6: Relax at beach resort"
        ]
    },
    {
        "id": 8,
        "destination": "Rome, Italy",
        "image": rome,
        "price": "1600",
        "duration": "6 days",
        "rating": "4.9",
        "itinerary": [
            "Day 1: Arrival in Rome",
            "Day 2: Colosseum tour",
            "Day 3: Vatican City visit",
            "Day 4: Local cuisine experience",
            "Day 5-6: Explore ancient ruins and local markets"
        ]
    }
];
