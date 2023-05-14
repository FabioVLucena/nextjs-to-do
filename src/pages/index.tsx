import Head from 'next/head'
import Button from '../components/Button'
import Input from '../components/Input'
// import TaskCard from '../components/TaskCard'
// import { useQuery } from 'react-query'
// import apiClient from '../config/apiClient'

// type Task = {
//   id: number,
//   descricao: string
// };

export default function Home() {
  // const { data } = useQuery<Task[]>("todos", () => {
  //   return apiClient
  //     .get("/tasks")
  //     .then((response) => response.data);
  // })

  // {data?.map((task) => {
  //   console.log(task)
  // })}
    
  // {data?.map((task) => {
  //   <TaskCard id={task.id} descricao={task.descricao} />
  // })}
  return (
    <>
      <Head>
        <title>Next To Do</title>
      </Head>
      <main className='flex flex-col justify-center w-screen h-screen'>
        <header className='flex justify-center items-center w-full h-1/5 bg-black-200'>
          <Input label='Descricao...' />
          <Button>
            <svg className="w-10 h-10 text-orange-200" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </Button>
        </header>
        <body className='flex flex-col justify-center items-center w-full h-4/5'>
          TESTE
        </body>
      </main>
    </>
  )
}
