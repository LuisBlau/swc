import React from 'react';
import useSWR from "swr";
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

import jackpotText from '@/public/jackpot-text.webp';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BadBeatJackpot() {

    const data = { badbeat: 262291500 };
    /*const { data } = useSWR(
        `${process.env.API_URL}/badbeat`,
        fetcher, { refreshInterval: 60000 }
    );*/

    const formatCurrencyString = (value) => {
        return parseInt(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };


    if (!data) {
        return (
            <div className="box">
                <h2>Loading</h2>
                <p>BadBeatJackpot</p>
            </div>
        );
    } else {
        return (
            <Link href="/posts/btc-poker-bad-beat/bad-beat-jackpot" style={{textDecoration:"none"}}>
                <Card className={"box"} style={{backgroundColor:"rgba(0, 0, 0, .25)"}}>
                    <div className="inner">
                        <div className="badbeat">
                            <h3>Bad Beat</h3>
                            <span>
                                <Image src={jackpotText} alt="jackpot" width="86" height="20"
                                       loading="eager" placeholder="none"/>
                            </span>
                        </div>
                        <div className="btc-currency">
                            <h2>{formatCurrencyString(data.badbeat / 100)}</h2>
                            {/* 1e8 is 100 Million... as in satoshis in a bitcoin */}
                            <span>{(data.badbeat / 1e08).toFixed(2)} BTC</span>
                        </div>
                    </div>
                </Card>
            </Link>
        );
    }
}
