import { searchTermState } from '@/atoms/postsAtom'
import React, {useState, useEffect} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

const Search = () => {
 
   const [term, setTerm] = useRecoilState(searchTermState);
/* 
   useEffect(()=>{
  
   }[term]) */
  return (
    <div className="flex-none gap-1">
    <div className="form-control">
      <input type="text" placeholder="Search" value={term} onChange={(e)=>setTerm(e.target.value)} className="input  md:w-auto lg:w-400px border-accent border-2" />
    </div>
   </div>
  )
}

export default Search
