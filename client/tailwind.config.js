/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{html,js,jsx,tsx,authControllers.ts}"],
  theme: {
    extend: {
      colors: {
        'main-color': '#4B302D',

        // Secondary Colors
        'lighter-shade': '#73514A',
        'darker-shade': '#2F1A16',
        'more-lighter-shade': '#A37C74',

        // Accent Colors
        'complementary': '#2D4B4A',
        'analogous-1': '#4B3C2D',
        'analogous-2': '#4B3D2D',

        // Text Colors
        'light-text': '#F5F5F5',
        'dark-text': '#333333',
      },
        fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
          'serif': ['EB Garamond', 'serif'],
        }
    },
  },
}
