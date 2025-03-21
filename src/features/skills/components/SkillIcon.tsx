import Image from 'next/image';

interface SkillIconProps {
  name: string;
  icon: string;
}

export const SkillIcon = ({ name, icon }: SkillIconProps) => (
  <div 
    className="group relative flex flex-col items-center justify-center p-4 bg-[var(--color-bg-secondary)] rounded-lg hover:bg-[var(--color-bg-secondary)]/50 transition-all duration-300"
    title={name}
  >
    <div className="relative w-14 h-14 mb-3">
      <Image
        src={icon}
        alt={name}
        width={56}
        height={56} 
        className="object-contain transition-transform duration-300 hover:scale-110"
        unoptimized
      />
    </div>
    <span className="text-sm text-center text-[var(--color-text-secondary)] font-medium">
      {name}
    </span>
  </div>
); 