import { format, parseISO } from "date-fns";

export const dateConverter = (date) => {
  const parsedDate = parseISO(date);
  const cleanDate = format(parsedDate, "d MMMM, yyyy 'at' HH:mm");

  return !date ? "Date not available" : cleanDate;
};
