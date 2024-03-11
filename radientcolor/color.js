let myBtn1 = document.getElementById('myBtn1')
let myBtn2 = document.getElementById('myBtn2')
let CopyCode = document.getElementsByClassName('CopyCode')
let rgb1 = '#000'
let rgb2 = '#fff'


const hexoValueData = () => {
    let hexValue = '01234456789abcdef'
    let hexo = '#'
    for (let i = 0; i < 6; i++) {
        hexo =  hexo + hexValue[Math.floor(Math.random() * 16)];
    }

    return hexo
}

const handleBtn1 = () => {
    rgb1 = hexoValueData()
    myBtn1.innerText = rgb1
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    CopyCode.innerText = `background-image: liner-gradient(to right, ${rgb1}, rgb(153,63,253))`
}

const handleBtn2 = () => {
    rgb2 = hexoValueData()
    myBtn2.innerText = rgb2
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    CopyCode.innerText = `background-image: liner-gradient(to right, ${rgb1}, ${rgb2})`
}



myBtn1.addEventListener('click', handleBtn1)
myBtn2.addEventListener('click', handleBtn2)