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
     <header>
        <Header />
         <nav className="nav">
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