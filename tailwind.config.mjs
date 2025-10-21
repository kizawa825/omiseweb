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
      // 'neutral' カラーパレットを追加 (slate のエイリアスとして)
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
        neutral: defaultTheme.colors.slate, // 'gray' の代わりに 'slate' を 'neutral' として使用
        success: defaultTheme.colors.green,
      },
      // 2025年のデザイントレンドとして、より繊細な影と強い影を定義
      boxShadow: {
        subtle: '0 4px 12px 0 rgba(0, 0, 0, 0.03)',
        strong: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      // マイクロインタラクション用のキーフレーム
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // アニメーションの定義
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
    },
	},
	plugins: [],
}
