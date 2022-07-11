var gatinhascoletadas = 0;
function coletargatinha() {
    gatinhascoletadas++;
    document.querySelector("#gatinhascoletadas").innerHTML = `<div id="gatinhascoletadas">gatinhas coletadas: ${gatinhascoletadas}</div>`
    let img = Math.floor(Math.random() * (13 - 1 + 1) + 1);
    document.querySelector("#fotodagatinha").innerHTML = `<img id="fotodagatinha" width='200' src='./gatos/${img}.jpg'>`;
}