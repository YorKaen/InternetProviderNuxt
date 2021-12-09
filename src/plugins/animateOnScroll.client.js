import Vue from 'vue'

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
        entry.target.classList.add('animate-in')
      }
    })
  });

//-Для постоянной анимации
//-const observer = new IntersectionObserver(entries => {
//-  entries.forEach(entry => {
//-    if (entry.isIntersecting) {
//-      entry.target.classList.add('animate-in')
//-    } else {
//-      entry.target.classList.remove('animate-in')
//-    }
//-  })
//-});

Vue.directive('animate-on-scroll', {
  bind: el => {
    el.classList.add('before-enter') //-для стилей и любого элемента
    observer.observe(el);
  }
})
