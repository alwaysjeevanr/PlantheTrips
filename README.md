# PlanTheTrips - Your Ultimate Travel Planning Platform

PlanTheTrips is a full-stack web application that helps users discover and plan their perfect vacation in India. The platform features a curated collection of popular destinations, travel packages, and detailed information about various tourist spots across the country.

## 🌟 Features

- **Destination Discovery**: Browse through a curated list of popular Indian destinations
- **Travel Packages**: Explore pre-designed travel packages with detailed itineraries
- **Top-Selling Tours**: View the most popular travel packages based on user preferences
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion for animations
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API architecture

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/alwaysjeevanr/PlantheTrips.git
cd PlantheTrips
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables
Create a `.env` file in the server directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Start the development servers
```bash
# Start the backend server (from server directory)
npm run dev

# Start the frontend development server (from client directory)
npm start
```

## 📁 Project Structure

```
PlantheTrips/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source files
│       ├── components/    # Reusable components
│       ├── pages/        # Page components
│       └── App.js        # Main application component
│
├── server/                # Backend Express application
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── seed.js           # Database seeding script
│
└── package.json          # Project dependencies and scripts
```

## 🔧 Available Scripts

### Server
- `npm run dev`: Start the development server
- `npm start`: Start the production server
- `npm run seed`: Seed the database with initial data

### Client
- `npm start`: Start the development server
- `npm build`: Build the production bundle
- `npm test`: Run tests

## 📝 API Endpoints

- `GET /api/packages/top-selling`: Get top-selling travel packages
- `GET /api/destinations`: Get all destinations
- More endpoints coming soon...

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Images from various travel websites and photographers
- Icons from [Heroicons](https://heroicons.com/)
- Inspiration from various travel platforms

## 📞 Support

For support, email jeevanjeevu233@gmail.com or open an issue in the repository. 