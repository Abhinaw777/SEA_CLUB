import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <div className={`text-sm font-medium transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-30'}`}>
        Day
      </div>
      
      <label className="relative cursor-pointer">
        <input 
          type="checkbox" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="absolute opacity-0 cursor-pointer h-0 w-0"
        />
        
        <svg 
          width="60" 
          height="34" 
          viewBox="0 0 60 34" 
          className="w-16 h-9 transition-all duration-300 hover:scale-105"
        >
          <defs>
            <clipPath id="container">
              <rect width="60" height="34" rx="17"/>
            </clipPath>
            
            <g id="day">
              <rect x="0" width="60" height="34" fill="#61b9e5"/>
              <g id="day-content">
                <g className="clouds-small">
                  <path d="M13.35,22.45a1,1,0,0,0-.44.1A1.62,1.62,0,0,0,11.29,21a1.67,1.67,0,0,0-.59.11,1.84,1.84,0,0,0-3.55.61h0a1.38,1.38,0,0,0,0,2.75h6.21a1,1,0,1,0,0-2Z" transform="translate(-2 -2)" fill="#d0edff"/>
                  <path d="M27.38,23.72a1.05,1.05,0,0,0-.44.1,1.63,1.63,0,0,0-2.21-1.41,1.84,1.84,0,0,0-3.56.61h0a1.38,1.38,0,1,0,0,2.75h6.21a1,1,0,0,0,0-2.05Z" transform="translate(-2 -2)" fill="#d0edff"/>
                  <path d="M56.7,24a1,1,0,0,0-.44.1,1.63,1.63,0,0,0-2.21-1.42,1.85,1.85,0,0,0-3.56.61h0a1.38,1.38,0,0,0,0,2.75H56.7a1,1,0,0,0,0-2Z" transform="translate(-2 -2)" fill="#d0edff"/>
                </g>
                <g className="clouds-medium">
                  <path d="M61.44,18.4a1.85,1.85,0,0,0-.77.18,2.85,2.85,0,0,0-2.85-2.68,3,3,0,0,0-1,.19,3.25,3.25,0,0,0-6.26,1.07h0a2.42,2.42,0,0,0,0,4.84H61.44a1.8,1.8,0,1,0,0-3.6Z" transform="translate(-2 -2)" fill="#e9f8ff"/>
                  <path d="M26,17.07a1.84,1.84,0,0,0-.77.17,2.86,2.86,0,0,0-2.85-2.68,2.75,2.75,0,0,0-1,.2,3.24,3.24,0,0,0-6.26,1.07h0a2.42,2.42,0,1,0,0,4.84H26a1.8,1.8,0,0,0,0-3.6Z" transform="translate(-2 -2)" fill="#e9f8ff"/>
                </g>
                <g className="clouds-big">
                  <path d="M24.82,10.83a3.09,3.09,0,0,0-1.29.29A4.78,4.78,0,0,0,17,7,5.43,5.43,0,0,0,6.54,8.76h0a4,4,0,1,0,0,8.09H24.82a3,3,0,0,0,0-6Z" transform="translate(-2 -2)" fill="#fff"/>
                  <path d="M53.6,9.45a2.37,2.37,0,0,0-1,.24,3.86,3.86,0,0,0-3.84-3.61,4.09,4.09,0,0,0-1.4.26,4.36,4.36,0,0,0-8.41,1.45h0a3.25,3.25,0,0,0,0,6.5H53.6a2.42,2.42,0,1,0,0-4.84Z" transform="translate(-2 -2)" fill="#fff"/>
                </g>
              </g>
            </g>
            
            <g id="night">
              <rect width="60" height="34" fill="#004373"/>
              <g id="night-content">
                <polygon className="star" points="46 4.89 46.62 6.14 48.01 6.35 47.01 7.33 47.24 8.71 46 8.06 44.76 8.71 44.99 7.33 43.99 6.35 45.38 6.14 46 4.89" fill="#fff5a6"/>
                <polygon className="star" points="58.58 21.93 59.46 23.02 60.86 22.91 60.1 24.09 60.63 25.39 59.28 25.02 58.21 25.94 58.14 24.54 56.94 23.8 58.25 23.3 58.58 21.93" fill="#fff5a6"/>
                <polygon className="star" points="40.71 12.02 40.82 13.42 42.03 14.13 40.74 14.66 40.44 16.04 39.53 14.97 38.13 15.11 38.87 13.91 38.3 12.63 39.67 12.96 40.71 12.02" fill="#fff5a6"/>
                <polygon className="star" points="5 16.89 5.62 18.14 7.01 18.35 6 19.33 6.24 20.71 5 20.06 3.76 20.71 4 19.33 2.99 18.35 4.38 18.14 5 16.89" fill="#fff5a6"/>
                <polygon className="star" points="30.91 26.12 30.86 27.52 31.98 28.36 30.63 28.74 30.18 30.07 29.4 28.91 28 28.89 28.86 27.78 28.45 26.44 29.77 26.93 30.91 26.12" fill="#fff5a6"/>
                <polygon className="star" points="17.52 13.95 18.44 15.01 19.83 14.86 19.11 16.06 19.68 17.34 18.32 17.02 17.28 17.96 17.16 16.56 15.94 15.87 17.23 15.32 17.52 13.95" fill="#fff5a6"/>
                <polygon className="star" points="32 19.89 32.31 20.52 33 20.62 32.5 21.11 32.62 21.8 32 21.47 31.37 21.8 31.49 21.11 30.99 20.62 31.68 20.52 32 19.89" fill="#fff5a6"/>
              </g>
            </g>
            
            <clipPath id="switch">
              <circle 
                cx={theme === 'dark' ? '41' : '19'} 
                cy="17" 
                r="10"
                className="transition-all duration-500 ease-in-out"
              />
            </clipPath>
          </defs>

          <g clipPath="url(#container)">
            <use href="#day"/>
            <g clipPath="url(#switch)">
              <use href="#night" />
            </g>
            <rect 
              className="stroke-black/10 stroke-2 fill-none" 
              width="60" 
              height="34" 
              rx="17"
            />
          </g>
          
          <rect width="60" height="34" rx="17" opacity="0"/>
        </svg>
      </label>
      
      <div className={`text-sm font-medium transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-30'}`}>
        Night
      </div>
    </div>
  );
};

export default ThemeToggle;