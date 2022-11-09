import { Duck } from './demo';

interface Props {
    duck: Duck;
}

export const DuckItem = ({duck}: Props) => {
    return(
        <div>
        <span>{duck.name}</span>
        <button onClick={() => duck.makeSound(`${duck.name} quack`)}>Make sound</button>
      </div>
    );
}