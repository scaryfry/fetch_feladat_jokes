async function randomJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await response.json();
    const jokeContainer = document.getElementById('joke-container');
        jokeContainer.innerHTML = `
          <p><strong>Setup:</strong> ${data.setup}</p>
          <p><strong>Punchline:</strong> ${data.punchline}</p>
        `;
  } catch (error) {
    const jokeContainer = document.getElementById('joke-container')
          jokeContainer.innerHTML = `
            ${error}
        `;
  }
}
async function getJokeId() {
    try{
        const id = document.getElementById('jokeIdInput').value;
        if (!id) {
          alert('Please enter a Joke ID');
          return;
        }
        const response = await fetch(`https://official-joke-api.appspot.com/jokes/${id}`);
        const data = await response.json();
        const jokeContainer = document.getElementById('joke-container')
        jokeContainer.innerHTML = `
          <p><strong>Setup:</strong> ${data.setup}</p>
          <p><strong>Punchline:</strong> ${data.punchline}</p>
        `;
    } catch (err) {
        const jokeContainer = document.getElementById('joke-container')
        jokeContainer.innerHTML = `
          <p><strong>Error:</strong> ${err}</p>
        `;
    }

}
async function jokebyType() {
  const selectedType = document.getElementById('jokeTypeSelect').value;
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.innerHTML = '';
  try {
    const response = await fetch(`https://official-joke-api.appspot.com/jokes/${selectedType}/random`);
    const data = await response.json();
    jokeContainer.innerHTML = `
      <p><strong>Setup:</strong> ${data[0].setup}</p>
      <p><strong>Punchline:</strong> ${data[0].punchline}</p>
    `;
  } catch (error) {
    jokeContainer.innerHTML = `
      <p>Error fetching joke: ${error}</p>
    `;
  }
}
