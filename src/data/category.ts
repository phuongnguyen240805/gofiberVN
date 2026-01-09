export interface ServicePackage {
  id: string | number;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  duration: string;
  highlight?: boolean;
  image?: string;
}

interface CategoryData {
  id: string;
  brandName: string;
  brandLogo: string;
  brandColorIcon?: string;
  features: string[];
  packages: ServicePackage[];
}

export const CATEGORIES_DATA: CategoryData[] = [
  {
    id: 'netflix',
    brandName: 'Netflix Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    brandColorIcon: 'N',
    features: [
      'Thư viện phim và chương trình truyền hình phong phú.',
      'Nội dung gốc (Originals) sản xuất bởi Netflix.',
      'Xem trên TV, điện thoại, máy tính bảng.',
      'Chất lượng Video 4K Ultra HD và HDR.',
      'Không có quảng cáo.',
    ],
    packages: [
      {
        id: 'n1',
        duration: '1 NGÀY',
        name: 'Netflix Premium 1 ngày',
        price: '19.000đ',
        oldPrice: '260.000đ',
        discount: '-93%',
        image:
          'https://framerusercontent.com/images/4ytRIhEe2JLwufIlZEhgyy4ZyLg.jpg?scale-down-to=512',
      },
      {
        id: 'n2',
        duration: '1 TUẦN',
        name: 'Netflix Premium 1 tuần',
        price: '39.000đ',
        oldPrice: '260.000đ',
        discount: '-85%',
        image:
          'https://framerusercontent.com/images/4ytRIhEe2JLwufIlZEhgyy4ZyLg.jpg?scale-down-to=512',
      },
      {
        id: 'n3',
        duration: '1 THÁNG',
        name: 'Netflix Premium 1 tháng',
        price: '99.000đ',
        oldPrice: '260.000đ',
        discount: '-62%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/4ytRIhEe2JLwufIlZEhgyy4ZyLg.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'youtube',
    brandName: 'YouTube Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    brandColorIcon: 'Y',
    features: [
      'Xem video không quảng cáo.',
      'Phát nhạc trong nền khi tắt màn hình.',
      'Tải xuống video xem ngoại tuyến.',
      'Bao gồm YouTube Music Premium.',
      'Chất lượng video Premium 1080p Bitrate cao.',
    ],
    packages: [
      {
        id: 'y1',
        duration: '1 THÁNG',
        name: 'YouTube Premium 1 tháng',
        price: '25.000đ',
        oldPrice: '79.000đ',
        discount: '-68%',
        image:
          'https://framerusercontent.com/images/ABHD47U9eD5X94cFytnenZWXHvw.jpg?scale-down-to=512',
      },
      {
        id: 'y2',
        duration: '6 THÁNG',
        name: 'YouTube Premium 6 tháng',
        price: '145.000đ',
        oldPrice: '474.000đ',
        discount: '-69%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/ABHD47U9eD5X94cFytnenZWXHvw.jpg?scale-down-to=512',
      },
      {
        id: 'y3',
        duration: '1 NĂM',
        name: 'YouTube Premium 1 năm',
        price: '279.000đ',
        oldPrice: '948.000đ',
        discount: '-70%',
        image:
          'https://framerusercontent.com/images/ABHD47U9eD5X94cFytnenZWXHvw.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'spotify',
    brandName: 'Spotify Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg',
    features: [
      'Nghe nhạc không quảng cáo.',
      'Phát nhạc offline mọi lúc mọi nơi.',
      'Chất lượng âm thanh cực cao (320kbps).',
      'Chuyển bài không giới hạn.',
      'Nghe chung nhóm (Group Session).',
    ],
    packages: [
      {
        id: 's1',
        duration: '1 THÁNG',
        name: 'Spotify Premium cá nhân',
        price: '29.000đ',
        oldPrice: '59.000đ',
        discount: '-50%',
        image:
          'https://framerusercontent.com/images/khtdzeXxil68qRi8rn0pQMKzY0.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 's2',
        duration: '1 NĂM',
        name: 'Spotify Premium 1 năm',
        price: '199.000đ',
        oldPrice: '590.000đ',
        discount: '-66%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/khtdzeXxil68qRi8rn0pQMKzY0.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'calm',
    brandName: 'Calm Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/a/aa/Calm_logo.svg',
    features: [
      'Thư viện bài thiền phong phú.',
      'Sleep Stories giúp ngủ ngon hơn.',
      'Nhạc thư giãn tập trung công việc.',
      'Masterclasses từ các chuyên gia.',
      'Theo dõi tiến trình tâm trí mỗi ngày.',
    ],
    packages: [
      {
        id: 'c1',
        duration: '1 NĂM',
        name: 'Calm Premium 1 năm',
        price: '150.000đ',
        oldPrice: '1.200.000đ',
        discount: '-87%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/wQ0DhThXACd3S3oV4HSKieL8TuM.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'iqiyi',
    brandName: 'iQIYI Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/e/e4/IQIYI_logo.svg',
    features: [
      'Xem phim bản quyền sớm nhất.',
      'Chất lượng 1080p / 4K chuẩn rạp.',
      'Âm thanh vòm Dolby Atmos.',
      'Bỏ qua quảng cáo hoàn toàn.',
      'Độc quyền show truyền hình thực tế.',
    ],
    packages: [
      {
        id: 'i1',
        duration: '1 THÁNG',
        name: 'iQIYI Standard 1 tháng',
        price: '45.000đ',
        oldPrice: '89.000đ',
        discount: '-50%',
        image:
          'https://framerusercontent.com/images/zDGilhaBv0MPAcLH3yVGZqFV1xw.jpg?scale-down-to=512',
      },
      {
        id: 'i2',
        duration: '1 NĂM',
        name: 'iQIYI VIP 1 năm',
        price: '399.000đ',
        oldPrice: '990.000đ',
        discount: '-60%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/zDGilhaBv0MPAcLH3yVGZqFV1xw.jpg?scale-down-to=512',
      },
    ],
  },
];

export const PRODUCTIVITY_CATEGORIES_DATA: CategoryData[] = [
  {
    id: 'microsoft-office',
    brandName: 'Microsoft Office 365',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg',
    features: [
      'Bản quyền Office chính hãng (Word, Excel, PowerPoint).',
      'Dung lượng lưu trữ 1TB OneDrive Cloud.',
      'Sử dụng đồng thời trên 5 thiết bị.',
      'Hỗ trợ Windows, macOS, iOS và Android.',
      'Cập nhật tính năng mới nhất liên tục.',
    ],
    packages: [
      {
        id: 'ms1',
        duration: '1 NĂM',
        name: 'Microsoft 365 Personal (Chính chủ)',
        price: '199.000đ',
        oldPrice: '1.290.000đ',
        discount: '-85%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/Kax6PVRrt8QkF1I6snDIICWw5k.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'notion',
    brandName: 'Notion Plus',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
    features: [
      'Không giới hạn block cho team.',
      'Upload file không giới hạn dung lượng.',
      'Lịch sử phiên bản trang lên đến 30 ngày.',
      'Tích hợp Notion AI hỗ trợ soạn thảo.',
      'Mời tối đa 100 khách (guests) vào trang.',
    ],
    packages: [
      {
        id: 'no1',
        duration: '1 NĂM',
        name: 'Notion Plus Upgrade (Chính chủ)',
        price: '250.000đ',
        oldPrice: '2.400.000đ',
        discount: '-90%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/sOwQEnDyQdj0XisJMm5c2nusEY.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'linkedin-career',
    brandName: 'LinkedIn Premium Career',
    brandLogo:
      'https://framerusercontent.com/images/4dlkEDBR9VeM33GToii7ZX1GtY0.png?width=426&height=428',
    features: [
      '5 tin nhắn InMail mỗi tháng.',
      'Xem ai đã xem hồ sơ của bạn trong 90 ngày qua.',
      'Nổi bật trong danh sách ứng viên (Featured Applicant).',
      'Truy cập đầy đủ LinkedIn Learning.',
      'Thông tin chi tiết về mức lương và đối thủ.',
    ],
    packages: [
      {
        id: 'li-c1',
        duration: '6 THÁNG',
        name: 'LinkedIn Premium Career',
        price: '450.000đ',
        oldPrice: '1.800.000đ',
        discount: '-75%',
        image:
          'https://framerusercontent.com/images/vg81Nzidw4dtXIbMKCytkFgRUk.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 'li-c2',
        duration: '1 NĂM',
        name: 'LinkedIn Premium Career (Gia hạn)',
        price: '790.000đ',
        oldPrice: '3.600.000đ',
        discount: '-78%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/vg81Nzidw4dtXIbMKCytkFgRUk.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'linkedin-business',
    brandName: 'LinkedIn Premium Business',
    brandLogo:
      'https://framerusercontent.com/images/NGfqKWJx9NV3nXiCQnLfY32N6M.png?width=537&height=540',
    features: [
      '15 tin nhắn InMail mỗi tháng.',
      'Xem chi tiết thông tin tăng trưởng doanh nghiệp.',
      'Tìm kiếm hồ sơ không giới hạn (Browsing).',
      'Truy cập đầy đủ LinkedIn Learning.',
      'Xem ai đã xem hồ sơ của bạn.',
    ],
    packages: [
      {
        id: 'li-b1',
        duration: '1 NĂM',
        name: 'LinkedIn Premium Business (Chính chủ)',
        price: '1.250.000đ',
        oldPrice: '6.500.000đ',
        discount: '-80%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/GVaWSPZrI7CqrCFOOWGy86EE.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'linkedin-sales-nav',
    brandName: 'LinkedIn Sales Navigator Core',
    brandLogo:
      'https://framerusercontent.com/images/rWmVHe2yGJJi0BRdn7DP8abIQ.png?width=426&height=428',
    features: [
      '50 tin nhắn InMail mỗi tháng.',
      'Bộ lọc tìm kiếm khách hàng tiềm năng nâng cao.',
      'Lưu danh sách khách hàng và công ty mục tiêu.',
      'Gợi ý khách hàng tiềm năng tự động.',
      'Tích hợp các công cụ bán hàng chuyên sâu.',
    ],
    packages: [
      {
        id: 'li-s1',
        duration: '1 THÁNG',
        name: 'LinkedIn Sales Navigator Core',
        price: '290.000đ',
        oldPrice: '2.300.000đ',
        discount: '-87%',
        image:
          'https://framerusercontent.com/images/88z7sA9GQyMhAw6C1N6Tfj0.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'vidiq',
    brandName: 'vidIQ Max',
    brandLogo:
      'https://framerusercontent.com/images/POTE2WvWtLIkeDStlF6xJmD4.png?width=128&height=128',
    features: [
      'Gợi ý ý tưởng video hàng ngày bằng AI.',
      'Phân tích đối thủ cạnh tranh chuyên sâu.',
      'Theo dõi xu hướng (Trend Alerts) thời gian thực.',
      'Công cụ kiểm tra SEO cho Video YouTube.',
      'Hỗ trợ quản lý nhiều kênh YouTube cùng lúc.',
    ],
    packages: [
      {
        id: 'vi1',
        duration: '1 THÁNG',
        name: 'vidIQ Max (Chính chủ)',
        price: '150.000đ',
        oldPrice: '1.200.000đ',
        discount: '-87%',
        image:
          'https://framerusercontent.com/images/elD8F2sUDGWisY4kCrp1OHS4eBM.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: '1password',
    brandName: '1Password Families',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/1Password_logo.svg',
    features: [
      'Lưu trữ không giới hạn mật khẩu và thông tin thẻ.',
      'Chia sẻ mật khẩu an toàn trong gia đình (5 người).',
      'Cảnh báo bảo mật và rò rỉ dữ liệu (Watchtower).',
      'Xác thực 2 lớp (2FA) tích hợp sẵn.',
      'Lưu trữ tệp tin an toàn 1GB.',
    ],
    packages: [
      {
        id: '1p1',
        duration: '1 NĂM',
        name: '1Password Families (Gói chung)',
        price: '120.000đ',
        oldPrice: '600.000đ',
        discount: '-80%',
        image:
          'https://framerusercontent.com/images/KX61F8f4RfC95uOHahVKpjP4Mas.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'lastpass',
    brandName: 'LastPass Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/LastPass_logo.svg',
    features: [
      'Truy cập trên tất cả các loại thiết bị.',
      'Chia sẻ một - nhiều cho các mục quan trọng.',
      'Trung tâm giám sát Dark Web.',
      'Lưu trữ file an toàn 1GB.',
      'Tùy chọn truy cập khẩn cấp.',
    ],
    packages: [
      {
        id: 'lp1',
        duration: '1 NĂM',
        name: 'LastPass Premium (Nâng cấp)',
        price: '150.000đ',
        oldPrice: '800.000đ',
        discount: '-81%',
        image:
          'https://framerusercontent.com/images/NTSwVWh2s8Vjzq1cbf7SdUS8s.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'camscanner',
    brandName: 'CamScanner Premium',
    brandLogo: 'https://framerusercontent.com/images/camscanner-logo.png', // Thay link thật nếu có
    features: [
      'Xóa hoàn toàn Watermark trên file scan.',
      'Nhận dạng văn bản (OCR) độ chính xác cao.',
      'Chuyển đổi PDF sang Word/Excel/PPT.',
      'Lưu trữ đám mây 10GB.',
      'Scan không giới hạn và tạo chữ ký số.',
    ],
    packages: [
      {
        id: 'cs1',
        duration: '1 NĂM',
        name: 'CamScanner Premium (Chính chủ)',
        price: '180.000đ',
        oldPrice: '1.100.000đ',
        discount: '-83%',
        image:
          'https://framerusercontent.com/images/rPtILBNuwh7nLbURXa4yaUUpHUI.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'gpmlogin',
    brandName: 'GPM Login',
    brandLogo:
      'https://framerusercontent.com/images/TKAPWtEOfzN3TuwyKgGO6Vjj71k.png?width=128&height=128',
    features: [
      'Quản lý hàng ngàn profile trình duyệt sạch.',
      'Chống phát hiện vân tay trình duyệt (Anti-fingerprint).',
      'Hỗ trợ nuôi tài khoản Facebook, Google, Amazon.',
      'Tích hợp sẵn Proxy và Automation Tool.',
      'Đội ngũ hỗ trợ kỹ thuật chuyên sâu.',
    ],
    packages: [
      {
        id: 'gpm1',
        duration: '1 THÁNG',
        name: 'GPM Login Standard',
        price: '350.000đ',
        oldPrice: '500.000đ',
        discount: '-30%',
        image:
          'https://framerusercontent.com/images/EaBnFSady8jGMvBK7CdfeyAxXk.jpg?scale-down-to=512',
      },
    ],
  },
];

// 1. MẢNG STUDY (Học tập)
export const STUDY_DATA: CategoryData[] = [
  {
    id: 'duolingo',
    brandName: 'Duolingo Super',
    brandLogo:
      'https://framerusercontent.com/images/MTfHZRUph8kjLQXWGehBCi3Yc.png?scale-down-to=512&width=1440&height=1440',
    features: [
      'Học ngôn ngữ không giới hạn trái tim.',
      'Không quảng cáo làm phiền.',
      'Kiểm tra trình độ miễn phí.',
      'Bảng xếp hạng ưu tiên.',
      'Theo dõi tiến độ học tập chi tiết.',
    ],
    packages: [
      {
        id: 'duo1',
        duration: '1 NĂM',
        name: 'Duolingo Super 1 năm',
        price: '190.000đ',
        oldPrice: '1.200.000đ',
        discount: '-84%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/oUS4dYeOCeUmt7icK0lprDTFcU.jpg?scale-down-to=512',
      },
      {
        id: 'duo1',
        duration: '1 NĂM',
        name: 'Duolingo Super 1 năm',
        price: '190.000đ',
        oldPrice: '1.200.000đ',
        discount: '-84%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/oUS4dYeOCeUmt7icK0lprDTFcU.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'grammarly',
    brandName: 'Grammarly Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Grammarly_logo.svg',
    features: [
      'Sửa lỗi ngữ pháp và dấu câu nâng cao.',
      'Gợi ý điều chỉnh tông giọng văn bản.',
      'Kiểm tra đạo văn (Plagiarism checker).',
      'Hỗ trợ viết lại câu trôi chảy hơn.',
      'Tích hợp trên trình duyệt và Word.',
    ],
    packages: [
      {
        id: 'gr1',
        duration: '1 NĂM',
        name: 'Grammarly Premium 1 năm',
        price: '450.000đ',
        oldPrice: '3.500.000đ',
        discount: '-87%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/R563XxqHno9A8WkzOLRaqYSyo.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'quizlet',
    brandName: 'Quizlet Plus',
    brandLogo:
      'https://framerusercontent.com/images/ihPmq966hlTKU3zVIaqX0WW38wo.png?width=124&height=120',
    features: [
      'Học ngoại tuyến trên ứng dụng.',
      'Tạo học phần không giới hạn hình ảnh.',
      'Chế độ học thông minh với AI.',
      'Quét tài liệu để tạo Flashcard nhanh chóng.',
      'Không quảng cáo.',
    ],
    packages: [
      {
        id: 'qz1',
        duration: '1 NĂM',
        name: 'Quizlet Plus 1 năm',
        price: '250.000đ',
        oldPrice: '800.000đ',
        discount: '-69%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/AGbT1HjJjbmPXT62lbWqcqRyfs.jpg?scale-down-to=512',
      },
      {
        id: 'qz1',
        duration: '1 NĂM',
        name: 'Quizlet Plus 1 năm',
        price: '250.000đ',
        oldPrice: '800.000đ',
        discount: '-69%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/AGbT1HjJjbmPXT62lbWqcqRyfs.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'datacamp',
    brandName: 'DataCamp Premium',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/DataCamp_logo.svg',
    features: [
      'Truy cập hơn 400 khóa học Data Science.',
      'Học Python, R, SQL từ cơ bản đến nâng cao.',
      'Dự án thực tế và bài tập tương tác.',
      'Chứng chỉ hoàn thành khóa học chuyên nghiệp.',
      'Hệ thống đánh giá kỹ năng cá nhân.',
    ],
    packages: [
      {
        id: 'dc1',
        duration: '1 NĂM',
        name: 'DataCamp Premium 1 năm',
        price: '950.000đ',
        oldPrice: '8.000.000đ',
        discount: '-88%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/ACVcsXD041EQjRFZJzdSYQBHQMo.jpg?scale-down-to=512',
      },
    ],
  },
];

// 2. MẢNG EDIT (Ảnh & Video)
export const EDIT_DATA: CategoryData[] = [
  {
    id: 'canva',
    brandName: 'Canva Pro',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
    features: [
      'Kho 100+ triệu ảnh, video và đồ họa Premium.',
      'Xóa nền ảnh trong 1 lần bấm.',
      'Đổi cỡ thiết kế nhanh chóng (Magic Resize).',
      'Lên lịch đăng bài mạng xã hội.',
      'Lưu trữ đám mây 1TB.',
    ],
    packages: [
      {
        id: 'can1',
        duration: '1 NĂM',
        name: 'Canva Pro (Chính chủ)',
        price: '249.000đ',
        oldPrice: '1.200.000đ',
        discount: '-79%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/c81Uv0JiG6yEz6OvnZ5EFBsrTcY.jpg?scale-down-to=512',
      },
      {
        id: 'can1',
        duration: '1 NĂM',
        name: 'Canva Pro (Chính chủ)',
        price: '249.000đ',
        oldPrice: '1.200.000đ',
        discount: '-79%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/c81Uv0JiG6yEz6OvnZ5EFBsrTcY.jpg?scale-down-to=512',
      },
      {
        id: 'can1',
        duration: '1 NĂM',
        name: 'Canva Pro (Chính chủ)',
        price: '249.000đ',
        oldPrice: '1.200.000đ',
        discount: '-79%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/c81Uv0JiG6yEz6OvnZ5EFBsrTcY.jpg?scale-down-to=512',
      },
      {
        id: 'can1',
        duration: '1 NĂM',
        name: 'Canva Pro (Chính chủ)',
        price: '249.000đ',
        oldPrice: '1.200.000đ',
        discount: '-79%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/c81Uv0JiG6yEz6OvnZ5EFBsrTcY.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'adobe',
    brandName: 'Adobe Creative Cloud',
    brandLogo:
      'https://framerusercontent.com/images/ezttyS5ugQD96jr0at3AADjdCk.png?width=132&height=160',
    features: [
      'Bao gồm 20+ app (Photoshop, AI, Premiere...).',
      '100GB lưu trữ đám mây.',
      'Sử dụng Adobe Fonts và thư viện Stock.',
      'Cập nhật tính năng AI (Generative Fill).',
      'Sử dụng trên 2 thiết bị.',
    ],
    packages: [
      {
        id: 'ad1',
        duration: '1 NĂM',
        name: 'Adobe All Apps (Chính chủ)',
        price: '1.450.000đ',
        oldPrice: '14.000.000đ',
        discount: '-90%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/tzNbMK5gBWrsHwR1RMwZK1sNqLY.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 'ad1',
        duration: '1 NĂM',
        name: 'Adobe All Apps (Chính chủ)',
        price: '1.450.000đ',
        oldPrice: '14.000.000đ',
        discount: '-90%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/tzNbMK5gBWrsHwR1RMwZK1sNqLY.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 'ad1',
        duration: '1 NĂM',
        name: 'Adobe All Apps (Chính chủ)',
        price: '1.450.000đ',
        oldPrice: '14.000.000đ',
        discount: '-90%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/tzNbMK5gBWrsHwR1RMwZK1sNqLY.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 'ad1',
        duration: '1 NĂM',
        name: 'Adobe All Apps (Chính chủ)',
        price: '1.450.000đ',
        oldPrice: '14.000.000đ',
        discount: '-90%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/tzNbMK5gBWrsHwR1RMwZK1sNqLY.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 'ad1',
        duration: '1 NĂM',
        name: 'Adobe All Apps (Chính chủ)',
        price: '1.450.000đ',
        oldPrice: '14.000.000đ',
        discount: '-90%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/tzNbMK5gBWrsHwR1RMwZK1sNqLY.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 'ad1',
        duration: '1 NĂM',
        name: 'Adobe All Apps (Chính chủ)',
        price: '1.450.000đ',
        oldPrice: '14.000.000đ',
        discount: '-90%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/tzNbMK5gBWrsHwR1RMwZK1sNqLY.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'capcut',
    brandName: 'CapCut Pro',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/CapCut_logo.svg',
    features: [
      'Sử dụng các template và hiệu ứng Premium.',
      'Tính năng AI tự động phụ đề.',
      'Xóa nền video chất lượng cao.',
      'Không watermark khi xuất video.',
      'Lưu trữ đám mây 100GB.',
    ],
    packages: [
      {
        id: 'cap1',
        duration: '1 NĂM',
        name: 'CapCut Pro (Chính chủ)',
        price: '490.000đ',
        oldPrice: '2.500.000đ',
        discount: '-80%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/36yt4OywsW5MWRzUM0XdAOSZAgA.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
];

// 3. MẢNG GOOGLE (Lưu trữ)
export const GOOGLE_DATA: CategoryData[] = [
  {
    id: 'google-one',
    brandName: 'Google One',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Photos_icon_%282020%29.svg',
    features: [
      'Mở rộng dung lượng Drive, Gmail, Photos.',
      'Sao lưu ảnh chất lượng gốc.',
      'Chia sẻ gói dung lượng cho gia đình.',
      'Hỗ trợ chuyên gia Google.',
      'Tính năng bảo mật nâng cao.',
    ],
    packages: [
      {
        id: 'g1',
        duration: '1 NĂM',
        name: 'Google One 100GB',
        price: '250.000đ',
        oldPrice: '450.000đ',
        discount: '-45%',
        image:
          'https://framerusercontent.com/images/VTYOOsQYJaSRV39h9hbmy4ttNo.jpg?scale-down-to=512',
      },
      {
        id: 'g2',
        duration: '1 NĂM',
        name: 'Google One 2TB',
        price: '750.000đ',
        oldPrice: '2.250.000đ',
        discount: '-66%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/VTYOOsQYJaSRV39h9hbmy4ttNo.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'gemini',
    brandName: 'Gemini Advanced',
    brandLogo:
      'https://framerusercontent.com/images/uwCLb2ODCSgFLKTCB1lZIPgFemc.png?width=128&height=128',
    features: [
      'Sử dụng model Ultra 1.0 mạnh nhất.',
      'Tích hợp trong Docs, Gmail để viết lách.',
      'Xử lý file dữ liệu và hình ảnh phức tạp.',
      'Ưu tiên truy cập các tính năng mới.',
      'Bao gồm 2TB Google One.',
    ],
    packages: [
      {
        id: 'gem1',
        duration: '1 THÁNG',
        name: 'Gemini Advanced',
        price: '150.000đ',
        oldPrice: '500.000đ',
        discount: '-70%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/oIXWKLeMcQs0k8XLhYUgKs6V3g.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
];

// 4. MẢNG AI
export const AI_DATA: CategoryData[] = [
  {
    id: 'chatgpt',
    brandName: 'ChatGPT Plus',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    features: [
      'Truy cập GPT-4, GPT-4o nhanh nhất.',
      'Tạo ảnh với DALL-E 3.',
      'Sử dụng các Custom GPTs.',
      'Phân tích dữ liệu và duyệt web.',
      'Không giới hạn thời gian truy cập giờ cao điểm.',
    ],
    packages: [
      {
        id: 'gpt1',
        duration: '1 THÁNG',
        name: 'ChatGPT Plus (Chính chủ)',
        price: '490.000đ',
        oldPrice: '600.000đ',
        discount: '-18%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/u86Gcb93VvbgWws93JUdWElb0.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'supergrok',
    brandName: 'SuperGrok (xAI)',
    brandLogo:
      'https://framerusercontent.com/images/wXfA0P0591jwp3In9lC8LXLCcI4.png?width=128&height=128', // Grok thuộc X
    features: [
      'Truy cập mô hình AI Grok-1.5 mới nhất.',
      'Tích hợp trực tiếp trên nền tảng X (Twitter).',
      'Khả năng tìm kiếm thông tin thời gian thực.',
      'Phong cách phản hồi hài hước và thẳng thắn.',
      'Hỗ trợ xử lý ngữ cảnh dài hơn.',
    ],
    packages: [
      {
        id: 'grok1',
        duration: '1 THÁNG',
        name: 'X Premium+ (Grok AI)',
        price: '350.000đ',
        oldPrice: '500.000đ',
        discount: '-30%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/YL6WnWObXh2tJIwPa3k6aDo0qw.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'lovable',
    brandName: 'Lovable AI',
    brandLogo: 'https://framerusercontent.com/images/lovable-logo.png',
    features: [
      'Xây dựng ứng dụng web từ mô tả văn bản.',
      'Tự động tạo code React/Vite/Tailwind.',
      'Chỉnh sửa giao diện trực tiếp qua chat.',
      'Deploy ứng dụng lên cloud chỉ với 1 click.',
      'Tích hợp Supabase cho cơ sở dữ liệu.',
    ],
    packages: [
      {
        id: 'lov1',
        duration: '1 THÁNG',
        name: 'Lovable Starter Plan',
        price: '850.000đ',
        oldPrice: '1.200.000đ',
        discount: '-29%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/71uc2E1G0cusZ6Whmv25M4AxNQ.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
];

// 5. MẢNG VPN
export const VPN_DATA: CategoryData[] = [
  {
    id: 'expressvpn',
    brandName: 'ExpressVPN',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/e/ee/ExpressVPN_logo.svg',
    features: [
      'Tốc độ cao nhất hiện nay.',
      'Máy chủ tại 94 quốc gia.',
      'Bảo mật mã hóa cấp độ quân đội.',
      'Bỏ chặn Netflix, Youtube vùng khác.',
      'Hỗ trợ mọi thiết bị.',
    ],
    packages: [
      {
        id: 'ex1',
        duration: '1 NĂM',
        name: 'ExpressVPN 1 năm',
        price: '650.000đ',
        oldPrice: '3.000.000đ',
        discount: '-78%',
        highlight: true,
        image: 'https://framerusercontent.com/images/U3JyHf7bEqXBtbr3em6OlbeGWk.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'hma-vpn',
    brandName: 'HMA VPN',
    brandLogo:
      'https://framerusercontent.com/images/Q9UqM2rY2DIyodeFSYiwE03Bc.png?width=328&height=156', // Logo HMA (HideMyAss)
    features: [
      'Hơn 290 vị trí máy chủ trên toàn cầu.',
      'Tính năng IP Shuffle tránh bị theo dõi.',
      'Ngắt kết nối tự động (Kill Switch).',
      'Tốc độ kết nối lên đến 20 Gbps.',
      'Không lưu lại nhật ký truy cập (No-log).',
    ],
    packages: [
      {
        id: 'hma1',
        duration: '1 NĂM',
        name: 'HMA VPN Premium 1 năm',
        price: '290.000đ',
        oldPrice: '1.500.000đ',
        discount: '-81%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/2fPOvAq6DgdIrdcOkU23oW7Yo.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'avast-vpn',
    brandName: 'Avast VPN',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Avast_logo.svg',
    features: [
      'Bảo mật Wifi công cộng tuyệt đối.',
      'Ẩn hoạt động trực tuyến khỏi ISP.',
      'Truy cập nội dung bị chặn địa lý.',
      'Giao diện đơn giản, dễ sử dụng nhất.',
      'Bảo vệ đồng thời lên đến 10 thiết bị.',
    ],
    packages: [
      {
        id: 'av1',
        duration: '1 NĂM',
        name: 'Avast SecureLine VPN 1 năm',
        price: '199.000đ',
        oldPrice: '1.200.000đ',
        discount: '-83%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/0M7NTiMrH0dpHxyEYaaJw55Z0.jpg?scale-down-to=512',
      },
    ],
  },
];

// 6. MẢNG GIFT CARD
export const GIFT_CARD_DATA: CategoryData[] = [
  {
    id: 'steam-wallet',
    brandName: 'Steam Wallet',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
    features: [
      'Nạp tiền vào tài khoản Steam.',
      'Mua game, vật phẩm và ứng dụng.',
      'Không cần thẻ tín dụng.',
      'Mã số giao ngay sau khi thanh toán.',
      'Hỗ trợ vùng Singapore (SGD), Thái Lan (THB).',
    ],
    packages: [
      {
        id: 'st1',
        duration: 'CODE',
        name: 'Steam Wallet 10 SGD',
        price: '185.000đ',
        oldPrice: '200.000đ',
        discount: '-8%',
        image: 'https://framerusercontent.com/images/gBDxQRto4Mj5Mqcm7rdbkOzLDrA.jpg?scale-down-to=512&width=690&height=323',
      },
      {
        id: 'st2',
        duration: 'CODE',
        name: 'Steam Wallet 500 THB',
        price: '360.000đ',
        oldPrice: '400.000đ',
        discount: '-10%',
        highlight: true,
        image: 'https://framerusercontent.com/images/gBDxQRto4Mj5Mqcm7rdbkOzLDrA.jpg?scale-down-to=512&width=690&height=323',
      },
    ],
  },
  {
    id: 'xbox-gift',
    brandName: 'Xbox Gift Card',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg',
    features: [
      'Nạp tiền mua game trên Store Xbox/Windows.',
      'Gia hạn gói Game Pass.',
      'Sử dụng cho vùng US (Mỹ).',
      'An toàn 100%.',
      'Mã nạp chính hãng.',
    ],
    packages: [
      {
        id: 'xb1',
        duration: 'CODE',
        name: 'Xbox Gift Card $10 US',
        price: '240.000đ',
        oldPrice: '260.000đ',
        discount: '-8%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/Fq2tyq1HR1EMISdq5A51RL0IGd4.jpg?scale-down-to=512',
      },
      {
        id: 'xb1',
        duration: 'CODE',
        name: 'Xbox Gift Card $10 US',
        price: '240.000đ',
        oldPrice: '260.000đ',
        discount: '-8%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/Fq2tyq1HR1EMISdq5A51RL0IGd4.jpg?scale-down-to=512',
      },
      {
        id: 'xb1',
        duration: 'CODE',
        name: 'Xbox Gift Card $10 US',
        price: '240.000đ',
        oldPrice: '260.000đ',
        discount: '-8%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/Fq2tyq1HR1EMISdq5A51RL0IGd4.jpg?scale-down-to=512',
      },
      {
        id: 'xb1',
        duration: 'CODE',
        name: 'Xbox Gift Card $10 US',
        price: '240.000đ',
        oldPrice: '260.000đ',
        discount: '-8%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/Fq2tyq1HR1EMISdq5A51RL0IGd4.jpg?scale-down-to=512',
      },
    ],
  },
  {
    id: 'ea-gift',
    brandName: 'EA Gift Card',
    brandLogo:
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic_Arts_logo.svg',
    features: [
      'Sử dụng trên ứng dụng EA App (trước là Origin).',
      'Mua các game đỉnh cao như FC24, Battlefield.',
      'Mua tiền ảo trong game (Apex Coins, FC Points).',
      'Áp dụng cho tài khoản vùng US.',
      'Giao mã tự động qua Email.',
    ],
    packages: [
      {
        id: 'ea1',
        duration: 'CODE',
        name: 'EA Gift Card $25 US',
        price: '615.000đ',
        oldPrice: '650.000đ',
        discount: '-5%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/FrOHAjK6V6jEfguMAjD0Y8L1Cg.jpg?scale-down-to=512',
      },
      {
        id: 'ea1',
        duration: 'CODE',
        name: 'EA Gift Card $25 US',
        price: '615.000đ',
        oldPrice: '650.000đ',
        discount: '-5%',
        highlight: true,
        image:
          'https://framerusercontent.com/images/FrOHAjK6V6jEfguMAjD0Y8L1Cg.jpg?scale-down-to=512',
      },
    ],
  },
];
