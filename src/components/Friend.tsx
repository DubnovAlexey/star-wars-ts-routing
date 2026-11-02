import {Link} from "react-router";
import type {Hero} from "../utils/types";

interface Props {
    friend: Hero;
    to: string;
    pos: number;
}

const Friend = ({friend, to, pos}: Props) => {
    let styles = "w-full hover:opacity-80 ";
    if (pos === 7) {
        styles += 'rounded-bl-3xl';
    }
    if (pos === 9) {
        styles += 'rounded-br-3xl';
    }
    return (
        <Link to={to} title={friend.name}>
            <img className={styles} src={friend.img} alt={friend.name}/>
        </Link>
    )
}

export default Friend;
