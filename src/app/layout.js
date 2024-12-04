import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footer";
import "./globals.css";

export const metadata = {
  title: "Torino website",
  description: "Take your tickets easily",
};

const Layout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
