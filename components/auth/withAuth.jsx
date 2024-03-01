"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession, getProviders } from "next-auth/react";

export default function withAuth(Component) {
  //   return function WithAuth(props) {
  //     const { data } = useSession();
  //     console.log("🚀 ~ WithAuth ~ data:", data);

  //     useEffect(() => {
  //       if (!data || data?.role !== "admin") {
  //         redirect("/");
  //       }
  //     }, [data]);

  //     if (!data) {
  //       return null;
  //     }

  //     return <Component {...props} />;
  //   };
  return function WithAuth(props) {
    const { data: session, status } = useSession();
    useEffect(() => {
      // Check if session is still loading
      if (status === "loading") {
        return;
      }

      // Check if session is undefined or user role is not "admin"
      if (!session || session?.role !== "admin") {
        redirect("/");
      }
    }, [session, status]);

    if (status === "loading") {
      return null; // You can return a loading indicator if needed
    }

    return <Component {...props} />;
  };
}
