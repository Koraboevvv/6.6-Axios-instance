import React from 'react'
import Hero from '../../components/hero/Hero'
import { usefetch } from '../../hooks/useFetch'

const Contact = () => {
  const { data, error, loading } = usefetch("/todos", { limit: 24 })
  
    if (loading) return <div className="p-6 text-lg">Loading...</div>
    if (error) return <div className="p-6 text-red-500">Error: {error.message}</div>
    if (!data || !Array.isArray(data.todos)) return<div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100 px-4">
      <h1 className="text-[80px] font-bold text-[#ddd]">Loading</h1>
  </div>
  
  return (
    <div className="hero bg-gray-100 p-6 rounded-xl shadow-md container mt-[20px]">
      <h1 className="text-3xl font-bold mb-4">todos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.todos.map((todos) => (
          <div key={todos.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Todo: {todos.todo}</h3>
            {/* <p className="text-gray-600 mt-2">{todos.completed}</p> */}
            <p className="text-gray-600 mt-2">UserId: {todos.userId}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Contact