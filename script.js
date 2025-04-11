// script.js
function agendar() {
    const servico = document.getElementById('service').value;
    const data = document.getElementById('date').value;
    const hora = document.getElementById('time').value;
  
    if (data && hora) {
      document.getElementById('confirmacao').innerText =
        Agendado: ${servico} no dia ${data} às ${hora};
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }
 