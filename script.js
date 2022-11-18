const value = Number(prompt("Bu erga son kiriting"));
const result = document.querySelector('.result')

if(value % 3 === 0 && value % 5 === 0) {
    result.textContent = "Bu son ikalasiga bolinadi";
}
else if(value % 3 === 0) {
    result.textContent = "Bu son 3 ga bolinadi";
}
else if (value % 5 === 0) {
    result.textContent = 'Bu son 5 ga bolinadi';
}
else if (value % 3 !== 0  && value % 5 !== 0) {
    result.textContent = 'Bu son ikalasiga ham bolinmaydi'
}
