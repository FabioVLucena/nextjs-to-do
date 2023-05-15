import Button from "./Button"
import { UseQueryResult, useMutation } from 'react-query'
import apiClient from '../config/apiClient'

interface Props {
    id: number,
    descricao: string,
    refetch: (options?: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>, 
}

async function deleteTask(id: number) {
    const response = await apiClient.delete(`/tasks/${id}`, {
      method: 'DELETE',
    });
  
    if (response.status !== 200) {
        throw new Error('Erro ao excluir a tarefa.');
    }
}

const TaskCard = ({ id, descricao, refetch }: Props) => {
    const deleteTaskMutation = useMutation(() => deleteTask(id), {
        onSuccess: () => {
            refetch();
        }
    });

    const handleDelete = () => {
      deleteTaskMutation.mutate();
    };

    return (  
        <div key={id} className='flex justify-between items-center w-[500px] h-20 bg-black-100 border-4 border-orange-500 rounded-lg px-5 mt-4'>
            <div className='text-xl text-white-100'>
                {descricao}
            </div>
            <Button className='h-11 w-11 border-orange-500' onClick={handleDelete}>
                <svg className="w-6 h-6 text-orange-200" fill="none" stroke="currentColor" stroke-width="2.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </Button>    
        </div>
    );
}
 
export default TaskCard;