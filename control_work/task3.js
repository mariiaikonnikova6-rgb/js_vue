let attempts = 3;
while (attempts > 0) {
    let pinCode = +prompt('Введіть ПІН-код');
    if (pinCode === 2026) {
        alert("Доступ дозволено");
        break;
    }
    else{
        attempts--;
        alert(`Залишилося спроб: ${attempts}`);
    }
}
if (attempts === 0) {
    alert("Доступ заблоковано");
}