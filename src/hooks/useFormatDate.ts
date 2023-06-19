export const useFormatDate = (dateToFormat: string) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };

  const date = new Date(dateToFormat);
  const formattedDate = date.toLocaleDateString("es-ES", options);
  return formattedDate;
};
