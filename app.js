const artApp = {}
artApp.apikey = 'rn7LSbf1'
artApp.getPieces = (url) => {
    url = new URL(url)
    url.search = new URLSearchParams({
        key:artApp.apikey,
        involvedMaker:'Rembrandt van Rijn'
    })
    fetch(url)
    .then((res) =>{
        return res.json()
    })
    .then((jsonData) => {
        console.log(jsonData)
    })

}
artApp.init = () => {
    artApp.getPieces('https://www.rijksmuseum.nl/api/nl/collection')

}
artApp.init()