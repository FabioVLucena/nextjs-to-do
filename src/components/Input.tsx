import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, ...rest }: Props) => {
    return (  
        <input 
            type='text'
            placeholder={label}
            className='h-12 py-3 w-96 bg-black-500 placeholder:text-lg placeholder:text-white-400 ring-2 ring-orange-200 rounded-md focus:outline-none text-left placeholder:pl-4 focus:bg-black-100 focus:placeholder:text-white-100'
            {...rest}
        />
    );
}
 
export default Input;
