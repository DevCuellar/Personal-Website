export function dateFormat(date: Date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();

    return `${day} de ${month} de ${year}`;
}

const MONTHS = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];