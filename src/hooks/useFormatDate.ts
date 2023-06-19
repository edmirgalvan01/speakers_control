export const useFormatDate = (dateToFormat: string) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(dateToFormat);
  const formattedDate = date.toLocaleDateString("es-ES", options);
  return formattedDate;
};
