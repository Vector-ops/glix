import { Days, Months } from "./constants";

export const getFormattedDate = (dateString: string | Date): string => {
	const time = new Date(dateString);
	const day = time.getDay();
	const month = time.getMonth();
	const year = time.getFullYear();
	const date = time.getDate();
	return `${Days[day]}, ${Months[month]} ${date}, ${year}`;
};
