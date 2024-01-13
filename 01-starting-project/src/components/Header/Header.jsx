import componentsImg from '../../assets/react-core-concepts.png';
import './Header.css';
const arrayName = ['crucial', 'core', 'fundamental'];
function getRandomName(max){
    return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
    return(
        <header>
            <img src={componentsImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {arrayName[getRandomName(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>);
}
