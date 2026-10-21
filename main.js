(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var FORM_ENDPOINT = "https://api.web3forms.com/submit";
  var FORM_ACCESS_KEY = "";
  var CONTACT_EMAIL = "contact@issag.net";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* 1. Icons: Simple Icons 16.35.0 paths (CC0), plus hand-drawn UI glyphs */

  var ICONS = {
    youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    spotify: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
    applemusic: "M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z",
    instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
    tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    snapchat: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z",
  };

  var GLYPHS = {
    arrow: '<path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/>',
    play: '<path d="M7 4.5v15L19.5 12z" fill="currentColor"/>',
    close: '<path d="M5.5 5.5l13 13M18.5 5.5l-13 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/>',
    menu: '<path d="M3 8.5h18M3 15.5h18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/>'
  };

  function renderIcons(root) {
    var nodes = (root || document).querySelectorAll("[data-icon]");
    Array.prototype.forEach.call(nodes, function (el) {
      if (el.firstChild) return;
      var name = el.getAttribute("data-icon");
      var inner = ICONS[name]
        ? '<path fill="currentColor" d="' + ICONS[name] + '"/>'
        : GLYPHS[name];
      if (!inner) return;
      el.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + inner + "</svg>";
    });
  }

  renderIcons();

  /* 2. Header state */

  var header = document.querySelector(".site-header");
  if (header) {
    var ticking = false;
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(updateHeader);
        }
      },
      { passive: true }
    );
    updateHeader();
  }

  /* 3. Side panel */

  var panel = document.getElementById("panel");
  var backdrop = document.querySelector(".backdrop");
  var openers = document.querySelectorAll("[data-panel-open]");
  var outside = document.querySelectorAll(".skip-link, .site-header, main, .site-footer");
  var lastTrigger = null;
  var panelLoaded = false;
  var hideTimer = null;

  function focusables() {
    return Array.prototype.filter.call(
      panel.querySelectorAll('a[href], button:not([disabled]), iframe, input, [tabindex]:not([tabindex="-1"])'),
      function (el) {
        return el.offsetParent !== null || el === document.activeElement;
      }
    );
  }

  function setExpanded(value) {
    Array.prototype.forEach.call(openers, function (btn) {
      btn.setAttribute("aria-expanded", value ? "true" : "false");
    });
  }

  function openPanel(trigger) {
    if (!panel || !panel.hidden) return;
    lastTrigger = trigger || null;
    window.clearTimeout(hideTimer);

    var sbw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--sbw", sbw + "px");
    document.documentElement.classList.add("is-locked");

    panel.hidden = false;
    backdrop.hidden = false;
    Array.prototype.forEach.call(outside, function (el) {
      el.inert = true;
    });
    setExpanded(true);

    if (!panelLoaded) {
      panelLoaded = true;
      var frame = panel.querySelector("iframe[data-src]");
      if (frame) frame.src = frame.getAttribute("data-src");
    }

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        panel.classList.add("is-open");
        backdrop.classList.add("is-open");
      });
    });

    var closeBtn = panel.querySelector(".panel__close");
    if (closeBtn) closeBtn.focus();
  }

  function closePanel(restoreFocus) {
    if (!panel || panel.hidden) return;
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    Array.prototype.forEach.call(outside, function (el) {
      el.inert = false;
    });
    document.documentElement.classList.remove("is-locked");
    setExpanded(false);

    var finish = function () {
      if (panel.classList.contains("is-open")) return;
      panel.hidden = true;
      backdrop.hidden = true;
    };
    if (reduceMotion.matches) {
      finish();
    } else {
      hideTimer = window.setTimeout(finish, 400);
    }

    if (restoreFocus !== false && lastTrigger) lastTrigger.focus();
  }

  if (panel && backdrop) {
    Array.prototype.forEach.call(openers, function (btn) {
      btn.addEventListener("click", function () {
        openPanel(btn);
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-panel-close]"), function (el) {
      el.addEventListener("click", function () {
        closePanel();
      });
    });

    panel.addEventListener("click", function (event) {
      var link = event.target.closest("a[href]");
      if (!link) return;
      var url = new URL(link.href, window.location.href);
      var samePage = url.pathname === window.location.pathname && url.hash;
      if (samePage) {
        event.preventDefault();
        closePanel(false);
        var target = document.getElementById(url.hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      }
    });

    document.addEventListener("keydown", function (event) {
      if (panel.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closePanel();
        return;
      }
      if (event.key !== "Tab") return;
      var items = focusables();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* 4. YouTube facades */

  var playing = null;

  function stopPlaying() {
    if (!playing) return;
    playing.frame.replaceWith(playing.facade);
    playing = null;
  }

  Array.prototype.forEach.call(document.querySelectorAll("a.video[data-yt], a.video[data-list]"), function (facade) {
    facade.addEventListener("click", function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      stopPlaying();

      var id = facade.getAttribute("data-yt");
      var list = facade.getAttribute("data-list");
      var src = id
        ? "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0&playsinline=1"
        : "https://www.youtube-nocookie.com/embed/videoseries?list=" + encodeURIComponent(list) + "&autoplay=1&rel=0&playsinline=1";

      var wrap = document.createElement("div");
      wrap.className = "video is-playing";
      var iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.title = facade.getAttribute("data-title") || "ISSA G video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.setAttribute("tabindex", "0");
      wrap.appendChild(iframe);

      facade.replaceWith(wrap);
      playing = { facade: facade, frame: wrap };
      iframe.focus();
    });
  });

  /* 5. Scroll reveal */

  var revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(revealEls, function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    Array.prototype.forEach.call(revealEls, function (el) {
      var step = parseInt(el.getAttribute("data-reveal"), 10);
      if (step > 0) el.style.setProperty("--d", Math.min(step, 4) * 80 + "ms");
      observer.observe(el);
    });
  }

  /* 7. Forms */

  function setStatus(form, text, ok) {
    var status = form.querySelector(".form-status");
    if (!status) return;
    status.textContent = text;
    status.classList.toggle("is-success", !!ok);
  }

  function field(form, name) {
    var el = form.elements[name];
    return el && el.value ? el.value.trim() : "";
  }

  Array.prototype.forEach.call(document.querySelectorAll("form[data-form]"), function (form) {
    var kind = form.getAttribute("data-form");
    var subject = kind === "newsletter" ? "ISSA G site: newsletter signup" : "ISSA G site: contact";
    var successText = kind === "newsletter" ? "You're on the list." : "Message sent. We'll be in touch.";
    var failText = "That didn't go through. Email " + CONTACT_EMAIL + " instead.";

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = {
        name: field(form, "name"),
        email: field(form, "email"),
        phone: field(form, "phone"),
        message: kind === "newsletter" ? "Please add me to the ISSA G mailing list." : field(form, "message")
      };
      var bot = form.elements.botcheck;
      if (bot && bot.checked) return;

      if (!FORM_ACCESS_KEY) {
        var body = [
          data.name ? "Name: " + data.name : "",
          "Email: " + data.email,
          data.phone ? "Phone: " + data.phone : "",
          "",
          data.message
        ]
          .filter(function (line, i) {
            return line !== "" || i === 3;
          })
          .join("\n");
        setStatus(form, "Opening your email app.", false);
        window.location.href =
          "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      var label = button.textContent;
      button.disabled = true;
      button.textContent = "Sending";
      setStatus(form, "", false);

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: FORM_ACCESS_KEY,
          subject: subject,
          from_name: "ISSA G website",
          name: data.name || "Newsletter signup",
          email: data.email,
          phone: data.phone,
          message: data.message,
          botcheck: false
        })
      })
        .then(function (response) {
          return response.json().then(function (json) {
            return response.ok && json.success;
          });
        })
        .catch(function () {
          return false;
        })
        .then(function (ok) {
          button.disabled = false;
          button.textContent = label;
          setStatus(form, ok ? successText : failText, ok);
          if (ok) form.reset();
        });
    });
  });

  /* 8. Copy email */

  Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), function (btn) {
    var value = btn.getAttribute("data-copy");
    var live = document.getElementById(btn.getAttribute("data-copy-status") || "");
    var label = btn.textContent;
    var timer = null;

    function fallbackCopy() {
      var area = document.createElement("textarea");
      area.value = value;
      area.setAttribute("readonly", "");
      area.className = "honeypot";
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e) {
        ok = false;
      }
      area.remove();
      return ok;
    }

    function done(ok) {
      if (!ok) return;
      btn.textContent = "Copied";
      if (live) live.textContent = "Email address copied.";
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        btn.textContent = label;
        if (live) live.textContent = "";
      }, 2000);
    }

    btn.addEventListener("click", function () {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value).then(
          function () {
            done(true);
          },
          function () {
            done(fallbackCopy());
          }
        );
      } else {
        done(fallbackCopy());
      }
    });
  });

  /* 9. Year */

  var year = String(new Date().getFullYear());
  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) {
    el.textContent = year;
  });
})();
