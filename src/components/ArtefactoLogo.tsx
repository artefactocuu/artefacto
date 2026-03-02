interface ArtefactoLogoProps {
  className?: string;
  color?: string;
}

const ArtefactoLogo = ({ className = "h-10 w-10", color = "currentColor" }: ArtefactoLogoProps) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Gear outline — 8 symmetric teeth */}
    <path
      d={`
        M 44.1 19.6 L 41 3.9 L 59 3.9 L 55.9 19.6
        A 31 31 0 0 1 67.3 24.3
        L 76.3 11 L 89 23.7 L 75.7 32.7
        A 31 31 0 0 1 80.4 44.1
        L 96.1 41 L 96.1 59 L 80.4 55.9
        A 31 31 0 0 1 75.7 67.3
        L 89 76.3 L 76.3 89 L 67.3 75.7
        A 31 31 0 0 1 55.9 80.4
        L 59 96.1 L 41 96.1 L 44.1 80.4
        A 31 31 0 0 1 32.7 75.7
        L 23.7 89 L 11 76.3 L 24.3 67.3
        A 31 31 0 0 1 19.6 55.9
        L 3.9 59 L 3.9 41 L 19.6 44.1
        A 31 31 0 0 1 24.3 32.7
        L 11 23.7 L 23.7 11 L 32.7 24.3
        A 31 31 0 0 1 44.1 19.6
        Z
      `}
      stroke={color}
      strokeWidth="3.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
    {/* Globe — outer circle */}
    <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="3" fill="none" />
    {/* Globe — center meridian (vertical ellipse) */}
    <ellipse cx="50" cy="50" rx="8" ry="22" stroke={color} strokeWidth="2.5" fill="none" />
    {/* Globe — equator */}
    <line x1="28" y1="50" x2="72" y2="50" stroke={color} strokeWidth="2.5" />
    {/* Globe — upper latitude arc */}
    <path d="M 31.6 38 Q 50 34 68.4 38" stroke={color} strokeWidth="2" fill="none" />
    {/* Globe — lower latitude arc */}
    <path d="M 31.6 62 Q 50 66 68.4 62" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

export default ArtefactoLogo;
