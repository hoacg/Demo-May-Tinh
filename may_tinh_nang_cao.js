
function insert(num) {
    let number = num.value;

    let screen = document.getElementById("screen");

    //            old value      insert value
    screen.value = screen.value + number;
}


function calc() {
    let screen = document.getElementById("screen");

    let result = eval(screen.value);

    screen.value = "Kết quả: " + result;
}
