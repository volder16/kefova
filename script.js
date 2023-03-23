const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
  const hammertime = new Hammer(photo);
  hammertime.on('swipeleft', () => {
    photo.classList.remove('photo-expanded');
  });
  hammertime.on('swiperight', () => {
    photo.classList.add('photo-expanded');
  });
});