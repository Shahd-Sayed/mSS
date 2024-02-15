let nCount = selector => {
  $(selector).each(function () {
    const currentCount = parseInt($(this).text());
    const currentYear = new Date().getFullYear();
    const storedYear = localStorage.getItem("lastIncrementYear");

    if (storedYear !== currentYear) {
      const newCount = currentCount + 1;
      $(this).animate({
        Counter: newCount
      }, {
        duration: 4000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });

      localStorage.setItem("lastIncrementYear", currentYear);
    }
  });
};
let a = 0;
  $(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });

  @media only screen and (max-width: 768px) {

    .numbers .rect {
      width: 10rem;
      height: 8rem;
    }
    .numbers .rect h1 {
      font-size: 2rem;
    }
  
  }

