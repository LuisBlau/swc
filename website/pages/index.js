import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState, useContext} from "react";
import {useRouter} from 'next/router';
import Helmet from 'react-helmet';
// import { Source_Sans_Pro } from 'next/font/google';
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '@/components/Header';
import UserContext from '@/store/UserContext';
// import styles from '@/styles/Home.module.css';
import {numberWithCommas} from '@/utility/format';
import Footer from "../components/Footer";
import UpcomingTournaments from "../components/tournament/UpcomingTournaments";
import LatestUpdates from "../components/LatestUpdates";

import bitcoinImage from "@/public/bitcoin-img.webp";


export default function Home() {
    const router = useRouter();
    const context = useContext(UserContext);

    return (
        <>
            <Head>
                <title>Bitcoin Poker | Crypto Poker Tournaments</title>
                <meta name="description"
                      content="Join the excitement of Crypto Poker Tournaments! Compete with crypto and showcase your skills in Bitcoin poker battles! Join here and win!"/>
                <meta name="keywords"
                      content="bitcoin poker, bitcoin online poker, online poker, poker, swcpoker, swc poker, swc, seals with clubs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Helmet bodyAttributes={{ class: 'home' }} />
            <Header/>
            <main>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 banner-desc">
                                <div className="inner">
                                    <h1>WELCOME TO <br />BITCOIN POKER</h1>
                                    <p>ANONYMOUS. LOW RAKE. DAILY TOURNAMENTS.</p>
                                    <div className="get-button">
                                        <Link href="https://play-swcpoker.netlify.app" className="btn playnow">Play Now</Link>
                                        <Link href="/download" className="btn btn-download">Download</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-5 featured-img">
                                <Image src={bitcoinImage} width={595} height='auto' alt="logo" placeholder="none"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <UpcomingTournaments lines={7} />
                    <LatestUpdates />

                    {/* same content as on faq page we should show something different}
                    {/* <FAQColumns /> */}
                    {/* not using it for now */}
                    {/* <Teams /> */}
                </div>
            </main>
            <Footer/>
        </>
    )
}
