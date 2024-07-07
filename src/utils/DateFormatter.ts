export function formatISODate(isoString: string): {
  formattedDate: string;
  formattedTime: string;
} {
  // objeto Date desde la cadena ISO
  const date = new Date(isoString);

  // Extraer las partes individuales de la fecha y la hora
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();

  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  // Formatear la fecha y la hora
  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return {
    formattedDate,
    formattedTime,
  };
}
