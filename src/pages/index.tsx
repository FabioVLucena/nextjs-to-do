import Head from 'next/head'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className='flex justify-center'>
        {/* <Button>
          <svg className="w-10 h-10 dark:text-orange-200" fill="none" stroke="currentColor" stroke-width="2.3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
          </svg>
        </Button> */}

        <Input label='Input...' />

      </main>
    </>
  )
}
