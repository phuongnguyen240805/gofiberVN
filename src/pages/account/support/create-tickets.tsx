import { Breadcumb } from '@/components/useAllPage';
import { useUser } from '@/context/userContext';
import { PrimaryLayout } from '@/layouts';
import { ReactElement, useEffect, useState } from 'react';

const MyTickets = () => {
  const [formData, setFormData] = useState({
    fullName: 'Dinh Anh',
    email: 'dqtanh.1123.cv@gmail.com',
    subject: '',
    department: '',
    priority: '',
    message: '',
    fileName: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: `${user.first_name || 'A'} ${user.last_name || 'Nguyễn'}`,
        email: user.email || 'abc@gmail.com',
      }));
    }
  }, [user]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      setFormData(prev => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = () => {
    const finalData = {
      ...formData,
      attachments: files,
    };

    console.log('Form Data:', finalData);
  };

  return (
    <div className="flex flex-col gap-6">
      <Breadcumb title="My Tickets" />

      {/* Open Ticket Form */}
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
            <path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"></path>
          </svg>
          <span className="text-base font-semibold text-blue-600">
            Open Ticket
          </span>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-4">
            {/* Name - Disabled */}
            <div className="group pointer-events-none relative w-full opacity-50">
              <div className="relative">
                <input
                  id="fullName"
                  type="text"
                  disabled
                  value={formData.fullName}
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none"
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500"
                >
                  Name
                </label>
              </div>
            </div>

            {/* Email - Disabled */}
            <div className="group pointer-events-none relative w-full opacity-50">
              <div className="relative">
                <input
                  id="email"
                  type="text"
                  disabled
                  value={formData.email}
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-0 -translate-y-[calc(100%+8px)] bg-white px-2 text-sm text-gray-500"
                >
                  Email Address
                </label>
              </div>
            </div>

            {/* Subject */}
            <div className="group relative w-full">
              <div className="relative">
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={e => handleInputChange('subject', e.target.value)}
                  placeholder=" "
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-[calc(100%+8px)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  Subject
                </label>
              </div>
            </div>

            {/* Department */}
            <div className="relative w-full max-sm:min-w-full lg:w-[calc(50%-8px)] lg:min-w-[320px]">
              <select
                value={formData.department}
                onChange={e => handleInputChange('department', e.target.value)}
                className="peer w-full appearance-none rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
              >
                <option value=""></option>
                <option value="651674e44b683700eaa8dd03">IT</option>
                <option value="67be9d815e4767587a18189f">SALE</option>
              </select>
              <label className="peer-[:not([value=''])]-translate-y-[calc(100%+8px)] absolute left-3 top-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500 peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-[:not([value=''])]:top-0">
                Department
              </label>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>

            {/* Priority */}
            <div className="relative w-full max-sm:min-w-full lg:w-[calc(50%-8px)] lg:min-w-[320px]">
              <select
                value={formData.priority}
                onChange={e => handleInputChange('priority', e.target.value)}
                className="peer w-full appearance-none rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
              >
                <option value=""></option>
                <option value="1">Normal</option>
                <option value="2">Prioritize</option>
                <option value="3">Urgent</option>
              </select>
              <label className="peer-[:not([value=''])]-translate-y-[calc(100%+8px)] absolute left-3 top-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500 peer-focus:top-0 peer-focus:-translate-y-[calc(100%+8px)] peer-[:not([value=''])]:top-0">
                Prioritize
              </label>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>

            {/* Message */}
            <div className="flex w-full flex-col">
              <p className="mb-2 text-sm font-medium text-gray-700">Message</p>
              <textarea
                value={formData.message}
                onChange={e => handleInputChange('message', e.target.value)}
                className="min-h-[200px] w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm outline-none transition-colors hover:border-gray-400 focus:border-gray-900"
                placeholder="Enter your message here..."
              />
            </div>

            {/* Attachments */}
            <div className="w-full">
              <p className="mb-3 text-sm font-medium text-gray-700">
                Attachments
              </p>
              <div className="flex flex-wrap gap-4 max-sm:flex-col-reverse">
                <div className="flex flex-1 flex-col">
                  <div className="mb-4 flex w-full flex-col last:mb-0">
                    <div className="flex flex-1 flex-wrap items-center gap-2">
                      <input
                        type="file"
                        accept=".jpg,.JPG,.gif,.GIF,.jpeg,.JPEG,.png,.PNG,.bmp,.BMP,.pdf,.PDF,.doc,.DOC,.txt,.TXT,.zip,.ZIP,.rar,.RAR,.tar,.gz,.tgz,.log,.tiff,.TIFF,.docx,.xlsx,.csv"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z"></path>
                        </svg>
                        <span className="hidden lg:block">Choose File</span>
                      </label>
                      <div className="relative flex flex-1">
                        <input
                          placeholder="Enter file name"
                          value={formData.fileName}
                          onChange={e =>
                            handleInputChange('fileName', e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Allowed File Extensions */}
            <div className="my-4 w-full rounded-xl bg-blue-50 p-3">
              <p className="text-xs italic text-blue-600">
                Allowed File Extensions: .jpg, .JPG, .gif, .GIF, .jpeg, .JPEG,
                .png, .PNG, .bmp, .BMP, .pdf, .PDF, .doc, .DOC, .txt, .TXT,
                .zip, .ZIP, .rar, .RAR, .tar, .gz, .tgz, .log, .tiff, .TIFF,
                .docx, .xlsx, .csv
              </p>
            </div>

            {/* Add More Button */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
              </svg>
              Add More
            </button>

            {/* Submit Button */}
            <div className="flex w-full flex-wrap justify-end gap-5">
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyTickets.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{ title: 'My Tickets', canonical: '/account/support/my-tickets' }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default MyTickets;
