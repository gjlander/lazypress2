import { Chalk } from 'chalk';

const basicChalk = new Chalk({ level: 1 });

type ChalkColor =
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'magenta'
    | 'cyan'
    | 'white'
    | 'gray'
    | 'redBright'
    | 'greenBright'
    | 'yellowBright'
    | 'blueBright'
    | 'magentaBright'
    | 'cyanBright'
    | 'whiteBright';

export default (color: ChalkColor, message: any) =>
    console.log(basicChalk[color](message));
