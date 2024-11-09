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
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !phone || !message) {
      document.getElementById('formStatus').innerText = 'Olá, por favor, preencha todos os campos, por gentileza.';
      return;
    }
  
    // Envio do formulário usando EmailJS
    emailjs.send('service_912m89s', 'template_52c0l1g', {
      name: name,
      email: email,
      phone: phone,
      message: message
    })
    .then(function(response) {
      document.getElementById('formStatus').innerText = 'Eba! A mensagem foi  enviada com sucesso!';
      document.getElementById('contactForm').reset(); 
    }, function(error) {
      document.getElementById('formStatus').innerText = 'Ops! Falha ao enviar a mensagem. Tente novamente, por favor.';
    });
  });
  