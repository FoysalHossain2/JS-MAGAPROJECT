let selectFontSize = document.getElementById('selectFontSize');
let selectBgColor = document.getElementById('selectBgColor');
let resetBtn = document.getElementById('submitBtn');
let main = document.querySelector('main');


const selectFontSizeBtn = (e) => {
    const selectedFontSize = e.target.value;
    main.style.fontSize = selectedFontSize;
    localStorage.setItem('fontSize', selectedFontSize);
}

const clearLocalStorage = () => {
    localStorage.removeItem('fontSize');
}


// const selectBgColorBtn = (e) => {
//     alert(e.target.value)
// }




selectFontSize.addEventListener('change', selectFontSizeBtn)
// selectBgColor.addEventListener('change', selectBgColorBtn)
resetBtn.addEventListener('click', clearLocalStorage)