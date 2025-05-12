interface DashedBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  dashSize?: number;
  dashGap?: number;
}

export default function DashedBorder({
  children,
  className,
  color = '7FA03E',
  dashSize = 6,
  dashGap = 14,
}: DashedBorderProps) {
  return (
    <div
      className={`rounded-[16px] bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23${color}' stroke-width='4' stroke-dasharray='${dashSize}%2c ${dashGap}' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        height: 'round(100%, 1px)',
      }}
    >
      {children}
    </div>
  );
}
