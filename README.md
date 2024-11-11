# Landing Page

Este é um projeto de web que utiliza as bibliotecas Swiper.js, EmailJS, jQuery, ScrollReveal e font-awesome para criar uma aplicação dinâmica e interativa.

## O projeto inclui: 
- **Swiper.js**: Para implementar sliders responsivos e personalizados. 
- **EmailJS**: Para enviar emails diretamente do seu site sem a necessidade de um backend, ou seja, permite a comunicação com um serviço de email sem a necessidade de um backend próprio.
- **jQuery**: Para manipulação do DOM e facilitação de interações com a página. 
- **ScrollReveal**: Para implementar animações de rolagem que revelam elementos conforme eles entram na visualização. 
- **Font Awesome**: Para adicionar ícones vetoriais escaláveis que melhoram a interface

## Visualização do Projeto Localmente

Para visualizar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/MatheusKassaoka/First-LP

2. **Navegue até o diretório do projeto**:   

cd seu-repositorio

Em seguida digite npm install e depois npm start, para então abrir no seu navegador pelo link indicado

Instalação dos ícones

Para os ícones utilizados aparecerem, é preciso acessar o site cdnjs e pesquisar por font-awesome e copiar o primeiro link (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css), colocando ele dentro do <head>

Instação do Jquery

Acessar o site https://cdnjs.com/libraries/jquery, ou ir no site do cdnjs e pesquisar por Jquery, acessar as libraries, e copiar o primeiro link, (https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js) e colar esse link dentro do nosso código html e da <head> 
 Lembre de importar o javascript no final do codigo do html antes de fechar o body 

Instalação do Scrollreveal 

 Acessar o site: https://scrollrevealjs.org/guide/hello-world.html, ou ir no site do scrollreveal e ir em guide, e copiar o primeiro link, o link: <script src="https://unpkg.com/scrollreveal"></script> no código do html, também dentro da <head>  Então você pode costumizar o item que você quer que tenha a animação usando esse código: ScrollReveal().reveal('.headline');, sendo dentro do headline o item que você quer, podendo determinar o quanto ele vem, a duração, o tempo, o tipo, etc.

 Instalação do Swiper

 Entre no site https://swiperjs.com/get-started e vá até a parte do CDN
 copiando então o link : 
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
dentro do seu <head>  e aqui tem o link de como utilizar, como estilizar da melhor forma para você https://swiperjs.com/swiper-api 

Instalação do EmailJs

Primeiro entre no site: https://dashboard.emailjs.com/admin e faça o cadastro no EmailJs, assim clique em Email Services e clique em "Add New Service" para então linkar o seu email e ter o seu ServiceID, em seguida vá em "Email Templates" e clique em "Create New Template", personalizando então o assunto do seu email, qual conteúdo ele conterá, para onde deve ser enviado, e ter o seu Template ID. 
Lembre-se de que tudo o que o usuário enviar por meio do formulário será nomeado como um identificador separado entre chaves duplas {{identifier}}.

Então vamos para a instalação. Vamos para a parte de documentação do site do EmailJS: https://www.emailjs.com/docs/sdk/installation/, ou em SDK installation, e copie o trecho de código dentro da documentação e altere o ID do serviço, o ID do modelo e sua chave pública. Você encontrará a chave pública nas configurações da sua conta.

Agora copie o código dentro do head:

      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
      </script>
      <script type="text/javascript">
         (function(){
            emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY",
      });
      })();
      </script>

Use o SDK do EmailJS no JavaScript para enviar o e-mail com os dados do formulário. O idela seria criar um arquivo JS e colocar o seguinte código: 

    document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const serviceID = "SEU_SERVICE_ID";
    const templateID = "SEU_TEMPLATE_ID";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('formStatus').innerText = 'Eba! A mensagem foi enviada com sucesso!';
            document.getElementById('contactForm').reset(); // Limpa o formulário
        }, (error) => {
            document.getElementById('formStatus').innerText = 'Ops! Falha ao enviar a mensagem. Tente novamente, por favor.';
            console.log("Erro:", error);
        });
      });

Use os mesmos atributos de nome para suas tags de entrada que os identificadores em seu modelo. Assim você receberá os emails no seu email. 
