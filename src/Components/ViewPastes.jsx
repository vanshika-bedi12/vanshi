import React from 'react'
import  { useState } from 'react'
import { useSearchParams ,useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import {useSelector} from "react-redux";
import { useEffect } from 'react';

const ViewPastes = () => {
  const {id}=useParams();
  const allPastes=useSelector((state)=>state.paste.pastes);
  const paste=allPastes.filter((p)=>p._id===id)[0];
  console.log("Final Paste ", paste);
  return (
    <div>
    <div className='flex flex-row gap-7 place-content-between '>
    <input
    className='p-2 rounded-2xl border-2 mt-2 w-[66%] pl-4'
     type="text"
      placeholder='Enter title here'
       value={paste.title}
       disabled
    onChange={(e)=>setTitle(e.target.value)}/>

  </div>
  <div className='mt-8'>
    <textarea
    className='mt-4 min-w-[500px] border-2 rounded-2xl p-4'
    value={paste.content}
    disabled
    placeholder='Enter content here!'
    onChange={(e)=>setValue(e.target.value)}
    rows={20}
    >
  </textarea>
  </div>
  </div>
  )
}

export default ViewPastes
