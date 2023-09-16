import React from 'react';
import Link from 'next/link';

function TournamentRow(props) {    
    
    const currentTimeUTC = new Date().getTime();
    //need to add a postfix for JS to be able to parse
    const startTimeUTC = new Date(props.data?.sd + ".000Z").getTime();
    const timeDifferenceMinutes = Math.floor((((currentTimeUTC - startTimeUTC) / 1000) / 60) * -1)

    return (
        <tr key={props.data?.i}>
            <td>{timeDifferenceMinutes > 0 ? timeDifferenceMinutes + " minutes" : "Late Registration"}</td>
            <td>{props.data?.n}<span className="mobile-show">{props.data?.gt} </span></td>
            <td className="mobile-v">{props.data?.gt} {props.data?.lt}</td>
            <td>{props.data?.b / 100} + {props.data?.ef / 100}</td>
            <td>
                <Link className="btn btn-play" href="#">Play Now</Link>
            </td>
        </tr>
    )
}

export default TournamentRow;