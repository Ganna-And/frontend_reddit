import React from 'react';
import TopicsList from './TopicsListList';


type TopicsListMobProps = {
    
};

const TopicsListMob:React.FC<TopicsListMobProps> = () => {
    
    return (
        <details className="collapse  flex bg-gradient-to-r from-primary via-accent to-secondary mt-4 md:mt-1">
  <summary className="collapse-title text-xl font-medium text-center  text-black ">Click to open subdirectories</summary>
  <div className="collapse-content"> 
    <TopicsList/>
  </div>
</details>
    )
}
export default TopicsListMob;