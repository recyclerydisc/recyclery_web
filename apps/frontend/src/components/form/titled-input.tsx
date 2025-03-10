import React from 'react';

interface TitledInputProps {
  title: string;
  required?: boolean;
  children: React.ReactNode;
}

const TitledInput = ({ title, required, children }: TitledInputProps) => {
  return (
    // this div had the absolute tag which was causing problems, make sure it's relatives so other styling isn't thrown out the window
    <div className="relative right-[10px] top-[8px] bg-white cursor-pointer">
      <h3 className="m-0 text-left font-normal text-[1rem] mb-1">
        <span className="mb-1">{title}</span>
        {required && <span className="text-red-500">*</span>}
      </h3>
      {children}
    </div>
  );
};

export default TitledInput;
