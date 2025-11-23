"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PacmanLoader } from "react-spinners";
import { AuthContext } from "../../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PacmanLoader color="#5e5feb" size={20} />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return children;
};

export default PrivateRoute;
