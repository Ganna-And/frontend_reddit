import React from 'react';
import SubdirList from './SubdirList';


type CollapseSubdirProps = {
    
};

const CollapseSubdir:React.FC<CollapseSubdirProps> = () => {
    
    return (
        <details className="collapse  flex bg-gradient-to-r from-primary via-accent to-secondary">
  <summary className="collapse-title text-xl font-medium text-center  text-black ">Click to open subdirectories</summary>
  <div className="collapse-content"> 
    <SubdirList/>
  </div>
</details>
    )
}
export default CollapseSubdir;