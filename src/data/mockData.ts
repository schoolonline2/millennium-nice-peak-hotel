export const hotelImages = {
  exteriorDay: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  exteriorNight: "https://images.unsplash.com/photo-1551882547-ff40c0d5c9f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  luxuryRoom: "https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  executiveSuite: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  reception: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  pool: "https://images.unsplash.com/photo-1576013551627-c02f54a4a804?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  eventHall: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  rooftop: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  deluxeBed: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};

export const rooms = [
  {
    id: "deluxe-room-1",
    roomNumber: "001",
    name: "Deluxe Room",
    description: "An elegant space designed for absolute comfort, featuring modern amenities and tasteful decor.",
    price: 45000,
    capacity: 2,
    size: "35 sq m",
    bed: "King Size",
    rating: 4.8,
    image: hotelImages.luxuryRoom,
    gallery: [hotelImages.luxuryRoom, hotelImages.deluxeBed, hotelImages.executiveSuite],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom"]
  },
  {
    id: "executive-room-1",
    roomNumber: "002",
    name: "Executive Room",
    description: "Elevate your stay with our Executive Room, offering panoramic views, premium furnishings, and extended workspace.",
    price: 65000,
    capacity: 2,
    size: "45 sq m",
    bed: "King Size",
    rating: 4.9,
    image: hotelImages.executiveSuite,
    gallery: [hotelImages.executiveSuite, hotelImages.deluxeBed, hotelImages.pool],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom", "Workspace", "Coffee Maker"]
  },
  {
    id: "family-suite-1",
    roomNumber: "003",
    name: "Family Suite",
    description: "Spacious and accommodating, perfect for families seeking a comfortable and luxurious shared environment.",
    price: 95000,
    capacity: 4,
    size: "65 sq m",
    bed: "2 Queen Size",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gallery: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", hotelImages.pool, hotelImages.restaurant],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom", "Lounge Area", "Kids Welcome"]
  },
  {
    id: "presidential-suite",
    roomNumber: "004",
    name: "Presidential Suite",
    description: "The pinnacle of luxury in Ilorin. Unrivaled space, exclusive amenities, and breathtaking views for the discerning traveler.",
    price: 250000,
    capacity: 2,
    size: "120 sq m",
    bed: "Super King Size",
    rating: 5.0,
    image: hotelImages.exteriorNight,
    gallery: [hotelImages.exteriorNight, hotelImages.executiveSuite, hotelImages.rooftop],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "24/7 Butler", "Premium Bar", "Safe", "Jacuzzi", "Private Balcony", "Dining Area", "Living Room"]
  },
  {
    id: "standard-room-1",
    roomNumber: "005",
    name: "Standard Room",
    description: "A cozy and comfortable room perfect for short stays, featuring essential amenities and a relaxing atmosphere.",
    price: 35000,
    capacity: 2,
    size: "25 sq m",
    bed: "Queen Size",
    rating: 4.5,
    image: hotelImages.luxuryRoom,
    gallery: [hotelImages.luxuryRoom, hotelImages.deluxeBed],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "En-suite Bathroom"]
  },
  {
    id: "standard-room-2",
    roomNumber: "006",
    name: "Standard Room",
    description: "A cozy and comfortable room perfect for short stays, featuring essential amenities and a relaxing atmosphere.",
    price: 35000,
    capacity: 2,
    size: "25 sq m",
    bed: "Queen Size",
    rating: 4.5,
    image: hotelImages.exteriorDay,
    gallery: [hotelImages.exteriorDay, hotelImages.luxuryRoom],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "En-suite Bathroom"]
  },
  {
    id: "deluxe-room-2",
    roomNumber: "007",
    name: "Deluxe Twin Room",
    description: "Ideal for friends or colleagues sharing a room, featuring two comfortable single beds and modern amenities.",
    price: 45000,
    capacity: 2,
    size: "35 sq m",
    bed: "2 Single Beds",
    rating: 4.6,
    image: hotelImages.luxuryRoom,
    gallery: [hotelImages.luxuryRoom, hotelImages.deluxeBed],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom"]
  },
  {
    id: "deluxe-room-3",
    roomNumber: "008",
    name: "Deluxe Room with View",
    description: "Enjoy stunning views of the city from this elegant space designed for absolute comfort and relaxation.",
    price: 50000,
    capacity: 2,
    size: "35 sq m",
    bed: "King Size",
    rating: 4.8,
    image: hotelImages.rooftop,
    gallery: [hotelImages.rooftop, hotelImages.luxuryRoom],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom", "City View"]
  },
  {
    id: "executive-room-2",
    roomNumber: "009",
    name: "Executive Twin Room",
    description: "Elevate your stay with our Executive Twin Room, offering premium furnishings, extended workspace, and two comfortable beds.",
    price: 65000,
    capacity: 2,
    size: "45 sq m",
    bed: "2 Single Beds",
    rating: 4.8,
    image: hotelImages.executiveSuite,
    gallery: [hotelImages.executiveSuite, hotelImages.pool],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom", "Workspace"]
  },
  {
    id: "executive-room-3",
    roomNumber: "010",
    name: "Executive Suite Plus",
    description: "An upgraded Executive Suite offering even more space, a separate lounge area, and premium amenities.",
    price: 75000,
    capacity: 2,
    size: "55 sq m",
    bed: "King Size",
    rating: 4.9,
    image: hotelImages.executiveSuite,
    gallery: [hotelImages.executiveSuite, hotelImages.deluxeBed],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom", "Lounge Area", "Coffee Maker"]
  },
  {
    id: "family-suite-2",
    roomNumber: "011",
    name: "Connecting Family Room",
    description: "Two connecting rooms providing privacy for parents and space for children, perfect for larger families.",
    price: 85000,
    capacity: 5,
    size: "70 sq m",
    bed: "1 King & 2 Single Beds",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gallery: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", hotelImages.pool],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "2 En-suite Bathrooms", "Connecting Doors"]
  },
  {
    id: "penthouse-suite",
    roomNumber: "012",
    name: "Penthouse Suite",
    description: "Experience ultimate luxury at the top. The Penthouse Suite offers breathtaking panoramic views and exclusive services.",
    price: 300000,
    capacity: 2,
    size: "150 sq m",
    bed: "Super King Size",
    rating: 5.0,
    image: hotelImages.rooftop,
    gallery: [hotelImages.rooftop, hotelImages.executiveSuite],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "24/7 Butler", "Premium Bar", "Safe", "Jacuzzi", "Private Terrace", "Dining Area"]
  },
  {
    id: "honeymoon-suite",
    roomNumber: "013",
    name: "Honeymoon Suite",
    description: "A romantic retreat designed for newlyweds, featuring elegant decor, a complimentary bottle of wine, and late checkout.",
    price: 120000,
    capacity: 2,
    size: "60 sq m",
    bed: "Super King Size",
    rating: 4.9,
    image: hotelImages.deluxeBed,
    gallery: [hotelImages.deluxeBed, hotelImages.luxuryRoom],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Safe", "En-suite Bathroom", "Complimentary Wine", "Romantic Setup"]
  },
  {
    id: "royal-suite",
    roomNumber: "014",
    name: "Royal Suite",
    description: "Fit for royalty. This expansive suite offers classical elegance combined with modern luxury and top-tier services.",
    price: 200000,
    capacity: 2,
    size: "100 sq m",
    bed: "Super King Size",
    rating: 5.0,
    image: hotelImages.exteriorNight,
    gallery: [hotelImages.exteriorNight, hotelImages.executiveSuite],
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Dedicated Staff", "Lounge", "Safe", "Deep Soaking Tub", "Dining Area"]
  }
];

export const halls = [
  {
    id: "wedding-hall",
    name: "Grand Ballroom",
    capacity: "500 - 800",
    price: "From ₦850,000",
    image: hotelImages.eventHall,
    description: "Our crown jewel event space, perfect for lavish weddings and grand galas."
  },
  {
    id: "conference-hall",
    name: "Executive Conference Centre",
    capacity: "50 - 150",
    price: "From ₦250,000",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "State-of-the-art facilities for corporate meetings, seminars, and workshops."
  },
  {
    id: "banquet-hall",
    name: "Premium Banquet Hall",
    capacity: "200 - 350",
    price: "From ₦450,000",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "An elegant setting for birthday parties, anniversaries, and mid-sized receptions."
  }
];

export const faqs = [
  {
    question: "How do I book a room?",
    answer: "You can book directly through our website using the 'Book Now' button, contact us via WhatsApp, or call our reservations desk directly."
  },
  {
    question: "Do you accept online payment?",
    answer: "Yes, we accept secure online payments via major credit and debit cards, as well as bank transfers."
  },
  {
    question: "Is breakfast included?",
    answer: "Complimentary breakfast is included with all Executive and Presidential Suite bookings. It can be added to other room types for a small fee."
  },
  {
    question: "Do you host events?",
    answer: "Yes! We have a Grand Ballroom, a Conference Centre, and a Banquet Hall to accommodate weddings, corporate meetings, and private parties."
  },
  {
    question: "Is there airport pickup?",
    answer: "We offer complimentary airport pickup for guests staying in our Presidential Suite, and paid shuttle services for all other guests."
  },
  {
    question: "What time is check-in/check-out?",
    answer: "Check-in begins at 2:00 PM, and check-out is by 12:00 PM (noon). Late check-out may be available upon request, subject to availability."
  }
];
