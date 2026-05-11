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
    loadPartial("nav", ["/nav.html", "nav.html"]),
    loadPartial("footer", ["/footer.html", "footer.html"]),
  ]).then(() => {
    initResponsiveNav();
    initFloatingButtons();
    initPopup();
    initBlogFilters();
  });
}

document.addEventListener("DOMContentLoaded", initSite);

        const menuToggle    = document.getElementById("menuToggle");
        const navLinks      = document.getElementById("navLinks");
        const floatingToggle = document.getElementById("floatingToggle");
        const socialStack   = document.getElementById("socialStack");
        const dropButtons   = document.querySelectorAll(".drop-btn");
        const mainNav       = document.getElementById("mainNav");
        const navGhost      = document.getElementById("navGhost");
        const backToTop     = document.getElementById("backToTop");

        /* ── Menu toggle (mobile) ── */
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        /* ── Social stack toggle ── */
        floatingToggle.addEventListener("click", () => {
            socialStack.classList.toggle("open");
        });

        /* ── Dropdown (mobile) ── */
        dropButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (window.innerWidth > 860) return;
                const parent = button.parentElement;
                const isOpen = parent.classList.toggle("open");
                button.setAttribute("aria-expanded", isOpen ? "true" : "false");
            });
        });

        /* ── Reset on resize ── */
        window.addEventListener("resize", () => {
            if (window.innerWidth > 860) {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
                document.querySelectorAll(".drop").forEach(d => d.classList.remove("open"));
            }
        });

        /* ── Sticky Nav + Back-to-Top on scroll ── */
        let navOffsetTop = 0;
        let navHeight    = 0;

        function calcNavPosition() {
            if (!mainNav.classList.contains("is-sticky")) {
                navOffsetTop = mainNav.getBoundingClientRect().top + window.scrollY;
                navHeight    = mainNav.offsetHeight;
            }
        }

        calcNavPosition();
        window.addEventListener("resize", calcNavPosition);

        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;

            /* Sticky nav */
            if (scrollY > navOffsetTop) {
                if (!mainNav.classList.contains("is-sticky")) {
                    navGhost.style.height = navHeight + "px";
                    navGhost.classList.add("is-sticky");
                    mainNav.classList.add("is-sticky");
                }
            } else {
                mainNav.classList.remove("is-sticky");
                navGhost.classList.remove("is-sticky");
            }

            /* Back to top visibility — show after 300px */
            if (scrollY > 300) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        }, { passive: true });

        /* ── Back to top click ── */
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

  // Reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Form submit — opens mailto (no backend needed)
  function submitForm() {
    const name    = document.getElementById('fname').value.trim();
    const email   = document.getElementById('femail').value.trim();
    const subject = document.getElementById('fsubject').value || 'General Contact';
    const message = document.getElementById('fmessage').value.trim();

    if (!name || !email || !message) {
      alert('Kripya naam, email aur message zaroor bharen!');
      return;
    }

    const to = 'sabkacode@gmail.com';
    const body = `Naam: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  }

(function(){
    var menuToggle     = document.getElementById('menuToggle');
    var navLinks       = document.getElementById('navLinks');
    var floatingToggle = document.getElementById('floatingToggle');
    var socialStack    = document.getElementById('socialStack');
    var mainNav        = document.getElementById('mainNav');
    var navGhost       = document.getElementById('navGhost');
    var navSentinel    = document.getElementById('navSentinel');
    var backToTop      = document.getElementById('backToTop');
    var dropButtons    = document.querySelectorAll('.drop-btn');

    /* Mobile menu */
    menuToggle.addEventListener('click', function(){
        var open = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', open);
        menuToggle.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    /* Social stack */
    floatingToggle.addEventListener('click', function(){
        socialStack.classList.toggle('open');
    });

    /* Mobile dropdowns */
    dropButtons.forEach(function(btn){
        btn.addEventListener('click', function(){
            if (window.innerWidth > 860) return;
            var open = btn.parentElement.classList.toggle('open');
            btn.setAttribute('aria-expanded', open);
        });
    });

    /* Resize cleanup */
    window.addEventListener('resize', function(){
        if (window.innerWidth > 860) {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded','false');
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            document.querySelectorAll('.drop').forEach(function(d){ d.classList.remove('open'); });
        }
    });

    /* ── STICKY NAV using IntersectionObserver ──
       navSentinel is an invisible 1px div placed right above the nav.
       When it scrolls OUT of view → nav becomes fixed at top.
       When it scrolls back IN → nav returns to normal flow.          */

    function goSticky(){
        navGhost.style.height = mainNav.offsetHeight + 'px';
        navGhost.classList.add('is-sticky');
        mainNav.classList.add('is-sticky');
    }
    function goNormal(){
        mainNav.classList.remove('is-sticky');
        navGhost.classList.remove('is-sticky');
    }

    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function(entries){
            entries[0].isIntersecting ? goNormal() : goSticky();
        }, { rootMargin: '0px', threshold: 0 });
        io.observe(navSentinel);
    } else {
        /* Fallback for old browsers */
        var triggerY = 0;
        function calcTrigger(){
            triggerY = navSentinel.getBoundingClientRect().top + window.pageYOffset;
        }
        calcTrigger();
        window.addEventListener('resize', calcTrigger);
        window.addEventListener('scroll', function(){
            window.pageYOffset > triggerY ? goSticky() : goNormal();
        }, {passive:true});
    }

    /* ── BACK TO TOP ── */
    window.addEventListener('scroll', function(){
        window.pageYOffset > 300
            ? backToTop.classList.add('show')
            : backToTop.classList.remove('show');
    }, {passive:true});

    backToTop.addEventListener('click', function(){
        window.scrollTo({top:0, behavior:'smooth'});
    });

})();
