import React from "react";
import Category from "../components/Category";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Card from "../components/Card";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const videoCollection = collection(db, "memes");
      const snapshot = await getDocs(videoCollection);
      const videoData = [];
      snapshot.forEach((doc) => {
        videoData.push({ ...doc.data(), id: doc.id });
      });
      setVideos(videoData);
    };

    fetchData();
  }, []);
  console.log(videos);
  return (
    <>
      <Category />
      <div className="container mx-auto mb-10 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4  md:px-0 gap-3">

        {videos.map((video,index)=>(
              <Card title={video.title} source={video.source} video={video.video} duration={video.duration} category={video.category} index={index} id={video.id}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
