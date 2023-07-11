import React , {ReactNode} from 'react';
import Navbar from '../Navbar/Navbar';
import SubdirList from '../SubdirList/SubdirList';
import CollapseSubdir from '../SubdirList/CollapseSubdir';
CollapseSubdir

type LayoutProps = {
    children: ReactNode;
  };
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
      <main className="flex flex-col  md:flex-row">
        <Navbar />
         <section className="invisible h-0 md:flex-col md:visible md:w-1/5 md:ml-10 md:mt-32 md:bg-gradient-to-r from-primary via-accent to-secondary">
      <SubdirList/>
      </section>
      <section className="visible w-full mt-24  md:visible md:w-0 ">
        <CollapseSubdir />
      </section>
    <section>{children}</section>;
    </main>) 
  };
  
  export default Layout;