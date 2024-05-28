
export const getDate = (date?: string) => (date ? new Date(date).getTime() : Date.now());


export const getZero = (value: number) => (value < 10 ? `0${value}` : String(value));

export const getFullDate = (date: string) => {
    return date.split("T")[0] + "  " + date.split("T")[1];
};

export const getDateForUTCLocal = (createdat: string, locale: string): string => {
    const date = new Date(createdat);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate: string = new Intl.DateTimeFormat(locale, options).format(date);

    const parts = formattedDate.split(' ');
    let reorderedDate: string;
    switch (locale) {
        case "en":
            reorderedDate = `${parts[2]} ${parts[1]}, ${parts[0].replace(/.$/, "")}`;
            break;
        case "az":
            reorderedDate = `${parts[0]} ${parts[1].charAt(0).toLocaleUpperCase(locale) + parts[1].slice(1)} ${parts[2].charAt(0).toLocaleUpperCase(locale) + parts[2].slice(1)}`;
            break;
        case "ru":
            reorderedDate = `${parts[1]} ${parts[2].charAt(0).toLocaleUpperCase(locale) + parts[2].slice(1)}, ${parts[0].charAt(0).toLocaleUpperCase(locale) + parts[0].slice(1).replace(/.$/, "")}`;
            break;
        case "tr":
            reorderedDate = `${parts[0]} ${parts[1]}, ${parts[2]}`;
            break;
        default:
            reorderedDate = "";
            break;
    }
    return reorderedDate;
};


export function formatDate(inputDateTime: string): string {
    const inputDate = new Date(inputDateTime);

    const dateFormatOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const convertedDate = inputDate.toLocaleDateString("az-AZ", dateFormatOptions);
    return convertedDate;
};