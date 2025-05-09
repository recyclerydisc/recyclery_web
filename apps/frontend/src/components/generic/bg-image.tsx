interface BgImageProps {
  children: React.ReactNode;
  image: string | undefined;
  opacity?: number;
  className?: string;
}

export function BgImage({ children, image, opacity = 0.4, className = '' }: BgImageProps) {
  return (
    <section
      className={`flex flex-col justify-center items-center p-8 text-white text-center ${className}`}
      style={{
        background: `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </section>
  );
}
