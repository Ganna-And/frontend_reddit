import React , {ReactNode} from 'react';
import Header from './Header/Header';
import TopicsList from './Navbar/TopicsListList';
import TopicsListMob from './Navbar/TopicsListMob';


type LayoutProps = {
    children: ReactNode;
  };
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
     <>
     <header className='relative lg:h-[6rem]'>
        <Header />
         <nav className="nav lg:flex items-center  lg:h-[90vh]">
      <TopicsList/>
      </nav>
      <nav className="navMob">
        <TopicsListMob/>
      </nav> 
       </header> 
    <main>{children}</main>
    </>
   ) 
  }
  
  export default Layout;