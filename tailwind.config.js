/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            opacity: {
                3: '0.03',
                8: '0.08',
                16: '0.16',
                24: '0.24',
            },
            keyframes: {
                'slide-down-and-fade': {
                    from: { opacity: 0, transform: 'translateY(-2px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                'slide-left-and-fade': {
                    from: { opacity: 0, transform: 'translateX(2px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                'slide-up-and-fade': {
                    from: { opacity: 0, transform: 'translateY(2px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                'slide-right-and-fade': {
                    from: { opacity: 0, transform: 'translateX(2px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                'slide-down-radix': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'slide-up-radix': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'fade-in': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                'fade-out': {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
            },
            animation: {
                'spin-reverse': 'spin 1s linear infinite reverse',
                'slide-down-and-fade': 'slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-left-and-fade': 'slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-up-and-fade': 'slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-right-and-fade': 'slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-down-radix': 'slide-down-radix 300ms cubic-bezier(0.87, 0, 0.13, 1)',
                'slide-up-radix': 'slide-up-radix 300ms cubic-bezier(0.87, 0, 0.13, 1)',
                'fade-in': 'fade-in 150ms cubic-bezier(0.87, 0, 0.13, 1)',
                'fade-in-secondary': 'fade-in 150ms cubic-bezier(0.16, 1, 0.3, 1)',
                'fade-out': 'fade-out 150ms cubic-bezier(0.87, 0, 0.13, 1)',
            },
        },
        colors: {
            transparent: 'transparent',
            inherit: 'inherit',
            current: 'currentColor',
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(32, 41, 50)',
            grey: {
                0: 'rgb(255, 255, 255)',
                50: 'rgb(247, 247, 248)',
                100: 'rgb(234, 237, 240)',
                150: 'rgb(214, 219, 225)',
                200: 'rgb(200, 207, 213)',
                250: 'rgb(186, 194, 202)',
                300: 'rgb(171, 181, 191)',
                350: 'rgb(158, 169, 179)',
                400: 'rgb(144, 155, 167)',
                450: 'rgb(130, 143, 155)',
                500: 'rgb(116, 130, 144)',
                550: 'rgb(104, 118, 132)',
                600: 'rgb(95, 110, 124)',
                650: 'rgb(88, 102, 116)',
                700: 'rgb(80, 95, 109)',
                750: 'rgb(71, 84, 98)',
                800: 'rgb(64, 77, 89)',
                850: 'rgb(55, 66, 78)',
                900: 'rgb(45, 56, 67)',
                950: 'rgb(38, 49, 59)',
                1000: 'rgb(32, 41, 50)',
            },
            ['solid-blue']: {
                500: 'rgb(0, 92, 178)',
                600: 'rgb(0, 79, 153)',
                700: 'rgb(0, 71, 138)',
            },
            ['light-blue']: {
                0: 'rgb(231, 243, 254)',
                100: 'rgb(191, 223, 253)',
                200: 'rgb(152, 203, 251)',
                300: 'rgb(118, 186, 250)',
                400: 'rgb(78, 167, 248)',
                500: 'rgb(46, 150, 247)',
                600: 'rgb(13, 134, 248)',
                700: 'rgb(0, 116, 224)',
                800: 'rgb(0, 100, 194)',
                900: 'rgb(0, 84, 163)',
                1000: 'rgb(0, 69, 133)',
                'a-1': 'rgba(15, 135, 245, 0.1)',
            },
            red: {
                0: 'rgb(255, 241, 241)',
                100: 'rgb(255, 215, 215)',
                200: 'rgb(254, 179, 179)',
                300: 'rgb(254, 134, 134)',
                400: 'rgb(254, 93, 93)',
                500: 'rgb(254, 57, 57)',
                600: 'rgb(240, 5, 5)',
                700: 'rgb(222, 2, 2)',
                800: 'rgb(197, 2, 2)',
                900: 'rgb(167, 1, 1)',
                1000: 'rgb(137, 1, 1)',
                'a-1': 'rgba(255, 5, 5, 0.16)',
            },
            green: {
                0: 'rgb(240, 247, 239)',
                100: 'rgb(217, 234, 214)',
                200: 'rgb(185, 220, 178)',
                300: 'rgb(153, 204, 142)',
                400: 'rgb(115, 191, 99)',
                500: 'rgb(82, 170, 65)',
                600: 'rgb(59, 147, 42)',
                700: 'rgb(50, 135, 33)',
                800: 'rgb(43, 121, 27)',
                900: 'rgb(39, 108, 24)',
                1000: 'rgb(31, 88, 20)',
                'a-1': 'rgba(31, 131, 14, 0.17)',
            },
            orange: {
                0: 'rgb(253, 240, 226)',
                100: 'rgb(252, 228, 202)',
                200: 'rgb(251, 216, 178)',
                300: 'rgb(248, 195, 135)',
                400: 'rgb(246, 178, 101)',
                500: 'rgb(247, 162, 64)',
                600: 'rgb(245, 138, 15)',
                700: 'rgb(236, 114, 14)',
                800: 'rgb(212, 99, 8)',
                900: 'rgb(173, 81, 5)',
                1000: 'rgb(143, 67, 4)',
                'a-1': 'rgba(241, 126, 3, 0.21)',
            },
            yellow: {
                100: 'rgb(248, 248, 231)',
                300: 'rgb(244, 242, 196)',
                'a-1': 'rgba(209, 201, 9, 0.24)',
            },
            placeholder: {
                one: 'rgb(249, 220, 220)',
                two: 'rgb(247, 229, 212)',
                three: 'rgb(245, 237, 199)',
                four: 'rgb(195, 244, 195)',
                five: 'rgb(178, 241, 220)',
                six: 'rgb(175, 233, 244)',
                seven: 'rgb(188, 215, 245)',
                eight: 'rgb(198, 196, 247)',
                nine: 'rgb(215, 178, 245)',
                ten: 'rgb(244, 174, 229)',
            },
        },
        boxShadow: {
            none: '0 0 #0000',
            s: '0px 0px 20px rgba(37, 45, 52, 0.06), 0px 3px 6px rgba(37, 45, 52, 0.06)',
            m: '0px 0px 20px rgba(37, 45, 52, 0.1)',
            l: '0px 0px 40px rgba(37, 45, 52, 0.16)',
        },
        screens: {
            lg: '1024px',
            xl: '1200px',
            '2xl': '1368px',
            '3xl': '1920px',
        },
        spacing: {
            0: '0px',
            1: '0.125rem',
            2: '0.25rem',
            3: '0.375rem',
            4: '0.5rem',
            5: '0.75rem',
            6: '1rem',
            7: '1.5rem',
            8: '2.75rem',
            9: '4rem',
            10: '5.625rem',
        },
        borderRadius: {
            none: '0px',
            xxs: '0.125rem',
            xs: '0.25rem',
            sm: '0.375rem',
            md: '0.5rem',
            lg: '0.75rem',
            xl: '1rem',
            xxl: '1.5rem',
            full: '9999px',
        },
        fontSize: {
            '2xs': '0.625rem',
            xs: '0.6875rem',
            sm: '0.8125rem',
            md: '0.9375rem',
            base: '1rem',
            lg: '1.0625rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.75rem',
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },
    plugins: [],
};