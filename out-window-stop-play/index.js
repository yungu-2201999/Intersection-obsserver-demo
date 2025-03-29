const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const vdo = entry.target;
    if (entry.isIntersecting) {
      vdo.play();
    } else {
      vdo.pause();
    }
  }
}, {
  threshold: 0.6
})

ob.observe(document.querySelector('video'));
