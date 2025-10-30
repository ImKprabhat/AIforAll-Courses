(function () {
  function addButtons() {
    document.querySelectorAll('pre > code').forEach(function (code) {
      var pre = code.parentNode;
      if (pre.querySelector('.copy-btn')) return; // already added

      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.type = 'button';
      btn.title = 'Copy code';
      btn.textContent = 'Copy';

      btn.addEventListener('click', function () {
        var text = code.innerText;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            btn.textContent = 'Copied';
            setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
          }, fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          var ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); btn.textContent = 'Copied'; }
          catch (e) { alert('Copy failed'); }
          document.body.removeChild(ta);
          setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
        }
      });

      pre.style.position = pre.style.position || 'relative';
      pre.appendChild(btn);
    });
  }

  // Run on DOM ready and also after any client-side navigation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addButtons);
  } else {
    addButtons();
  }

  // MutationObserver to catch dynamically injected code blocks
  var obs = new MutationObserver(function () { addButtons(); });
  obs.observe(document.body, { childList: true, subtree: true });
})();