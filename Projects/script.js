function initializeTheme() {
    const savedTheme = localStorage.getItem('themePreference') || 'light-mode';

    document.body.classList.add(savedTheme);

    if (savedTheme === 'dark-mode') {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
}

initializeTheme();



themeToggle.addEventListener('click', () => {
     const isDarkMode = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode'); // Assuming one is always present

    let newTheme;

    if (isDarkMode) {
        themeToggle.textContent = 'Light Mode';
        newTheme = 'dark-mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
        newTheme = 'light-mode';
    }

    localStorage.setItem('themePreference', newTheme);
});


const observerOptions = {
    threshold: 0.2 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
        }
    });
}, observerOptions);

// Select all elements with the hidden class
const hiddenElements = document.querySelectorAll('.section-hidden');
hiddenElements.forEach((el) => observer.observe(el));


/*const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealElements);*/


const reveals = document.querySelectorAll(".reveal");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("active");
        }
    });
}, {threshold: 0.2 });

reveals.forEach(el => observer3.observe(el));

/*const reveals = document.querySelectorAll(".reveal");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {threshold: 0.2 });

reveals.forEach(el => observer2.observe(el));*/


const faqItems = document.querySelectorAll('.enquiry');

faqItems.forEach(item => {
  item.querySelector('.enquiry_btn').addEventListener('click', () =>{

    const alreadyOpen = item.classList.contains('open')

    faqItems.forEach(i=> i.classList.remove('open') )

    if(!alreadyOpen) {
    item.classList.add('open')
   }
  })
})
