import "@/assets/styles/global.css";
import AuthProvider from "@/components/AuthProvider";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import { Noto_Sans_Lao } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "PropertyPulse | Find the perfect Rental",
  description: "Find your dream rental property",
};
const notoSansLao = Noto_Sans_Lao({
  subsets: ["lao"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const AminLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${notoSansLao.className} relative bg-gradient-to-r from-slate-50 to-gray-100`}
        >
          <Sidebar />
          <Topbar />
          <main className="p-4 lg:p-10">{children}</main>
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default AminLayout;
