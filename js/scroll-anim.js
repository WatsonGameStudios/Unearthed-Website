const mq = window.matchMedia("(max-width: 768px)");

function createObserver(isMobile) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    isMobile
      ? { threshold: 0.01, rootMargin: "0px 0px -15% 0px" }
      : { threshold: 0.15 }
  );
}

let observer = createObserver(mq.matches);

document.querySelectorAll(".fade-right, .fade-left")
  .forEach(el => observer.observe(el));

mq.addEventListener("change", (e) => {
  observer.disconnect();
  observer = createObserver(e.matches);

  document.querySelectorAll(".fade-right, .fade-left")
    .forEach(el => observer.observe(el));
});