import clsx from "clsx";
type Variant = 'solid' | 'outline'
type ColorSchema = 'blue' | 'red' | 'green' | 'yellow' | 'Gray' | 'Red' | 'Blue' |'RedLong' | 'Yellow' | 'BlueLong'
interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  variant? : Variant,
  colorSchema : ColorSchema,
  width ?: string
    
  }
  
  const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ title, isDisabled = false,variant,colorSchema,width, ...props }) => {
    return (
      
      <button
      className={clsx(`rounded-md m-1 w-24 px-3 py-1.5`, {
        'bg-blue-500 text-white': variant === 'solid' && colorSchema === 'blue',
        'text-blue-500  border-2 border-blue-500': variant === 'outline' && colorSchema ==='blue',
        'text-green-500 border-2 border-green-500': variant === 'outline' && colorSchema ==='green',
        'text-white bg-green-500': variant === 'solid' && colorSchema ==='green',
        'bg-yellow-500': variant === 'outline' && colorSchema ==='yellow',
        'bg-red-500 text-white':variant === 'solid' && colorSchema === 'red',

        'bg-gray-500 text-white hover:bg-slate-200 w-32 h-16':variant === 'solid' && colorSchema === 'Gray',
        'bg-red-500 text-white hover:bg-slate-200 w-32 h-16':variant === 'solid' && colorSchema === 'Red',
        'bg-blue-500 text-white hover:bg-slate-200 w-32 h-16':variant === 'solid' && colorSchema === 'Blue',
        'bg-yellow-500 text-white hover:bg-slate-200 w-32 h-16':variant === 'solid' && colorSchema === 'Yellow',
        'bg-blue-500 text-white hover:bg-slate-200 w-full h-16':variant === 'solid' && colorSchema === 'BlueLong',
        'bg-red-500 text-white hover:bg-slate-200 w-32 h-full':variant === 'solid' && colorSchema === 'RedLong',
        
        'opacity-50': isDisabled === true,
        "w-full": width ==="full",
      })}
     
      {...props}
      >
        {title}
        
      </button>
    );
  };
  
  export default Button;
  