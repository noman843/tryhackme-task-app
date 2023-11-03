import { white as _white, yellow as _yellow } from 'tailwindcss/colors';

export const content = ['./src/**/*.{js,jsx,ts,tsx}', './index.html'];
export const theme = {
  extend: {
    height: {
      120: '30rem',
      128: '32rem',
      132: '33rem',
      136: '34rem'
    },
    keyframes: {
      // Dropdown menu
      'scale-in': {
        '0%': { opacity: 0, transform: 'scale(0)' },
        '100%': { opacity: 1, transform: 'scale(1)' }
      },
      'slide-down': {
        '0%': { opacity: 0, transform: 'translateY(-10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      'slide-up': {
        '0%': { opacity: 0, transform: 'translateY(10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      // Tooltip
      'slide-up-fade': {
        '0%': { opacity: 0, transform: 'translateY(2px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      'slide-right-fade': {
        '0%': { opacity: 0, transform: 'translateX(-2px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' }
      },
      'slide-down-fade': {
        '0%': { opacity: 0, transform: 'translateY(-2px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      'slide-left-fade': {
        '0%': { opacity: 0, transform: 'translateX(2px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' }
      },
      // Navigation menu
      'enter-from-right': {
        '0%': { transform: 'translateX(200px)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 }
      },
      'enter-from-left': {
        '0%': { transform: 'translateX(-200px)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 }
      },
      'exit-to-right': {
        '0%': { transform: 'translateX(0)', opacity: 1 },
        '100%': { transform: 'translateX(200px)', opacity: 0 }
      },
      'exit-to-left': {
        '0%': { transform: 'translateX(0)', opacity: 1 },
        '100%': { transform: 'translateX(-200px)', opacity: 0 }
      },
      'scale-in-content': {
        '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
        '100%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 }
      },
      'scale-out-content': {
        '0%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
        '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 }
      },
      'fade-in': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      },
      'fade-out': {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 }
      },
      // Toast
      'toast-hide': {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 }
      },
      'toast-slide-in-right': {
        '0%': { transform: `translateX(calc(100% + 1rem))` },
        '100%': { transform: 'translateX(0)' }
      },
      'toast-slide-in-bottom': {
        '0%': { transform: `translateY(calc(100% + 1rem))` },
        '100%': { transform: 'translateY(0)' }
      },
      'toast-swipe-out': {
        '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
        '100%': {
          transform: `translateX(calc(100% + 1rem))`
        }
      }
    },
    animation: {
      // Dropdown menu
      'scale-in': 'scale-in 0.2s ease-in-out',
      'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      // Tooltip
      'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-right-fade': 'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      // Navigation menu
      'enter-from-right': 'enter-from-right 0.25s ease',
      'enter-from-left': 'enter-from-left 0.25s ease',
      'exit-to-right': 'exit-to-right 0.25s ease',
      'exit-to-left': 'exit-to-left 0.25s ease',
      'scale-in-content': 'scale-in-content 0.2s ease',
      'scale-out-content': 'scale-out-content 0.2s ease',
      'fade-in': 'fade-in 0.2s ease',
      'fade-out': 'fade-out 0.2s ease',
      // Toast
      'toast-hide': 'toast-hide 100ms ease-in forwards',
      'toast-slide-in-right': 'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      'toast-slide-in-bottom': 'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      'toast-swipe-out': 'toast-swipe-out 100ms ease-out forwards'
    }
  },
  border: {
    gray: {
      200: 'rgba(204, 204, 212, 0.31)'
    }
  },
  colors: {
    body: '#F8F9FA',
    transparent: 'transparent',
    current: 'currentColor',
    black: {
      50: '#e6e9ed',
      100: '#b0bac8',
      200: '#8a98ae',
      300: '#546a88',
      400: '#334d71',
      500: '#00204e',
      600: '#001d47',
      700: '#001737',
      800: '#00122b',
      900: '#000d21'
    },
    white: _white,
    // gray: colors.trueGray,
    // indigo: colors.indigo,
    // red: colors.rose,
    yellow: _yellow,
    pink: {
      100: '#FEDFE4',
      200: '#FEBFCF',
      300: '#FE9FC1',
      400: '#FD87BD',
      500: '#FD60B7',
      600: '#D946A6',
      700: '#B63095',
      800: '#921E81',
      900: '#791274'
    },
    gray: {
      50: '#fbfcfc',
      100: '#f2f4f6',
      200: '#eceff1',
      300: '#e3e8eb',
      400: '#dde3e7',
      500: '#d5dce1',
      600: '#c2c8cd',
      700: '#979ca0',
      800: '#75797c',
      900: '#595c5f'
    },

    purple: {
      100: '#EBDAFE',
      200: '#D4B6FD',
      300: '#BA90F9',
      400: '#A173F3',
      500: '#7D47EB',
      600: '#6033CA',
      700: '#4623A9',
      800: '#301688',
      900: '#200D70'
    },
    green: {
      100: '#D6FCD8',
      200: '#AFFAB9',
      300: '#85F29F',
      400: '#64E590',
      500: '#35d57b',
      600: '#26B774',
      700: '#1A996B',
      800: '#107B5F',
      900: '#0A6657'
    },
    blue: {
      100: '#D5FBFD',
      200: '#ACF3FB',
      300: '#81E0F3',
      400: '#5FC8E8',
      500: '#2fa6d9',
      600: '#2282BA',
      700: '#17629C',
      800: '#0E467D',
      900: '#093268'
    },
    orange: {
      100: '#FEF7CD',
      200: '#FEEE9B',
      300: '#FEE16A',
      400: '#FED544',
      500: '#fec107',
      600: '#DAA005',
      700: '#B68103',
      800: '#936402',
      900: '#794F01'
    },
    red: {
      100: '#FFE9DE',
      200: '#FFCFBE',
      300: '#FFAF9E',
      400: '#FF9086',
      500: '#ff5e5e',
      600: '#DB4451',
      700: '#B72F46',
      800: '#931D3C',
      900: '#7A1236'
    },
    dark: {
      50: '#C1C2C5',
      100: '#A6A7AB',
      200: '#909296',
      300: '#5C5F66',
      400: '#373A40',
      500: '#2C2E33',
      600: '#25262B',
      700: '#1A1B1E',
      800: '#141517',
      900: '#101113'
    }
  }
};
import lineClamp from '@tailwindcss/line-clamp';
import radix from 'tailwindcss-radix';

export const plugins = [lineClamp, radix];
export const corePlugins = {
  preflight: false
};