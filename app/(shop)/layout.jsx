import "@/assets/styles/global.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Noto_Sans_Lao } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "CyberpunkHub | Dicover Our Cyberpunk Fashion",
  description: "Find your favorite Cyberpunk fashion",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};
const notoSansLao = Noto_Sans_Lao({
  subsets: ["lao"],
  display: "swap",
  weight: ["400", "500", "700"],
});
const ShopLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${notoSansLao.className} min-h-screen flex flex-col relative bg-gradient-to-r from-slate-50 to-gray-100`}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default ShopLayout;
