import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                screens:{
                    "DEFAULT":"1320px"
                }
            },
        },

    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
export default config
