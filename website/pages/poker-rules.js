import React from "react";
import Link from 'next/link';
import ContentLayout from "../components/ContentLayout";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Header from '../components/Header';

const pokerrules = () => {
    const data = {
        "pokerRules": {
            "subCategories": [
                {
                    "name": "Chinese Poker",
                    "slug": "chinese-poker",
                    "uri": "/posts/poker-rules/chinese-poker",
                    "posts": {
                        "link": [
                            {
                                "slug": "2-7-pineapple-ofc",
                                "title": "2-7 Pineapple OFC Poker",
                                "uri": "/posts/poker-rules/chinese-poker/2-7-pineapple-ofc"
                            },
                            {
                                "slug": "progressive-pineapple-ofc-poker",
                                "title": "Progressive Pineapple OFC Poker",
                                "uri": "/posts/poker-rules/chinese-poker/progressive-pineapple-ofc-poker"
                            },
                            {
                                "slug": "pineapple-ofc-poker",
                                "title": "Pineapple OFC Poker",
                                "uri": "/posts/poker-rules/chinese-poker/pineapple-ofc-poker"
                            },
                            {
                                "slug": "open-face-chinese-poker",
                                "title": "Open Face Chinese Poker",
                                "uri": "/posts/poker-rules/chinese-poker/open-face-chinese-poker"
                            },
                            {
                                "slug": "chinese-poker",
                                "title": "Chinese Poker",
                                "uri": "/posts/poker-rules/chinese-poker/chinese-poker"
                            }
                        ]
                    }
                },
                {
                    "name": "Draw Poker Games",
                    "slug": "draw-poker-games",
                    "uri": "/posts/poker-rules/draw-poker-games",
                    "posts": {
                        "link": [
                            {
                                "slug": "drawmaha-sviten-poker",
                                "title": "Drawmaha (Sviten) Poker",
                                "uri": "/posts/poker-rules/draw-poker-games/drawmaha-sviten-poker"
                            },
                            {
                                "slug": "5-card-draw-poker",
                                "title": "5-Card Draw Poker",
                                "uri": "/posts/poker-rules/draw-poker-games/5-card-draw-poker"
                            },
                            {
                                "slug": "2-7-single-draw-poker",
                                "title": "2-7 Single Draw Poker",
                                "uri": "/posts/poker-rules/draw-poker-games/2-7-single-draw-poker"
                            },
                            {
                                "slug": "badacey-poker",
                                "title": "Badacey Poker",
                                "uri": "/posts/poker-rules/draw-poker-games/badacey-poker"
                            },
                            {
                                "slug": "badeucy-poker",
                                "title": "Badeucy Poker",
                                "uri": "/posts/poker-rules/draw-poker-games/badeucy-poker"
                            },
                            {
                                "slug": "badugi-poker",
                                "title": "Badugi Poker",
                                "uri": "/posts/poker-rules/draw-poker-games/badugi-poker"
                            },
                            {
                                "slug": "2-7-triple-draw-poker",
                                "title": "2-7 Triple Draw Poker",
                                "uri": "/posts/poker-rules/draw-poker-games/2-7-triple-draw-poker"
                            }
                        ]
                    }
                },
                {
                    "name": "Flop Games",
                    "slug": "flop-games",
                    "uri": "/posts/poker-rules/flop-games",
                    "posts": {
                        "link": [
                            {
                                "slug": "6-card-omaha-poker",
                                "title": "6-Card Omaha Poker",
                                "uri": "/posts/poker-rules/flop-games/6-card-omaha-poker"
                            },
                            {
                                "slug": "6-card-omaha-hi-lo-poker",
                                "title": "6-Card Omaha Hi/Lo Poker",
                                "uri": "/posts/poker-rules/flop-games/6-card-omaha-hi-lo-poker"
                            },
                            {
                                "slug": "courchevel-hi-lo-poker",
                                "title": "Courchevel Hi/Lo Poker",
                                "uri": "/posts/poker-rules/flop-games/courchevel-hi-lo-poker"
                            },
                            {
                                "slug": "courchevel-poker",
                                "title": "Courchevel Poker",
                                "uri": "/posts/poker-rules/flop-games/courchevel-poker"
                            },
                            {
                                "slug": "big-o-poker",
                                "title": "Big O Poker",
                                "uri": "/posts/poker-rules/flop-games/big-o-poker"
                            },
                            {
                                "slug": "5-card-omaha-poker",
                                "title": "5-Card Omaha Poker",
                                "uri": "/posts/poker-rules/flop-games/5-card-omaha-poker"
                            },
                            {
                                "slug": "omaha-hi-lo-poker",
                                "title": "Omaha Hi/Lo Poker",
                                "uri": "/posts/poker-rules/flop-games/omaha-hi-lo-poker"
                            },
                            {
                                "slug": "omaha-poker",
                                "title": "Omaha Poker",
                                "uri": "/posts/poker-rules/flop-games/omaha-poker"
                            },
                            {
                                "slug": "pineapple-holdem-poker",
                                "title": "Pineapple Hold’em Poker",
                                "uri": "/posts/poker-rules/flop-games/pineapple-holdem-poker"
                            },
                            {
                                "slug": "short-deck-holdem-poker",
                                "title": "Short Deck Hold’em Poker",
                                "uri": "/posts/poker-rules/flop-games/short-deck-holdem-poker"
                            },
                            {
                                "slug": "texas-hold-em",
                                "title": "Texas Hold’em Poker",
                                "uri": "/posts/poker-rules/flop-games/texas-hold-em"
                            }
                        ]
                    }
                },
                {
                    "name": "Mixed Games",
                    "slug": "mixed-games",
                    "uri": "/posts/poker-rules/mixed-games",
                    "posts": {
                        "link": [
                            {
                                "slug": "mixed-games",
                                "title": "Mixed Games",
                                "uri": "/posts/poker-rules/mixed-games/mixed-games"
                            }
                        ]
                    }
                },
                {
                    "name": "Stud Poker Games",
                    "slug": "stud-games",
                    "uri": "/posts/poker-rules/stud-games",
                    "posts": {
                        "link": [
                            {
                                "slug": "razz-poker",
                                "title": "Razz Poker",
                                "uri": "/posts/poker-rules/stud-games/razz-poker"
                            },
                            {
                                "slug": "7-card-stud-hi-lo-poker",
                                "title": "7-Card Stud Hi/Lo Poker",
                                "uri": "/posts/poker-rules/stud-games/7-card-stud-hi-lo-poker"
                            },
                            {
                                "slug": "7-card-stud-poker",
                                "title": "7-Card Stud Poker",
                                "uri": "/posts/poker-rules/stud-games/7-card-stud-poker"
                            }
                        ]
                    }
                }
            ]
        },
        "wpPage": {
            "title": "Poker Rules",
            "content": "\n<div class=\"wp-block-query is-layout-flow wp-block-query-is-layout-flow\"><ul class=\"wp-block-post-template is-layout-flow wp-block-post-template-is-layout-flow\"><li class=\"wp-block-post post-164 post type-post status-publish format-standard hentry category-chinese-poker category-poker-rules\">\n<h2 class=\"wp-block-post-title\">2-7 Pineapple OFC Poker</h2>\n\n<div class=\"wp-block-post-date\"><time datetime=\"2021-11-14T00:45:53+00:00\">November 14, 2021</time></div>\n\n<div class=\"wp-block-post-excerpt\"><p class=\"wp-block-post-excerpt__excerpt\">OFC/P 2-7 is a variant of Pineapple Open Face Chinese. </p></div>\n</li></ul></div>\n\n\n\n<p></p>\n",
            "uri": "/poker-rules",
            "nodeType": "Page",
            "seo": {
                "title": "Poker Game Rules | SwC Poker | Bitcoin Poker",
                "metaDesc": "Poker game rules, instructions on how to play texas hold'em, omaha, chinese poker, draw games, and stud types.",
                "focuskw": "",
                "metaKeywords": "",
                "metaRobotsNoindex": "index",
                "metaRobotsNofollow": "follow",
                "opengraphTitle": "Poker Game Rules | SwC Poker | Bitcoin Poker",
                "opengraphDescription": "Poker game rules, instructions on how to play texas hold'em, omaha, chinese poker, draw games, and stud types.",
                "opengraphImage": null,
                "twitterTitle": "Poker Game Rules | SwC Poker | Bitcoin Poker",
                "twitterDescription": "Poker game rules, instructions on how to play texas hold'em, omaha, chinese poker, draw games, and stud types.",
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
                "canonical": "https://swcpoker.club/poker-rules",
                "cornerstone": false,
                "schema": {
                    "articleType": [],
                    "pageType": [
                        "WebPage"
                    ],
                    "raw": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://swcpoker.club/poker-rules\",\"url\":\"https://swcpoker.club/poker-rules\",\"name\":\"Poker Game Rules | SwC Poker | Bitcoin Poker\",\"isPartOf\":{\"@id\":\"https://swcpoker.club/#website\"},\"datePublished\":\"2021-11-02T20:42:54+00:00\",\"dateModified\":\"2022-10-24T15:04:11+00:00\",\"description\":\"Poker game rules, instructions on how to play texas hold'em, omaha, chinese poker, draw games, and stud types.\",\"breadcrumb\":{\"@id\":\"https://swcpoker.club/poker-rules#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://swcpoker.club/poker-rules\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://swcpoker.club/poker-rules#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://swcpoker.club/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Poker Rules\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://swcpoker.club/#website\",\"url\":\"https://swcpoker.club/\",\"name\":\"SwC Poker\",\"description\":\"Welcome to Bitcoin Poker\",\"publisher\":{\"@id\":\"https://swcpoker.club/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://swcpoker.club/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://swcpoker.club/#organization\",\"name\":\"SwC Poker\",\"url\":\"https://swcpoker.club/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://swcpoker.club/#/schema/logo/image/\",\"url\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"contentUrl\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"width\":509,\"height\":150,\"caption\":\"SwC Poker\"},\"image\":{\"@id\":\"https://swcpoker.club/#/schema/logo/image/\"},\"sameAs\":[\"https://twitter.com/SwCPoker\"]}]}"
                }
            }
        }

    };
    const currentPage = data.wpPage;

    return (
        <>
            <Header/>
            <main>
                {/*<Seo post={currentPage}/>*/}
                <ContentLayout title={'Poker Rules Overview'}
                           subtitle={'How to play the various poker games available at SwC Poker'}>
                <div className="poker-rules">
                    <div className="row">
                        {
                            data.pokerRules.subCategories.map((category, i) => {
                                return (
                                    <div className="col-md-6 col-sm-4 item" key={i}>
                                        <h4>{category.name}</h4>
                                        <div className="links">
                                            <ul style={{padding: '8px 0px', listStyle: 'none'}}>
                                                {
                                                    category.posts.link.map((post, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <Link href={post.uri.replace(/\/$/, '').substring(6)}
                                                                   key={post.id}>{post.title}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </ContentLayout>
            </main>
            <Footer/>
        </>
    )
};

export default pokerrules;