/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}"
    ],
    theme: {
        fontFamily: {
            'sans': ['Nunito', 'system-ui'],
            'body': ['"Whitney SSm A"', '"Whitney SSm B"', 'sans-serif']
        },
        container: {
            center: true,
            padding: `1rem`,
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1280px',
                // xl: '1170px',
                // '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                orange: {
                    500: "#eb5c14",
                },
                gray: {
                    100: '#eff0f2',
                    200: '#d0d2d9',
                    300: '#b1b4c0',
                    400: '#9196a6',
                    500: '#72788d',
                    600: '#595d6e',
                    700: '#3f434e',
                    800: '#26282f',
                    900: '#0d0d10'
                },
            }
        }
    },
    plugins: [],
}

