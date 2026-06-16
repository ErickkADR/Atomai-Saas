/**
 * auth.js — proteção de rotas admin
 * Inclua <script src="/js/auth.js"></script> ANTES do </body> em todas as páginas admin.
 */
(function () {
  const raw  = sessionStorage.getItem('atomai_user');
  const user = raw ? JSON.parse(raw) : null;

  /* Sem sessão → login */
  if (!user) {
    window.location.replace('/html/index.html');
    return;
  }

  /* Usuário comum tentando entrar em rota admin → chat */
  if (user.role !== 'admin') {
    window.location.replace('/html/atomai-chat.html');
  }
})();
