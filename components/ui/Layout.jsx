import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout = ({ children }) => {
  return (
    <div id="layout" className="relative min-h-full">
      <Header />
      <div id="mainBody" className="md:pb-[9rem] pb-16 w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
