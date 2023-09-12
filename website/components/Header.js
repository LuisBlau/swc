import React, {useEffect, useState, useContext} from "react";
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {isMobileOnly as isMobile} from 'react-device-detect'
import Menu from "./Menu";
import KrillKing from "./Krillking";
import OnlinePlayers from "./OnlinePlayers";
import BadBeatJackpot from "./BadBeatJackpot";
import UserContext from "@/store/UserContext";
// import styles from './Header.module.css';

import logoSvg from '@/public/logo.svg';


export default function Header() {
    const menuItems = [
        {
            "id": "cG9zdDo0MA==",
            "label": "Home",
            "path": "/",
            "order": 1,
            "databaseId": 40,
            "parentId": null
        },
        {
            "id": "cG9zdDo0NTE=",
            "label": "Poker Rules",
            "path": "/poker-rules",
            "order": 2,
            "databaseId": 451,
            "parentId": null
        },
        {
            "id": "cG9zdDozMTY=",
            "label": "Chinese Poker",
            "path": "/posts/poker-rules/chinese-poker",
            "order": 3,
            "databaseId": 316,
            "parentId": "cG9zdDo0NTE="
        },
        {
            "id": "cG9zdDozMjg=",
            "label": "Chinese Poker",
            "path": "/posts/poker-rules/chinese-poker/chinese-poker",
            "order": 4,
            "databaseId": 328,
            "parentId": "cG9zdDozMTY="
        },
        {
            "id": "cG9zdDozMzA=",
            "label": "Open Face Chinese Poker",
            "path": "/posts/poker-rules/chinese-poker/open-face-chinese-poker",
            "order": 5,
            "databaseId": 330,
            "parentId": "cG9zdDozMTY="
        },
        {
            "id": "cG9zdDozMzI=",
            "label": "Pineapple OFC Poker",
            "path": "/posts/poker-rules/chinese-poker/pineapple-ofc-poker",
            "order": 6,
            "databaseId": 332,
            "parentId": "cG9zdDozMTY="
        },
        {
            "id": "cG9zdDozMzQ=",
            "label": "Progressive Pineapple OFC Poker",
            "path": "/posts/poker-rules/chinese-poker/progressive-pineapple-ofc-poker",
            "order": 7,
            "databaseId": 334,
            "parentId": "cG9zdDozMTY="
        },
        {
            "id": "cG9zdDozMzY=",
            "label": "2-7 Pineapple OFC Poker",
            "path": "/posts/poker-rules/chinese-poker/2-7-pineapple-ofc",
            "order": 8,
            "databaseId": 336,
            "parentId": "cG9zdDozMTY="
        },
        {
            "id": "cG9zdDozMTU=",
            "label": "Flop Games",
            "path": "/posts/poker-rules/flop-games",
            "order": 9,
            "databaseId": 315,
            "parentId": "cG9zdDo0NTE="
        },
        {
            "id": "cG9zdDozNDA=",
            "label": "Texas Hold’em Poker",
            "path": "/posts/poker-rules/flop-games/texas-hold-em",
            "order": 10,
            "databaseId": 340,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozMzg=",
            "label": "Short Deck Hold’em Poker",
            "path": "/posts/poker-rules/flop-games/short-deck-holdem-poker",
            "order": 11,
            "databaseId": 338,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozNDg=",
            "label": "Pineapple Hold’em Poker",
            "path": "/posts/poker-rules/flop-games/pineapple-holdem-poker",
            "order": 12,
            "databaseId": 348,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozNDY=",
            "label": "Omaha Poker",
            "path": "/posts/poker-rules/flop-games/omaha-poker",
            "order": 13,
            "databaseId": 346,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozNDQ=",
            "label": "Omaha Hi/Lo Poker",
            "path": "/posts/poker-rules/flop-games/omaha-hi-lo-poker",
            "order": 14,
            "databaseId": 344,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozNDI=",
            "label": "5-Card Omaha Poker",
            "path": "/posts/poker-rules/flop-games/5-card-omaha-poker",
            "order": 15,
            "databaseId": 342,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozNTA=",
            "label": "Big O Poker",
            "path": "/posts/poker-rules/flop-games/big-o-poker",
            "order": 16,
            "databaseId": 350,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozNTQ=",
            "label": "Courchevel Poker",
            "path": "/posts/poker-rules/flop-games/courchevel-poker",
            "order": 17,
            "databaseId": 354,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozNTI=",
            "label": "Courchevel Hi/Lo Poker",
            "path": "/posts/poker-rules/flop-games/courchevel-hi-lo-poker",
            "order": 18,
            "databaseId": 352,
            "parentId": "cG9zdDozMTU="
        },
        {
            "id": "cG9zdDozMTg=",
            "label": "Stud Poker Games",
            "path": "/posts/poker-rules/stud-games",
            "order": 19,
            "databaseId": 318,
            "parentId": "cG9zdDo0NTE="
        },
        {
            "id": "cG9zdDozNTg=",
            "label": "7-Card Stud Poker",
            "path": "/posts/poker-rules/stud-games/7-card-stud-poker",
            "order": 20,
            "databaseId": 358,
            "parentId": "cG9zdDozMTg="
        },
        {
            "id": "cG9zdDozNTY=",
            "label": "7-Card Stud Hi/Lo Poker",
            "path": "/posts/poker-rules/stud-games/7-card-stud-hi-lo-poker",
            "order": 21,
            "databaseId": 356,
            "parentId": "cG9zdDozMTg="
        },
        {
            "id": "cG9zdDozNjA=",
            "label": "Razz Poker",
            "path": "/posts/poker-rules/stud-games/razz-poker",
            "order": 22,
            "databaseId": 360,
            "parentId": "cG9zdDozMTg="
        },
        {
            "id": "cG9zdDozMTc=",
            "label": "Draw Poker Games",
            "path": "/posts/poker-rules/draw-poker-games",
            "order": 23,
            "databaseId": 317,
            "parentId": "cG9zdDo0NTE="
        },
        {
            "id": "cG9zdDozNjI=",
            "label": "2-7 Triple Draw Poker",
            "path": "/posts/poker-rules/draw-poker-games/2-7-triple-draw-poker",
            "order": 24,
            "databaseId": 362,
            "parentId": "cG9zdDozMTc="
        },
        {
            "id": "cG9zdDozNjg=",
            "label": "Badugi Poker",
            "path": "/posts/poker-rules/draw-poker-games/badugi-poker",
            "order": 25,
            "databaseId": 368,
            "parentId": "cG9zdDozMTc="
        },
        {
            "id": "cG9zdDozNjY=",
            "label": "Badeucy Poker",
            "path": "/posts/poker-rules/draw-poker-games/badeucy-poker",
            "order": 26,
            "databaseId": 366,
            "parentId": "cG9zdDozMTc="
        },
        {
            "id": "cG9zdDozNjQ=",
            "label": "Badacey Poker",
            "path": "/posts/poker-rules/draw-poker-games/badacey-poker",
            "order": 27,
            "databaseId": 364,
            "parentId": "cG9zdDozMTc="
        },
        {
            "id": "cG9zdDozMTk=",
            "label": "Mixed Games",
            "path": "/posts/poker-rules/mixed-games",
            "order": 28,
            "databaseId": 319,
            "parentId": "cG9zdDo0NTE="
        },
        {
            "id": "cG9zdDozNzA=",
            "label": "Mixed Games",
            "path": "/posts/poker-rules/mixed-games/mixed-games",
            "order": 29,
            "databaseId": 370,
            "parentId": "cG9zdDozMTk="
        },
        {
            "id": "cG9zdDo0Nw==",
            "label": "House Rules",
            "path": "/house-rules",
            "order": 30,
            "databaseId": 47,
            "parentId": null
        },
        {
            "id": "cG9zdDo3OTU=",
            "label": "FAQ",
            "path": "/faq",
            "order": 31,
            "databaseId": 795,
            "parentId": null
        },
        {
            "id": "cG9zdDo1MA==",
            "label": "Promotions",
            "path": "/promotions",
            "order": 32,
            "databaseId": 50,
            "parentId": null
        },
        {
            "id": "cG9zdDoxODQ5",
            "label": "Updates",
            "path": "/updates",
            "order": 33,
            "databaseId": 1849,
            "parentId": null
        },
        {
            "id": "cG9zdDo1NQ==",
            "label": "Leaderboard",
            "path": "/krill-leaderboard",
            "order": 33,
            "databaseId": 55,
            "parentId": null
        }
    ];

    // const queryResultMainMenu = queryResultAll.filter(m => m.node.name === "HeaderNavigation").shift().node;
    const mainMenuEntries = menuItems.filter(item => item.parentId === null);
    mainMenuEntries.forEach(item => {
        item.path = (item.path.length > 1 && item.path.endsWith('/')) ? item.path.slice(0, -1) : item.path
    });
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [mobile, setMobile] = useState(isMobile);

    useEffect(() => {
        setMobile(isMobile);
    }, []);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);

    };

    return (
        <div>
            <div className="navbar-top navbar-dark  py-2  rounded-bottom-4">
                <div className="container  px-3 px-xl-0">
                    <div className="d-md-flex justify-content-end align-items-center top-nav-links">
                        <div className="d-flex">
                            <div className="me-3c top-nav-social">
                                <span>Customer Service: &nbsp;
                                    <Link href="mailto:support@swcpoker.club">support@swcpoker.club</Link> |
                                    <Link href="https://t.me/swcpoker" target="_blank" rel="noreferrer"> t.me/swcpoker</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="swc-logo" href="/">
                            <Image src={logoSvg} width={110} height={110} alt="logo"/>
                        </Link>
                        <button className={`hamburger hamburger--spin ${hamburgerOpen ? 'is-active' : ''}`} type="button" onClick={toggleHamburger}>
                            <span className="hamburger-box"
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="hamburger-inner"/>
                            </span>
                        </button>
                        <div className={`overlay-contentpush overlay mobile-view ${hamburgerOpen ? " open" : ""}`}>
                            <Menu menu={mainMenuEntries} showHome={true} isMobile={true} setHamburgerOpen={setHamburgerOpen} />
                            <div className="poker-stats">
                                {mobile &&
                                <div className="container">
                                    <div className="info">
                                        <div className="col-box">
                                            <BadBeatJackpot />
                                        </div>
                                        <div className="col-box">
                                            <OnlinePlayers />
                                        </div>
                                        <div className="col-box">
                                            <KrillKing />
                                        </div>
                                    </div>
                                </div>

                                }
                            </div>
                        </div>
                        <div className="collapse navbar-collapse ml-auto" id="navmenu">
                            <Menu menu={mainMenuEntries} showHome={true} setHamburgerOpen={setHamburgerOpen} />
                            <div className="get-button">
                                <Link href="/download" className="btn btn-download">Download</Link>
                                <Link href="https://play-swcpoker.netlify.app" className="btn btn-playnow">Play Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="slant">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1933.203" height="272.982"
                             viewBox="0 0 1933.203 272.982">
                            <path id="Path_5" data-name="Path 5"
                                  d="M0,32.016v192.4H424l26.047,48.564H1470.641l27.561-48.564h435V0H0Z" fill="#033018"/>
                        </svg>
                    </div>
                </nav>

                {!mobile &&
                <div className="poker-stats">
                    <div className="container">
                        <div className="info">
                            <div className="col-box">
                                <BadBeatJackpot />
                            </div>
                            <div className="col-box">
                                <OnlinePlayers />
                            </div>
                            <div className="col-box">
                                <KrillKing />
                            </div>
                        </div>
                    </div>
                </div>
                }
            </header>
        </div>
    );
};