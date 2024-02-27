import "@/assets/styles/global.css";
import Navbar from "@/components/navbar/Navbar";
import { Noto_Sans_Lao } from "next/font/google";

export const metadata = {
  title: "PropertyPulse | Find the perfect Rental",
  description: "Find your dream rental property",
};
const notoSansLao = Noto_Sans_Lao({
  subsets: ["lao"],
  display: "swap",
  weight: ["400", "700"],
});
const MainLayout = ({ children }) => {
  return (
    // <AuthProvider>
    <html lang="en">
      <body className={`${notoSansLao.className} relative`}>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        {/* <ToastContainer /> */}
      </body>
    </html>
    //  </AuthProvider>
  );
};

export default MainLayout;
