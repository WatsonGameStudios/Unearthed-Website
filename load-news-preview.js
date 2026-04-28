fetch("blogs.json")
  .then(res => res.json())
  .then(blogs => {
    const container = document.getElementById("more_news");
    container.innerHTML = ""; // Clear hardcoded placeholders

    // Sort newest first
    blogs
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .forEach(blog => {
        const formatted = new Date(blog.date).toLocaleDateString("en-GB", {
          day: "2-digit", month: "short", year: "numeric"
        });

        // Find a thumbnail image in the blog content, if any
        const imgBlock = blog.content.find(block => block.type === "image");

        const div = document.createElement("div");
        div.className = "old_news";

        div.innerHTML = `
          <a href="blog.html?id=${blog.id}">
            <h4>${blog.title}</h4>
            <p>${formatted}</p>
            ${imgBlock ? `<img src="${imgBlock.src}" loading="lazy" alt="${blog.title}">` : ""}
          </a>
        `;

        container.appendChild(div);
      });
  })
  .catch(() => {
    document.getElementById("more_news").innerHTML = "<p>Could not load news.</p>";
  });