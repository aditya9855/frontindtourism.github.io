document.addEventListener('DOMContentLoaded', function() {
   // Mobile Menu Toggle
   let menuBtn = document.querySelector('.fa-bars');
   let navbar = document.querySelector('.navbar');
   
   menuBtn.onclick = () => {
       menuBtn.classList.toggle('fa-times');
       navbar.classList.toggle('active');
   };
   
   // Close menu when clicking outside
   document.addEventListener('click', (e) => {
       if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
           menuBtn.classList.remove('fa-times');
           navbar.classList.remove('active');
       }
   });
   
   // Sticky Header on Scroll
   window.onscroll = () => {
       menuBtn.classList.remove('fa-times');
       navbar.classList.remove('active');
       
       if (window.scrollY > 100) {
           document.querySelector('header').classList.add('header-active');
       } else {
           document.querySelector('header').classList.remove('header-active');
       }
   };
   
   // Smooth Scrolling for Navigation Links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault();
           
           const targetId = this.getAttribute('href');
           if (targetId === '#') return;
           
           const targetElement = document.querySelector(targetId);
           if (targetElement) {
               window.scrollTo({
                   top: targetElement.offsetTop - 80,
                   behavior: 'smooth'
               });
           }
       });
   });
   
   // Form Validation
   const forms = document.querySelectorAll('form');
   forms.forEach(form => {
       form.addEventListener('submit', function(e) {
           let isValid = true;
           const inputs = this.querySelectorAll('input[required], textarea[required]');
           
           inputs.forEach(input => {
               if (!input.value.trim()) {
                   isValid = false;
                   input.style.borderColor = 'red';
                   
                   // Remove error style after 2 seconds
                   setTimeout(() => {
                       input.style.borderColor = '#ddd';
                   }, 2000);
               }
           });
           
           if (!isValid) {
               e.preventDefault();
               alert('Please fill in all required fields');
           } else {
               // In a real app, you would submit the form here
               alert('Form submitted successfully!');
               // this.submit();
           }
       });
   });
   
   // Animation on Scroll
   const animateOnScroll = () => {
       const elements = document.querySelectorAll('.card, .box, .review .box');
       
       elements.forEach(element => {
           const elementPosition = element.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;
           
           if (elementPosition < windowHeight - 100) {
               element.style.opacity = '1';
               element.style.transform = 'translateY(0)';
           }
       });
   };
   
   // Set initial state for animation
   document.querySelectorAll('.card, .box, .review .box').forEach(el => {
       el.style.opacity = '0';
       el.style.transform = 'translateY(50px)';
       el.style.transition = 'all 0.5s ease';
   });
   
   window.addEventListener('scroll', animateOnScroll);
   animateOnScroll(); // Run once on page load
   
   // Image Lazy Loading
   if ('IntersectionObserver' in window) {
       const lazyImages = document.querySelectorAll('img[data-src]');
       
       const imageObserver = new IntersectionObserver((entries, observer) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   const img = entry.target;
                   img.src = img.dataset.src;
                   img.removeAttribute('data-src');
                   observer.unobserve(img);
               }
           });
       });
       
       lazyImages.forEach(img => {
           imageObserver.observe(img);
       });
   }
   
   // Current Year in Footer
   const yearSpan = document.createElement('span');
   yearSpan.textContent = new Date().getFullYear();
   document.querySelector('.credit').appendChild(document.createTextNode(' | '));
   document.querySelector('.credit').appendChild(yearSpan);
});document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    let menuBtn = document.querySelector('.fa-bars');
    let navbar = document.querySelector('.navbar');
    
    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
            menuBtn.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    });
    
    // Sticky Header on Scroll
    window.onscroll = () => {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
        
        if (window.scrollY > 100) {
            document.querySelector('header').classList.add('header-active');
        } else {
            document.querySelector('header').classList.remove('header-active');
        }
    };
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    
                    // Remove error style after 2 seconds
                    setTimeout(() => {
                        input.style.borderColor = '#ddd';
                    }, 2000);
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            } else {
                // In a real app, you would submit the form here
                alert('Form submitted successfully!');
                // this.submit();
            }
        });
    });
    
    // Animation on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .box, .review .box');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.card, .box, .review .box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Image Lazy Loading
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Current Year in Footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('.credit').appendChild(document.createTextNode(' | '));
    document.querySelector('.credit').appendChild(yearSpan);
});
