const wrapper = document.querySelector('.cards-wrapper');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: 200, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: -200, behavior: 'smooth' });
});

document.getElementById('whatsappForm').addEventListener('submit', function(e){
        e.preventDefault();

        const telefone = '5541999999999';
        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value
        const mensagem = document.getElementById('message').value

        const text = `Olá! \nMeu nome é ${nome}, meu email é ${email}.\nMenssagem: ${mensagem}`

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${telefone}?text=${encodedText}`

        window.open(whatsappUrl, "_blank");
})