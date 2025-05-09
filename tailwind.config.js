import scrollbarHide from 'tailwind-scrollbar-hide';

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '768px' }, // 480px ~ 768px
        web: '769px', // 769px 이상,
      },
      spacing: {
        '50px': '50px',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        untitled: ['Untitled Sans', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
      fontSize: {
        '2xl': ['32px', { lineHeight: '130%' }],
        xl: ['28px', { lineHeight: '130%' }],
        lg: ['24px', { lineHeight: '135%' }],
        md: ['22px', { lineHeight: '150%' }],
        sm: ['20px', { lineHeight: '150%' }],
        'text-2xl': ['18px', { lineHeight: '150%' }],
        'text-xl': ['17px', { lineHeight: '150%' }],
        'text-lg': ['16px', { lineHeight: '150%' }],
        'text-md': ['16px', { lineHeight: '135%' }],
        'text-sm': ['14px', { lineHeight: '150%' }],
        'text-xs': ['12px', { lineHeight: '150%' }],
        'text-2xs': ['11px', { lineHeight: '150%' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        formBlack: '#242528',
        primarySlate: '#ABAFB5',

        light: {
          50: '#F5F5F6',
          100: '#E5E6E8',
          200: '#CDCFD4',
          300: '#ABAFB5',
          400: '#81858F',
          500: '#6D727D',
          600: '#575A63',
          700: '#4A4D54',
          950: '#242528',
        },
        primary: {
          50: '#F5F5F6',
          100: '#E5E6E8',
          200: '#CDCFD4',
          300: '#A8AFB5',
          400: '#81858F',
          500: '#6D727D',
          600: '#575A63',
          700: '#4A4D54',
          800: '#424448',
          900: '#3A3B3F',
          950: '#242528',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052F14',
        },
        warning: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
          950: '#422006',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
      },
    },
  },
  plugins: [scrollbarHide, require('tailwindcss-animate')],
};
