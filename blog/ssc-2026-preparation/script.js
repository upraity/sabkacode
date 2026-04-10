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

function loadGoogleTranslate() {
  window.googleTranslateElementInit = function () {
    if (!window.google || !window.google.translate) {
      return;
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi,bn,gu,mr,pa,ta,te,ur",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  if (document.querySelector('script[data-google-translate="true"]')) {
    return;
  }

  const script = document.createElement("script");
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  script.setAttribute("data-google-translate", "true");
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadPartial("nav", ["../../nav.html", "/nav.html", "https://sabkacode.vercel.app/nav.html"]),
    loadPartial("footer", ["../../footer.html", "/footer.html", "https://sabkacode.vercel.app/footer.html"]),
  ]).then(() => {
    initFloatingButtons();
    loadGoogleTranslate();
  });
});
