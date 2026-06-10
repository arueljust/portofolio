import images from "./assets";

export const contact = {
  email: "mazrulkhoiri1@gmail.com",
  whatsapp: "0881027666378",
  whatsappLink: "https://wa.me/62881027666378",
};

export const content = {
  id: {
    languageLabel: "ID",
    otherLanguageLabel: "EN",
    nav: {
      brand: "Mazrul Khoiri",
      items: [
        { href: "#hero", label: "Beranda" },
        { href: "#about", label: "Tentang" },
        { href: "#projects", label: "Proyek" },
        { href: "#skills", label: "Skill" },
        { href: "#contact", label: "Kontak" },
      ],
    },
    hero: {
      eyebrow: "Full-stack Web Developer",
      title: "Mazrul Khoiri",
      subtitle: "Saya membangun aplikasi web yang rapi, cepat, dan mudah dipakai.",
      description:
        "Berpengalaman mengerjakan antarmuka, backend, dashboard operasional, dan integrasi sistem untuk kebutuhan bisnis nyata.",
      primaryAction: "Lihat proyek",
      secondaryAction: "Hubungi saya",
      imageAlt: "Ilustrasi pengembang web",
      stats: [
        { value: "Full-stack", label: "Frontend dan backend" },
        { value: "Laravel", label: "Backend API dan admin" },
        { value: "React", label: "UI modern responsif" },
      ],
    },
    about: {
      eyebrow: "Tentang",
      title: "Developer yang fokus pada produk web yang jelas dan berguna.",
      body:
        "Saya membantu membangun website, sistem internal, dan aplikasi bisnis dari perencanaan tampilan sampai logika backend. Fokus saya adalah pengalaman pengguna yang mudah dipahami, performa yang stabil, dan kode yang siap dikembangkan.",
      highlights: ["UI responsive", "Dashboard bisnis", "Integrasi API", "Maintenance aplikasi"],
    },
    projects: {
      eyebrow: "Proyek",
      title: "Beberapa pekerjaan terbaru",
      description: "Contoh aplikasi dan website yang pernah saya kerjakan.",
      demo: "Demo",
      code: "Code",
      unavailable: "Privat",
      items: [
        {
          title: "KantorkuERP",
          category: "ERP manufaktur",
          description:
            "Sistem ERP untuk alur inventory, manufacturing, purchase order, sales order, dan laporan accounting.",
          image: images.Erp,
          demo: "https://demo.kantorku-erp.nikato.my.id/login?return_to=%2F",
          code: "#",
        },
        {
          title: "Absensi Mobile",
          category: "Mobile attendance",
          description:
            "Aplikasi absensi mobile dengan validasi lokasi, kamera, face recognition, dan riwayat kehadiran.",
          image: images.AbsenMobile,
          imageFit: "contain",
          demo: "#",
          code: "#",
        },
        {
          title: "Absensi Web PWA",
          category: "Progressive Web App",
          description:
            "Versi web PWA untuk absensi karyawan, dashboard check-in/out, leaderboard, dan histori bulanan.",
          image: images.AbsenWeb,
          imageFit: "contain",
          demo: "https://kantorku.nikato.my.id/login",
          code: "#",
        },
        {
          title: "Coffee Shop",
          category: "Website bisnis",
          description: "Tampilan promosi dan katalog untuk bisnis coffee shop.",
          image: images.Coffe,
          demo: "#",
          code: "#",
        },
        {
          title: "Serene",
          category: "Travel agent",
          description: "Website travel agent dengan pengalaman visual yang bersih.",
          image: images.SereneVisa,
          demo: "https://sereneubud.com",
          code: "#",
        },
        {
          title: "Bakoelide",
          category: "Company profile",
          description: "Website profil bisnis untuk memperkenalkan layanan dan brand.",
          image: images.Bakoel,
          demo: "https://bakoelide.com",
          code: "#",
        },
        {
          title: "MyVisa",
          category: "Layanan visa",
          description: "Website layanan visa dengan informasi yang mudah dipindai.",
          image: images.Visa,
          demo: "https://myvisa.co.id",
          code: "#",
        },
      ],
    },
    skills: {
      eyebrow: "Skill",
      title: "Teknologi yang saya gunakan",
      description: "Stack utama untuk membangun aplikasi web dari sisi client dan server.",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Punya proyek atau ingin berdiskusi?",
      description:
        "Kirim pesan lewat email atau WhatsApp, lalu ceritakan kebutuhan Anda secara singkat.",
      nameLabel: "Nama",
      namePlaceholder: "Nama Anda",
      emailLabel: "Email",
      emailPlaceholder: "email@contoh.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan kebutuhan Anda secara singkat",
      submit: "Kirim email",
      whatsapp: "WhatsApp",
      directEmail: "Email langsung",
    },
    footer: "Semua hak dilindungi.",
  },
  en: {
    languageLabel: "EN",
    otherLanguageLabel: "ID",
    nav: {
      brand: "Mazrul Khoiri",
      items: [
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Full-stack Web Developer",
      title: "Mazrul Khoiri",
      subtitle: "I build clean, fast, and usable web applications.",
      description:
        "I work across interfaces, backend services, operational dashboards, and system integrations for real business needs.",
      primaryAction: "View projects",
      secondaryAction: "Contact me",
      imageAlt: "Web developer illustration",
      stats: [
        { value: "Full-stack", label: "Frontend and backend" },
        { value: "Laravel", label: "Backend API and admin" },
        { value: "React", label: "Modern responsive UI" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A developer focused on clear and useful web products.",
      body:
        "I help build websites, internal systems, and business applications from interface planning to backend logic. My focus is practical user experience, stable performance, and code that is ready to evolve.",
      highlights: ["Responsive UI", "Business dashboards", "API integration", "App maintenance"],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected recent work",
      description: "A few applications and websites I have worked on.",
      demo: "Demo",
      code: "Code",
      unavailable: "Private",
      items: [
        {
          title: "KantorkuERP",
          category: "Manufacturing ERP",
          description:
            "An ERP system for inventory, manufacturing, purchase orders, sales orders, and accounting reports.",
          image: images.Erp,
          demo: "https://demo.kantorku-erp.nikato.my.id/login?return_to=%2F",
          code: "#",
        },
        {
          title: "Attendance Mobile",
          category: "Mobile attendance",
          description:
            "A mobile attendance app with location validation, camera capture, face recognition, and attendance history.",
          image: images.AbsenMobile,
          imageFit: "contain",
          demo: "#",
          code: "#",
        },
        {
          title: "Attendance Web PWA",
          category: "Progressive Web App",
          description:
            "A web PWA attendance version with check-in/out dashboard, leaderboard, and monthly history.",
          image: images.AbsenWeb,
          imageFit: "contain",
          demo: "#",
          code: "#",
        },
        {
          title: "Coffee Shop",
          category: "Business website",
          description: "A promotional and catalog interface for a coffee shop business.",
          image: images.Coffe,
          demo: "#",
          code: "#",
        },
        {
          title: "Serene",
          category: "Travel agent",
          description: "A travel agent website with a clean visual experience.",
          image: images.SereneVisa,
          demo: "https://sereneubud.com",
          code: "#",
        },
        {
          title: "Bakoelide",
          category: "Company profile",
          description: "A business profile website for presenting services and brand identity.",
          image: images.Bakoel,
          demo: "https://bakoelide.com",
          code: "#",
        },
        {
          title: "MyVisa",
          category: "Visa service",
          description: "A visa service website with easy-to-scan service information.",
          image: images.Visa,
          demo: "https://myvisa.co.id",
          code: "#",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies I use",
      description: "My main stack for building web applications on the client and server side.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project or want to talk?",
      description:
        "Send a message by email or WhatsApp and briefly tell me what you need.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me briefly what you need",
      submit: "Send email",
      whatsapp: "WhatsApp",
      directEmail: "Direct email",
    },
    footer: "All rights reserved.",
  },
};
