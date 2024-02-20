function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade  >=0 && idade < 12) {
                img.setAttribute('src', 'hbebe.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'hadulto.png')
            } else {
                img.setAttribute('src', 'hidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade  >=0 && idade < 12) {
                img.setAttribute('src', 'mbebe.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'mjovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'madulta.png')
            } else {
                img.setAttribute('src', 'midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}