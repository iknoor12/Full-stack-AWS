# FullStack App

A unified fullstack application with a React frontend and Node.js/Express backend.

## Project Structure

```
full-stack/
├── server.js           # Express server
├── data.js             # Sample data array
├── vite.config.js      # Vite configuration
├── package.json        # Unified dependencies
├── index.html          # HTML entry point
├── src/                # React application
│   ├── components/
│   │   ├── ItemList.jsx
│   │   ├── ItemList.css
│   │   ├── AddItem.jsx
│   │   └── AddItem.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
└── README.md
```

## Setup & Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`
The frontend development server will run on `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This builds the frontend for production.

1. In a new terminal, navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Features

- **View Items**: Fetch and display items from the backend
- **Add Items**: Create new items with title and description
- **API Integration**: Frontend communicates with backend via REST API
- **Responsive Design**: Clean and modern UI

## API Endpoints

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a specific item
- `POST /api/items` - Create a new item

## Tech Stack

**Frontend:**
- React 18
- Vite
- CSS3

**Backend:**
- Node.js
- Express
- CORS

## Notes

- Backend runs on port 5000
- Frontend runs on port 3000
- The frontend proxies API calls to the backend
- Data is stored in memory (resets on server restart)
# Full-stack
# Full-stack-practical
# Full-stack-practical
# Full-stack-practical
# Full-stack
