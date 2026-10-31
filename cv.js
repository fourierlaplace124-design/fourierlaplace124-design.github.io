const cvDialog = document.getElementById('cv-dialog');

if (cvDialog && typeof cvDialog.showModal === 'function') {
  const cvFrame = cvDialog.querySelector('.cv-frame');
  let cvOpener;

  document.querySelectorAll('[data-cv-open]').forEach((link) => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', cvDialog.id);
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      cvOpener = link;
      if (!cvFrame.hasAttribute('src')) cvFrame.src = cvFrame.dataset.src;
      cvDialog.showModal();
      document.documentElement.classList.add('cv-open');
    });
  });

  cvDialog.addEventListener('close', () => {
    document.documentElement.classList.remove('cv-open');
    cvOpener?.focus({ preventScroll: true });
  });

  cvDialog.addEventListener('click', (event) => {
    if (event.target !== cvDialog) return;
    const bounds = cvDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      cvDialog.close();
    }
  });
}
