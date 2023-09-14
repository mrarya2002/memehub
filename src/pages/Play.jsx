import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Play = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    source: "",
    duration: "",
    video: "",
    category: "",
  });

  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "memes", id);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
      console.log(docSnap.data());
    }

    getData();
  }, []);
  return (
    <>
      <div className="container mx-auto my-4 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <div className="video-container md:col-span-3 mb-5">
            <div className="image w-full h-48 md:h-[80vh]">
              <video
                className="w-full h-full object-cover"
                src={data.video}
                controls
              ></video>
            </div>
            <div className="content px-1">
              <p className="text-xl md:text-2xl font-semibold traking-wider ">
                {data.title}
              </p>
              <div className="user-action-container mt-2">
                <ul className="flex items-center gap-4">
                  <li>
                    <a href="#" className="flex flex-col items-center">
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white text-xl md:text-2xl"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                      </svg>
                      <p>like</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex flex-col items-center">
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                      </svg>{" "}
                      <p>Comment</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex flex-col items-center">
                      <svg
                        class="w-6 h-6 text-white text-xl md:text-2xl"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                      </svg>{" "}
                      <p>Add to star</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex flex-col items-center">
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white text-xl md:text-2xl"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>{" "}
                      <p>Download</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="recommended-container"></div>
        </div>
      </div>
    </>
  );
};

export default Play;
