/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        // customBlue: '#1e3a8a'
        // customGreen: '#10b981'
      },
      fontFamily: {
        // Add your custom fonts
        // sans: ['Inter', 'sans-serif'],
        // serif: ['Mettiweather', 'serif'],
      },
      fontSize: {
        // Add your custom font sizes
        // xxs: '0.65rem',
        // xxl: '1.75rem',
      },
      spacing: {
        // Add custom spacing values
        // 72: '18rem',
        // 84: '21rem',
      },
      screens: {
        // Add custom breakpoints
        // '3xl': '1920px',
      },
      borderRadius: {
        // Add custom border radius
        // '4xl': '2rem',
      },
      borderWidth: {
        // Add custom border widths
        // 3: '3px',
      },
      opacity: {
        // Add custom opacity levels
        // 85: '0.85',
      },
      boxShadow: {
        // Add custom box shadows
        // 'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        // Add custom z-index values
        // 60: '60',
      },
      animation: {
        // Add custom animations
        // 'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        // Define custom keyframes
        // wiggle: {
        //   '0%, 100%': { transform: 'rotate(-3deg)' },
        //   '50%': { transform: 'rotate(3deg)' },
        // },
      },
      gridTemplateColumns: {
        // Add custom grid column layouts
        // 'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        // Add custom grid row layouts
        // 'layout': 'auto 1fr auto',
      },
      flex: {
        // Add custom flex properties
        // '2': '2 2 0%',
      },
      transitionDuration: {
        // Add custom transition durations
        // '400': '400ms',
      },
      transitionTimingFunction: {
        // Add custom timing functions
        // 'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },
      aspectRatio: {
        // Add custom aspect ratios
        // '3/2': '3 / 2',
      },
      container: {
        // Add custom container settings
        // center: true,
        // padding: '2rem',
      },
    },
  },
  plugins: [],
};
