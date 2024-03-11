let myBtn1 = document.getElementById('myBtn1')
let myBtn2 = document.getElementById('myBtn2')

myBtn1.addEventListener('click', handleBtn1)
myBtn1.addEventListener('click', handleBtn1)


const handleBtn1 = () => {
    let hexValue = '01234456789abcdef'
    console.log(hexValue[3]);
}