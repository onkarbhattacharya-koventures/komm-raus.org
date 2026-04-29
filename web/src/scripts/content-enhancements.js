export function bindModalTrigger(buttonId, modalId = 'anfrage-modal') {
  const button = document.getElementById(buttonId);
  const modal = document.getElementById(modalId);
  if (!button || !modal) return;

  button.addEventListener('click', () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
}

export function enhanceLeadBeforeColon(selectors) {
  const selectorText = Array.isArray(selectors) ? selectors.join(',') : selectors;
  if (!selectorText) return;

  const targets = document.querySelectorAll(selectorText);
  targets.forEach((node) => {
    if (node.children.length > 0) return;

    let text = node.textContent?.trim() ?? '';
    if (!text) return;

    if (/^o\s+/i.test(text)) {
      text = text.replace(/^o\s+/i, '').trim();
    }

    const colonIndex = text.indexOf(':');
    if (colonIndex < 2 || colonIndex > 90) {
      node.textContent = text;
      return;
    }

    const lead = text.slice(0, colonIndex + 1).trim();
    const rest = text.slice(colonIndex + 1).trim();
    if (!rest) {
      node.textContent = text;
      return;
    }

    const strong = document.createElement('strong');
    strong.className = 'card-lead';
    strong.textContent = lead;

    node.textContent = '';
    node.append(strong, document.createTextNode(` ${rest}`));
  });
}