function updateTransition(ev) {
  console.log(
    `${ev.propertyName} transition ended after ${ev.elapsedTime} second/s`
  );
}

const f = document.getElementById('foo');
document.addEventListener(
  'click',
  (ev) => {
    console.log('clicked!');
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false
);

document.addEventListener('transitionend', updateTransition, true);
