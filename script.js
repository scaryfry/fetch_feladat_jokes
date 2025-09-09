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
    const id = prompt('Add meg az ID-t'); 
    try{
        const response = await fetch(`https://official-joke-api.appspot.com/jokes/${id}`);
        const data = await response.json();
        const jokeContainer = document.getElementById('joke-container')
        jokeContainer.innerHTML = `
          <p><strong>Setup:</strong> ${data.setup}</p>
          <p><strong>Punchline:</strong> ${data.punchline}</p>
        `;    }
        catch(err){
        const jokeContainer = document.getElementById('joke-container')
        jokeContainer.innerHTML = `
          <p><strong>Setup:</strong> ${data.setup}</p>
          <p><strong>Punchline:</strong> ${data.punchline}</p>`
        }

}
