function verify() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('yearbirth')
    let res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value > ano)) {
        window.alert('[ERROR] Please review the information and retry.!')
    } else {
        let formSex = document.getElementsByName('gender')
        let idade = ano - Number(formAno.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            gênero = 'Male'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './Assets/malebaby.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', './Assets/male_teen.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', './Assets/youngboy.png')
            } else {
                img.setAttribute('src', './Assets/grandapa.png.png')
            }
        } else if (formSex[1].checked) {
            gênero = 'Female'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './Assets/femalebaby.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', './Assets/female_teen.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', './Assets/younggirl.png')
            } else {
                img.setAttribute('src', './Assets/grandama.png')
            }
        }
        
        res.innerHTML = `I've detected ${gênero} at ${idade} years old`
        res.appendChild(img)
    }
}