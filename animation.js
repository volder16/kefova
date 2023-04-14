const prices = document.querySelectorAll('.price');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
});

prices.forEach(price => {
  observer.observe(price);
});

const pricess = document.querySelectorAll('.photo');
pricess.forEach(photo => {
  observer.observe(photo);
});

const galery = document.querySelectorAll('#textBlock');
galery.forEach(textBlock => {
  observer.observe(textBlock);
});
