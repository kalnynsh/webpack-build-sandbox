import Calculator from './calculator';
import Logger from './logger';

import logoUrl from './images/Ddev_logo_01_60x73.png';

const calculator = new Calculator();
const logger = new Logger();

logger.log(
    calculator.sum(43,96,71,75)
);

const logoImg = document.createElement('img');
logoImg.src = logoUrl;

document
    .getElementById('root')
    .appendChild(logoImg)
;
