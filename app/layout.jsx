import "@/assets/styles/global.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "PropertyPulse | Find the perfect Rental",
  description: "Find your dream rental property",
};

const inter = Inter({ subsets: ["latin"] });

const MainLayout = ({ children }) => {
  return (
    // <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
        {/* <ToastContainer /> */}
      </body>
    </html>
    //  </AuthProvider>
  );
};

export default MainLayout;
