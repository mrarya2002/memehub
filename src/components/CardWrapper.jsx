import React from "react";
import { Link } from "react-router-dom";
import { useState ,useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';


const CardWrapper = () => {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const videoCollection = collection(db, 'memes');
      const snapshot = await getDocs(videoCollection);
      const videoData = [];
      snapshot.forEach((doc) => {
        videoData.push({...doc.data(),id:doc.id});
      });
      setVideos(videoData);
    };

    fetchData();
  }, []);
  console.log(videos)
  return (
    <>
      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4  md:px-0 gap-3">
            {videos.map((video,index)=>(
              <div key={index} className="card w-full">
              <Link href={`/Memeplay/${video.id}`}>
                <div className="top w-full h-44 relative">
                  <video className='w-full h-full object-cover' src={video.video}/>
                  <span className='absolute bottom-3 right-3 bg-black flex gap-3'>
                    <p>{video.category}</p>
                    <p>{video.duration}</p>
                  </span>
                </div>
              </Link>
              <div className="bottom relative">
                <div className="stats flex justify-between">
                  <p><i className="text-sm fas fa-heart"></i></p>
                  <p className="text-end pr-3">{video.source}</p>
                </div>
                <span className="w-full flex justify-between items-center">
                  <p className="w-[85%] text-lg">{video.title}</p>
                  <button className="w-[10%] self-start" >
                    <i className="fas fa-ellipsis-v text-xl"></i>
                  </button>
                </span>
              </div>
            </div> 
            ))}
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
