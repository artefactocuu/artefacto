interface ArtefactumLogoProps {
  className?: string;
  color?: string;
}

const ArtefactumLogo = ({ className = "h-10 w-10", color = "currentColor" }: ArtefactumLogoProps) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Gear outer shape */}
    <path
      d="M50 5 L56 5 L58 14 C61 15 64 16.5 66.5 18.5 L75 14 L79.5 18.5 L76 27 C78 29.5 79.5 32.5 80.5 35.5 L90 37 L90 43 L81 45.5 C80.5 48.5 79.5 51.5 78 54 L83 62.5 L78.5 67 L70 63 C67.5 65 64.5 66.5 61.5 67.5 L60 77 L54 77 L52.5 68 C49.5 68 46.5 67.5 43.5 66.5 L36 72.5 L31.5 68 L36 59.5 C34 57 32.5 54 31.5 51 L22 49.5 L22 43.5 L31 41.5 C31.5 38.5 32.5 35.5 34 33 L29 24.5 L33.5 20 L42 24.5 C44.5 22.5 47 21 50 20 L50 5Z"
      stroke={color}
      strokeWidth="4"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Globe - horizontal lines */}
    <ellipse cx="55" cy="48" rx="20" ry="20" stroke={color} strokeWidth="3" fill="none" />
    <ellipse cx="55" cy="48" rx="10" ry="20" stroke={color} strokeWidth="2.5" fill="none" />
    <line x1="35" y1="48" x2="75" y2="48" stroke={color} strokeWidth="2.5" />
    <line x1="38" y1="38" x2="72" y2="38" stroke={color} strokeWidth="2" />
    <line x1="38" y1="58" x2="72" y2="58" stroke={color} strokeWidth="2" />
  </svg>
);

export default ArtefactumLogo;
