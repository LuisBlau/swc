import React from "react";
import Link from 'next/link';
import Hof from "../components/hall-of-fame/Hof";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Seo from "../components/seo"

const halloffame = () => {
    const data = {
        "wpPage": {
            "title": "Hall of Fame",
            "content": null,
            "uri": "/hall-of-fame",
            "nodeType": "Page",
            "seo": {
                "title": "Krill Hall Of Fame | SwC Poker | Bitcoin Poker",
                "metaDesc": "See the SwC Poker Hall of Fame on the largest Bitcoin Poker site. Play Hold’em, Omaha and Mixed Games with ananonymous account in a low rake, player-friendly environment. Click here to get started.",
                "focuskw": "",
                "metaKeywords": "",
                "metaRobotsNoindex": "index",
                "metaRobotsNofollow": "follow",
                "opengraphTitle": "Krill Hall Of Fame | SwC Poker | Bitcoin Poker",
                "opengraphDescription": "See the SwC Poker Hall of Fame on the largest Bitcoin Poker site. Play Hold’em, Omaha and Mixed Games with ananonymous account in a low rake, player-friendly environment. Click here to get started.",
                "opengraphImage": null,
                "twitterTitle": "Krill Hall Of Fame | SwC Poker | Bitcoin Poker",
                "twitterDescription": "See the SwC Poker Hall of Fame on the largest Bitcoin Poker site. Play Hold’em, Omaha and Mixed Games with ananonymous account in a low rake, player-friendly environment. Click here to get started.",
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
                "canonical": "https://swcpoker.club/hall-of-fame",
                "cornerstone": false,
                "schema": {
                    "articleType": [],
                    "pageType": [
                        "WebPage"
                    ],
                    "raw": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://swcpoker.club/hall-of-fame\",\"url\":\"https://swcpoker.club/hall-of-fame\",\"name\":\"Krill Hall Of Fame | SwC Poker | Bitcoin Poker\",\"isPartOf\":{\"@id\":\"https://swcpoker.club/#website\"},\"datePublished\":\"2022-08-30T19:38:11+00:00\",\"dateModified\":\"2022-10-24T15:05:07+00:00\",\"description\":\"See the SwC Poker Hall of Fame on the largest Bitcoin Poker site. Play Hold\\u2019em, Omaha and Mixed Games with ananonymous account in a low rake, player-friendly environment. Click here to get started.\",\"breadcrumb\":{\"@id\":\"https://swcpoker.club/hall-of-fame#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://swcpoker.club/hall-of-fame\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://swcpoker.club/hall-of-fame#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://swcpoker.club/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Hall of Fame\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://swcpoker.club/#website\",\"url\":\"https://swcpoker.club/\",\"name\":\"SwC Poker\",\"description\":\"Welcome to Bitcoin Poker\",\"publisher\":{\"@id\":\"https://swcpoker.club/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://swcpoker.club/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://swcpoker.club/#organization\",\"name\":\"SwC Poker\",\"url\":\"https://swcpoker.club/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://swcpoker.club/#/schema/logo/image/\",\"url\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"contentUrl\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"width\":509,\"height\":150,\"caption\":\"SwC Poker\"},\"image\":{\"@id\":\"https://swcpoker.club/#/schema/logo/image/\"},\"sameAs\":[\"https://twitter.com/SwCPoker\"]}]}"
                }
            }
        }
    };
    const currentPage = data.wpPage;

    return (
        <>
            <Header/>
            <main>
                {/*<Seo title={currentPage.seo.title} post={currentPage} />      */}
                <div className="body page leaderboard">
                    <section className="content-section ">
                        <div className="container">
                            <h1>KRILL HALL OF FAME</h1>
                            <p className="subtitle">EARN KRILL BY PLAYING SWC POKER CASH GAMES. TOP WEEKLY &amp; MONTHLY
                                PLAYERS WIN EXTRA CHIPS!</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div
                                        className="table-tournament hall-of-fame-table table-poker table-responsive column-table">
                                        <Hof when="weekly" title="WEEKLY HALL OF FAME"/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div
                                        className="table-tournament hall-of-fame-table table-poker table-responsive column-table">
                                        <Hof when="monthly" title="MONTHLY HALL OF FAME"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12  text-center py-4">
                                <Link href="/krill-leaderboard" className="btn btn-outline-warning">GO TO KRILL LEADERBOARD</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
};

export default halloffame;
