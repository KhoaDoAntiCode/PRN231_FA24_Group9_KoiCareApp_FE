import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'outline' | 'solid';
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant, icon }) => {
  const baseClasses = "flex gap-2 justify-center items-center px-7 pt-3.5 pb-2.5 rounded-[57px] max-md:px-5";
  const variantClasses = variant === 'outline'
    ? "border-solid border-[1.5px] border-sky-950 text-sky-950"
    : "text-white bg-sky-950";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      <span className="self-stretch my-auto">{children}</span>
      {icon && (
        <img 
          src={`https://cdn.builder.io/api/v1/image/assets/TEMP/59696780d080b43301adf224ac6dd9a112216613c7623e7472c47a9dbd0620de?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884${icon}`} 
          alt="" 
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      )}
    </button>
  );
};

export default Button;