import React, { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import {useSelector} from "react-redux";
import { useEffect } from 'react';

const Home = () => {
  const [title, setTitle]=useState('')
  const [value, setValue]=useState('')
  const [searchParams, setSearchParams]=useSearchParams();
  const pasteId=searchParams.get("pasteId");
  const dispatch=useDispatch();
  const allPastes=useSelector((state)=>state.paste.pastes);

  useEffect(()=>{
         if(pasteId)
         {
            const paste=allPastes.find((p)=> p._id===pasteId);
            setTitle(paste.title);
            setValue(paste.content);
         }           
  },[pasteId])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  function createPaste() {
         const paste={
          title:title,
         content:value,
         _id:pasteId || Date.now().toString(36),
         createdAt:formatDate(new Date().toISOString())
        
         }
         if(pasteId)
         {
             //update
             dispatch(updateToPastes(paste))
         }
         else
         {
           // create new paste
           dispatch(addToPastes(paste))
         }

         // after creation or updation do cleaning process
         setTitle('');
         setValue('');
         setSearchParams({});
  }
  return (
    <div >
      <div className='flex flex-row gap-7 place-content-between '>
      <input
      className='p-2 rounded-2xl border-2 mt-2 w-[66%] pl-4'
       type="text"
        placeholder='Enter title here'
         value={title}
      onChange={(e)=>setTitle(e.target.value)}/>

      <button onClick={createPaste}className='p-2 rounded-2xl border-2 mt-2'>
        {
          pasteId ? "Update My Paste" :"Create My Paste"
        }
      </button>
    </div>
    <div className='mt-8'>
      <textarea
      className='mt-4 min-w-[500px] border-2 rounded-2xl p-4'
      value={value}
      placeholder='Enter content here!'
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
      >
    </textarea>
    </div>
    </div>
  )
}

export default Home
