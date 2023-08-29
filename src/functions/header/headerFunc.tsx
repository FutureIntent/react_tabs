
export const copyXalertWarning = (text: string, sec: number) => {
    const alertBox = document.getElementById('alertBox');

    navigator.clipboard.writeText(text);
    
    if(alertBox) alertBox.style.display = 'block';
    if(alertBox?.firstElementChild?.lastElementChild) alertBox.firstElementChild.lastElementChild.textContent = text;

    setTimeout(hideWarning, sec * 1000);
}

export const alertWarning = (text: string, sec: number) => {
    const alertBox = document.getElementById('alertBox');

    if(alertBox) alertBox.style.display = 'block';
    if(alertBox?.firstElementChild?.lastElementChild) alertBox.firstElementChild.lastElementChild.textContent = text;

    setTimeout(hideWarning, sec * 1000);
}

export const hideWarning = () => {
    const alertBox = document.getElementById('alertBox');

    if(alertBox) alertBox.style.display = 'none';
    if(alertBox?.firstElementChild?.lastElementChild) alertBox.firstElementChild.lastElementChild.textContent = '';
}