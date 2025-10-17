# Cinematic Portfolio

This is a single-page portfolio application built with React and styled using Tailwind CSS. The application features a dark, cinematic theme and showcases various sections including Hero, About, Projects, and Contact.

## Features

- **Dark Cinematic Theme**: A visually striking dark theme that enhances the cinematic feel of the portfolio.
- **Responsive Design**: The application is fully responsive and mobile-friendly, ensuring a great user experience on all devices.
- **Dynamic Image Fetching**: High-quality cinematic images are fetched from the Unsplash API to enrich the visual appeal of the portfolio.
- **Smooth Scroll Animations**: Engaging scroll animations and transitions enhance the user experience.
- **Modular Components**: The application is built using functional components and hooks, ensuring a clean and maintainable codebase.

## Project Structure

```
cinematic-portfolio
├── public
│   └── index.html
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── tailwind.css
│   ├── api
│   │   └── unsplash.js
│   ├── components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Loading.jsx
│   ├── hooks
│   │   └── useFetchImages.js
│   ├── context
│   │   └── ThemeContext.jsx
│   ├── utils
│   │   └── animations.js
│   └── data
│       └── projects.js
├── .gitignore
├── package.json
├── vite.config.js
├── postcss.config.cjs
└── tailwind.config.cjs
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cinematic-portfolio
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000` to view the portfolio.

## API Usage

The application fetches images from the Unsplash API. Ensure you have an API key and update the `unsplash.js` file with your credentials if necessary.

## License

This project is licensed under the MIT License. Feel free to modify and use it as you wish.