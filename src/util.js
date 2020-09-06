// muutettiin Numerot stringiksi ja lisätään euromerkki.
// Idea on, että saadaan se string-arvo numerosta.
export default function formatCurrency(num) {
    return "€" + Number(num.toFixed(1)).toLocaleString()
}