/* ============================================================
   MESURE D'AUDIENCE — Vercel Web Analytics
   Sans cookie et sans stockage sur l'appareil du visiteur :
   statistiques agrégées (pages vues, provenance, type d'appareil).
   Le visiteur peut s'y opposer depuis /cookies : son choix est
   mémorisé sous la clé « baraka-stats » (seul usage du stockage
   local sur ce site). Global Privacy Control et Do Not Track
   sont respectés. Rien n'est chargé en local ni en aperçu fichier.
   ============================================================ */
(function () {
  var h = location.hostname;
  if (!h || h === 'localhost' || h === '127.0.0.1' || h === '[::1]') return;
  var off = false;
  try { off = localStorage.getItem('baraka-stats') === 'off'; } catch (e) {}
  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === '1') off = true;
  if (off) return;
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  var s = document.createElement('script');
  s.defer = true;
  s.src = '/_vercel/insights/script.js';
  document.head.appendChild(s);
})();
