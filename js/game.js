const grid = document.querySelector('.grid');

const characters = [
    'Bebbikas',
    'Craig',
    'Kyle',
    'Rebina',
    'Shale',
    'Stan',
    'Tuick',
    'Wendy',
    'Cartman',
    'Na',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal_card')) {
        return;
    }

    target.parentNode.classList.add('reveal_card')
}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../Imagens/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 );

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);

    });
}

loadGame();