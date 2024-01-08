// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundColor: {
//         'custom-green': '#3BB77E',
//       },
//     },
//   },
//   plugins: [require("daisyui")],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1800px', // Add your custom pixel value for max-w-screen-2xl
      },
      backgroundColor: {
        'custom-green': '#3BB77E',
      },
    },
  },
  plugins: [require("daisyui")],
}