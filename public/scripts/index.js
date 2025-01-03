const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("anim");
    else entry.target.classList.remove("anim");
  });
});

const names = [
  "fade-in",
  "fade-in-left",
  "fade-in-right",
  "flip-up",
  "flip-down",
];
names.forEach((name) => {
  document.querySelectorAll("." + name).forEach((x) => {
    observer.observe(x);
  });
});
