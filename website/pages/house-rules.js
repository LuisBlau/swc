import React from "react";
import ContentLayout from "../components/ContentLayout";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Seo from "../components/seo"

const HouseRules = () => {
    const data = {
        "wpPage": {
            "title": "House Rules",
            "content": "\r\n<p>Fairplay, kindness and adherence to some common rules.</p>\r\n\r\n\r\n\r\n<a class=\"btn btn-link\" href=\"/house-rules/#general-rules\">General Rules‍</a>\r\n<a class=\"btn btn-link\" href=\"/house-rules/#chat-rules\">Chat Rules‍</a>\r\n<a class=\"btn btn-link\" href=\"/house-rules/#cash-game\">Cash Game Rules‍‍</a>\r\n<a class=\"btn btn-link\" href=\"/house-rules/#tournament-rules\">Tournament Rules‍</a>\r\n<a class=\"btn btn-link\" href=\"/house-rules/#bots\">Bots are Prohibited‍</a>\r\n\r\n\r\n\r\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\r\n\r\n\r\n\r\n<h3 class=\"wp-block-heading\" id=\"general-rules\">General House Rules‍</h3>\r\n\r\n\r\n\r\n<p>Sale or transfer of accounts between players is prohibited.</p>\r\n\r\n\r\n\r\n<p>Accounts may not change ownership. Purchasing or receiving an account from another player will result in its confiscation.‍</p>\r\n\r\n\r\n\r\n<p>Usernames may not contain vulgar terms or racial epithets.</p>\r\n\r\n\r\n\r\n<p>Player-to-player chip transfers are at your own risk. SwC&nbsp;Poker management does not intervene in player disputes related to chip transfers. Chip transfers cannot be cancelled or reversed. Please exercise caution and good judgement before performing any player-to-player transfers in an anonymous poker room.‍</p>\r\n\r\n\r\n\r\n<p>Multiple players in the same home are welcome to play at SwC Poker, but not at the same cash tables, tournaments, or sit &amp; gos.</p>\r\n\r\n\r\n\r\n<p class=\"has-text-align-right\"><a href=\"#top\">top</a></p>\r\n\r\n\r\n\r\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\r\n\r\n\r\n\r\n<h3 class=\"wp-block-heading\" id=\"chat-rules\">Chat Rules‍</h3>\r\n\r\n\r\n\r\n<p>Chat is a privilege that can be revoked by management at will.‍ Verbally abusing players will not be tolerated.</p>\r\n\r\n\r\n\r\n<p>Chat is uncensored, and is not necessarily in English.‍</p>\r\n\r\n\r\n\r\n<p>Players are provided with an Ignore option to hide the chat of any player they do not wish to see.‍</p>\r\n\r\n\r\n\r\n<p>In addition to the rules listed above, a common sense policy should be used to determine what is considered inappropriate chat. Cases will be dealt with by management on an individual basis.</p>\r\n\r\n\r\n\r\n<p>Players found to be using inappropriate chat will be given a warning, and will have their chat removed for one week.</p>\r\n\r\n\r\n\r\n<p>A second violation will result in the removal of chat for one month.</p>\r\n\r\n\r\n\r\n<p>Gross and/or repeated violations of prohibited behavior will result in a permanent loss of chat.</p>\r\n\r\n\r\n\r\n<p><strong>Do not use multiple accounts to evade a loss of chat, or to chat to a user who has ignored you.</strong>&nbsp;This may result in escalated consequences at the discretion of SwC management.‍</p>\r\n\r\n\r\n\r\n<p>In general, 1st infraction = 1 week chat loss, 2nd infraction = 1 month chat loss, 3rd infraction = permanent chat loss.</p>\r\n\r\n\r\n\r\n<p>Doxxing another player will result in permanent loss of chat.</p>\r\n\r\n\r\n\r\n<p class=\"has-text-align-right\"><a href=\"#top\">top</a></p>\r\n\r\n\r\n\r\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\r\n\r\n\r\n\r\n<h3 class=\"wp-block-heading\" id=\"cash-game\">Cash Game Rules‍‍</h3>\r\n\r\n\r\n\r\n<p>One player to a hand.</p>\r\n\r\n\r\n\r\n<p>Multiple players in the same home are welcome to play at SwC Poker, but not at the same cash tables.</p>\r\n\r\n\r\n\r\n<p>Fixed Limit games have a cap of 4 bets per street when the action is multi-way, and no cap when the action is heads up.</p>\r\n\r\n\r\n\r\n<p>All games have a 1 hour “rathole timer”. Players returning to a table less than 1 hour after leaving it must sit with at least the amount they left with. Using a second account to evade this restriction is prohibited.</p>\r\n\r\n\r\n\r\n<p>In mixed games, players are expected to play by the spirit of the game, sitting in during all game types. It is acceptable to occasionally miss a hand or a round, but it is not okay to always skip a particular game type or several game types (for example, sitting out all the stud games, or sitting out the big bet games). Management reserves the right to make decisions and potentially take punitive action in these cases.‍</p>\r\n\r\n\r\n\r\n<p class=\"has-text-align-right\"><a href=\"#top\">top</a></p>\r\n\r\n\r\n\r\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\r\n\r\n\r\n\r\n<h3 class=\"wp-block-heading\" id=\"tournament-rules\">Tournament Rules‍</h3>\r\n\r\n\r\n\r\n<p>One player to a hand.</p>\r\n\r\n\r\n\r\n<p>Multiple players in the same home are welcome to play at SwC Poker, but not in the same tournaments or sit &amp; gos.‍</p>\r\n\r\n\r\n\r\n<p>You may unregister at any time before the start of a tournament and receive your buy-in back.‍</p>\r\n\r\n\r\n\r\n<p>If a tournament is interrupted and cannot be completed, management will return buy-ins or distribute the prize pool at its discretion.‍</p>\r\n\r\n\r\n\r\n<p>One account per person per tournament. Re-entering a tournament on a different account is prohibited.‍</p>\r\n\r\n\r\n\r\n<p class=\"has-text-align-right\"><a href=\"#top\">top</a></p>\r\n\r\n\r\n\r\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\r\n\r\n\r\n\r\n<h3 class=\"wp-block-heading\" id=\"bots\">Bots are Prohibited‍</h3>\r\n\r\n\r\n\r\n<p>Bots are prohibited on SwC Poker. Please contact&nbsp;<a href=\"mailto:support@swcpoker.club\">support@swcpoker.club</a>&nbsp;if you feel a bot is playing. Management will vigilantly defend the integrity of the games.‍</p>\r\n\r\n\r\n\r\n<p class=\"has-text-align-right\"><a href=\"#top\">top</a></p>\r\n\r\n\r\n\r\n<div style=\"height:48px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\r\n\r\n\r\n\r\n<p>More questions are answered on our <a href=\"/faq\">frequently asked questions page</a></p>\r\n",
            "uri": "/house-rules",
            "nodeType": "Page",
            "seo": {
                "title": "House Rules | SwC Poker | Bitcoin Poker",
                "metaDesc": "House rules, information and frequently asked questions for the best bitcoin online poker site, SwC Poker.",
                "focuskw": "SWC Poker House Rules",
                "metaKeywords": "",
                "metaRobotsNoindex": "index",
                "metaRobotsNofollow": "follow",
                "opengraphTitle": "House Rules | SwC Poker | Bitcoin Poker",
                "opengraphDescription": "House rules, information and frequently asked questions for the best bitcoin online poker site, SwC Poker.",
                "opengraphImage": null,
                "twitterTitle": "House Rules | SwC Poker | Bitcoin Poker",
                "twitterDescription": "House rules, information and frequently asked questions for the best bitcoin online poker site, SwC Poker.",
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
                "canonical": "https://swcpoker.club/house-rules",
                "cornerstone": false,
                "schema": {
                    "articleType": [],
                    "pageType": [
                        "WebPage"
                    ],
                    "raw": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://swcpoker.club/house-rules\",\"url\":\"https://swcpoker.club/house-rules\",\"name\":\"House Rules | SwC Poker | Bitcoin Poker\",\"isPartOf\":{\"@id\":\"https://swcpoker.club/#website\"},\"datePublished\":\"2021-11-02T20:43:19+00:00\",\"dateModified\":\"2023-04-23T09:13:18+00:00\",\"description\":\"House rules, information and frequently asked questions for the best bitcoin online poker site, SwC Poker.\",\"breadcrumb\":{\"@id\":\"https://swcpoker.club/house-rules#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://swcpoker.club/house-rules\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://swcpoker.club/house-rules#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://swcpoker.club/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"House Rules\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://swcpoker.club/#website\",\"url\":\"https://swcpoker.club/\",\"name\":\"SwC Poker\",\"description\":\"Welcome to Bitcoin Poker\",\"publisher\":{\"@id\":\"https://swcpoker.club/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://swcpoker.club/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"https://swcpoker.club/#organization\",\"name\":\"SwC Poker\",\"url\":\"https://swcpoker.club/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://swcpoker.club/#/schema/logo/image/\",\"url\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"contentUrl\":\"/static/70f3179d68399c2a54b792e92c36440a/cropped-Rectangle-S.png\",\"width\":509,\"height\":150,\"caption\":\"SwC Poker\"},\"image\":{\"@id\":\"https://swcpoker.club/#/schema/logo/image/\"},\"sameAs\":[\"https://twitter.com/SwCPoker\"]}]}"
                }
            },
            "houseRulesAcf": {
                "introText": "Fairplay, kindness and adherence to some common rules.",
                "subtitle": "JUST TO MAKE SURE THAT EVERYONE KNOWS.",
                "accordionList": [
                    {
                        "accordionContent": "<p>We are a small team of humans dedicated to building a secure, fair, low rake Bitcoin poker platform. We offer an honest, secure Bitcoin poker room. Player balances are denominated in Bitcoin, and all cash-ins and cash-outs are done via Bitcoin. No traditional currency is ever used. The organization chooses to remain anonymous. We’re committed to Bitcoin poker for the long haul.</p>\n",
                        "accordionTitle": "Who are you, and what is SwC Poker?"
                    },
                    {
                        "accordionContent": "<p>Bitcoin is a popular peer-to-peer digital crypto-currency that has been in use since 2009. SwC Poker only transacts business in Bitcoin. We make depositing and withdrawing Bitcoin fast and easy. (More information is available on our Bitcoin FAQ page).</p>\n",
                        "accordionTitle": "What is Bitcoin?"
                    },
                    {
                        "accordionContent": "<p>1 Chip on SwC Poker is worth 0.000001 BTC. This unit is also known as 1 bit, or 1 microBTC (μBTC). 1,000,000 chips is equal to 1 Bitcoin.</p>\n",
                        "accordionTitle": "What Is a chip worth?"
                    },
                    {
                        "accordionContent": "<p>There is no minimum deposit. All deposits are credited, down to the smallest unit of Bitcoin, 1 satoshi, also expressed as 0.00000001 BTC or 0.01 SwC Poker chips. The minimum withdrawal amount is 500 chips.</p>\n",
                        "accordionTitle": "What are the minimum deposit & withdrawal amounts?"
                    },
                    {
                        "accordionContent": "<p>Deposits are credited after just 1 confirmation on the Bitcoin network. The time for this is variable, but averages 10-30 minutes. Withdrawals are processed regularly, averaging 4-6 hours. On rare occasion, withdrawals may take up to 24 hours.‍</p>\n",
                        "accordionTitle": "How fast are deposits and withdrawals?‍"
                    },
                    {
                        "accordionContent": "<p>A transaction fee must be paid to the Bitcoin network for all transfers of bitcoin. The fee required for a fast transaction is normally small, but varies based on network demand.</p>\n<p>Depositing and withdrawing Bitcoin requires paying this network fee. For withdrawals, the required network fee is deducted from the total amount withdrawn. Players pay only network fees and SwC Poker does not charge any additional fee.</p>\n",
                        "accordionTitle": "What are the costs of deposits & withdrawals?"
                    },
                    {
                        "accordionContent": "<p>No. We at SwC Poker flatly reject the idea that an online poker room should require your personal information. We believe the online poker experience should be similar to a live cardroom, whereby players can buy chips, play, and cash out anonymously. By using Bitcoin, SwC Poker can securely, anonymously and quickly process transactions without requiring any documentation. Only an e-mail address is required to create and use an account.‍</p>\n",
                        "accordionTitle": "Do you require my dox/identification?‍"
                    },
                    {
                        "accordionContent": "<p>SwC Poker gladly accepts players worldwide.‍</p>\n",
                        "accordionTitle": "Do you accept USA players? Other countries?‍"
                    },
                    {
                        "accordionContent": "<p>Yes. Player funds are never used for operating expenses. Players’ Bitcoins are held in several wallets of varying accessibility for security reasons.‍</p>\n",
                        "accordionTitle": "Do you segregate player funds?‍"
                    }
                ],
                "accordionListPokerFaq": [
                    {
                        "accordionContent": "<p>Yes. We have a point system called “Krill.” The details can be found on our <a title=\"Krill Rewards Program\" href=\"/posts/crypto-poker-promotions/krill-rewards-program\">Krill Rewards Program</a> page.‍</p>\n",
                        "accordionTitle": "Do you have a player point system like other poker sites?‍"
                    },
                    {
                        "accordionContent": "<p>All units shown are Chips. 1 Chip on SwC Poker is worth 0.000001 BTC. This unit is also known as 1 bit, or 1 microBTC (μBTC).No rake is collected in flop game hands that do not make it to the flop. This also applies to draw games (no first draw, no rake) and stud games (no fourth street, no rake).</p>\n<h3>Fixed Limit Games</h3>\n<div class=\"page__table-wrapper\">\n<table>\n<thead>\n<tr>\n<th>Stakes</th>\n<th>Rake (%)</th>\n<th colspan=\"3\">Max Rake</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td colspan=\"2\"></td>\n<td>2 Players</td>\n<td>3 Players</td>\n<td>4+ Players</td>\n</tr>\n<tr>\n<td>Up to 5/10</td>\n<td>4.00%</td>\n<td>1</td>\n<td>2</td>\n<td>2</td>\n</tr>\n<tr>\n<td>10/20</td>\n<td>3.00%</td>\n<td>6</td>\n<td>8</td>\n<td>8</td>\n</tr>\n<tr>\n<td>25/50 to 50/100</td>\n<td>3.00%</td>\n<td>10</td>\n<td>14</td>\n<td>20</td>\n</tr>\n<tr>\n<td>100/200 to 200/400</td>\n<td>2.50%</td>\n<td>10</td>\n<td>40</td>\n<td>60</td>\n</tr>\n<tr>\n<td>300/600 to 500/1000</td>\n<td>2.00%</td>\n<td>20</td>\n<td>40</td>\n<td>60</td>\n</tr>\n<tr>\n<td>1000/2000 and up</td>\n<td>1.00%</td>\n<td>20</td>\n<td>40</td>\n<td>60</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h3>No Limit &amp; Pot Limit Games</h3>\n<div class=\"page__table-wrapper\">\n<table>\n<thead>\n<tr>\n<th>Stakes</th>\n<th>Rake (%)</th>\n<th colspan=\"3\">Max Rake</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td colspan=\"2\"></td>\n<td>2 Players</td>\n<td>3 Players</td>\n<td>4+ Players</td>\n</tr>\n<tr>\n<td>Up to <a title=\"No Rake Microstakes\" href=\"/post/no-rake-microstakes\">0.10/0.20</a></td>\n<td>0.00%</td>\n<td>0</td>\n<td>0</td>\n<td>0</td>\n</tr>\n<tr>\n<td>1/2 to 5/10</td>\n<td>4.00%</td>\n<td>10</td>\n<td>20</td>\n<td>45</td>\n</tr>\n<tr>\n<td>10/20</td>\n<td>4.00%</td>\n<td>19</td>\n<td>25</td>\n<td>60</td>\n</tr>\n<tr>\n<td>25/50 and up</td>\n<td>3.60%</td>\n<td>27</td>\n<td>35</td>\n<td>76</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h3>No Limit Bad Beat Jackpot Games</h3>\n<p>The rake is 25% higher in qualifying <a title=\"Jackpot Rules\" href=\"/post/bad-beat-jackpot-starting-at-100k\">Bad Beat Jackpot</a> hands with 4 or more players. This extra portion of rake is entirely contributed to the jackpot.</p>\n<p>2- and 3- handed games at Bad Beat Jackpot tables do not qualify for the jackpot, and do not rake higher than the normal rate.</p>\n<div class=\"page__table-wrapper\">\n<table>\n<thead>\n<tr>\n<th>Stakes</th>\n<th>Rake (%)</th>\n<th colspan=\"2\">Max Rake</th>\n<th>Rake (%)</th>\n<th>Max Rake</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td colspan=\"2\"></td>\n<td>2 Players</td>\n<td>3 Players</td>\n<td></td>\n<td>4+ Players</td>\n</tr>\n<tr>\n<td>Up to 10/20</td>\n<td>4.00%</td>\n<td>19</td>\n<td>25</td>\n<td>5.00%</td>\n<td>75</td>\n</tr>\n<tr>\n<td>25/50 and up</td>\n<td>3.60%</td>\n<td>27</td>\n<td>35</td>\n<td>4.50%</td>\n<td>95</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h3>No Limit &amp; Pot Limit Heads-Up Tables</h3>\n<div class=\"page__table-wrapper\">\n<table>\n<thead>\n<tr>\n<th>Stakes</th>\n<th>Rake (%)</th>\n<th colspan=\"3\">Max Rake</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Up to to 10/20</td>\n<td>3.00%</td>\n<td>21</td>\n</tr>\n<tr>\n<td>25/50 to 100/200</td>\n<td>3.00%</td>\n<td>35</td>\n</tr>\n<tr>\n<td>200/400 and up</td>\n<td>3.00%</td>\n<td>55</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h3>Chinese Poker</h3>\n<p>Chinese Poker is played in rounds of multiple hands. Individual hands are not raked. At the end of each complete round, the player or players who won are charged rake on their net winnings in that round, according to the table below.</p>\n<div class=\"page__table-wrapper\">\n<table>\n<thead>\n<tr>\n<th>Stakes</th>\n<th>Rake (%)</th>\n<th colspan=\"3\">Max Rake</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Up to 10/point</td>\n<td>3.00%</td>\n<td>50</td>\n</tr>\n<tr>\n<td>25/point</td>\n<td>3.00%</td>\n<td>100</td>\n</tr>\n<tr>\n<td>50/point to 100/point</td>\n<td>3.00%</td>\n<td>150</td>\n</tr>\n<tr>\n<td>200/point and up</td>\n<td>3.00%</td>\n<td>200</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Our rakeback system, rewards and promotions make the rake on SwC Poker among the lowest in the world.<br />\nThe rake at our cash tables is periodically reviewed and adjusted to remain in line with the value of Bitcoin. An <a title=\"Past Rake Schedule\" href=\"/old-rake\">archive of past rake schedules</a> is maintained for reference.</p>\n<h3>Tournaments</h3>\n<div class=\"page__table-wrapper\">\n<table>\n<thead>\n<tr>\n<th>Type</th>\n<th colspan=\"2\">Entry Fee</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Sit &amp; Gos</td>\n<td>2% or less</td>\n</tr>\n<tr>\n<td>Scheduled tournaments</td>\n<td>5% or less</td>\n</tr>\n<tr>\n<td>Guaranteed prize pool tournaments</td>\n<td>6% or less</td>\n</tr>\n</tbody>\n</table>\n</div>\n<p>Tournaments with a total buy-in lower than 1 chip have no entry fee.</p>\n",
                        "accordionTitle": "How much do you charge in rake?‍"
                    },
                    {
                        "accordionContent": "<p>SwC Poker monitors and vigilantly fights any collusion, cheating, or otherwise unfair gameplay. Additionally, you may email <a title=\"Contact SwC Poker\" href=\"mailto:affiliates@swcpoker.club\">support@swcpoker.club</a> if you observe anything you would like us to investigate. We reserve the right to handle cheating, collusion, or otherwise unfair play at our sole discretion. If you are uncomfortable with anonymous ring games, we offer heads-up tables.‍</p>\n",
                        "accordionTitle": "How do I know my opponents aren’t cheating?‍"
                    }
                ],
                "accordionListCardRules": [
                    {
                        "accordionContent": "<ul>\n<li>Sale or transfer of accounts between players is prohibited.</li>\n<li>Accounts may not change ownership. Purchasing or receiving an account from another player will result in its confiscation.‍</li>\n<li>Usernames may not contain vulgar terms or racial epithets.</li>\n<li>Player-to-player chip transfers are at your own risk. SwC Poker management does not intervene in player disputes related to chip transfers. Chip transfers cannot be cancelled or reversed. Please exercise caution and good judgement before performing any player-to-player transfers in an anonymous poker room.‍</li>\n<li>Multiple players in the same home are welcome to play at SwC Poker, but not at the same cash tables, tournaments, or sit &amp; gos.</li>\n</ul>\n",
                        "accordionTitle": "General Rules‍"
                    },
                    {
                        "accordionContent": "<ul>\n<li>Chat is a privilege that can be revoked by management at will.‍ Verbally abusing players will not be tolerated.</li>\n<li>Chat is uncensored, and is not necessarily in English.‍</li>\n<li>Players are provided with an Ignore option to hide the chat of any player they do not wish to see.‍\n<ul>\n<li>Coarse language is permitted, but racial/sexual slurs and hate speech are prohibited.</li>\n<li>Discussing a hand in progress, revealing your hole cards prematurely, or otherwise affecting gameplay is prohibited.‍</li>\n<li>Spamming or flooding the chat is prohibited.‍</li>\n<li>Illegal, malicious, and sexually explicit hyperlinks or chat is prohibited.‍</li>\n<li>Referral codes, referral hyperlinks, and advertisements for external promotions or sites are prohibited.</li>\n<li>Begging for chips at the table or in the lobby chat box is prohibited.‍</li>\n</ul>\n</li>\n<li>In addition to the rules listed above, a common sense policy should be used to determine what is considered inappropriate chat. Cases will be dealt with by management on an individual basis.</li>\n<li>Players found to be using inappropriate chat will be given a warning, and will have their chat removed for one week.</li>\n<li>A second violation will result in the removal of chat for one month.</li>\n<li>Gross and/or repeated violations of prohibited behavior will result in a permanent loss of chat.</li>\n<li><b>Do not use multiple accounts to evade a loss of chat, or to chat to a user who has ignored you.</b> This may result in escalated consequences at the discretion of SwC management.‍</li>\n<li>In general, 1st infraction = 1 week chat loss, 2nd infraction = 1 month chat loss, 3rd infraction = permanent chat loss.</li>\n<li>Doxxing another player will result in permanent loss of chat.</li>\n</ul>\n",
                        "accordionTitle": "Chat Rules‍"
                    },
                    {
                        "accordionContent": "<ul>\n<li>One player to a hand.</li>\n<li>Multiple players in the same home are welcome to play at SwC Poker, but not at the same cash tables.</li>\n<li>Fixed Limit games have a cap of 4 bets per street when the action is multi-way, and no cap when the action is heads up.</li>\n<li>All games have a 1 hour “rathole timer”. Players returning to a table less than 1 hour after leaving it must sit with at least the amount they left with. Using a second account to evade this restriction is prohibited.</li>\n<li>In mixed games, players are expected to play by the spirit of the game, sitting in during all game types. It is acceptable to occasionally miss a hand or a round, but it is not okay to always skip a particular game type or several game types (for example, sitting out all the stud games, or sitting out the big bet games).‍</li>\n<li>If a player chooses to decline action when starting a table they must sit in for a minimum of 2 hands to allow both players the option to act as the button.</li>\n<li>Management reserves the right to make decisions and potentially take punitive action as it deems necessary as a response to these prohibited actions which include, but are not limited to: bum hunting, buttoning, excessive stalling, angle shooting, and any other behavior used to gain an unfair advantage or which goes against the spirit of the game.</li>\n<li>Actions taken may include, but are not limited to: initial warning, temporary account ban, loss of rewards, permanent account closure. Attempts to evade temporary or permanent account bans with continued prohibited behavior on multiple accounts may result in confiscation of funds.</li>\n</ul>\n",
                        "accordionTitle": "Cash Game Rules‍‍"
                    },
                    {
                        "accordionContent": "<ul>\n<li>One player to a hand.</li>\n<li>Multiple players in the same home are welcome to play at SwC Poker, but not in the same tournaments or sit &amp; gos.‍</li>\n<li>You may unregister at any time before the start of a tournament and receive your buy-in back.‍</li>\n<li>If a tournament is interrupted and cannot be completed, management will return buy-ins or distribute the prize pool at its discretion.‍</li>\n<li>One account per person per tournament. Re-entering a tournament on a different account is prohibited.‍</li>\n</ul>\n",
                        "accordionTitle": "Tournament Rules‍"
                    },
                    {
                        "accordionContent": "<p>Bots are prohibited on SwC Poker. Please contact <a title=\"Contact SwC Poker\" href=\"mailto:support@swcpoker.club\">support@swcpoker.club</a> if you feel a bot is playing. Management will vigilantly defend the integrity of the games.‍</p>\n",
                        "accordionTitle": "Bots are Prohibited‍"
                    }
                ]
            }
        }
    };
    const currentPage = data.wpPage;
    const seo = currentPage.seo;

    return (
        <>
            <Header/>
            <main>
                {/*<Seo title={seo.title} post={currentPage} />*/}
                <ContentLayout title={data.wpPage.title} subtitle={data.wpPage.houseRulesAcf.introText}>
                    <div className="section-faq">
                        <Tabs
                            defaultActiveKey="card-rules"
                            id="houserules"
                            className="mb-3"
                        >
                            {/*
                    <Tab eventKey="swc-faq" title="SwC Poker FAQ">
                      <Accordion defaultActiveKey="0" flush>
                        {
                          data.wpPage.houseRulesAcf.accordionList.map((accordion, i) => {
                            return (
                              <Accordion.Item eventKey={i} key={i.toString()}>
                                <Accordion.Header>{accordion.accordionTitle}</Accordion.Header>
                                <Accordion.Body dangerouslySetInnerHTML={{ __html: accordion.accordionContent }} >
                                </Accordion.Body>
                              </Accordion.Item>
                            )

                          })
                        }

                      </Accordion>
                    </Tab>
                    <Tab eventKey="poker-faq" title="Poker FAQ">
                      <Accordion defaultActiveKey="0" flush>
                        {
                          data.wpPage.houseRulesAcf.accordionListPokerFaq.map((accordion, i) => {
                            return (
                              <Accordion.Item eventKey={i} key={i.toString()}>
                                <Accordion.Header>{accordion.accordionTitle}</Accordion.Header>
                                <Accordion.Body dangerouslySetInnerHTML={{ __html: accordion.accordionContent }} >
                                </Accordion.Body>
                              </Accordion.Item>
                            )

                          })
                        }

                      </Accordion>
                    </Tab>
                    */}
                            <Tab eventKey="card-rules" title="Cardroom Rules">
                                <Accordion defaultActiveKey="0" flush>
                                    {
                                        data.wpPage.houseRulesAcf.accordionListCardRules.map((accordion, i) => {
                                            return (
                                                <Accordion.Item eventKey={i} key={i.toString()}>
                                                    <Accordion.Header>{accordion.accordionTitle}</Accordion.Header>
                                                    <Accordion.Body
                                                        dangerouslySetInnerHTML={{__html: accordion.accordionContent}}
                                                        style={{color: '#C5C5C5'}}>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )

                                        })
                                    }
                                </Accordion>
                            </Tab>
                        </Tabs>
                    </div>


                </ContentLayout>
            </main>
            <Footer/>
        </>
    )
};

export default HouseRules;
