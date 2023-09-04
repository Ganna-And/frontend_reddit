import React from 'react';
import TopicsList from './TopicsListList';


type TopicsListMobProps = {
    
};

const TopicsListMob:React.FC<TopicsListMobProps> = () => {
    
    return (
        <details className="collapse  
        ">
  <summary className="collapse-title text-xl font-medium text-center ">Click to open subdirectories</summary>
  <div className="collapse-content "> 
    <TopicsList/>
  </div>
</details>
    )
}
export default TopicsListMob;