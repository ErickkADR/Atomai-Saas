function ocultarTabela() {
  const wrapper = document.querySelector('.table-wrapper');
  const botao   = document.querySelector('.btn-ocultar');
  if (!wrapper) return;

  const oculto = wrapper.style.display === 'none';

  if (oculto) {
    wrapper.style.display = '';
    botao.textContent = 'Ocultar';
  } else {
    wrapper.style.display = 'none';
    botao.textContent = 'Mostrar';
  }
}
