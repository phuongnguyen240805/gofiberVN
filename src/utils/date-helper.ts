export const formatDate = (dateString: string | Date | undefined) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  // Kiểm tra nếu date không hợp lệ
  if (isNaN(date.getTime())) return "Invalid Date";

  // Định dạng: 15:31 - 03/01/2026
  return new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh", 
  }).format(date);
};

export const getExpiryDate = (startDate: string | Date, days: number = 30) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + days);
  return formatDate(date);
};