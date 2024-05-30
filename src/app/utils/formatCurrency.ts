export function formatCurrency(num: number, currency = false) {
    const formattedNumber = num.toFixed(2);
    return currency ? `${formattedNumber} €` : formattedNumber;
}