const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

async function sharePage() {
  const shareData = {
    title: 'Options Framework 2026',
    text: 'A transparent, data-driven framework for assessing options trades.',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Page link copied');
    }
  } catch (error) {
    if (error.name !== 'AbortError') showToast('Unable to share this page');
  }
}

document.getElementById('shareButton').addEventListener('click', sharePage);
document.getElementById('copyLinkButton').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast('Page link copied');
  } catch {
    showToast('Copy failed');
  }
});
document.getElementById('printButton').addEventListener('click', () => window.print());