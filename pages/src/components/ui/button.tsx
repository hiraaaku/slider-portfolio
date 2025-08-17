import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800 px-4 py-2",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-900 px-2 py-2",
  } as const;
  const sizes = {
    default: "",
    icon: "h-8 w-8 p-0",
  } as const;

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
