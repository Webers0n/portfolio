


// Botão Inicio
document.querySelector('.inicio').addEventListener('click', ()=>{

    document.querySelector('.Pagina-inicial').style.display = ''
    document.querySelector('.sobre').style.display= 'none'
    document.querySelector('.container-projetos').style.display = 'none'
    document.querySelector('.contato').style.display = 'none'
})


// Botão Sobre
document.querySelector('.btnsobre').addEventListener('click', ()=>{
    
    document.querySelector('.sobre').style.display= ''
    document.querySelector('.Pagina-inicial').style.display ='none'
    document.querySelector('.container-projetos').style.display = 'none'
    document.querySelector('.contato').style.display = 'none'
})

document.querySelector('.btnprojetos').addEventListener('click', ()=>{
    
    document.querySelector('.container-projetos').style.display = ''
    document.querySelector('.Pagina-inicial').style.display ='none'
    document.querySelector('.sobre').style.display= 'none'
    document.querySelector('.contato').style.display = 'none'
})
document.querySelector('.btncontato').addEventListener('click', ()=>{
    
    document.querySelector('.contato').style.display = ''
    document.querySelector('.container-projetos').style.display = 'none'
    document.querySelector('.Pagina-inicial').style.display ='none'
    document.querySelector('.sobre').style.display= 'none'
})
