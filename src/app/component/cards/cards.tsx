import React from 'react'

const Home = () => {
  return (
    <div className='bg-background text-foreground flex items-center justify-center min-h-screen'>
    <div className='bg-card p-8 rounded-lg shadow-lg flex items-center'>
      <img
        src="https://placehold.co/150x150"
        alt="Profile"
        className="rounded-full mr-6"
      />
      <div>
        <h1 className='text-3xl font-bold'>Hi, I am</h1>
        <h2 className='text-4xl font-extrabold'>Tomasz Gajda</h2>
        <p className='text-lg text-muted-foreground'>Front-end Developer / UI Designer</p>
        <div className='flex space-x-4 mt-4'>
          <a href="mailto:example@example.com" className='text-muted hover:text-primary'>
            <img src="https://openui.fly.dev/openui/email.svg?text=✉️" alt="Email" className="h-6 w-6" />
          </a>
          <a href="https://github.com" className='text-muted hover:text-primary'>
            <img src="https://openui.fly.dev/openui/github.svg?text=🐱" alt="GitHub" className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" className='text-muted hover:text-primary'>
            <img src="https://openui.fly.dev/openui/linkedin.svg?text=🔗" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
        <p className='text-sm text-muted-foreground mt-2'>this is not my photo, but I dearly hope to get one just like this</p>
      </div>
    </div>
  </div>
  )
}

export default Home
