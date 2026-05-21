"use client";

import React, { useState } from "react";
import { FaTrash, FaUserShield, FaUser } from "react-icons/fa";
import { toast } from "sonner";
import { deleteUserAction, updateUserRoleAction } from "@/actions/userActions";
import type { USER } from "@/service/user";

interface UsersTableProps {
  users: USER[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  const [pendingId, setPendingId] = useState<string | null>(null);

  const getId = (u: USER) => (u._id || u.id || u.email);

  const handleDelete = async (u: USER) => {
    const id = getId(u);
    if (!id) return;
    if (!confirm(`Delete user "${u.email}"? This cannot be undone.`)) return;

    setPendingId(id);
    const toastId = toast.loading("Deleting user...");
    try {
      const res = await deleteUserAction(id);
      if (!res.success) throw new Error(res.error);
      toast.success("User deleted", { id: toastId });
    } catch (error: any) {
      toast.error(error.message || "Failed to delete user", { id: toastId });
    } finally {
      setPendingId(null);
    }
  };

  const handleToggleRole = async (u: USER) => {
    const id = getId(u);
    if (!id) return;
    const nextRole = u.role === "admin" ? "user" : "admin";

    setPendingId(id);
    const toastId = toast.loading(`Updating role to ${nextRole}...`);
    try {
      const res = await updateUserRoleAction(id, nextRole);
      if (!res.success) throw new Error(res.error);
      toast.success(`Role updated to ${nextRole}`, { id: toastId });
    } catch (error: any) {
      toast.error(error.message || "Failed to update role", { id: toastId });
    } finally {
      setPendingId(null);
    }
  };

  return (
    <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden overflow-x-auto">
      <table className="w-full text-left min-w-[700px]">
        <thead>
          <tr className="border-b border-white/5 bg-white/[0.02]">
            <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em] w-16">#</th>
            <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">User</th>
            <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">Email</th>
            <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">Role</th>
            <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em] text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {users.length === 0 && (
            <tr>
              <td colSpan={5} className="px-6 py-10 text-center text-secondary/60 text-sm uppercase tracking-widest">
                No users found.
              </td>
            </tr>
          )}
          {users.map((u, index) => {
            const id = getId(u);
            const isPending = pendingId === id;
            const isAdmin = u.role === "admin";
            return (
              <tr key={id} className="hover:bg-white/[0.01] transition-colors">
                <td className="px-6 py-4">
                  <span className="text-sm font-mono font-bold text-primary/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    {u.photo ? (
                      <img src={u.photo} alt={u.name || u.email} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-700/40 flex items-center justify-center text-white font-black text-sm border border-white/10">
                        {(u.name || u.email)?.[0]?.toUpperCase()}
                      </div>
                    )}
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {u.name || "Unnamed"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-secondary/80 font-mono">{u.email}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm border ${
                    isAdmin
                      ? "text-blue-400 border-blue-500/30 bg-blue-500/5"
                      : "text-secondary/70 border-white/10 bg-white/5"
                  }`}>
                    {u.role || "user"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => handleToggleRole(u)}
                      disabled={isPending}
                      title={isAdmin ? "Demote to user" : "Promote to admin"}
                      className="p-2 text-secondary hover:text-blue-400 transition-colors bg-white/5 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {isAdmin ? <FaUser size={14} /> : <FaUserShield size={14} />}
                    </button>
                    <button
                      onClick={() => handleDelete(u)}
                      disabled={isPending}
                      title="Delete user"
                      className="p-2 text-secondary hover:text-red-500 transition-colors bg-white/5 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
