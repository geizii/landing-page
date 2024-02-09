const buttonLoading = document.querySelector('.loading--btn');

/* Estilização botão 'carregar mais...'" */
buttonLoading.addEventListener('mouseover', handleMouseOver);
buttonLoading.addEventListener('mouseout', handleMouseOut);
buttonLoading.addEventListener('click', openRecipesWindow);

const handleMouseOver = () => {
    button.style.transform = 'scale(1.1)';
}

const handleMouseOut = () => {
    button.style.transform = 'scale(1)';
}

const openRecipesWindow = () => {
    const newWindow = open('recipes.html', '_blank');
}
