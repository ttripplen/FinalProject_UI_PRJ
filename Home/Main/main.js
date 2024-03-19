let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

let cart = document.querySelector('.cartTab');
document.querySelector('#cart').onclick = () => {
    cart.classList.toggle('active');
}

let close = document.querySelector('.close');
document.querySelector('#close').onclick = () => {
    cart.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    // Lấy ra các span tăng và giảm số lượng sản phẩm
    var decreaseButtons = document.querySelectorAll('.decrease-btn');
    var increaseButtons = document.querySelectorAll('.increase-btn');

    // Lặp qua từng span giảm và thêm sự kiện click
    decreaseButtons.forEach(function(span) {
        span.addEventListener('click', function() {
            var quantityElement = span.nextElementSibling; // Lấy phần tử span chứa số lượng
            var currentQuantity = parseInt(quantityElement.textContent); // Lấy số lượng hiện tại
            if (currentQuantity > 0) {
                quantityElement.textContent = currentQuantity - 1; // Giảm số lượng đi 1
            }
        });
    });

    // Lặp qua từng span tăng và thêm sự kiện click
    increaseButtons.forEach(function(span) {
        span.addEventListener('click', function() {
            var quantityElement = span.previousElementSibling; // Lấy phần tử span chứa số lượng
            var currentQuantity = parseInt(quantityElement.textContent); // Lấy số lượng hiện tại
            quantityElement.textContent = currentQuantity + 1; // Tăng số lượng đi 1
        });
    });
});

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}