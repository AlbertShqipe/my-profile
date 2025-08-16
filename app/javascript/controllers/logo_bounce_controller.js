import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="logo-bounce"
export default class extends Controller {
  _handlers = [];

  connect() {
    const SUPPORTED_LOCALES = ["en", "it", "fr", "sq", "de"];
    const DEFAULT_LOCALE = "en";

    const detectLocale = () => {
      // 1) /{locale}/... in pathname
      const [firstSeg] = window.location.pathname.split("/").filter(Boolean);
      if (SUPPORTED_LOCALES.includes(firstSeg)) return firstSeg;

      // 2) ?lang=xx
      const qp = new URLSearchParams(window.location.search).get("lang");
      if (SUPPORTED_LOCALES.includes(qp)) return qp;

      // 3) <html lang="xx">
      const htmlLang = (document.documentElement.lang || "").split("-")[0];
      if (SUPPORTED_LOCALES.includes(htmlLang)) return htmlLang;

      return DEFAULT_LOCALE;
    };

    const withLocale = (path, locale) => {
      // If path already starts with a supported locale, keep it as-is
      const clean = String(path || "").replace(/^\/+|\/+$/g, "");
      const [first] = clean.split("/");

      if (SUPPORTED_LOCALES.includes(first)) {
        return `/${clean}`;
      }

      // Empty => go to /{locale}
      return clean ? `/${locale}/${clean}` : `/${locale}`;
    };

    const addListener = (el, type, handler, opts) => {
      if (!el) return;
      el.addEventListener(type, handler, opts);
      this._handlers.push({ el, type, handler, opts });
    };

    const applyBounceEffect = (element) => {
      if (!element) return;

      element.classList.add("bounce");
      addListener(element, "mouseover", () => element.classList.remove("bounce"), { passive: true });
      addListener(element, "mouseout", () => element.classList.add("bounce"), { passive: true });
    };

    const setupNavigation = (element, targetURL, locale) => {
      if (!element) return;

      addListener(element, "click", (e) => {
        e.preventDefault();
        window.location.href = withLocale(targetURL, locale);
      });
    };

    const locale = detectLocale();

    const logo = document.getElementById("logoBox");
    const logoArtistic = document.getElementById("logoBoxArtistic");
    const logoPhone = document.getElementById("logoBoxPhone");

    applyBounceEffect(logo);
    applyBounceEffect(logoArtistic);
    applyBounceEffect(logoPhone);

    // Pass paths WITHOUT locale; helper will add "/{locale}"
    setupNavigation(logo, "media", locale);
    setupNavigation(logoArtistic, "", locale);   // -> "/{locale}"
    setupNavigation(logoPhone, "media", locale);
  }

  disconnect() {
    // Clean up listeners to avoid duplicates on re-connect
    for (const { el, type, handler, opts } of this._handlers) {
      el?.removeEventListener(type, handler, opts);
    }
    this._handlers = [];
  }
}
