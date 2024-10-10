import { useEffect, useState } from 'react'

interface Props {
  id: string
  image: string
  title: string
  price: number
}

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products'
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  const handleProductDetails = () => {}

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
          <h1 className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]">
            All-in-One E-commerce App
          </h1>
          <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
            Discover premium products and enjoy shopping with us. Risk Free
            Shopping!
          </h2>
        </div>
      </div>
      {/* Products Section */}
      <div className="container mx-auto bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Featured Products
        </h1>
        {/* Product Grid */}
        <div
          onClick={handleProductDetails}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((product) => (
            <div
              key={product.id}
              className="boder-green-200 overflow-hidden rounded-lg border bg-white"
            >
              <img
                className="h-48 w-full object-cover"
                src={product.image}
                alt="Product"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="mb-4 text-gray-600">$ {product.price}</p>
                <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
