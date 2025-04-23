//burger//


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = document.querySelectorAll('.nav__link-menu');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    // document.body.classList.toggle('stop-scroll');
  });


// menulinks.forEach(function (e) {
//   e.addEventListener('click', function () {

//     burger.classList.remove('burger--active');

//     menu.classList.remove('header__nav--acive');

//     document.body.classList.remove('stop-scroll')



//   })
// });









let burger1 = document.querySelector('.play-radioM');
let menu1 = document.querySelector('.airplay');
let menulinks1 = menu.querySelectorAll('.airplay__music');

burger1.addEventListener('click',

  function () {

    burger1.classList.toggle('play-radioM--active');

    menu1.classList.toggle('airplay--active');

    // document.body.classList.toggle('stop-scroll');
  })

menulinks1.forEach(function (el) {
  el.addEventListener('click', function () {

    burger1.classList.remove('play-radioM--active');

    menu1.classList.remove('airplay--active');

    // document.body.classList.remove('stop-scroll')



  })
});








//accordion//



document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',

  });
})




//tabs//




let tabsBtn = document.querySelectorAll('.blogger__btn');
let tabsItem = document.querySelectorAll('.guest__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('blogger__btn--active')
    });
    e.currentTarget.classList.add('blogger__btn--active');

    tabsItem.forEach(function (element) {
      element.classList.remove('guest__item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guest__item--active');

  })

});





//swiper//






document.querySelectorAll('.swiper-container').forEach(function(elem) {
  new Swiper(elem, {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: elem.nextElementSibling.nextElementSibling,
      prevEl: elem.nextElementSibling,
    },

    breakpoints: {

      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      1100: {
        slidesPerView: 3,
        spaceBetween: 28
      },

      1400: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 1920px
      // 1920: {
      //   slidesPerView: 4,
      //   spaceBetween: 30
      // },

    }


  });

}); 







//searchbar//






// открыть\закрыть, отправить форму поиска
let btnOpen = document.querySelector('[data-searchbar]');
// let btnOpen2 = document.querySelector('[data-searchbar]');
let formSearch = document.querySelector('.searchbar__form');
let input = document.querySelector('.form__input-search');
let btnClose = document.querySelector('.btn-close');
console.log(btnOpen);
btnOpen.addEventListener('click', function () {
  formSearch.classList.add('form__search-active');
  // btnOpen.classList.add('active');
});

btnClose.addEventListener('click', function () {
  formSearch.classList.remove('form__search-active');
  // btnOpen.classList.remove('active');
  input.value = '';
});

document.addEventListener('click',
function (el) {
  let target = el.target;
  if (!target.closest('.searchbar')) {
    formSearch.classList.remove('form__search-active');
    // btnOpen.classList.remove('active');
    input.value = '';
  }

});







//play//






let btn = document.querySelectorAll('.airplay__music-btn')

btn.forEach(function (i) {


  i.addEventListener('click', function (e) {
    e.target.closest('.airplay__music-btn').classList.toggle('play-btn--toggle');
  })



});

let btnpodcast = document.querySelectorAll('.play-btn')

btnpodcast.forEach(function (i) {


  i.addEventListener('click', function (e) {
    e.target.closest('.play-btn').classList.toggle('play-btn--toggle');
  })



});







//select//




const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  // position: 'bottom'
});









//form//



new JustValidate('.aboutus__form', {
  rules: {
    checkbox: {
      required: true
    },
    
    email: {
      required: true,
      email: true
    },


    
   
  }
});




new JustValidate('.dialog__form', {
  rules: {
    checkbox: {
      required: true
    },
    
  

    password: {
      strength: {
        default: true,
      }
    },


    
   
  }
});









//modal//


const firstFocusable = container => {
  const target = container.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (target) {
      target.focus();
  }
};

const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  if (outer.parentNode) {
      outer.parentNode.removeChild(outer);
  }
  if (document.body.scrollHeight > window.innerHeight) {
      return scrollbarWidth;
  }
  return 0;
};

class Modal {
  constructor(element) {
      this.template = element;
    
      this.escapeEvent = event => {
          if (event.key === 'Escape') {
              this.close();
          }
      };
    
      this.template.addEventListener('click', event => {
          if (event.target === this.template) {
              this.close();
          }
      });
    
      const closeButton = this.template.querySelector('.dialog__close');
      if (closeButton) {
          closeButton.addEventListener('click', () => {
              this.close();
          });
      }
  }

  open() {
      this.activeElement = document.activeElement;
      this.template.setAttribute('open', true);
      document.addEventListener('keydown', this.escapeEvent);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = getScrollbarWidth() + 'px';
      firstFocusable(this.template);
  }

  close() {
      this.template.removeAttribute('open');
      document.removeEventListener('keydown', this.escapeEvent);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
      if (this.activeElement) {
          this.activeElement.focus();
      }
  }

}

(() => {
  document.querySelectorAll('[data-modal-open]').forEach(button => {
      const modalId = button.dataset.modalOpen;
      const modalElement = document.querySelector(`[data-modal="${modalId}"]`);
      if (modalElement) {
          const modal = new Modal(modalElement);
          button.addEventListener('click', () => {
              modal.open();
          });
      }
  });
})();





//show//





const quantityParams = {
  quantity: 4,
  boxes: [],
  hiddenIndex: null,
  MOBILE: {
    screen: 555,
    quantity: 1
  },
  TABLET: {
    screen: 1280,
    quantity: 2
  },
  DESKTOP: {
    screen: 1281,
    quantity: 2
  }
};

function setHiddenIdx() {
  quantityParams.boxes = Array.from(document.querySelectorAll(".podcast__item"));
  const newHiddenIdx = quantityParams.boxes.findIndex((box) => isHidden(box))
  quantityParams.hiddenIndex = newHiddenIdx;
}

function isHidden(el) {
  const style = window.getComputedStyle(el);
  return style.display === "none";
}

function showHide (btn) {
  for (
      let k = quantityParams.hiddenIndex;
      k < quantityParams.hiddenIndex + quantityParams.quantity;
      k++
    ) {
      if (quantityParams.boxes[k]) {
        quantityParams.boxes[k].style.display = "block";
      } else {
        btn.style.display = "none";
        break;
      }
    }
}

function getShowQuantity() {
  switch (true) {
    case window.screen.width <= quantityParams.MOBILE.screen:
      if (quantityParams.quantity !== quantityParams.MOBILE.quantity) {
        quantityParams.quantity = quantityParams.MOBILE.quantity;
        setHiddenIdx();
      }
      break;
    case window.screen.width <= quantityParams.TABLET.screen:
      if (quantityParams.quantity !== quantityParams.TABLET.quantity) {
        quantityParams.quantity = quantityParams.TABLET.quantity;
        setHiddenIdx();
      }
      break;
    default:
      if (quantityParams.quantity !== quantityParams.DESKTOP.quantity) {
        quantityParams.quantity = quantityParams.DESKTOP.quantity;
        setHiddenIdx();
      }
  }
}

function setShowMore() {
  const btn = document.querySelector(".podcast__btn ");

  btn.addEventListener("click", function () {
    setHiddenIdx();
    showHide(btn);
    // quantityParams.hiddenIndex += quantityParams.quantity;
  });
  getShowQuantity();
  window.addEventListener(`resize`, getShowQuantity);
}

setShowMore();

//    Конец обертки






