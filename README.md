# 🎭 Random Joke Generator

> A modern, full-stack web application that delivers random jokes with style. Built with React, Spring Boot, and the Official Joke API.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🌟 Overview

**Random Joke Generator** is a professional-grade, responsive web application that fetches and displays random jokes. The backend acts as a smart proxy to the [Official Joke API](https://official-joke-api.appspot.com/), normalizing responses and providing a clean REST interface for the React frontend.

### Why This Project?

- **Full-Stack Integration**: Demonstrates clean separation of concerns with a Spring Boot backend and React frontend
- **Modern UI/UX**: Professional purple-pink gradient theme with smooth animations and accessibility features
- **Responsive Design**: Mobile-first approach ensuring perfect rendering on all devices
- **Keyboard-Driven**: Power user shortcuts for quick navigation
- **Offline Resilience**: Fallback jokes when the API is unreachable

---

## ✨ Features

### Core Functionality
- 🎲 **Random Joke Generation** – Fetch jokes instantly with one click
- 🎯 **Category Filtering** – Choose from Any, Programming, or General jokes
- 👁️ **Punchline Reveal** – Suspenseful two-step joke delivery
- 📋 **One-Click Copy** – Copy jokes to clipboard instantly
- 📤 **Native Share** – Share jokes via Web Share API
- ⌨️ **Keyboard Shortcuts** – Navigate like a pro (N/R/C)

### Technical Highlights
- 🔄 **Backend Proxy** – Spring Boot REST controller normalizes API responses
- 🎨 **Tailwind v4** – Modern utility-first CSS with custom theme
- 🌐 **CORS Configured** – Seamless cross-origin communication
- 📱 **Responsive Grid** – Adapts from mobile to desktop layouts
- ♿ **Accessible** – ARIA labels, focus rings, keyboard navigation
- 🎭 **React Icons** – Professional iconography throughout

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI library |
| **Vite** | 7.1.7 | Build tool & dev server |
| **Tailwind CSS** | 4.1.13 | Utility-first styling |
| **React Icons** | Latest | Icon components |
| **PostCSS** | 8.5.6 | CSS processing |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Java** | 17+ | Programming language |
| **Spring Boot** | 3.5.6 | Application framework |
| **Spring Web** | Included | REST controllers |
| **RestClient** | Included | HTTP client for external API |
| **Maven** | Default | Build & dependency management |

### External Services
- **[Official Joke API](https://official-joke-api.appspot.com/)** – Joke data source

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────┐
│                     Browser                      │
│  ┌────────────────────────────────────────────┐  │
│  │      React Frontend (Port 5173)            │  │
│  │      - Vite + React 19                     │  │
│  │      - Tailwind CSS v4                     │  │
│  │      - Responsive UI with keyboard shortcuts│ │
│  └────────────────┬───────────────────────────┘  │
└─────────────────────┼──────────────────────────────┘
                      │ HTTP (GET)
                      │ /api/jokes/random
                      │ /api/jokes/{type}/random
                      ▼
┌──────────────────────────────────────────────────┐
│       Spring Boot Backend (Port 8080)            │
│  ┌────────────────────────────────────────────┐  │
│  │         JokeController (REST)              │  │
│  │  - @GetMapping("/api/jokes/random")        │  │
│  │  - @GetMapping("/api/jokes/{type}/...")    │  │
│  └────────────────┬───────────────────────────┘  │
│                   │                              │
│  ┌────────────────▼───────────────────────────┐  │
│  │           JokeService                      │  │
│  │  - Fetch from external API                 │  │
│  │  - Normalize array responses               │  │
│  └────────────────┬───────────────────────────┘  │
│                   │                              │
│  ┌────────────────▼───────────────────────────┐  │
│  │           RestClient                       │  │
│  │  - HTTP client to Official Joke API        │  │
│  └────────────────┬───────────────────────────┘  │
└─────────────────────┼──────────────────────────────┘
                      │ HTTPS
                      ▼
┌──────────────────────────────────────────────────┐
│       Official Joke API (External)               │
│  - https://official-joke-api.appspot.com         │
│  - /random_joke                                  │
│  - /jokes/{type}/random                          │
└──────────────────────────────────────────────────┘
```

**Flow:**
1. User interacts with React UI (button click or keyboard shortcut)
2. Frontend sends GET request to Spring Boot backend
3. Backend calls Official Joke API via RestClient
4. Backend normalizes response (converts arrays to single objects)
5. JSON returned to frontend and rendered with animations

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Java Development Kit (JDK)**: Version 17 or higher
  - Download: [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://openjdk.org/)
  - Verify: `java -version`

- **Node.js**: Version 20.19+ or 22.12+ (for Vite 7 compatibility)
  - Download: [nodejs.org](https://nodejs.org/)
  - Verify: `node -v` and `npm -v`

- **Maven**: Included with Spring Boot (via mvnw wrapper)

- **Git**: For cloning the repository
  - Download: [git-scm.com](https://git-scm.com/)

---

### Backend Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/random-joke-generator.git
cd random-joke-generator/jokes-backend
```

#### 2. Verify Java Version
```bash
java -version
# Should show Java 17 or higher
```

#### 3. Run the Backend
```bash
# Using Maven Wrapper (Windows)
.\mvnw.cmd spring-boot:run

# Using Maven Wrapper (macOS/Linux)
./mvnw spring-boot:run
```

The backend will start on [**http://localhost:8080**](http://localhost:8080)

#### 4. Test the API
Open your browser or use curl:
```bash
curl http://localhost:8080/api/jokes/random
curl http://localhost:8080/api/jokes/programming/random
```

Expected response:
```json
{
  "id": 123,
  "type": "programming",
  "setup": "Why do programmers prefer dark mode?",
  "punchline": "Because light attracts bugs."
}
```

---

### Frontend Setup

#### 1. Navigate to Frontend Directory
```bash
cd ../jokes-frontend
```

#### 2. Install Dependencies
```bash
npm install
```

This installs:
- React 19.1.1
- Vite 7.1.7
- Tailwind CSS 4.1.13
- React Icons
- PostCSS & Autoprefixer

#### 3. Start Development Server
```bash
npm run dev
```

The frontend will start on [**http://localhost:5173**](http://localhost:5173)

#### 4. Open in Browser
Navigate to [http://localhost:5173](http://localhost:5173)

---

## 💻 Usage

### Basic Workflow

1. **Launch Application**
   - Ensure both backend (port 8080) and frontend (port 5173) are running

2. **Select Category**
   - Choose from dropdown: Any, Programming, or General

3. **Get a Joke**
   - Click "New Joke" button or press `N` key
   - The setup appears immediately with a loading animation

4. **Reveal Punchline**
   - Click "Reveal Punchline" button or press `R` key
   - Punchline slides in smoothly

5. **Copy or Share**
   - Click "Copy" button or press `C` key to copy to clipboard
   - Click "Share" to use native share dialog (mobile/supported browsers)

### Offline Mode
If the backend or API is unreachable, the app displays a fallback joke and shows a toast notification.

---

## 🔌 API Endpoints

### Backend REST API

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `GET` | `/api/jokes/random` | Fetch a random joke (any category) | `JokeDto` object |
| `GET` | `/api/jokes/{type}/random` | Fetch a random joke by type | `JokeDto` object |

**Supported Types:** `programming`, `general`

### Response Format
```json
{
  "id": 42,
  "type": "programming",
  "setup": "Why did the developer go broke?",
  "punchline": "Because they used up all their cache."
}
```

### CORS Configuration
The backend allows requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative React dev port)

---

## 📁 Project Structure

```
random-joke-generator/
├── jokes-backend/                    # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/jokes/
│   │   │   │   ├── JokesBackendApplication.java
│   │   │   │   ├── config/
│   │   │   │   │   ├── RestClientConfig.java
│   │   │   │   │   └── CorsConfig.java
│   │   │   │   ├── controller/
│   │   │   │   │   └── JokeController.java
│   │   │   │   ├── dto/
│   │   │   │   │   └── JokeDto.java
│   │   │   │   └── service/
│   │   │   │       └── JokeService.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
└── jokes-frontend/                   # React frontend
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Toolbar.jsx
    │   │   └── JokeCard.jsx
    │   ├── lib/
    │   │   └── api.js
    │   ├── styles/
    │   │   └── index.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `N` | Fetch new joke |
| `R` | Reveal punchline |
| `C` | Copy joke to clipboard |

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test thoroughly before submitting PR

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments

- [Official Joke API](https://official-joke-api.appspot.com/) for providing the joke data
- [React](https://reactjs.org/) team for the amazing UI library
- [Spring Boot](https://spring.io/projects/spring-boot) for the robust backend framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework