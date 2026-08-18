"use client";

import { AuthContext } from "@/app/(AuthCompo)/AuthProvider";
import { userApi } from "@/service/user";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkAccess = async () => {
      if (!loading && !user) {
        toast.error("Please login to access the dashboard.");
        router.replace("/login");
        return;
      }

      if (!loading && user) {
        try {
          const users = await userApi.getAllUsers();
          const isAdmin = users.find((u) => u.email === user.email)?.role === "admin";

          if (mounted) {
            setIsAdmin(isAdmin);
            setChecking(false);
          }

          if (!isAdmin) {
            toast.error("Access denied. Admin only.");
            router.replace("/");
          }
        } catch (error) {
          console.error("Error checking admin status:", error);
          if (mounted) {
            setChecking(false);
          }
          toast.error("Failed to verify access.");
          router.replace("/");
        }
      }
    };

    checkAccess();

    return () => {
      mounted = false;
    };
  }, [loading, user, router]);

  if (loading || checking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;