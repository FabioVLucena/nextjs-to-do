import Button from "./Button";

interface Props {
    descricao: string
}

const TaskCard = ({ descricao }: Props) => {
    return (  
        <div className='flex justify-between items-center w-[500px] h-20 bg-black-100 border-4 border-orange-500 rounded-lg px-5 mb-4'>
            <div className='text-xl text-white-100'>
                {descricao}
            </div>
            <Button className='px-3 py-2 border-orange-500'>
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" stroke-width="2.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </Button>    
        </div>
    );
}
 
export default TaskCard;