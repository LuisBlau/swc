import React from 'react';
import Link from 'next/link';

export default function Sidebar() {

    const data = {
        "allCategories": {
            "categories": [
                {
                    "id": "dGVybTo4NTE=",
                    "name": "Bitcoin Jackpots",
                    "slug": "bitcoin-jackpots",
                    "uri": "/posts/bitcoin-jackpots"
                },
                {
                    "id": "dGVybTozNTc=",
                    "name": "Bitcoin Poker Freerolls",
                    "slug": "bitcoin-poker-freerolls",
                    "uri": "/posts/bitcoin-poker-freerolls"
                },
                {
                    "id": "dGVybTo2",
                    "name": "Bitcoin Poker Tournaments",
                    "slug": "bitcoin-poker-tournaments",
                    "uri": "/posts/bitcoin-poker-tournaments"
                },
                {
                    "id": "dGVybTo4MDU=",
                    "name": "Blockchain Poker Announcements",
                    "slug": "blockchain-poker-announcements",
                    "uri": "/posts/blockchain-poker-announcements"
                },
                {
                    "id": "dGVybToy",
                    "name": "Blockchain Poker Strategy",
                    "slug": "blockchain-poker-strategy",
                    "uri": "/posts/blockchain-poker-strategy"
                },
                {
                    "id": "dGVybTo4MDI=",
                    "name": "BTC Poker Bad Beat",
                    "slug": "btc-poker-bad-beat",
                    "uri": "/posts/btc-poker-bad-beat"
                },
                {
                    "id": "dGVybToz",
                    "name": "Crypto Poker Cash Games",
                    "slug": "crypto-poker-cash-games",
                    "uri": "/posts/crypto-poker-cash-games"
                },
                {
                    "id": "dGVybTo0",
                    "name": "Crypto Poker Promotions",
                    "slug": "crypto-poker-promotions",
                    "uri": "/posts/crypto-poker-promotions"
                },
                {
                    "id": "dGVybTo1",
                    "name": "Cryptocurrency Gambling Industry",
                    "slug": "cryptocurrency-gambling-industry",
                    "uri": "/posts/cryptocurrency-gambling-industry"
                }
            ]
        }
    };
	
	const categories = data.allCategories.categories;

	return (
		<div className="sidenav">
			<div className="widget" id="widgetlinks">

				<div id="sidebar-menu-widget" className="widget-inner">
					<h4>Menu</h4> 
					<ul>
						<li>
							<Link href={`/house-rules`} className='sidebar-links'>House Rules </Link>
						</li>
						<li>
							<Link href={`/poker-rules`} className='sidebar-links'>Poker Game Rules </Link>
						</li>
						<li>
							<Link href={`/hand-rankings`} className='sidebar-links'>Hand Rankings</Link>
						</li>
						<li>
							<Link href={`/game-betting-styles`} className='sidebar-links'>Game & Betting Styles </Link>
						</li>
						<li>
							<Link href={`/faq`} className='sidebar-links'>FAQ </Link>
						</li>
						<li>
							<Link href={`/promotions`} className='sidebar-links'>Promotions</Link>
						</li>
						<li>
							<Link href={`/updates`} className='sidebar-links'>Updates</Link>
						</li>					
						<li>
							<Link href={`/download`} className='sidebar-links'>Download</Link>
						</li>
						<li>
							<Link href="/play" className='sidebar-links'>Play Now </Link>
						</li>
					</ul>
				</div>	

				<ul id="categories-list" className='widget-inner'>
					<h4>CATEGORIES</h4>

					{
						categories.map((category, i) => {
							return (
								<li key={i}>
									<Link href={`${category.uri}`} key={category.id} className='sidebar-links'>{category.name}</Link>
								</li>
							);
						})
					}
				</ul>
			</div>

		</div>
	)
}



