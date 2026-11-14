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
            {/* data-zoom: under the mouse the photo grows 2.5× over the page (utils/useHoverZoom.ts) */}
            <img className={styles} src={friend.img} alt={friend.name} data-zoom=""/>
        </Link>
    )
}

export default Friend;
