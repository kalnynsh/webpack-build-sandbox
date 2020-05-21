import Calculator from './calculator';
import Logger from './logger';

const calculator = new Calculator();
const logger = new Logger();

logger.log(
    calculator.sum(43,96,71,75)
);
