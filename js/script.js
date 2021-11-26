const users = ['Familiar', 'Personal', 'Niños'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <a href="inicio.html"><button class="btn"><span>${curElem}</span></button>
        `);
    })
};

userIcons();



