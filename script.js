async function getJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();

    let joke = '';
    if (data.type === 'single') {
        joke = data.joke;
    } else {
        joke = `${data.setup} ${data.delivery}`;
    }

    document.getElementById('joke').innerText = joke;
    document.getElementById('character-count').innerText = `Character count: ${joke.length}`;
}

function clearJoke() {
    document.getElementById('joke').innerText = 'Press the button for a joke!';
    document.getElementById('character-count').innerText = 'Character count: 0';
}
