const projectsList = [
  {
    title: 'Lawan E-Commerce Platform',
    overview: 'Website thương mại điện tử bán quần áo trực tuyến với đầy đủ tính năng quản lý sản phẩm, giỏ hàng, đơn hàng và phân quyền người dùng.',
    description: {
      techstack: [
        'Java',
        'VueJS',
        'Spring Boot',
        'Spring Data JPA',
        'MySQL',
        'Pinia',
        'Bootstrap',
        'Axios',
        'JWT Authentication',
      ],
      responsibilities: [
        'System & Database: Designed a 10-table schema using Feature-based architecture (Controller-Service-DTO).',
        'UI/UX Development: Built 7+ responsive pages with complex components like Slide-bar Cart and Admin Dashboard.',
        'Security: Implemented JWT (HttpOnly Cookies) and BCrypt for secure authentication and XSS protection.',
        'Optimization: Enhanced performance by fixing N+1 issues and integrating Infinite Scroll/Pagination.',
        'Logic: Developed a smart checkout system and a 3-level Location Picker.'
      ]
    },
    image: 'https://res.cloudinary.com/dhdh6g0yg/image/upload/v1769261040/Screenshot_2026-01-24_202254_tezqlu.png',
    github: 'https://github.com/trungnghia-coder/lawan-ecommerce.git'
  },
  {
    title: 'Tuda Clothes Online Brand Project',
    overview: '',
    description: {
      techstack: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA',
        'VueJS',
        'Bootstrap',
        'REST API'
      ],
      responsibilities: [
        'Thiết kế phát triển giao diện UX/UI',
        'Xây dựng hệ thống Xác thực (Authentication) và Phân quyền (Authorization)',
        'Kiến trúc hệ thống Feature-based với Spring Boot và VueJS',
        'Xử lí Logic Giỏ hàng & kiểm tra tồn kho',
        'Tối ưu luồng Thanh Toán',
        'Quản lý tài khoản & giao dịch người dùng'
      ]
    },
    image: 'https://res.cloudinary.com/dhdh6g0yg/image/upload/v1769261036/Screenshot_2026-01-24_202214_zdlfzm.png',
    github: 'https://github.com/vandahy/Tuda-Clothes-Online-Brand',
    demo: '' // Để rỗng nếu không có demo
  },
  {
    title: 'Video Entertainment Web App Project',
    overview: '', // Để rỗng nếu không muốn hiển thị overview
    description: {
      techstack: [
        'Spring Boot',
        'Java',
        'MySQL',
        'JSP',
        'HTML',
        'CSS',
        'YouTube API'
      ],
      responsibilities: [
        'Thiết kế phát triển giao diện UX/UI',
        'Triển khai luồng xử lí MVC với JSP và Servlets',
        'Quản lý authentication và authorization',
        'Tích hợp hiển thị nội dụng từ YouTube API',
        'Xây dựng trang quản lý (CRUD) cho video, danh mục và người dùng',
        'Xử lí Logic tương tác cơ bản như bình luận, đánh giá và tìm kiếm'
      ]
    },
    image: 'https://res.cloudinary.com/dhdh6g0yg/image/upload/v1769260401/Screenshot_2026-01-24_201219_p9wek2.png',
    github: 'https://github.com/vandahy/VideoManager-ASM-JAVA4.git',
    demo: ''
  }
]

// Tự động generate ID
export const projects = projectsList.map((project, index) => ({
  ...project,
  id: index + 1
}))
