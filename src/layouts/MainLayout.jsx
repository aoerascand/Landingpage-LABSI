import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import WhatsAppFloat from "../components/WhatsApp/WhatsAppFloat";

const MainLayout = ({ children }) => <>
	<Navbar />
	<main>{children}</main>
	<Footer />
	<WhatsAppFloat />
</>;

export default MainLayout;
