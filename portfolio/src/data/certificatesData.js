const certificatesList = [
  {
    platform: 'CodeLearn',
    platformLogo: 'https://res.cloudinary.com/dhdh6g0yg/image/upload/v1769256052/codelearn-logo_patdi8.png',
    platformUrl: 'https://codelearn.io',
    certificates: [
      {
        title: 'Lập trình hướng đối tượng trong Java',
        image: 'https://res.cloudinary.com/dhdh6g0yg/image/upload/v1769256713/L%E1%BA%ADp_tr%C3%ACnh_h%C6%B0%E1%BB%9Bng_%C4%91%E1%BB%91i_t%C6%B0%E1%BB%A3ng_trong_java_1_lnlx6m.png',
        certificateUrl: ''
      },
      {
        title: 'C cơ bản',
        image: 'https://res.cloudinary.com/dhdh6g0yg/image/upload/v1769256714/C_c%C6%A1_b%E1%BA%A3n_xuvvkg.png',
        certificateUrl: ''
      }
    ]
  }
]

export const certificates = certificatesList.map((platform, index) => ({
  ...platform,
  id: index + 1,
  certificates: platform.certificates.map((cert, certIndex) => ({
    ...cert,
    id: `${index + 1}-${certIndex + 1}`
  }))
}))
