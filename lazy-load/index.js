const ob = new IntersectionObserver((entries) => {
  // 交叉改变后运行
  for (const entry of entries) {
    if(entry.isIntersecting){
      console.log("交叉")
      const img = entry.target;
      img.src= img.dataset.src;
      ob.unobserve(img); // 停止观察
    }
  }
}, {
  // root: null, // 观察的元素的父元素
  // rootMargin: '0px', // 观察元素的边界
  threshold: 0.5 // 阈值【范围0-1】，表示元素在可视区域的比例，超过这个比例才会触发回调
})
const imgs = document.querySelectorAll('img[data-src]')
imgs.forEach(img => {
  ob.observe(img)
})
