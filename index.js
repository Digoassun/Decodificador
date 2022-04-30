var passos = document.querySelector('#passos')
var select = document.querySelector('#select')
var radio = document.querySelector('#radio')
var codifier = document.querySelector('#codifier')
var decodifier = document.querySelector('#decodifier')
var btn = document.querySelector('#btn')

select.addEventListener('click', function(event){
    if(select.value =='3'){
        passos.style.display = 'flex'
    }else{
        passos.style.display = 'none'
    }
})

radio.addEventListener('click', function(event){
    if(codifier.checked){
        btn.innerHTML = `<input class="btnInput" type="button" value="Codificar mensagem">`
    }
})

radio.addEventListener('click', function(event){
    if(decodifier.checked){
        btn.innerHTML = `<input class="btnInput" type="button" value="Decodificar mensagem">`
    }
})

