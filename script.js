//o document é a forma de refenciar os elementos de html no código,
//  para esse caso, estamos chamando a classe de "getElementById" 
// que vai buscar o elemento pelo id determinado dentro do html
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let mensagem = document.getElementById("mensagem");
let paragrafo = document.getElementById("mensagemObt");

emailjs.init('API_KEY'); //inicializando o emailjs com API_KEY
 
//innerText adiciona um texto no html atraves do js
// paragrafo.innerText = "Exemplo de texto";

function verificarCampos(event) {
    event.preventDefault();
    if (nome.value == '' || telefone.value == '' || email.value == '' || mensagem.value == '') {
        // alert("Preencha todos os campos!");
        paragrafo.innerText = "Preencha todos os campos!";
        paragrafo.style.color = "#ff0000";
        paragrafo.style.fontWeight = 'bold';
        paragrafo.style.textAlign= 'center';
    } else {
        paragrafo.innerText = "Formulário enviado com sucesso!";
        paragrafo.style.color = "#00ff00";
        paragrafo.style.fontWeight = 'bold';
        paragrafo.style.textAlign= 'center';

        emailjs.send('service_id', 'template_id', 
            {
                to_name: nome.value,
                to_email: email.value,
                to_tel: telefone.value,
                to_message: mensagem.value
            }
        );

        nome.value = '';
        email.value = '';
        telefone.value = '';
        mensagem.value = '';
    };
};
