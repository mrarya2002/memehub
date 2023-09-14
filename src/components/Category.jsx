import React from 'react'

const Category = () => {
  return (
    <>
     <div className="container mx-auto px-2 md:px-0 mb-3">
        <h1 className="text-xl md:text-2xl font-bold my-3">Hot Memes of India</h1>
        <div className="category-slider w-full">
            <div className="wrapper w-full flex items-center md:px-0 py-3 flex-nowrap overflow-auto">
                <span className="px-3 md:px-4 py-2 text-sm md:text-md border border-gray-700 rounded-full text-nowrap mr-3 whitespace-nowrap bg-zinc-900">Hera Pheri</span>
                <span className="px-3 md:px-4 py-2 text-sm md:text-md border border-gray-700 rounded-full text-nowrap mr-3 whitespace-nowrap bg-zinc-900">Round 2 Hell</span>
                <span className="px-3 md:px-4 py-2 text-sm md:text-md border border-gray-700 rounded-full text-nowrap mr-3 whitespace-nowrap bg-zinc-900">Harsh Beniwal</span>
                <span className="px-3 md:px-4 py-2 text-sm md:text-md border border-gray-700 rounded-full text-nowrap mr-3 whitespace-nowrap bg-zinc-900">3 Idiots</span>
                <span className="px-3 md:px-4 py-2 text-sm md:text-md border border-gray-700 rounded-full text-nowrap mr-3 whitespace-nowrap bg-zinc-900">Mirzapur</span>
                <span className="px-3 md:px-4 py-2 text-sm md:text-md border border-gray-700 rounded-full text-nowrap mr-3 whitespace-nowrap bg-zinc-900">Gangs Of Wassepur</span>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Category
