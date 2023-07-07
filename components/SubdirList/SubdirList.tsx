import React from 'react';
import Image from 'next/image';

type SubdirListProps = {
    
};

const SubdirList:React.FC<SubdirListProps> = () => {
    const communityList=['r/javascript','r/tailwind', '/r/next','r/recoilhacks', 'r/react/','r/reduxjs','r/node','r/Firebase/','r/cssnews/', 'r/typescript'];
    return (
      <div className="container flex flex-wrap justify-center px-4 shadow-2xl md:w-full md:flex-col ">
        <button className="m-2 btn text-sm">
        <div className="avatar ">
  <div className="w-10 rounded-full mr-1 ring-secondary  ring-1 ">
    <Image width={10} height={10} src="https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg" alt="hey" />
  </div>
</div> subditName</button> 
      </div>
    );
}
export default SubdirList;