/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

export default {
  content: [
      "./src/**/*.{html,js,jsx,tsx,authControllers.ts}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        'main-color': '#4B302D',

        // Secondary Colors
        'lighter-shade': '#73514A',
        'darker-shade': '#2F1A16',
        'more-lighter-shade': '#A37C74',

        // Accent Colors
        'complementary': '#e8d4d4',
        'analogous-1': '#4B3C2D',
        'analogous-2': '#ece1df',

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
  plugins: [nextui()]
}
