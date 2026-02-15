export const calculateDuration = (startDateStr: string, endDateStr?: string): string => {
    const start = new Date(startDateStr);
    const end = endDateStr ? new Date(endDateStr) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    // LinkedIn counts a partial month as a full month, so we add 1
    months += 1;
    if (months === 12) {
        years++;
        months = 0;
    }

    const yearPart = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthPart = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

    return [yearPart, monthPart].filter(Boolean).join(' ');
};

export const calculateTotalYears = (startDateStr: string): string => {
    const start = new Date(startDateStr);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    const m = now.getMonth() - start.getMonth();

    if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
        years--;
    }

    return `${years}+ Years`;
};
