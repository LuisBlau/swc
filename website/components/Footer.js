import React, { useEffect, useState, useContext } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserContext from "@/store/UserContext";

import logoSvg from '@/public/logo.svg';
import twitterIcon from '@/public/twitter-icon.webp';
import bitcointalkIcon from '@/public/bitcointalk-icon.webp';

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-logo">
                    <div className="swc-icon">
                        <Image src={logoSvg} width={110} height={110} alt="logo" aria-label="SwC Poker Home" />
                    </div>
                    <div className="copyright">
                        © {new Date().getFullYear()}  SWC POKER • ALL RIGHTS RESERVED &nbsp; &nbsp;
                        <Link href="https://twitter.com/SwCPoker" rel="noreferrer" target="_blank" title="SwC Poker on Twitter" className="footer__social-button">
                            <Image src={twitterIcon} alt="swc twitter" loading="eager" placeholder="none" width={20} height={20} />
                        </Link>
                        &nbsp;
                        <Link href="https://bitcointalk.org/index.php?topic=5068812" rel="noreferrer" target="_blank" title="SwC Poker on Bitcoin Talk" className="footer__social-button">
                            <Image src={bitcointalkIcon} alt="swc bitcoin" loading="eager" placeholder="none" width={20} height={20} />
                        </Link>

                    </div>
                </div>
                <div className="footer-info">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 footer-about">
                            <h3>ABOUT US</h3>
                            <p>SwC Poker is the original Bitcoin poker site. We helped create Bitcoin poker. By any measure, SwC Poker is currently the largest Bitcoin poker site. With anonymous accounts, industry-lowest rake, and fast cashouts, SwC Poker offers a player friendly experience that is truly a new style of online poker site.</p>
                            <p>Bitcoin poker, at first, can sound complicated, but it just refers to an online poker site that uses Bitcoin for players to make deposits and receive cash outs. Online poker has been around for over 20 years, and the biggest hurdle for players that entire time, has been depositing to play and cashing out winnings in an easy, fast and trusted way.</p>
                        </div>

                        <div className="col-md-12 col-lg-5">
                            <div className="hash-signed">
                                <p className="text">
                                    This is SwC Poker Website
                                </p>
                                <p>SIGNED WITH </p>
                                <p className="text">
                                    13MxJjKtvB5thivNtVY6vXcEkEykiJXQtK
                                </p>
                            </div>
                            <div className="hash-signed">
                                <p>SIGNATURE </p>
                                <p className="text" style={{ width: '100%', inlineSize: '100%', overflowWrap: 'break-word' }}>
                                    Hw5GDxUcQO4e08Qkb0jElJmUVl9Q6P+UvHTrTAjD4wvgINZhVWeVrfMRx/KzlpEcpI15Mf7rpe67Dir1vgdJmtc=
                                </p>
                            </div>
                            <div className="get-button">
                                <Link rel="nofollow" href="/play" className="btn playnow">Play Now</Link>
                                <Link rel="nofollow" href="/download" className="btn btn-download">Download</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <ul>
                        <li>
                            <Link rel="nofollow" href="/problem-gambling">
                                Problem Gambling
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/promotions">
                                Promotions
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/faq">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/updates">
                                Updates
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/poker-rules">
                                Poker Rules
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/krill-leaderboard">
                                Leaderboard
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/affiliates">
                                Affiliates
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/hall-of-fame">
                                Hall of Fame
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/house-rules">
                                House Rules
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/">
                                Download
                            </Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="mailto:support@swcpoker.club" className="footer__link" title="support@swcpoker.club">Support</Link>
                        </li>
                        <li>
                            <Link rel="nofollow" href="/skins">
                                Skins
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="sub-footer text-center">
                    Back up email: <Link rel="nofollow" href="mailto:swc_support_team@proton.me">swc_support_team@proton.me</Link>
                </div>
            </div>

            <div className="topslant">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1320" height="50"
                     viewBox="0 0 1310 1">
                    <defs>
                        <clipPath id="clip-path">
                            <path id="Mask" d="M0,48.5H648.553L676,0h566l27.447,48.5H1920v666H0Z"
                                  transform="translate(0 0.5)" fill="#0A1308" />
                        </clipPath>
                    </defs>
                    <g id="footer-top" transform="translate(0 -0.5)">
                        <path id="Mask-2" data-name="Mask" d="M0,48.5H648.553L676,0h566l27.447,48.5H1920v666H0Z"
                              transform="translate(0 0.5)" fill="#0c0f0b" />
                    </g>
                </svg>
            </div>
        </footer>
    )
};