import differenceInDays from 'date-fns/differenceInDays';
import logo from '../images/logo.png';

const modal = document.querySelector('.modal');

const addLogo = (sidebar) => {
    const logoImage = new Image();
    logoImage.src = logo;
    sidebar.prepend(logoImage);
};

const stylesToPriority = (obj) => {
    if (obj.textContent === 'H') {
        return 'high';
    } if (obj.textContent === 'M') {
        return 'medium';
    }

    return 'low';
};

const formatDate = (date) => {
    const difference = differenceInDays(new Date(date), new Date());
    return `${difference} day(s) left`;
}
