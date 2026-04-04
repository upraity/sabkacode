function loadPartial(targetId, files) {
  const target = document.getElementById(targetId);
  if (!target) {
    return Promise.resolve();
  }

  function tryFetch(index) {
    if (index >= files.length) {
      return Promise.reject(new Error("Failed to load partial for " + targetId));
    }

    return fetch(files[index])
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load " + files[index]);
        }
        return response.text();
      })
      .then((markup) => {
        target.innerHTML = markup;
      })
      .catch(() => tryFetch(index + 1));
  }

  return tryFetch(0).catch((error) => {
    console.error(error);
  });
}

function initNav() {
  let isOpen = false;
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const click = document.getElementById("click");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const floatingToggle = document.getElementById("floatingToggle");
  const socialStack = document.getElementById("socialStack");
  const dropButtons = document.querySelectorAll(".drop-btn");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const menuIsOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", menuIsOpen ? "true" : "false");
      menuToggle.innerHTML = menuIsOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  if (floatingToggle && socialStack) {
    floatingToggle.addEventListener("click", () => {
      socialStack.classList.toggle("open");
    });
  }

  dropButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (window.innerWidth > 860) {
        return;
      }

      const parent = button.parentElement;
      const menuIsOpen = parent.classList.toggle("open");
      button.setAttribute("aria-expanded", menuIsOpen ? "true" : "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      if (navLinks) {
        navLinks.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }

      document.querySelectorAll(".drop").forEach((drop) => {
        drop.classList.remove("open");
      });
    }
  });

  if (!btn1 || !btn2 || !btn3 || !click) {
    return;
  }

  function showButtons() {
    [btn1, btn2, btn3].forEach((button) => button.classList.remove("hidden"));
    setTimeout(() => {
      [btn1, btn2, btn3].forEach((button) => button.classList.add("visible"));
    }, 40);
  }

  function hideButtons() {
    [btn1, btn2, btn3].forEach((button) => button.classList.remove("visible"));
    setTimeout(() => {
      [btn1, btn2, btn3].forEach((button) => button.classList.add("hidden"));
    }, 260);
  }

  click.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      showButtons();
    } else {
      hideButtons();
    }
  });

  btn1.addEventListener("click", tele);
  btn2.addEventListener("click", arattai);
  btn3.addEventListener("click", whats);
}

function whats() {
  window.location.href = "https://wa.me/918938870794";
}

function tele() {
  window.location.href = "https://t.me/sabkacode";
}

function arattai() {
  window.location.href = "https://chat.arattai.in/groups/n43545f313238383531313639383036383535383136355f32303030353332363533342d47437c3031303134303039303132333137363136323533383832353530";
}

function initBlogFilters() {
  const searchInput = document.getElementById("searchInput");
  const blogContainer = document.getElementById("blogContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const resultsInfo = document.getElementById("resultsInfo");

  if (!searchInput || !blogContainer || !prevBtn || !nextBtn || !resultsInfo) {
    return;
  }

  const cards = Array.from(blogContainer.querySelectorAll(".blog-card"));
  const postsPerPage = 2;
  let currentPage = 1;
  let filteredCards = cards.slice();

  function render() {
    const totalPages = Math.max(1, Math.ceil(filteredCards.length / postsPerPage));
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    cards.forEach((card) => {
      card.style.display = "none";
    });

    const start = (currentPage - 1) * postsPerPage;
    const currentItems = filteredCards.slice(start, start + postsPerPage);
    currentItems.forEach((card) => {
      card.style.display = "";
    });

    let emptyState = blogContainer.querySelector(".empty-state");
    if (filteredCards.length === 0) {
      if (!emptyState) {
        emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        emptyState.textContent = "No articles matched your search. Try another keyword.";
        blogContainer.appendChild(emptyState);
      }
    } else if (emptyState) {
      emptyState.remove();
    }

    prevBtn.disabled = currentPage === 1 || filteredCards.length === 0;
    nextBtn.disabled = currentPage === totalPages || filteredCards.length === 0;
    resultsInfo.textContent = filteredCards.length === 0
      ? "No posts found"
      : "Showing " + (start + 1) + "-" + Math.min(start + currentItems.length, filteredCards.length) + " of " + filteredCards.length + " posts";
  }

  function applyFilter() {
    const query = searchInput.value.trim().toLowerCase();
    filteredCards = cards.filter((card) => {
      const text = (card.dataset.title + " " + card.dataset.category + " " + card.textContent).toLowerCase();
      return text.includes(query);
    });
    currentPage = 1;
    render();
  }

  searchInput.addEventListener("input", applyFilter);
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage -= 1;
      render();
    }
  });
  nextBtn.addEventListener("click", () => {
    const totalPages = Math.max(1, Math.ceil(filteredCards.length / postsPerPage));
    if (currentPage < totalPages) {
      currentPage += 1;
      render();
    }
  });

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadPartial("nav", ["/newnav.html", "https://sabkacode.vercel.app/nav.html", "newnav.html"]),
    loadPartial("footer", ["/footer.html", "https://sabkacode.vercel.app/footer.html", "footer.html"]),
  ]).then(() => {
    initNav();
    initBlogFilters();
  });
});
