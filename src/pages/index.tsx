import Head from 'next/head'
import Button from '../components/Button'
import Input from '../components/Input'
import TaskCard from '../components/TaskCard'
import { useMutation, useQuery } from 'react-query'
import apiClient from '../config/apiClient'
import { ChangeEvent, useState } from 'react'

type Task = {
  id: number,
  descricao: string
};

export default function Home() {
  const [descricao, setDescricao] = useState<string>("");

  const { data, refetch } = useQuery<Task[]>("todos", () => {
    return apiClient
      .get("/tasks")
      .then((response) => response.data);
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
  };

  async function createTask(descricao: string) {
    const response = await apiClient.post('/tasks', {
      descricao: descricao
    });
  
    if (response.status !== 201) {
        throw new Error('Erro ao criar a tarefa.');
    }
  }

  const createTaskMutation = useMutation(() => createTask(descricao), {
    onSuccess: () => {
      refetch();
      setDescricao("");
    }
  });

  const handleCreate = () => {
    createTaskMutation.mutate();
  };

  return (
    <>
      <Head>
        <title>Next To Do</title>
        <link rel="shortcut icon" href="#" />
      </Head>

      <main className='flex flex-col justify-center w-screen h-screen'>

        <header className='flex justify-center items-center w-full h-1/5 bg-black-200'>
          <Input label='Descricao...' value={descricao} onChange={handleChange} />
          <Button className='h-20 w-20' onClick={handleCreate}>
            <svg className="w-10 h-10 text-orange-200" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </Button>
        </header>

        <div className='flex flex-col justify-start items-center w-full h-4/5'>
          {data?.map((task) => (
            <TaskCard key={task.id} id={task.id} descricao={task.descricao} refetch={refetch} />
          ))}
        </div>

      </main>
    </>
  )
}
