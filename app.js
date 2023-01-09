const artApp = {}
artApp.apikey = 'rn7LSbf1'
artApp.displayPieces = (pieces) => {
    console.log(pieces)
    pieces.forEach(artObject => {
       const title = document.createElement('h2');
        title.innerText = artObject.title;
        const artist = document.createElement('p');
        artist.innerText = artObject.principalOrFirstMaker;
        const image = document.createElement('img');
        image.src = artObject.webImage.url;
        image.alt = artObject.title;
        const artPiece = document.createElement('div');
        artPiece.classList.add('piece');
        artPiece.appendChild(title);
        artPiece.appendChild(artist);
        artPiece.appendChild(image);
        document.querySelector('#artwork').appendChild(artPiece)
        
    });


}
artApp.getPieces = (url) => {
    url = new URL(url)
    url.search = new URLSearchParams({
        key: artApp.apikey,
        imgonly: true,
        q: 'monkeys'
    })
    fetch(url)
    .then((res) =>{
        return res.json()
    })
    .then((jsonData) => {
        console.log(jsonData.artObjects)
        artApp.displayPieces(jsonData.artObjects)
    })

}
artApp.init = () => {
    artApp.getPieces('https://www.rijksmuseum.nl/api/en/collection')

}
artApp.init()