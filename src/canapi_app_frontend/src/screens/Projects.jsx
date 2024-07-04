import React from 'react'

export default function Projects() {
  return (
    <div className="content-center">
      <h1 className="m-6 text-2xl text-center">Projects</h1>
      <div className="ml-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notey McNotes</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is a sample app that can be used for your own experiments.</p>
        <button onClick="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Launch app</button>
        <button onClick="#" className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Customize</button>
      </div>
    </div>
  )
}
