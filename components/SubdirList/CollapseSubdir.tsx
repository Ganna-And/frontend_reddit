import React from 'react';
import SubdirList from './SubdirList';


type CollapseSubdirProps = {
    
};

const CollapseSubdir:React.FC<CollapseSubdirProps> = () => {
    
    return (
        <details className="collapse bg-base-200 flex">
  <summary className="collapse-title text-xl font-medium">Click to open subdirectories</summary>
  <div className="collapse-content"> 
    <SubdirList/>
  </div>
</details>
    )
}
export default CollapseSubdir;