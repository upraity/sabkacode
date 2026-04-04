fetch("/nav.html")
.then(response => response.text())
.then(data => {

document.getElementById("nav").innerHTML = data;

fetch("/footer.html")
.then(res => res.text())
.then(data => document.getElementById("footer").innerHTML = data);
    
/* NAV load hone ke baad code run hoga */
initNav();

})
.catch(error => console.error("Nav load error:", error));

function initNav(){

let isOpen = false;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const click = document.getElementById("click");

if(!click) return;

click.addEventListener("click", function(){

if (!isOpen) {

btn1.classList.remove("hidden");
btn2.classList.remove("hidden");
btn3.classList.remove("hidden");

setTimeout(()=>{
btn1.classList.add("visible");
btn2.classList.add("visible");
btn3.classList.add("visible");
},50);

isOpen = true;

}else{

btn1.classList.remove("visible");
btn2.classList.remove("visible");
btn3.classList.remove("visible");

setTimeout(()=>{
btn1.classList.add("hidden");
btn2.classList.add("hidden");
btn3.classList.add("hidden");
},300);

isOpen = false;

}

});

btn1.onclick = tele;
btn2.onclick = arattai;
btn3.onclick = whats;

}

function whats(){
window.location.href="https://wa.me/918938870794";
}

function tele(){
window.location.href="https://t.me/sabkacode";
}

function arattai(){
window.location.href="https://chat.arattai.in/groups/n43545f313238383531313639383036383535383136355f32303030353332363533342d47437c3031303134303039303132333137363136323533383832353530";
}


// Show popup on load
window.onload = function() {
    setTimeout(() => {
        document.getElementById("popup").classList.add("active");
    }, 500); // 0.5 sec delay
}

// Close button
document.getElementById("closeBtn").onclick = function() {
    document.getElementById("popup").classList.remove("active");
}

// Close on outside click
document.getElementById("popup").onclick = function(e) {
    if(e.target === this) {
        this.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("closeBtn").onclick = function() {
        document.getElementById("popup").classList.remove("active");
    };
});


//nav 
        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.getElementById("navLinks");
        const floatingToggle = document.getElementById("floatingToggle");
        const socialStack = document.getElementById("socialStack");
        const dropButtons = document.querySelectorAll(".drop-btn");

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        floatingToggle.addEventListener("click", () => {
            socialStack.classList.toggle("open");
        });

        dropButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (window.innerWidth > 860) {
                    return;
                }

                const parent = button.parentElement;
                const isOpen = parent.classList.toggle("open");
                button.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 860) {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
                document.querySelectorAll(".drop").forEach((drop) => {
                    drop.classList.remove("open");
                });
            }
        });

/*******************************************/
function loadPartial(targetId, sources) {
  const target = document.getElementById(targetId);
  if (!target) {
    return Promise.resolve(false);
  }

  function trySource(index) {
    if (index >= sources.length) {
      return Promise.resolve(false);
    }

    return fetch(sources[index])
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load " + sources[index]);
        }
        return response.text();
      })
      .then((html) => {
        target.innerHTML = html;
        return true;
      })
      .catch(() => trySource(index + 1));
  }

  return trySource(0);
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

function initFloatingButtons() {
  let isOpen = false;
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const click = document.getElementById("click");

  if (!btn1 || !btn2 || !btn3 || !click) {
    return;
  }

  function showButtons() {
    [btn1, btn2, btn3].forEach((button) => {
      button.classList.remove("hidden");
    });

    setTimeout(() => {
      [btn1, btn2, btn3].forEach((button) => {
        button.classList.add("visible");
      });
    }, 40);
  }

  function hideButtons() {
    [btn1, btn2, btn3].forEach((button) => {
      button.classList.remove("visible");
    });

    setTimeout(() => {
      [btn1, btn2, btn3].forEach((button) => {
        button.classList.add("hidden");
      });
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

function initResponsiveNav() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const floatingToggle = document.getElementById("floatingToggle");
  const socialStack = document.getElementById("socialStack");
  const dropButtons = document.querySelectorAll(".drop-btn");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.innerHTML = isOpen
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
      const isOpen = parent.classList.toggle("open");
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
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
}

function initPopup() {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  if (!popup || !closeBtn) {
    return;
  }

  setTimeout(() => {
    popup.classList.add("active");
  }, 500);

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("active");
    }
  });
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
    const visibleCards = filteredCards.slice(start, start + postsPerPage);

    visibleCards.forEach((card) => {
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
      : "Showing " + (start + 1) + "-" + Math.min(start + visibleCards.length, filteredCards.length) + " of " + filteredCards.length + " posts";
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

function initSite() {
  Promise.all([
    loadPartial("nav", ["/newnav.html", "/nav.html", "newnav.html", "nav.html"]),
    loadPartial("footer", ["/footer.html", "footer.html"]),
  ]).then(() => {
    initResponsiveNav();
    initFloatingButtons();
    initPopup();
    initBlogFilters();
  });
}

document.addEventListener("DOMContentLoaded", initSite);
