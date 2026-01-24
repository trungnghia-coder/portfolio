const projectsList = [
  {
    title: 'Ticket4U - Ticket Booking Platform',
    overview: 'Nền tảng đặt vé xem phim trực tuyến với giao diện hiện đại, hỗ trợ thanh toán online và quản lý đặt chỗ theo thời gian thực.',
    description: {
      techstack: [
        'Nuxt.js',
        'Vue 3',
        'TypeScript',
        'Spring Boot',
        'PostgreSQL',
        'Docker'
      ],
      responsibilities: [
        'Phát triển giao diện người dùng với Nuxt.js và Vue 3',
        'Xây dựng RESTful API với Spring Boot',
        'Thiết kế database với PostgreSQL',
        'Tích hợp thanh toán online',
        'Triển khai hệ thống với Docker'
      ]
    },
    image: '/images/ticket4u.jpg',
    github: 'https://github.com/yourusername/ticket4u',
    demo: 'https://ticket4u-demo.com'
  },
  {
    title: 'SenseChat - Chrome Extension',
    overview: 'Extension trình duyệt tích hợp AI chatbot thông minh, giúp người dùng tương tác và truy vấn thông tin ngay trên browser.',
    description: {
      techstack: [
        'Plasmo',
        'TypeScript',
        'Chrome Extension API',
        'TailwindCSS'
      ],
      responsibilities: [
        'Xây dựng Chrome Extension với Plasmo Framework',
        'Tích hợp AI chatbot vào trình duyệt',
        'Thiết kế UI/UX cho popup và content scripts',
        'Quản lý state và storage của extension'
      ]
    },
    image: '/images/sensechat.jpg',
    github: 'https://github.com/yourusername/sensechat',
    demo: '' // Để rỗng nếu không có demo
  },
  {
    title: 'Java6 Assignment - E-commerce',
    overview: '', // Để rỗng nếu không muốn hiển thị overview
    description: {
      techstack: [
        'Spring Boot',
        'Java',
        'MySQL',
        'Thymeleaf',
        'Bootstrap'
      ],
      responsibilities: [
        'Phát triển backend với Spring Boot',
        'Xây dựng CRUD operations cho sản phẩm',
        'Quản lý authentication và authorization',
        'Upload và quản lý hình ảnh sản phẩm',
        'Thiết kế giao diện responsive với Bootstrap'
      ]
    },
    image: '/images/java6.jpg',
    github: '', // Để rỗng nếu không có github link
    demo: ''
  }
]

// Tự động generate ID
export const projects = projectsList.map((project, index) => ({
  ...project,
  id: index + 1
}))
