const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // evita o reload da página

      // coleta todos os nomes
      const nomes = Array.from(document.querySelectorAll('input[name="nome"]'))
        .map(input => input.value.trim())
        .filter(nome => nome !== "");

      const mensagem = document.getElementById('mensagem').value.trim();

      // monta o JSON
      const data = {
        names: nomes,
        message: mensagem
      };

      try {
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          alert('Formulário enviado com sucesso!');
          form.reset(); // limpa os campos
        } else {
          alert('Ocorreu um erro ao enviar o formulário.');
        }

      } catch (error) {
        alert('Erro de conexão: ' + error.message);
      }
    });