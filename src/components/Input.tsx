import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, ...rest }: Props) => {
    return (  
        <input 
            type='text'
            placeholder={label}
            className='h-12 py-3 bg-black-500 text-white border-2 border-orange-200 rounded-md focus:ring-0 focus:ring-offset-0 text-left placeholder:pl-4 focus:bg-black-100'
            {...rest}
        />
    );
}
 
export default Input;
