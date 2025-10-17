module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        primary: '#ffcc00',
        secondary: '#ff6600',
        accent: '#ff3300',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: theme => ({
        'cinematic': "url('https://source.unsplash.com/1600x900/?cinema,film')",
      }),
    },
  },
  plugins: [],
}