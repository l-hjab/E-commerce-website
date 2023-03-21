//pop up form

document.getElementById('butt').addEventListener('click', function () {
    document.querySelector('.form').style.display = 'block';
})

document.getElementById('close-but').addEventListener('click', function () {
    document.querySelector('.main').style.display = 'none';
})
