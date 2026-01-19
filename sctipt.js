// 1) 2 кнопка ачууу
// 2) 2 функция ачуу 
// 3) биринчи кнопканы басканда биринчи функция иштеши керек, функциянын ичине localStorgae.setItem кылып маалымат киргизиш керек 
// 4) экинчи кнопканы басканда экинчи функция иштеп 
// анын ичинде localStorage тен маалыматты алып , жаңы тег ачып, ошол тегке localStorage теги маалыматты жаздырып , сайтка чыгаруу керек.

function hum1() {
    const name = document.getElementById('inputЗТ').value;
    localStorage.setItem('heloo', name);
    alert('салам кош келдин: ' + name);
}

function hum2() {
    const name1 = localStorage.getItem('heloo');
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<h1>${name1}</h1><h1>бугун 19.01.2026</h1>`);
}