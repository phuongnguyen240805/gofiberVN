import { Breadcumb } from "@/components/useAllPage";
import { accessToken, useUser } from "@/context/userContext";
import { PrimaryLayout } from "@/layouts";
import { api } from "@/utils/api";
import { ReactElement, useEffect, useState } from "react";

const InfoUSer = () => {
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    email: "dq************@gmail.com",
    phone: "07*****946",
    metadata: {
      personalId: "63*******035",
      clientId: "3596",
      affiliateCode: "https://gofiber.vn/?affiliate=gof0010789",
    },
    company_name: "",
    national: "VN",
    stateCity: "",
    district: "",
    currency: "",
    postCode: "",
    companyTax: "",
    address: "",
  });

  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => {
      // Nếu field thuộc về metadata (ví dụ: personalId)
      if (["personalId", "clientId", "affiliateCode"].includes(field)) {
        return {
          ...prev,
          metadata: {
            ...prev?.metadata,
            [field]: value,
          },
        };
      }
      // Các trường thông thường
      return { ...prev, [field]: value };
    });
  };

  // 1. Khai báo mutation
  const updateMutation = api.medusa.updateUser.useMutation({
    onSuccess: () => {
      alert("Cập nhật thành công!");
    },
    onError: (err) => {
      alert("Lỗi: " + err.message);
    }
  });

  const handleSave = async () => {
    if (!accessToken) return;

    const payload = {
      accessToken: accessToken,
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
      company_name: formData.company_name,
      metadata: {
        ...formData.metadata,
        national: formData.national,
        stateCity: formData.stateCity,
        district: formData.district,
        address: formData.address,
      }
    };

    // 2. Thực hiện gọi API
    updateMutation.mutate(payload);
  };

  const { user } = useUser();

  useEffect(() => {
    setFormData(user)
  }, [user]);

  return (
    <div className="flex flex-col gap-6">
      <Breadcumb title="User Information" />

      <div className="flex flex-col gap-4">
        {/* My Information Section */}
        <div className="flex flex-col rounded-2xl bg-white shadow-sm">
          <div className="flex items-center gap-2 rounded-t-2xl border-b border-gray-200 bg-white px-3 py-2 text-sm max-sm:py-3">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" className="text-blue-600" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 13 3 C 9.144531 3 6 6.144531 6 10 C 6 12.410156 7.230469 14.550781 9.09375 15.8125 C 5.527344 17.34375 3 20.882813 3 25 L 5 25 C 5 20.570313 8.570313 17 13 17 C 15.144531 17 17.0625 17.878906 18.5 19.25 L 13.78125 23.96875 L 13.71875 24.28125 L 13.03125 27.8125 L 12.71875 29.28125 L 14.1875 28.96875 L 17.71875 28.28125 L 18.03125 28.21875 L 28.125 18.125 C 29.285156 16.964844 29.285156 15.035156 28.125 13.875 C 27.542969 13.292969 26.769531 13 26 13 C 25.246094 13 24.484375 13.285156 23.90625 13.84375 L 19.9375 17.8125 C 19.066406 16.976563 18.035156 16.292969 16.90625 15.8125 C 18.769531 14.550781 20 12.410156 20 10 C 20 6.144531 16.855469 3 13 3 Z M 13 5 C 15.773438 5 18 7.226563 18 10 C 18 12.773438 15.773438 15 13 15 C 10.226563 15 8 12.773438 8 10 C 8 7.226563 10.226563 5 13 5 Z M 26 15 C 26.253906 15 26.519531 15.082031 26.71875 15.28125 C 27.117188 15.679688 27.117188 16.289063 26.71875 16.6875 L 17.03125 26.375 L 15.25 26.75 L 15.625 24.96875 L 25.3125 15.28125 C 25.511719 15.082031 25.746094 15 26 15 Z"></path>
            </svg>
            <span className="text-base font-semibold text-blue-600">My information</span>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap gap-4">
              {/* Last Name */}
              <div className="group relative w-full lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="lastname"
                    type="text"
                    value={formData?.last_name}
                    onChange={(e) => handleInputChange("last_name", e.target.value)}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* First Name */}
              <div className="group relative w-full lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="firstname"
                    type="text"
                    value={formData?.first_name}
                    onChange={(e) => handleInputChange("first_name", e.target.value)}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                  />
                  <label
                    htmlFor="firstname"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                  >
                    First Name
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="group relative w-full opacity-50 lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="email"
                    type="text"
                    disabled
                    value={formData?.email}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500"
                  >
                    Email
                  </label>
                  <div className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center text-gray-600">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeWidth="2" d="M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="group relative w-full opacity-50 lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="phonenumber"
                    type="text"
                    disabled
                    value={formData?.phone}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none"
                  />
                  <label
                    htmlFor="phonenumber"
                    className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500"
                  >
                    Phone Number
                  </label>
                  <div className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center text-gray-600">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeWidth="2" d="M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Personal ID */}
              <div className="group relative w-full lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="personalId"
                    type="text"
                    value={formData?.metadata?.personalId}
                    onChange={(e) => handleInputChange("personalId", e.target.value)}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                  />
                  <label
                    htmlFor="personalId"
                    className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500"
                  >
                    Personal ID
                  </label>
                  <div className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center text-gray-600">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeWidth="2" d="M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Code */}
              <div className="group relative w-full opacity-50 lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="client_id"
                    type="text"
                    disabled
                    value={formData?.metadata?.clientId}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none"
                  />
                  <label
                    htmlFor="client_id"
                    className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500"
                  >
                    Code
                  </label>
                </div>
              </div>

              {/* Affiliate Code */}
              <div className="group relative w-full opacity-50">
                <div className="relative">
                  <input
                    id="myAffiliateCode"
                    type="text"
                    disabled
                    value={formData?.metadata?.affiliateCode}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none"
                  />
                  <label
                    htmlFor="myAffiliateCode"
                    className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500"
                  >
                    Affiliate Code
                  </label>
                </div>
              </div>

              {/* Two-factor authentication */}
              <div className="w-full">
                <hr className="my-3 border-b-3 border-blue-500" />
                <div className="flex justify-between sm:pr-4 lg:w-1/2">
                  <div className="my-auto text-sm">Two-factor authentication</div>
                  <div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={twoFactorAuth}
                        onChange={(e) => setTwoFactorAuth(e.target.checked)}
                      />
                      <div className="peer h-7 w-12 rounded-full bg-gray-200 px-1 after:absolute after:left-1 after:top-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information Section */}
        <div className="flex flex-col rounded-2xl bg-white shadow-sm">
          <div className="flex items-center gap-2 rounded-t-2xl border-b border-gray-200 bg-white px-3 py-2 text-sm max-sm:py-3">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-600" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
            <span className="text-base font-semibold text-blue-600">Payment information</span>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap gap-4">
              {/* Company Name */}
              <div className="group relative w-full">
                <div className="relative">
                  <input
                    id="companyName"
                    type="text"
                    value={formData?.company_name}
                    onChange={(e) => handleInputChange("company_name", e.target.value)}
                    placeholder=" "
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                  />
                  <label
                    htmlFor="companyName"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                  >
                    Company Name
                  </label>
                </div>
              </div>

              {/* National */}
              <div className="relative w-full max-sm:min-w-full lg:min-w-[320px] lg:w-[calc(50%-8px)]">
                <select
                  value={formData?.national}
                  onChange={(e) => handleInputChange("national", e.target.value)}
                  className="peer w-full appearance-none rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                >
                  <option value="VN">Việt Nam</option>
                </select>
                <label className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500">
                  National
                </label>
                <svg className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>

              {/* State/City */}
              <div className="relative w-full max-sm:min-w-full lg:min-w-[320px] lg:w-[calc(50%-8px)]">
                <select
                  value={formData?.stateCity}
                  onChange={(e) => handleInputChange("stateCity", e.target.value)}
                  className="peer w-full appearance-none rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                >
                  <option value=""></option>
                  <option value="01">Thành phố Hà Nội</option>
                  <option value="79">Thành phố Hồ Chí Minh</option>
                  <option value="31">Thành phố Hải Phòng</option>
                  <option value="48">Thành phố Đà Nẵng</option>
                  <option value="92">Thành phố Cần Thơ</option>
                </select>
                <label className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500 peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)]">
                  State/City(*)
                </label>
                <svg className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>

              {/* District */}
              <div className="relative w-full max-sm:min-w-full lg:min-w-[320px] lg:w-[calc(50%-8px)]">
                <select
                  value={formData?.district}
                  onChange={(e) => handleInputChange("district", e.target.value)}
                  className="peer w-full appearance-none rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                >
                  <option value=""></option>
                </select>
                <label className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500 peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)]">
                  District(*)
                </label>
                <svg className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>

              {/* Currency */}
              <div className="relative w-full max-sm:min-w-full lg:min-w-[320px] lg:w-[calc(50%-8px)]">
                <select
                  value={formData?.currency}
                  onChange={(e) => handleInputChange("currency", e.target.value)}
                  className="peer w-full appearance-none rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                >
                  <option value=""></option>
                  <option value="vnd">VND</option>
                  <option value="usd">USD</option>
                </select>
                <label className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500 peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)]">
                  Currency
                </label>
                <svg className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>

              {/* Post Code */}
              <div className="group relative w-full lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="postCode"
                    type="text"
                    value={formData?.postCode}
                    onChange={(e) => handleInputChange("postCode", e.target.value)}
                    placeholder=" "
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                  />
                  <label
                    htmlFor="postCode"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                  >
                    Post Code
                  </label>
                </div>
              </div>

              {/* Company Tax */}
              <div className="group relative w-full lg:w-[calc(50%-8px)]">
                <div className="relative">
                  <input
                    id="companyTax"
                    type="text"
                    value={formData?.companyTax}
                    onChange={(e) => handleInputChange("companyTax", e.target.value)}
                    placeholder=" "
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                  />
                  <label
                    htmlFor="companyTax"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                  >
                    Company tax
                  </label>
                  <div className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center text-gray-600">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeWidth="2" d="M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group relative w-full">
                <div className="relative">
                  <input
                    id="address"
                    type="text"
                    value={formData?.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder=" "
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                  />
                  <label
                    htmlFor="address"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                  >
                    Address(*)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex flex-wrap justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

InfoUSer.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: "User Info", canonical: "/account/info" }}>
      {page}
    </PrimaryLayout>
  );
};

export default InfoUSer;