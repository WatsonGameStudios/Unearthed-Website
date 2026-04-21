fetch("blogs.json")
  .then(res => res.json())
  .then(blogs => {

    const blog = blogs.find(b => Number(b.id) === 1);

    if (!blog) {
      document.getElementById("app").innerHTML = "<h1>Post not found</h1>";
      return;
    }

    const template = document.getElementById("blog-template");
    const clone = template.content.cloneNode(true);

    clone.querySelector(".blog-title").textContent = blog.title;
    clone.querySelector(".blog-date").textContent = blog.date;

    const contentDiv = clone.querySelector(".content-auto");

    blog.content.forEach(block => {
      if (block.type === "paragraph") {
        const p = document.createElement("p");
        p.textContent = block.text;
        contentDiv.appendChild(p);
      }

      if (block.type === "heading") {
        const h3 = document.createElement("h3");
        h3.textContent = block.text;
        contentDiv.appendChild(h3);
      }

      if (block.type === "image") {
        const img = document.createElement("img");
        img.src = block.src;
        contentDiv.appendChild(img);
      }
    });

    document.getElementById("app").appendChild(clone);
  });

const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
  });
}