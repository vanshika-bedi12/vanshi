import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import { AiFillEdit, AiFillEye,AiFillDelete,AiOutlineCopy,AiOutlineShareAlt } from "react-icons/ai";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  const handleCopy = (pasteId) => {
    const link = `${window.location.origin}/pastes/${pasteId}`;
    copyToClipboard(link);
    toast.success("Link copied to clipboard!")
  };



  return (
    <div>
      <input
        className='p-2 border-2 rounded-2xl min-w-[600px] mt-4 '
        type="search"
        value={searchTerm}
        placeholder="search here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />


      <div className=' border-4 rounded-s-md mt-5 flex flex-col gap-5'>
        {
          filteredData.length >= 0 &&
          filteredData.map(
            (paste) => {
              return (
                <div className='border-2 rounded-2xl mt-5' key={paste?._id}>
                  <div className='text-2xl font-bold'>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                  <div className='flex flex-row place-content-evenly'>

                    <button>

                      <a href={`/?pasteId=${paste?._id}`}>
                        <AiFillEdit size={24} />
                      </a>
                    </button>

                    <button>
                      <a href={`/pastes/${paste?._id}`}>
                        <AiFillEye size={24} />
                      </a>
                    </button>
                    
                    <button onClick={() => handleDelete(paste?._id)} 
                     
                    >
                      <AiFillDelete size={24} c/>
                    </button>

                    <button onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Copied to clipboard")
                    }}>
                      <AiOutlineCopy size={20} />
                    </button>

                    <button onClick={() => handleCopy(paste?._id)} >
                      <AiOutlineShareAlt size={24} />
                    </button>

                  </div>
                  <div>
                    {paste.createdAt}
                  </div>
                </div>
              )
            }
          )

        }
      </div>
    </div>
  )
}

export default Pastes
