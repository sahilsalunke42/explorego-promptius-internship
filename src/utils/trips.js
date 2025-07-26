// mock trip data for testing
import bali from "../assets/bali.jpg";
import bali2 from "../assets/bali2.jpg";
import bali3 from "../assets/bali3.jpg";
import newyork from "../assets/newyork.jpg";
import newyork2 from "../assets/newyork2.jpg";
import newyork3 from "../assets/newyork3.jpg";
import tokyo from "../assets/tokyo.jpg";
import tokyo2 from "../assets/tokyo2.jpg";
import tokyo3 from "../assets/tokyo3.jpg";
import sydney from "../assets/sydney.jpg";
import sydney2 from "../assets/sydney2.jpg";
import sydney3 from "../assets/sydney3.jpg";
import london from "../assets/london.jpg";
import london2 from "../assets/london2.jpg";
import london3 from "../assets/london3.jpg";
import paris from "../assets/paris.jpg";
import paris2 from "../assets/paris2.jpg";
import paris3 from "../assets/paris3.jpg";
import dubai from "../assets/dubai.jpg";
import dubai2 from "../assets/dubai2.jpg";
import dubai3 from "../assets/dubai3.jpg";
import rome from "../assets/rome.jpg";
import rome2 from "../assets/rome2.jpg";
import rome3 from "../assets/rome3.jpg";


export const mockTrips = [

  {
    "id": 1,
    "destination": "Bali, Indonesia",
    "image": bali,
    "description": "Experience the serene beaches and vibrant culture of Bali.",
    "price": "800",
    "duration": "7 days",
    "rating": "4.8",
    "images": [bali2, bali3],
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
    "description": "Explore the bustling streets and rich history of Tokyo.",
    "image": tokyo,
    "price": "1200",
    "duration": "5 days",
    "rating": "4.7",
    "images": [tokyo2, tokyo3],
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
        "description": "Discover the romantic city of Paris with its iconic landmarks.",
        "image": paris,
        "price": "1500",
        "duration": "6 days",
        "rating": "4.9",
        "images": [paris2, paris3],
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
        "description": "Experience the vibrant culture and iconic sights of New York City.",
        "image": newyork,
        "price": "1000",
        "duration": "4 days",
        "rating": "4.6",
        "images": [newyork2, newyork3],
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
        "description": "Enjoy the stunning beaches and vibrant culture of Sydney.",
        "price": "1300",
        "duration": "5 days",
        "rating": "4.8",
        "images": [sydney2, sydney3],
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
        "description": "Explore the historic and modern attractions of London.",    
        "image": london,
        "price": "1100",
        "duration": "5 days",
        "rating": "4.7",
        "images": [london2, london3],
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
        "description": "Experience the luxury and modernity of Dubai.",
        "image": dubai,
        "price": "1400",
        "duration": "6 days",
        "rating": "4.9",
        "images": [dubai2, dubai3],
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
        "description": "Discover the ancient ruins and rich history of Rome.",
        "image": rome,
        "price": "1600",
        "duration": "6 days",
        "rating": "4.9",
        "images": [rome2, rome3],
        "itinerary": [
            "Day 1: Arrival in Rome",
            "Day 2: Colosseum tour",
            "Day 3: Vatican City visit",
            "Day 4: Local cuisine experience",
            "Day 5-6: Explore ancient ruins and local markets"
        ]
    }
];
