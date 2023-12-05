import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#FFE66D",
                    
            "secondary": "#6CA6C1",
                    
            "accent": "#2F3061",
                    
            "neutral": "#343434",
                    
            "base-100": "#F7FFF7",
                    
            "info": "#83b8f1",
                    
            "success": "#279b53",
                    
            "warning": "#f8ab54",
                    
            "error": "#f0707d",
        },
      },
    ],
  }, 
  
  plugins: [require("daisyui")],
}
export default config
