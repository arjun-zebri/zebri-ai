type ButtonVariant = "primary" | "secondary" | "link" | "icon";

type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const Button = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  const base =
    "rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-black text-white border hover:bg-white hover:text-black",
    secondary: "border text-black hover:bg-black hover:text-white",
    link: "text-black hover:bg-gray-200",
    icon: "bg-black text-white border hover:bg-white hover:text-black p-2",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-1.5 text-base",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};

export default Button;
