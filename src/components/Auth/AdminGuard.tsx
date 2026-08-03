"use client";

import { AuthContext } from "@/app/(AuthCompo)/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { toast } from "sonner";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (!loading && !isAdmin) {
      toast.error("Access denied. Admin only.");
      router.replace("/");
    }
  }, [loading, isAdmin, router]);

  if (loading) {
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

export default AdminGuard;
