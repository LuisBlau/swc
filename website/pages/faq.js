import React from "react";
import parse from "html-react-parser";
import Link from 'next/link';
import ContentLayout from "../components/ContentLayout";
import Footer from "../components/Footer";
import Header from '@/components/Header';
// import Seo from "../components/seo"

const faqs = () => {
    const data = {
        "faqs": {
            "nodes": [
                {
                    "id": "cG9zdDo1MDc=",
                    "excerpt": "<p>Frequently asked questions pertaining cryptocurrencies and Bitcoin in particular</p>\n",
                    "title": "FAQ – Bitcoin",
                    "uri": "/posts/faq/bitcoin-faq"
                },
                {
                    "id": "cG9zdDo0MTQ=",
                    "excerpt": "<p>General Poker related questions.</p>\n",
                    "title": "FAQ – Poker",
                    "uri": "/posts/faq/poker"
                },
                {
                    "id": "cG9zdDo0MDI=",
                    "excerpt": "<p>SwC Poker related and general questions frequently asked in the past.</p>\n",
                    "title": "FAQ – SwC Poker",
                    "uri": "/posts/faq/swc-poker"
                }
            ]
        },
        "wpPage": {
            "title": "FREQUENTLY ASKED QUESTIONS",
            "content": "\n<p>not using the content &#8230; only the page entry</p>\n",
            "uri": "/faq",
            "nodeType": "Page",
            "seo": {
                "title": "FREQUENTLY ASKED QUESTIONS - SwC Poker",
                "metaDesc": "Anything you wanted to know about anything. Right here is probably a good start.",
                "focuskw": "FREQUENTLY ASKED QUESTIONS",
                "metaKeywords": "",
                "metaRobotsNoindex": "index",
                "metaRobotsNofollow": "follow",
                "opengraphTitle": "FREQUENTLY ASKED QUESTIONS - SwC Poker",
                "opengraphDescription": "Anything you wanted to know about anything. Right here is probably a good start.",
                "opengraphImage": null,
                "twitterTitle": "Frequently Asked Questions",
                "twitterDescription": "Anything you wanted to know about anything. Right here is probably a good start.",
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
                "canonical": "https://swcpoker.club/faq",
                "cornerstone": false,
                "schema": {
                    "articleType": [],
                    "pageType": [
                        "WebPage"
                    ],
                    "raw": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://swcpoker.club/faq\",\"url\":\"https://swcpoker.club/faq\",\"name\":\"FREQUENTLY ASKED QUESTIONS - SwC Poker\",\"isPartOf\":{\"@id\":\"https://swcpoker.club/#website\"},\"datePublished\":\"2022-08-25T20:33:05+00:00\",\"dateModified\":\"2022-11-15T14:27:30+00:00\",\"description\":\"Anything you wanted to know about anything. Right here is probably a good start.\",\"breadcrumb\":{\"@id\":\"https://swcpoker.club/faq#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://swcpoker.club/faq\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://swcpoker.club/faq#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://swcpoker.club/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"FREQUENTLY ASKED QUESTIONS\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://swcpoker.club/#website\",\"url\":\"https://swcpoker.club/\",\"name\":\"SwC Poker\",\"description\":\"Welcome to Bitcoin Poker\",\"publisher\":{\"@id\":\"https://swcpoker.club/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://swcpoker.club/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://swcpoker.club/#organization\",\"name\":\"SwC Poker\",\"url\":\"https://swcpoker.club/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://swcpoker.club/#/schema/logo/image/\",\"url\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"contentUrl\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"width\":509,\"height\":150,\"caption\":\"SwC Poker\"},\"image\":{\"@id\":\"https://swcpoker.club/#/schema/logo/image/\"},\"sameAs\":[\"https://twitter.com/SwCPoker\"]}]}"
                }
            }
        }
    };
    const currentPage = data.wpPage;

    return (
        <>
            <Header/>
            <main>
                {/*<Seo post={currentPage} title={'Frequently Asked Questions - SwC Poker'} />*/}
                <ContentLayout title={'Frequently Asked Questions'}
                               subtitle={'Anything you wanted to know about anything, right here is a good start.'}>
                    <div className="poker-rules">
                        <div className="row">
                            {
                                data.faqs.nodes.map((post) => {
                                    return (
                                        <div key={`${post.id}`} className="post-content">
                                            <Link href={post.uri.replace(/\/$/, '')}>{post.title}</Link>
                                            <div>
                                                {parse(post.excerpt)}
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

export default faqs;
