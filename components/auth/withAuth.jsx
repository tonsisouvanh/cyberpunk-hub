"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function withAuth(Component) {
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
