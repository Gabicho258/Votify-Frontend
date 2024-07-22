// import dayjs from 'dayjs';

export function formatISODate(isoString: string): {
  formattedDate: string;
  formattedTime: string;
} {
  // objeto Date desde la cadena ISO
  const date = new Date(isoString);

  // Extraer las partes individuales de la fecha y la hora
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  // Formatear la fecha y la hora
  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return {
    formattedDate,
    formattedTime,
  };
}

const padZero = (num: number): string => num.toString().padStart(2, "0");

export const convertToISO8601 = (
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
) => {
  // Función para convertir una fecha y hora al formato ISO 8601
  const convertToISO = (date: string, time: string): string => {
    const [day, month, year] = date.split("-").map(Number);
    const [hour, minute] = time.split(":").map(Number);

    // Crear la cadena en formato ISO 8601
    const isoString = `${year}-${padZero(month)}-${padZero(day)}T${padZero(
      hour
    )}:${padZero(minute)}:00.000Z`;
    return isoString;
  };

  // Convertir las fechas y horas de inicio y fin
  const startISO = convertToISO(startDate, startTime);
  const endISO = convertToISO(endDate, endTime);

  return {
    startISO,
    endISO,
  };
};
