var typed = new Typed('#element', {
    strings: ['Larry Daniles', 'Developer','Designer'],
    typeSpeed: 80,
    backSpeed:80,
    loop:true
});
// تحديد عنصر شريط التنقل
const navbar = document.getElementById("navbar-example");

// تحديد العنصر الذي يحتوي على كلمة "Daniel"

const navbarBrand = navbar.querySelector(".navbar-brand");


// تعريف الألوان لكل قسم
const sectionColors = {
about: "rgba(255, 255, 255, 1)",
services: "rgba(255, 255, 255, 1)", 
portfolio: "rgba(255, 255, 255, 1)",
testimonials: "rgba(255, 255, 255, 1)",
team: "rgba(255, 255, 255, 1)",  
contact: "rgba(255, 255, 255, 1)", 
};
// تعريف ألوان النص لكل قسم
const textColors = {
    // navbar-brand:#000,
    about: "#000", 
    services: "#000", 
    portfolio: "#000", 
    testimonials: "#000", 
    team: "#000", 
    contact: "#000" 
};

// تعريف لون كلمة "Daniel" في قسم "About" فقط
const danielColor = {
    about: "#000", // اللون الخاص لكلمة "Daniel" في قسم "About"
    default: "#000" // اللون الافتراضي في بقية الأقسام
};
// عرض شريط التنقل حسب القسم

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        
      // تغيير لون خلفية شريط التنقل بناءً على القسم المرئي
    navbar.style.backgroundColor = sectionColors[entry.target.id];

      // تغيير لون النص في شريط التنقل بناءً على القسم المرئي
    navbar.style.color = textColors[entry.target.id];
    
      // تغيير لون النص لكل الروابط داخل شريط التنقل
    navbar.querySelectorAll(".nav-link").forEach(link => {
        link.style.color = textColors[entry.target.id];
    });

    // تغيير لون كلمة "Daniel" بناءً على القسم المرئي
    if (entry.target.id === "about") {
    navbarBrand.style.color = danielColor.about;
    } else {
    navbarBrand.style.color = danielColor.default;
    }
    }
});
}, { threshold: 0.5 });

// إضافة الأقسام إلى المراقب
document.querySelectorAll("section").forEach((section) => {
observer.observe(section);
});





