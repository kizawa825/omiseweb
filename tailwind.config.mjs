/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      // 権威性と独自性のため、見出し用フォントと本文用フォントを定義
      fontFamily: {
        heading: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        body: ['Inter', 'Noto Sans JP', ...defaultTheme.fontFamily.sans],
      },
      // 既存のindigoを 'primary' として定義し、サイト全体で一貫して使用
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // 基調となる色
          600: '#4f46e5', // 基調となる色 (濃いめ)
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        success: defaultTheme.colors.green,
      },
    },
	},
	plugins: [],
}
