// meu-script.js

function editName() {
    const nameSpan = document.querySelector('span[contenteditable]');
    nameSpan.focus();
}

function updateImage(input) {
    const img = document.querySelector('.status-photo');
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}

