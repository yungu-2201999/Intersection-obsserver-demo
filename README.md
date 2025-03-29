# Intersection-obsserver-demo

`IntersectionObserver` 可以控制元素到了视口范围内时展示

标准模版：
···javascript
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
    // 这里放置元素进入视口内要执行的逻辑
    }
  }
}, {
  // root: null, // 所观察元素的父元素
  // rootMargin: '0px', // 观察元素的边界，也就是元素距离视口多少距离时开始加载，默认为0
  threshold: 0.5 // 阈值【范围0-1】，表示元素在可视区域的比例，超过这个比例才会触发回调
})

ob.observe(/* 对应的dom元素，可以使用document.querySelector 查找*/);
···

能做的事情：
1. 图片懒加载
2. 页面触底加载
3. 广告离屏暂停
...
