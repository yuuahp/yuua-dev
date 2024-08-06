/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        fontFamily: {
            'noto-sans': ['Noto Sans JP', 'sans-serif'],
            'noto-serif': ['Noto Serif JP', 'serif'],
            'jb-mono': ['JetBrains Mono', 'monospace'],
            'inter': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                "brown-primary": "#43413E",
                "brown-depth": "#1E1D1B",
                "brown-secondary": "#AFAEAD",
                "brown-background": "#F5F5F5",
            }
        }
    },
    plugins: [],
}

