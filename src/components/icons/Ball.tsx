
import { LucideProps } from 'lucide-react';

export const Ball = (props: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 0-6.88 17.28M12 2a10 10 0 0 1 6.88 17.28" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M12 12a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" opacity="0" />
    </svg>
  );
};

export default Ball;
