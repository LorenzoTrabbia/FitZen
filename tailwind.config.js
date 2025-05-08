// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: {
                    background: '#F9FAFB',
                    primary: '#6366F1',
                    secondary: '#8B5CF6',
                    text: '#1F2937',
                    subtext: '#6B7280',
                    accent: '#10B981',
                },
                dark: {
                    background: '#111827',
                    surface: '#1F2937',
                    primary: '#818CF8',
                    secondary: '#A78BFA',
                    text: '#F3F4F6',
                    subtext: '#9CA3AF',
                    accent: '#34D399',
                },
            },
        },
    },
    plugins: [],
});
