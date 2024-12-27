import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footer";
import "./globals.css";
import TanstackQueryProvider from "../../providers/TanstackQueryProvider";
import ContextProvider from "../../providers/contextProvider";
import { Toaster } from "react-hot-toast";
import AuthForm from "../../components/organisms/AuthForm";

export const metadata = {
  title: "Torino website",
  description: "Take your tickets easily",
};

const Layout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <TanstackQueryProvider>
          <ContextProvider>
          <Toaster />
          <Header />
          <main style={{ backgroundColor: "#f3f3f3" }}>{children}</main>
          <AuthForm />
          <Footer />
          </ContextProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
};

export default Layout;
