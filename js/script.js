const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 324); // 324 days from now
targetDate.setHours(targetDate.getHours() + 22); // 22 hours from now
targetDate.setMinutes(targetDate.getMinutes() + 49); // 49 minutes from now
targetDate.setSeconds(targetDate.getSeconds() + 17); // 17 seconds from now

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the target date
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  const daysElements = document.getElementsByClassName("days");
  const hoursElements = document.getElementsByClassName("hours");
  const minutesElements = document.getElementsByClassName("minutes");
  const secondsElements = document.getElementsByClassName("seconds");

  // Update all instances of the countdown
  for (let i = 0; i < daysElements.length; i++) {
    daysElements[i].textContent = days;
    hoursElements[i].textContent = hours;
    minutesElements[i].textContent = minutes;
    secondsElements[i].textContent = seconds;
  }

  // If the countdown is finished, clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    for (let i = 0; i < daysElements.length; i++) {
      daysElements[i].textContent = 0;
      hoursElements[i].textContent = 0;
      minutesElements[i].textContent = 0;
      secondsElements[i].textContent = 0;
    }
    // You can also display a message or take another action here
  }
}, 1000); // Update every second (1000 milliseconds)


document.addEventListener('DOMContentLoaded', function() {
    // Toggle dropdowns on hover
    var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

    dropdownSubmenus.forEach(function(submenu) {
        submenu.addEventListener('mouseover', function() {
            submenu.classList.add('show');
            submenu.querySelector('.dropdown-menu').classList.add('show');
        });

        submenu.addEventListener('mouseout', function() {
            submenu.classList.remove('show');
            submenu.querySelector('.dropdown-menu').classList.remove('show');
        });
    });
});

  document.addEventListener('DOMContentLoaded', function() {
    var grocerySwiper = new Swiper('.grocery-swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.grocery-swiper-button-next',
        prevEl: '.grocery-swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }
    });
  });



  $(document).ready(function() {
    // Handle dropdown menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
      }
      var $subMenu = $(this).next('.dropdown-menu');
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass('show');
      });

      return false;
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'), {
        keyboard: false
    });
    welcomeModal.show();

    var closeButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            welcomeModal.hide();
        });
    });
});



