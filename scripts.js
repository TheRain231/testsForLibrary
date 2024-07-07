// scripts.js
function getDostoevskyResult() {
    const genres = document.getElementsByName('genre');
    let selectedGenre;
    for (const genre of genres) {
        if (genre.checked) {
            selectedGenre = genre.value;
            break;
        }
    }
    let result = '';
    switch (selectedGenre) {
        case 'роман':
            result = 'Вы "Преступление и наказание"';
            break;
        case 'детектив':
            result = 'Вы "Братья Карамазовы"';
            break;
        case 'философия':
            result = 'Вы "Идиот"';
            break;
        default:
            result = 'Выберите жанр';
    }
    document.getElementById('dostoevsky-result').innerText = result;
}

function getGorkyResult() {
    const lines = document.getElementsByName('line');
    let selectedLine;
    for (const line of lines) {
        if (line.checked) {
            selectedLine = line.value;
            break;
        }
    }
    let result = '';
    switch (selectedLine) {
        case '1':
            result = 'Ваше предсказание: "На дне"';
            break;
        case '2':
            result = 'Ваше предсказание: "Мать"';
            break;
        case '3':
            result = 'Ваше предсказание: "Детство"';
            break;
        default:
            result = 'Выберите номер строки';
    }
    document.getElementById('gorky-result').innerText = result;
}

function getWriterResult() {
    const seasons = document.getElementsByName('season');
    let selectedSeason;
    for (const season of seasons) {
        if (season.checked) {
            selectedSeason = season.value;
            break;
        }
    }
    let result = '';
    switch (selectedSeason) {
        case 'весна':
            result = 'Вы Александр Пушкин';
            break;
        case 'лето':
            result = 'Вы Лев Толстой';
            break;
        case 'осень':
            result = 'Вы Антон Чехов';
            break;
        case 'зима':
            result = 'Вы Федор Достоевский';
            break;
        default:
            result = 'Выберите время года';
    }
    document.getElementById('writers-result').innerText = result;
}