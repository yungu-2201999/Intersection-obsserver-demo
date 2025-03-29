function loadMore(num = 10) {
  for (let i = 0; i < num; i++) {
    const newLi = document.createElement('li');
    newLi.classList.add('item');
    const img = document.createElement('img');
    img.src = 'https://picsum.photos/400/600?r=1';
    newLi.appendChild(img);
    const ul = document.querySelector('ul');
    ul.appendChild(newLi);
  }
}

const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if(entry.isIntersecting){
      console.log("chufa")
      loadMore(4);
    }
  }
},
  {
    threshold: 0.2
  })

  ob.observe(document.querySelector('#load-more'));
