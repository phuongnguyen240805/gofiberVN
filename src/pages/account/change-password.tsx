import { Breadcumb } from "@/components/useAllPage";
import { PrimaryLayout } from "@/layouts";
import { api } from "@/utils/api";
import { ReactElement, useState } from "react";
import { accessToken } from "@/context/userContext";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { data: userData } = api.medusa.userDetail.useQuery(
    { accessToken: accessToken || undefined },
    {
      enabled: !!accessToken,
    }
  );

  const changePassword = api.medusa.changePassword.useMutation({
    onSuccess: () => {
      alert("Đổi mật khẩu thành công!");
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
    },
    onError: (err) => alert(err.message)
  })

  const handlePasswordChange = (field: string, value: string) => {
    setPasswords((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Add password change logic here
    console.log("Passwords:", passwords);

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Mật khẩu mới không khớp.");
      return;
    }

    // Gọi API đổi trực tiếp
    changePassword.mutate({
      accessToken: accessToken || "",
      currentPassword: passwords.currentPassword,
      newPassword: passwords.newPassword,
      email: userData?.email || ''
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Breadcumb title="Change Password" />

      {/* Change Password Form */}
      <div className="flex flex-col rounded-2xl bg-white shadow-sm">
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-gray-200 bg-white px-3 py-2 text-sm max-sm:py-3">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-blue-600"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75l1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"></path>
          </svg>
          <span className="text-base font-semibold text-blue-600">Change Password</span>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-4">
            {/* Current Password */}
            <div className="group relative w-full">
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={passwords.currentPassword}
                  onChange={(e) => handlePasswordChange("currentPassword", e.target.value)}
                  placeholder=" "
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900 [&::-ms-reveal]:hidden"
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  Password in use
                </label>
              </div>
            </div>

            {/* New Password */}
            <div className="group relative w-full lg:w-[calc(50%-8px)]">
              <div className="relative">
                <input
                  id="newPassword"
                  type="password"
                  value={passwords.newPassword}
                  onChange={(e) => handlePasswordChange("newPassword", e.target.value)}
                  placeholder=" "
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900 [&::-ms-reveal]:hidden"
                />
                <label
                  htmlFor="newPassword"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  New password
                </label>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="group relative w-full lg:w-[calc(50%-8px)]">
              <div className="relative">
                <input
                  id="reNewPassword"
                  type="password"
                  value={passwords.confirmPassword}
                  onChange={(e) => handlePasswordChange("confirmPassword", e.target.value)}
                  placeholder=" "
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900 [&::-ms-reveal]:hidden"
                />
                <label
                  htmlFor="reNewPassword"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  Confirm password
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex flex-wrap justify-end gap-5">
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ChangePassword.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Change Password', canonical: '/account/change-password' }}>
      {page}
    </PrimaryLayout>
  );
}

export default ChangePassword;