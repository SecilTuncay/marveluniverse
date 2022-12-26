import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
