import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Destination from './models/Destination.js';
import Package from './models/Package.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected for seeding'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });

// Mock data
const destinations = [
  {
    name: "Hampi",
    image: "https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg",
    price: 3999,
  },
  {
    name: "Goa",
    image:
      "https://www.shoreexcursionsgroup.com/img/tour/ASGOBEACHBEERTOUR-2.jpg",
    price: 4999,
  },
  {
    name: "Mysore",
    image: "https://www.bandipurnationalparkonline.in/images/mysore-palace.jpg",
    price: 3499,
  },
  {
    name: "Kerala",
    image: "https://viacation.com/wp-content/uploads/2024/12/Kerala.webp",
    price: 4999,
  },
  {
    name: "Kashmir",
    image:
      "https://cms-in.musafir.com/uploads/Kashmir_a_Land_of_Unimaginable_Beauty_4_01166904af.webp",
    price: 4999,
  },
  {
    name: "Rajasthan",
    image:
      "https://www.peakadventuretour.com/assets/imgs/rajasthan-tourism-01.webp",
    price: 4999,
  },
  {
    name: "Sikkim",
    image: "https://bodhi.travel/images/india-sikkim/india-gangtok.jpg",
    price: 4999,
  },
  {
    name: "Ladakh",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-lamayuru-or-yuru-monastery-kargil-j_k-city-hero?qlt=82&ts=1726667854003",
    price: 4999,
  },
  {
    name: "Manali",
    image:
      "https://clubmahindra.gumlet.io/blog/media/section_images/blog-topic-6530ecb63a76c89.jpg?w=376&dpr=2.6",
    price: 5999,
  },
  {
    name: "Darjeeling",
    image:
      "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Darjeeling-Travel-Guide-Cover-Photo-840x425.jpg",
    price: 5499,
  },
  {
    name: "Ooty",
    image:
      "https://www.clubmahindra.com/blog/media/section_images/ultimate-o-8ac88a2da056a3d.jpg",
    price: 4499,
  },
  {
    name: "Munnar",
    image:
      "https://content.r9cdn.net/rimg/dimg/a9/dd/d6b29241-city-44818-166a7453734.jpg?width=1200&height=630&xhint=1600&yhint=1049&crop=true",
    price: 3999,
  },
  {
    name: "Shimla",
    image:
      "https://ihplb.b-cdn.net/wp-content/uploads/2014/06/Best-Things-to-do-in-Shimla.jpg",
    price: 5499,
  },
  {
    name: "Varanasi",
    image:
      "https://clubmahindra.gumlet.io/blog/media/section_images/banner1920-58d4846d1e12499.webp?w=376&dpr=2.6",
    price: 3999,
  },
  {
    name: "Pondicherry",
    image: "https://blog.mangohillhotels.com/wp-content/uploads/2023/11/1.jpg",
    price: 4499,
  },
];

const packages = [
  {
    title: "Golden Temple Tour",
    description: "Experience the spiritual beauty of the Golden Temple in Amritsar. Visit the holiest shrine of Sikhism and enjoy the peaceful atmosphere.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/1920px-The_Golden_Temple_of_Amrithsar_7.jpg",
    price: 15000
  },
  {
    title: "Goa Beach Holiday",
    description: "Enjoy the sun, sand, and sea in Goa. Perfect for beach lovers and party enthusiasts.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    price: 20000
  },
  {
    title: "Kerala Backwaters",
    description: "Cruise through the serene backwaters of Kerala in a traditional houseboat. Experience the unique culture and cuisine.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    price: 25000
  },
  {
    title: "Kashmir Valley Tour",
    description: "Explore the paradise on earth with its beautiful valleys, lakes, and mountains.",
    image: "https://in.musafir.com/uploads/5_4_d115f28046.webp",
    price: 30000
  },
  {
    title: "Rajasthan Heritage Tour",
    description: "Discover the rich heritage and culture of Rajasthan through its magnificent palaces and forts.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1726660605161",
    price: 28000
  },
  {
    title: "Sikkim Adventure",
    description: "Embark on an exciting journey through the mystical landscapes of Sikkim, including visits to Gangtok, Tsomgo Lake, and Nathu La Pass.",
    image: "https://www.remotelands.com/travelogues/app/uploads/2019/12/Sikkim-India-1.jpg",
    price: 35000
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    // Delete existing data
    await Destination.deleteMany({});
    await Package.deleteMany({});
    console.log('🗑️  Existing data deleted');

    // Insert new data
    await Destination.insertMany(destinations);
    await Package.insertMany(packages);
    console.log('✅ Data Seeded!');

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 