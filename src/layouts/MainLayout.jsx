import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => <><Navbar /> <main>{children}</main> <Footer /></>;
export default MainLayout;
