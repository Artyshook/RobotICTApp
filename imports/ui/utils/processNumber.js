export const processNumber = (number) => {
    if (number % 15 === 0) return 'RobotICT';
    if (number % 3 === 0) return 'Robot';
    if (number % 5 === 0) return 'ICT';
    return number.toString();
};