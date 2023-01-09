const artApp = {}
artApp.apikey = 'rn7LSbf1'
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
    })

}
artApp.init = () => {
    artApp.getPieces('https://www.rijksmuseum.nl/api/en/collection')

}
artApp.init()