import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const Button = ({ className, ...rest }: Props) => {
    return (  
        <button 
            className={`bg-black-500 text-orange-200 px-5 py-5 border-4 border-orange-200 rounded-2xl hover:bg-black-100 ${className}`}
            {...rest}
        />
    );
}
 
export default Button;
