

function showName(name){
    console.log(`Привет ${name}`)
    alert(`Привет ${name}`)
    return name;
}
const username = prompt("Введите Ваше имя");
console.log(showName(username));