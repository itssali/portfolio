export const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    let durationText = "";
    if (years > 0) {
        durationText += `${years} yr${years > 1 ? 's' : ''} `;
    }
    if (months > 0 || years === 0) {
        durationText += `${months} mo${months > 1 ? 's' : ''}`;
    }
    
    return durationText.trim();
};

export const generateRandomCoffeeCount = () => {
    return Math.floor(Math.random() * 6) + 4;
};

export const getCoffeeCount = () => {
    const currentDate = new Date();
    const riyadhTime = new Date(currentDate.toLocaleString("en-US", { timeZone: "Asia/Riyadh" }));
    const riyadhDate = riyadhTime.toISOString().split('T')[0];
    
    const savedDate = localStorage.getItem('coffeeDate');
    const savedCount = localStorage.getItem('coffeeCount');
    
    if (savedDate === riyadhDate && savedCount !== null) {
        return parseInt(savedCount);
    } else {
        const randomCount = generateRandomCoffeeCount();
        localStorage.setItem('coffeeDate', riyadhDate);
        localStorage.setItem('coffeeCount', randomCount);
        return randomCount;
    }
};