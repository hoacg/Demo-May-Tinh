
function calculate( operatorButton ) {

    // Khai báo những thứ mà mình cần dùng
    let so1 = document.getElementById("so1");
    let so2 = document.getElementById("so2");
    let phepTinh = operatorButton.value;


    // Tính toán kết quả ở đây
    let number1 = parseInt(so1.value);
    let number2 = parseInt(so2.value);

    let ketQua;

    if (phepTinh == '+') {
        ketQua = number1 + number2;
    } else if (phepTinh == '-') {
        ketQua = number1 - number2;
    } else if (phepTinh == '^') {
        ketQua = Math.pow(number1, number2);
    }

    // Hiển thị kết quả ở đây:
    alert("Kết quả là: " + ketQua);
}

