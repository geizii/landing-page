const button = document.querySelector('.loading--btn');
const card = document.querySelector('.recipes--card');

button.addEventListener('mouseover', function() {
    button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', function() {
    button.style.transform = 'scale(1)';
});

button.addEventListener('click', function () {
    const newWindow = open ('recipes.html', '_blank');
});

card.addEventListener('mouseover', function () {
    style.backgroundColor = '#A45A49';
})