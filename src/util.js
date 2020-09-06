// muutettiin Numerot stringiksi ja lisätään euromerkki.
// Idea on, että saadaan se string-arvo numerosta.
// mutta tällä voidaan myös KERRATA item.count tai item.length,
// joten util-funktiona se on monitoiminen.
export default function formatCurrency(num) {
    return "€" + Number(num.toFixed(1)).toLocaleString() + " ";
}