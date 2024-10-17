const apiKey = 'I8K4OwnBx21RU5bztbcZHM9QO9pNBUD0'; // Replace with your Giphy API key

function searchGifs() {
    const searchTerm = document.getElementById('search').value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            const gifContainer = document.getElementById('gif-container');
            gifContainer.innerHTML = ''; // Clear previous results

            data.data.forEach(gif => {
                const gifDiv = document.createElement('div');
                gifDiv.classList.add('gif');

                const gifImg = document.createElement('img');
                gifImg.src = gif.images.original.url;

                gifDiv.appendChild(gifImg);
                gifContainer.appendChild(gifDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
        });
}