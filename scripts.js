document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const gameList = document.getElementById('gameList');
    const games = gameList.getElementsByClassName('game');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        Array.from(games).forEach(game => {
            const title = game.getElementsByTagName('h2')[0].textContent.toLowerCase();
            if (title.includes(filter)) {
                game.style.display = '';
            } else {
                game.style.display = 'none';
            }
        });
    });

    // Ouvre les liens dans un nouvel onglet
    Array.from(games).forEach(game => {
        const button = game.getElementsByTagName('button')[0];
        if (button) {
            button.addEventListener('click', () => {
                const url = button.getAttribute('data-url');
                if (url) {
                    window.open(url, '_blank');
                }
            });
        }
    });
});
