import React from "react";
import Link from 'next/link';
import LeaderBoard from "../components/leaderboard/LeaderBoard";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Seo from "../components/seo"

const krillleaderboard = () => {
    const data = {
        "wpPage": {
            "title": "Leaderboard",
            "content": null,
            "uri": "/krill-leaderboard",
            "nodeType": "Page",
            "seo": {
                "title": "Bitcoin Online Poker Leaderboard | SwC Poker | Bitcoin Poker",
                "metaDesc": "The weekly and monthly leaderboard for SwC Poker. He who captures the most krill gets the most reward.",
                "focuskw": "",
                "metaKeywords": "",
                "metaRobotsNoindex": "index",
                "metaRobotsNofollow": "follow",
                "opengraphTitle": "Bitcoin Online Poker Leaderboard | SwC Poker | Bitcoin Poker",
                "opengraphDescription": "The weekly and monthly leaderboard for SwC Poker. He who captures the most krill gets the most reward.",
                "opengraphImage": null,
                "twitterTitle": "Bitcoin Online Poker Leaderboard | SwC Poker | Bitcoin Poker",
                "twitterDescription": "The weekly and monthly leaderboard for SwC Poker. He who captures the most krill gets the most reward.",
                "twitterImage": {
                    "altText": "",
                    "sourceUrl": "http://192.168.23.110/wp-content/uploads/2022/08/s7gBgZ6CRo.jpeg",
                    "srcSet": "http://192.168.23.110/wp-content/uploads/2022/08/s7gBgZ6CRo-300x169.jpeg 300w, http://192.168.23.110/wp-content/uploads/2022/08/s7gBgZ6CRo-1024x576.jpeg 1024w, http://192.168.23.110/wp-content/uploads/2022/08/s7gBgZ6CRo-768x432.jpeg 768w, http://192.168.23.110/wp-content/uploads/2022/08/s7gBgZ6CRo.jpeg 1200w",
                    "localFile": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#080808",
                                "images": {
                                    "fallback": {
                                        "src": "/static/2a2e41d3adedbc01480a4f6ce0fd338b/2fda2/s7gBgZ6CRo.jpg",
                                        "srcSet": "/static/2a2e41d3adedbc01480a4f6ce0fd338b/cbb4a/s7gBgZ6CRo.jpg 300w,\n/static/2a2e41d3adedbc01480a4f6ce0fd338b/89230/s7gBgZ6CRo.jpg 600w,\n/static/2a2e41d3adedbc01480a4f6ce0fd338b/2fda2/s7gBgZ6CRo.jpg 1200w",
                                        "sizes": "(min-width: 1200px) 1200px, 100vw"
                                    },
                                    "sources": [
                                        {
                                            "srcSet": "/static/2a2e41d3adedbc01480a4f6ce0fd338b/29354/s7gBgZ6CRo.avif 300w,\n/static/2a2e41d3adedbc01480a4f6ce0fd338b/45157/s7gBgZ6CRo.avif 600w,\n/static/2a2e41d3adedbc01480a4f6ce0fd338b/e5dd1/s7gBgZ6CRo.avif 1200w",
                                            "type": "image/avif",
                                            "sizes": "(min-width: 1200px) 1200px, 100vw"
                                        },
                                        {
                                            "srcSet": "/static/2a2e41d3adedbc01480a4f6ce0fd338b/b3177/s7gBgZ6CRo.webp 300w,\n/static/2a2e41d3adedbc01480a4f6ce0fd338b/ea367/s7gBgZ6CRo.webp 600w,\n/static/2a2e41d3adedbc01480a4f6ce0fd338b/8ab23/s7gBgZ6CRo.webp 1200w",
                                            "type": "image/webp",
                                            "sizes": "(min-width: 1200px) 1200px, 100vw"
                                        }
                                    ]
                                },
                                "width": 1200,
                                "height": 675
                            }
                        }
                    }
                },
                "canonical": "https://swcpoker.club/krill-leaderboard",
                "cornerstone": false,
                "schema": {
                    "articleType": [],
                    "pageType": [
                        "WebPage"
                    ],
                    "raw": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://swcpoker.club/krill-leaderboard\",\"url\":\"https://swcpoker.club/krill-leaderboard\",\"name\":\"Bitcoin Online Poker Leaderboard | SwC Poker | Bitcoin Poker\",\"isPartOf\":{\"@id\":\"https://swcpoker.club/#website\"},\"datePublished\":\"2021-11-02T20:44:33+00:00\",\"dateModified\":\"2022-10-24T15:00:34+00:00\",\"description\":\"The weekly and monthly leaderboard for SwC Poker. He who captures the most krill gets the most reward.\",\"breadcrumb\":{\"@id\":\"https://swcpoker.club/krill-leaderboard#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://swcpoker.club/krill-leaderboard\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://swcpoker.club/krill-leaderboard#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://swcpoker.club/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Leaderboard\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://swcpoker.club/#website\",\"url\":\"https://swcpoker.club/\",\"name\":\"SwC Poker\",\"description\":\"Welcome to Bitcoin Poker\",\"publisher\":{\"@id\":\"https://swcpoker.club/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://swcpoker.club/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://swcpoker.club/#organization\",\"name\":\"SwC Poker\",\"url\":\"https://swcpoker.club/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://swcpoker.club/#/schema/logo/image/\",\"url\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"contentUrl\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"width\":509,\"height\":150,\"caption\":\"SwC Poker\"},\"image\":{\"@id\":\"https://swcpoker.club/#/schema/logo/image/\"},\"sameAs\":[\"https://twitter.com/SwCPoker\"]}]}"
                }
            }
        }
    };
    const currentPage = data.wpPage;

    return (
        <>
            <Header/>
            <main>
                {/*<Seo title={currentPage.seo.title} post={currentPage} />*/}
                <div className="body page leaderboard">
                    <section className="content-section ">
                        <div className="container">
                            <h1>KRILL <br/>LEADERBOARD</h1>
                            <p className="subtitle">EARN KRILL BY PLAYING SWC POKER CASH GAMES. TOP WEEKLY &amp; MONTHLY
                                PLAYERS WIN EXTRA CHIPS!</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="table-leaderboard table-poker table-responsive column-table">
                                        <LeaderBoard tableClassName={'last-week'} when="lastweek"
                                                     title={"LAST WEEK'S WINNERS"}/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="table-leaderboard table-poker table-responsive column-table">
                                        <LeaderBoard tableClassName={'last-month'} when="lastmonth"
                                                     title={"LAST Month'S WINNERS"}/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="table-leaderboard table-poker table-responsive column-table">
                                        <LeaderBoard tableClassName={'current-week'} when="currentweek"
                                                     title={"Current Week"} color={"yellow-bg"}/>

                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="table-leaderboard table-poker table-responsive column-table">
                                        <LeaderBoard tableClassName={'current-month'} when="currentmonth"
                                                     title={"Current Month"} color={"yellow-bg"}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12  text-center py-4">
                                <Link href="/hall-of-fame">
                                    <a className="btn btn-outline-warning">GO TO KRILL HALL OF FAME</a>
                                </Link>
                            </div>

                            <p>Weekly Leaderboards run from 0:00 UTC monday to 23:59 UTC sunday. Monthly Leaderboards
                                run from 0:00 UTC on the first day of the month to 23:59 UTC on the last day of the
                                month.</p>

                            {/* <a href="/hall-of-fame">Go to Krill Hall of Fame</a> */}
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
};

export default krillleaderboard;
