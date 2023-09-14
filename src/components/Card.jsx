import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const {title,source,duration,video,category,id,index} = props
  return (
    <>
     <div key = {index} className="card w-full">
            <Link to={`/play/${id}`}>
              <div className="top w-full h-44 relative">
                <video className='w-full h-full object-cover' src={video}></video>
                <div class="v-info absolute flex gap-x-2 bottom-3 right-2">
                  <button class="text-xs px-2 py-1 bg-black tracking-wider">
                    <i class="fas fa-star pr-1"></i>{category}
                  </button>
                  <p class="text-xs px-2 py-1 bg-black/30">{duration}sec</p>
                </div>
              </div>
            </Link>
            <div className="bottom relative">
              <div className="stats flex justify-between">
                <p><i className="text-sm fas fa-heart"></i></p>
                <p className="text-end pr-3 text-sm text-zinc-400">{source}</p>
              </div>
              <span className="w-full flex justify-between items-center">
                <p className="w-[85%] text-lg">{title}</p>
                <button className="w-[10%] self-start" >
                  <i className="fas fa-ellipsis-v text-xl"></i>
                </button>
              </span>
              {/* <div className="user-action hidden absolute bg-zinc-800 flex flex-col right-8 top-8">
                <a href="#" className="px-4 py-3 text-lg font-lg text-gray-400 border-b border-gray-300"><i className="fas fa-book-bookmark pr-2"></i> Add to Watchlist</a>
                <a href="#" className="px-4 py-3 text-lg font-lg text-gray-400"><i className="fas fa-download"></i> Download Now</a>
              </div> */}
            </div>
          </div> 
    </>
  )
}

export default Card
