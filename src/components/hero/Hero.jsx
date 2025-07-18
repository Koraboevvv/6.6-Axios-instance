import React from 'react'
import { usefetch } from '../../hooks/useFetch'

const Hero = () => {
  const { data, error, loading } = usefetch("/product", { limit: 16 })

  if (loading) return <div className="p-6 text-lg">Loading...</div>
  if (error) return <div className="p-6 text-red-500">Error: {error.message}</div>
  if (!data || !Array.isArray(data.products)) return <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100 px-4">
      <h1 className="text-[80px] font-bold text-[#ddd]">Loading</h1>
  </div>
  return (
      <div className="hero bg-gray-100 p-6 rounded-xl shadow-md container">
        <h1 className="text-3xl font-bold mb-4">Top Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={product.images}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold ">{product.title}</h2>
              <p className="text-[18px] text-right text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Hero
