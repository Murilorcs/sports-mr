    
    // TELA DE LOGIN
    const entrar = document.querySelector('.btn-entrar')
        const principal = document.querySelector('.principal')
        const fechar = document.querySelector('.fechar')

         // EVENTO PARA TARNSFORMAR O DISPLAY BLOCK DA TELA PRINCIPAL AO CLICAR NO BOTAO

        entrar.addEventListener('click', () => {
            principal.style.display = 'block'
        })

        fechar.addEventListener('click', () => {
            principal.style.display = 'none'
        })



    // CARROSSEL PARA PROPAGANDA
    var count = 1
    var rolar = true;
    document.getElementById("radio1").checked = true;

    setInterval(() =>{
        nextImage()
    }, 4500)

    function nextImage(){
        count++;
        if(count>4 && rolar){
            count = 1
        } else {
            rolar = true
        }

        document.getElementById("radio"+count).checked = true;
    }



    // CARROSSEL COM CARDS
    const productConatiners = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];

productConatiners.forEach((item, i) => {
    let containerDimensao = item.getBoundingClientRect();
    let containerWidth = containerDimensao.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



// CARROSSEL DE LOOKS
const looksContainers = [...document.querySelectorAll('.looks-container')];
const btnNext = [...document.querySelectorAll('.btn-next')];
const btnPrev = [...document.querySelectorAll('.btn-prev')];

looksContainers.forEach((item, i) => {
    let containerDimensaoDois = item.getBoundingClientRect();
    let containerWidthDois = containerDimensaoDois.width;

    btnNext[i].addEventListener('click', () => {
        item.scrollLeft += containerWidthDois;
    })

    btnPrev[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidthDois;
    })
})