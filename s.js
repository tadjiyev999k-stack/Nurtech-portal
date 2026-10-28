/* ==========================================================================
   NURTECH Core Engine: Translations, Theme Toggle & Dynamic Interactivity
   ========================================================================== */

// --- 1. Multilingual Dictionary ---
const translations = {
  uz: {
    topAnnouncement: "📌 2026/2027 o'quv yili uchun qabul jarayonlari boshlandi!",
    navHome: "Bosh sahifa",
    navAbout: "Biz haqimizda",
    navNews: "E'lonlar",
    navFaculty: "O'qituvchilar",
    navContact: "Aloqa",
    heroBadge: "Rasmiy Raqamli Portali",
    heroTitle: "Amaliy Bilim Va Kelajak Kasblari Markazi",
    heroDesc: "Zamonaviy texnologiyalar, payvandlash san'ati, IT va muhandislik yo'nalishlarida yetuk mutaxassislarni tayyorlaymiz.",
    btnExplore: "E'lonlarni Ko'rish",
    btnContact: "Biz Bilan Bog'lanish",
    statStudents: "O'quvchilar Soni",
    statWorkshops: "Ustaxonalar",
    statTeachers: "Tajribali O'qituvchilar",
    statEmployment: "Ish Bilan Ta'minlash (%)",
    newsTitle: "So'nggi E'lonlar va Yangiliklar",
    newsSub: "Texnikum hayotiga oid eng muhim xabarlar",
    filterAll: "Barchasi",
    filterExam: "Imtihonlar",
    filterWorkshop: "Ustaxona",
    filterClub: "Garaj & To'garaklar",
    facultyTitle: "Bizning O'qituvchilarimiz",
    facultySub: "Yuqori malakali va tajribali ustozlar jamoasi",
    searchPlaceholder: "O'qituvchini ismi yoki fani bo'yicha qidirish...",
    contactTitle: "Biz Bilan Bog'laning",
    contactSub: "Savollaringiz bormi? Bizga xabar qoldiring",
    lblAddress: "Manzil:",
    txtAddress: "Nurobod shahri, Samarqand viloyati, O'zbekiston",
    lblEmail: "Elektron pochta:",
    lblPhone: "Telefon:",
    btnSend: "Xabarni Yuborish",
    footerText: "© 2026 NURTECH — Nurobod 1-Son Kasb-Hunar Maktabi. Barcha huquqlar himoyalangan."
  },
  en: {
    topAnnouncement: "📌 Admissions open for the 2026/2027 Academic Year!",
    navHome: "Home",
    navAbout: "About Us",
    navNews: "Announcements",
    navFaculty: "Faculty",
    navContact: "Contact",
    heroBadge: "Official Digital Hub",
    heroTitle: "Center for Practical Skills & Future Careers",
    heroDesc: "Training top-tier specialists in modern technical fields, welding technology, IT, and engineering.",
    btnExplore: "View News",
    btnContact: "Contact Us",
    statStudents: "Enrolled Students",
    statWorkshops: "Technical Workshops",
    statTeachers: "Expert Teachers",
    statEmployment: "Employment Rate (%)",
    newsTitle: "Latest Announcements",
    newsSub: "Important updates from our college administration",
    filterAll: "All",
    filterExam: "Exams",
    filterWorkshop: "Workshops",
    filterClub: "Clubs & Garage",
    facultyTitle: "Our Faculty",
    facultySub: "Dedicated and experienced teaching staff",
    searchPlaceholder: "Search teacher by name or subject...",
    contactTitle: "Get In Touch",
    contactSub: "Have questions? Send us a message",
    lblAddress: "Address:",
    txtAddress: "Nurabad City, Samarkand Region, Uzbekistan",
    lblEmail: "Email:",
    lblPhone: "Phone:",
    btnSend: "Send Message",
    footerText: "© 2026 NURTECH — Nurabad Vocational School No. 1. All rights reserved."
  },
  ru: {
    topAnnouncement: "📌 Открыт прием документов на 2026/2027 учебный год!",
    navHome: "Главная",
    navAbout: "О нас",
    navNews: "Объявления",
    navFaculty: "Преподаватели",
    navContact: "Контакты",
    heroBadge: "Официальный Портал",
    heroTitle: "Центр Практических Навыков И Профессий Будущего",
    heroDesc: "Подготовка квалифицированных специалистов в области сварочных технологий, IT и инженерии.",
    btnExplore: "Смотреть Новости",
    btnContact: "Связаться с Нами",
    statStudents: "Количество Студентов",
    statWorkshops: "Мастерские",
    statTeachers: "Опытные Учителя",
    statEmployment: "Трудоустройство (%)",
    newsTitle: "Последние объявления",
    newsSub: "Самые важные новости из жизни техникума",
    filterAll: "Все",
    filterExam: "Экзамены",
    filterWorkshop: "Мастерская",
    filterClub: "Клубы и Секции",
    facultyTitle: "Наши Преподаватели",
    facultySub: "Команда высококвалифицированных педагогов",
    searchPlaceholder: "Поиск учителя по имени или предмету...",
    contactTitle: "Свяжитесь с Нами",
    contactSub: "Есть вопросы? Напишите нам",
    lblAddress: "Адрес:",
    txtAddress: "город Нурабад, Самаркандская область, Узбекистан",
    lblEmail: "Эл. почта:",
    lblPhone: "Телефон:",
    btnSend: "Отправить",
    footerText: "© 2026 NURTECH — Профессиональная школа №1 Нурабада. Все права защищены."
  }
};

// --- Data Mocking ---
const sampleAnnouncements = [
  { id: 1, type: "workshop", date: "2026-10-24", titleUz: "Yangi Argo-Svarqa Uskunalari Keldi", titleEn: "New Argon Welding Equipment Arrived", titleRu: "Поступило Новое Оборудование Для Аргоновой Сварки", textUz: "Ustaxonamizga eng so'nggi rusumdagi avtomatlashtirilgan payvandlash uskunalari keltirildi. Amaliyot mashg'ulotlari dushanbadan boshlanadi.", textEn: "State-of-the-art argon welding tools delivered to the workshop. Practical training starts Monday.", textRu: "В нашу мастерскую доставлено новейшее аргонодуговое сварочное оборудование. Практические занятия с понедельника." },
  { id: 2, type: "club", date: "2026-10-20", titleUz: "Texnik Va Muhandislik Klubi Yig'ilishi", titleEn: "Technical & Craftsmanship Club Meeting", titleRu: "Собрание Технического Клуба", textUz: "Har haftaning juma kuni darsdan so'ng to'garak a'zolari amaliy loyihalar ustida ishlash uchun ustaxonada yig'ilishadi.", textEn: "Every Friday after school, club members gather in the workshop for hands-on technical experiments.", textRu: "Каждую пятницу после уроков члены клуба собираются в мастерской для работы над проектами." },
  { id: 3, type: "exam", date: "2026-10-15", titleUz: "Oraliq Nazorat Imtihonlari Jadvali", titleEn: "Midterm Exam Schedule Released", titleRu: "Расписание Промежуточных Экзаменов", textUz: "Barcha bosqich o'quvchilari uchun kuzgi oraliq nazorat imtihonlari jadvali e'lon qilindi. Shaxsiy kabinetingizdan tekshiring.", textEn: "The autumn midterm exam schedule is now published. Check with your academic advisor.", textRu: "Опубликовано расписание осенних промежуточных экзаменов. Уточняйте у преподавателей." }
];

const facultyMembers = [
  { nameUz: "Jasur Rahimov", nameEn: "Jasur Rakhimov", nameRu: "Жасур Рахимов", roleUz: "Bosh Usta / Payvandlash Bo'limi", roleEn: "Head Master / Welding Dept.", roleRu: "Мастер Сварочного Отдела" },
  { nameUz: "Jamila Eshqobulova", nameEn: "Jamila Eshkabulova", nameRu: "Жамила Эшкабулова", roleUz: "Oliy Toifali O'qituvchi", roleEn: "Senior Instructor", roleRu: "Преподаватель Высшей Категории" },
  { nameUz: "Mansur Tadjiyev", nameEn: "Mansur Tadjiyev", nameRu: "Мансур Таджиев", roleUz: "Laboratoriya & IT Bo'limi Mudiri", roleEn: "Lab & IT Director", roleRu: "Заведующий Лабораторией и IT" }
];

let currentLang = "uz";

// --- DOM Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initCounterAnimation();
  renderAnnouncements("all");
  renderFaculty("");

  // Theme Toggle Button Event
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  // Language Change Listener
  document.getElementById("lang-select").addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });

  // Mobile Menu Toggle
  document.getElementById("mobile-toggle").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("open");
  });

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      renderAnnouncements(e.target.getAttribute("data-filter"));
    });
  });

  // Search Input Filter
  document.getElementById("faculty-search").addEventListener("input", (e) => {
    renderFaculty(e.target.value);
  });

  // Modal Close
  document.getElementById("modal-close").addEventListener("click", closeModal);
});

// --- Theme Logic ---
function initTheme() {
  const savedTheme = localStorage.getItem("nurtech-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("nurtech-theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

// --- Language Engine ---
function initLanguage() {
  setLanguage("uz"); // Default Uzbek
}

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.getElementById("txt-top-announcement").textContent = dict.topAnnouncement;
  document.getElementById("nav-home").textContent = dict.navHome;
  document.getElementById("nav-about").textContent = dict.navAbout;
  document.getElementById("nav-news").textContent = dict.navNews;
  document.getElementById("nav-faculty").textContent = dict.navFaculty;
  document.getElementById("nav-contact").textContent = dict.navContact;
  document.getElementById("txt-hero-badge").textContent = dict.heroBadge;
  document.getElementById("txt-hero-title").textContent = dict.heroTitle;
  document.getElementById("txt-hero-desc").textContent = dict.heroDesc;
  document.getElementById("btn-hero-explore").textContent = dict.btnExplore;
  document.getElementById("btn-hero-contact").textContent = dict.btnContact;
  document.getElementById("stat-students").textContent = dict.statStudents;
  document.getElementById("stat-workshops").textContent = dict.statWorkshops;
  document.getElementById("stat-teachers").textContent = dict.statTeachers;
  document.getElementById("stat-employment").textContent = dict.statEmployment;
  document.getElementById("txt-news-title").textContent = dict.newsTitle;
  document.getElementById("txt-news-sub").textContent = dict.newsSub;
  document.getElementById("filter-all").textContent = dict.filterAll;
  document.getElementById("filter-exam").textContent = dict.filterExam;
  document.getElementById("filter-workshop").textContent = dict.filterWorkshop;
  document.getElementById("filter-club").textContent = dict.filterClub;
  document.getElementById("txt-faculty-title").textContent = dict.facultyTitle;
  document.getElementById("txt-faculty-sub").textContent = dict.facultySub;
  document.getElementById("faculty-search").placeholder = dict.searchPlaceholder;
  document.getElementById("txt-contact-title").textContent = dict.contactTitle;
  document.getElementById("txt-contact-sub").textContent = dict.contactSub;
  document.getElementById("lbl-address").textContent = dict.lblAddress;
  document.getElementById("txt-address").textContent = dict.txtAddress;
  document.getElementById("lbl-email").textContent = dict.lblEmail;
  document.getElementById("lbl-phone").textContent = dict.lblPhone;
  document.getElementById("btn-send").textContent = dict.btnSend;
  document.getElementById("txt-footer").textContent = dict.footerText;

  // Re-render components to update dynamic text
  const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
  renderAnnouncements(activeFilter);
  renderFaculty(document.getElementById("faculty-search").value);
}

// --- Rendering & Interactivity ---
function renderAnnouncements(filter) {
  const container = document.getElementById("announcements-grid");
  container.innerHTML = "";

  const filtered = filter === "all" ? sampleAnnouncements : sampleAnnouncements.filter(item => item.type === filter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    const titleKey = `title${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`;
    const textKey = `text${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`;

    card.innerHTML = `
      <div>
        <span class="card-tag">${item.type.toUpperCase()}</span>
        <h3 class="card-title">${item[titleKey]}</h3>
        <p class="card-desc">${item[textKey].substring(0, 90)}...</p>
      </div>
      <div class="card-footer">
        <span>${item.date}</span>
        <button class="btn btn-secondary" style="padding:0.3rem 0.6rem; font-size:0.8rem;" onclick="openModal(${item.id})">Batafsil</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderFaculty(query) {
  const container = document.getElementById("faculty-grid");
  container.innerHTML = "";

  facultyMembers.forEach(person => {
    const nameKey = `name${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`;
    const roleKey = `role${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`;

    if (person[nameKey].toLowerCase().includes(query.toLowerCase()) || person[roleKey].toLowerCase().includes(query.toLowerCase())) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div style="display:flex; gap:1rem; align-items:center;">
          <div style="width:3rem; height:3rem; border-radius:50%; background:var(--primary); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.2rem;">
            ${person[nameKey].charAt(0)}
          </div>
          <div>
            <h3 class="card-title" style="margin:0;">${person[nameKey]}</h3>
            <p class="card-desc" style="margin:0;">${person[roleKey]}</p>
          </div>
        </div>
      `;
      container.appendChild(card);
    }
  });
}

// Modal Logic
function openModal(id) {
  const item = sampleAnnouncements.find(a => a.id === id);
  if (!item) return;

  const titleKey = `title${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`;
  const textKey = `text${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}`;

  document.getElementById("modal-title").textContent = item[titleKey];
  document.getElementById("modal-date").textContent = item.date;
  document.getElementById("modal-body").textContent = item[textKey];
  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

// Counter Animations
function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-num");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 50;
    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}