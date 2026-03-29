/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}", // Just in case
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#800040', // Exact match: Burgundy/Maroon
                secondary: '#c5a982', // Exact match: Gold/Bronze
                dark: '#040606', // Deep black
                light: '#f9fafb',
            },
        },
    },
    plugins: [],
}
