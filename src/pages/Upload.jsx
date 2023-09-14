import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import swal from 'sweetalert'
import { memeRef } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { v4 } from "uuid";
const Upload = () => {
  const [form, setForm] = useState({
    title: "",
    source: "",
    duration: "",
    category: "",
    video: "",
  });
  const [loading, setLoading] = useState(false);
  const [videoUpload, setvideoUpload] = useState(null);
  // const imagesListRef = ref(storage, "videos/");
  const uploadFile = async () => {
    setLoading(true);
    try {
      if (videoUpload == null) return;
      const imageRef = ref(storage, `videos/${videoUpload.name + v4()}`);
      uploadBytes(imageRef, videoUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          const set = async () => {
            await addDoc(memeRef, { ...form, video: url });
          };
          set()
          swal({
            title: "Successfully Added",
            icon: "success",
            buttons: false,
            timer: 3000,
          });
          setForm({
            title: "",
            source: "",
            duration: "",
            category: "",
          });
          setLoading(false)
        });
        setLoading(false)
      });
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
      setLoading(false);
    }
    // if (videoUpload == null) return;
    // const imageRef = ref(storage, `videos/${videoUpload.name + v4()}`);
    // uploadBytes(imageRef, videoUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     // setvideoUrls((prev) => [...prev, url]);
    //     const sending = async()=>{
    //         try{
    //             await addDoc(memeRef, {...form,video:url});
    //             swal({
    //             title: "Successfully Added",
    //             icon: "success",
    //             buttons: false,
    //             timer: 3000
    //             })
    //             setForm({
    //             title: "",
    //             source: "",
    //             duration: "",
    //             category: "",
    //             })}
    // catch(err) {
    //             swal({
    //               title: err,
    //               icon: "error",
    //               buttons: false,
    //               timer: 3000
    //             })
    //           }
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <input
        type="text"
        placeholder="title"
        className="text-black"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="source"
        className="text-black"
        value={form.source}
        onChange={(e) => setForm({ ...form, source: e.target.value })}
      />
      <input
        type="text"
        placeholder="duration"
        className="text-black"
        value={form.duration}
        onChange={(e) => setForm({ ...form, duration: e.target.value })}
      />
      <input
        type="text"
        placeholder="category"
        className="text-black"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        type="file"
        onChange={(event) => {
          setvideoUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile} className="px-5 py-2 text-md bg-red-800">
        {loading ? <TailSpin height={25} color="white" /> : "Submit"}
      </button>
    </div>
  );
};

export default Upload;
