import UsersTable from "@/components/Dashboard/UsersTable";
import ResumeSetting from "@/components/Dashboard/ResumeSetting";
import SocialSetting from "@/components/Dashboard/SocialSetting";
import { userApi } from "@/service/user";
import { FaUsers } from "react-icons/fa";

export const dynamic = "force-dynamic";

const SettingsPage = async () => {
  let users: any[] = [];
  try {
    const res = await userApi.getAllUsers();
    users = Array.isArray(res) ? res : (Array.isArray((res as any)?.data) ? (res as any).data : []);
  } catch (error) {
    console.error("Failed to load users:", error);
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="border-l-4 border-primary pl-4 md:pl-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
            User <span className="text-primary">Management</span>
          </h1>
          <p className="text-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mt-1 opacity-70">
            All registered platform users
          </p>
        </div>
        <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 px-4 py-2 rounded-sm">
          <FaUsers className="text-primary" />
          <span className="text-xs font-black text-white uppercase tracking-widest tabular-nums">
            {users.length} {users.length === 1 ? "User" : "Users"}
          </span>
        </div>
      </div>

      <ResumeSetting />

      <SocialSetting />
      
      <div className="pt-8 border-t border-white/10">
        <div className="border-l-4 border-primary pl-4 md:pl-6 mb-8">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
            Users
          </h2>
        </div>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default SettingsPage;
