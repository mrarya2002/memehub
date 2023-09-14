import React from 'react'
import Link from 'next/link'

const Pagination = () => {
  return (
    <>
     <div class="container mx-auto flex justify-center items-center my-3">
      <ul class="w-50% flex items-center gap-1">
        <li>
          <Link
            href="#"
            class="px-4 md:px-8  py-2 md:py-3 text-md md:text-lg font-bold text-black bg-[#ff9000] rounded-md"
            >Prev</Link>
        </li>
        <li>
          <Link href="#" class="px-3 py-2 md:px-5 md:py-3 text-md md:text-lg font-bold bg-zinc-950 rounded-md"
            >1</Link>
        </li>
        <li>
          <Link href="#" class="px-3 py-2 md:px-5 md:py-3 text-md md:text-lg font-bold bg-zinc-950 rounded-md"
            >2</Link>
        </li>
        <li>
          <Link href="#" class="px-3 py-2 md:px-5 md:py-3 text-md md:text-lg font-bold bg-zinc-950 rounded-md"
            >3</Link>
        </li>
        <li>
          <Link href="#" class="px-3 py-2 md:px-5 md:py-3 text-md md:text-lg font-bold bg-zinc-950 rounded-md"
            >4</Link>
        </li>
        <li>
          <Link href="#" class="px-3 py-2 md:px-5 md:py-3 text-md md:text-lg font-bold bg-zinc-950 rounded-md"
            >5</Link>
        </li>
        <li>
          <Link
            href="#"
            class="px-4 md:px-8  py-2 md:py-3 text-md md:text-lg font-bold text-black bg-[#ff9000] rounded-md"
            >Next</Link>
        </li>
      </ul>
    </div> 
    </>
  )
}

export default Pagination
