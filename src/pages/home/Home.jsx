import React from 'react'
import Hero from '../../components/hero/Hero'
import { usefetch } from '../../hooks/useFetch'
import Login from '../login/Login'

const Home = () => {
  const { data, error, loading } = usefetch("/comments", { limit: 24 })
  
    if (loading) return <div className="p-6 text-lg">Loading...</div>
    if (error) return <div className="p-6 text-red-500">Error: {error.message}</div>
    if (!data || !Array.isArray(data.comments)) return<div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100 px-4">
      <h1 className="text-[80px] font-bold text-[#ddd]">Loading</h1>
  </div>
  
  return (
    
    <div className="hero bg-gray-100 p-6 rounded-xl shadow-md container mt-[20px]">
      <h1 className="text-3xl font-bold mb-4">Top Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.comments.map((comments) => (
          <div key={comments.id} className="bg-white p-4 h-[170px] pt-[50px] rounded-lg shadow hover:shadow-lg transition">
            <h3>fullName: {comments.user.fullName}</h3>
            <h4>Username: {comments.user.username}</h4>
           <div className='flex justify-between mt-[25px]'>
             <span className="text-lg font-semibold  ">Likes: {comments.likes}</span>
            <span className="text-[18px] text-right text-gray-600">Posts: {comments.postId}</span>
           </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home