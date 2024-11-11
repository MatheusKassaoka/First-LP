// Jquery
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.arquet', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_yung', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});

// Swiper

var swiper = new Swiper('.swiper-container', {
    loop: true,
    cssMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// EmailJs

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
        let isValid = true;
    
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const emailError = document.getElementById('emailError');
        const phoneField = document.getElementById("phone");
        const messageField = document.getElementById("message");
    
        if (nameField.value.trim() === "") {
            document.getElementById("nameError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("nameError").style.display = "none";
        }

        const emailPattern = /@/;
        if (!emailPattern.test(emailField.value)) {
            document.getElementById("emailError").style.display = "block";
            emailError.textContent = 'O campo de e-mail deve conter "@"!';
            isValid = false;
        } else {
            document.getElementById("emailError").style.display = "none";
        }

        const phonePattern = /^[0-9]+$/;

        if (!phonePattern.test(phoneField.value)) {
            event.preventDefault();
            phoneError.style.display = 'block';
            phoneError.textContent = "O campo deve conter apenas números!";
            isValid=false;
        } else {
            phoneError.style.display = 'none';
        }
    
        if (messageField.value.trim() === "") {
            document.getElementById("messageError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("messageError").style.display = "none";
        }

        if(isValid) {

            const serviceID = "service_912m89s";
            const templateID = "template_52c0l1g";
    
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                document.getElementById('formStatus').innerText = 'Eba! A mensagem foi enviada com sucesso!';
                document.getElementById('contactForm').reset(); // Limpa o formulário
            }, (error) => {
                document.getElementById('formStatus').innerText = 'Ops! Falha ao enviar a mensagem. Tente novamente, por favor.';
                console.log("Erro:", error);
            });

        } else {
            document.getElementById('formStatus').innerText = 'Por favor, corrija os erros antes de enviar.';
        }
});
  