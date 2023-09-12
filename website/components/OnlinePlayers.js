import React from 'react';
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OnlinePlayers() {

    const data = {maintenance: 'non-active', online: 12, tables: 12};
    /*const { data } = useSWR(
        `${process.env.API_URL}/lobbystats`,
        fetcher, { refreshInterval: 60000 }
    );*/
    if ( data?.maintenance === "active" ) {
        return (
            <div className="box" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                <span style={{color: "#F6BC00", fontSize: "16px",fontWeight: "700"}}>GAME SERVER MAINTENANCE</span>
            </div>
        );
    } else {
        return (
            <div className="box">
                <ul>
                    <li>
                        <h2>{data?.online >= 0 ? data.online : "?"}</h2>
                        <span>Online</span>
                    </li>
                    <li>
                        <h2>{data?.tables >= 0 ? data.tables : "?"}</h2>
                        <span>Tables</span>
                    </li>
                </ul>
            </div>
        );
    }
}