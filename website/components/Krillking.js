import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Krillking() {

    const data = { krillking: 'Umbrella' };
    /*const { data } = useSWR(
        `${process.env.API_URL}/krillking`,
        fetcher, { refreshInterval: 60000 }
    );*/

    return (
        <Link href="/krill-leaderboard" style={{textDecoration:"none"}}>
            <Card className={"box"} style={{backgroundColor:"rgba(0, 0, 0, .25)"}}>
                <h2>{data ? data.krillking : "Loading"}</h2>
                <p>Weekly Krill king</p>
            </Card>
        </Link>
    );
}