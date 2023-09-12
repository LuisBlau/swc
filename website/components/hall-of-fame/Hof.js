import React, {useState, useEffect} from 'react';
import HofTable from "./HofTable";
// import { leaderBoardService } from '../../services';

export default function Hof({when, title, color}) {

    const [leaderboard, setLeaderboard] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = {
                    "type": "monthly",
                    "winners": [
                        {
                            "id": 275,
                            "start": "2023-07-01T00:00:00.000Z",
                            "end": "2023-08-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 205466300,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 265,
                            "start": "2023-06-01T00:00:00.000Z",
                            "end": "2023-07-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 284027600,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 260,
                            "start": "2023-05-01T00:00:00.000Z",
                            "end": "2023-06-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 314398200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 249,
                            "start": "2023-04-01T00:00:00.000Z",
                            "end": "2023-05-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 214715200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 248,
                            "start": "2023-03-01T00:00:00.000Z",
                            "end": "2023-04-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 228162400,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 239,
                            "start": "2023-02-01T00:00:00.000Z",
                            "end": "2023-03-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 168493200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 235,
                            "start": "2023-01-01T00:00:00.000Z",
                            "end": "2023-02-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 297162100,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 234,
                            "start": "2022-12-01T00:00:00.000Z",
                            "end": "2023-01-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 337091900,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 233,
                            "start": "2022-11-01T00:00:00.000Z",
                            "end": "2022-12-01T00:00:00.000Z",
                            "winner": {
                                "username": "NoRiverNoCry",
                                "krill": 254193100,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 226,
                            "start": "2022-10-01T00:00:00.000Z",
                            "end": "2022-11-01T00:00:00.000Z",
                            "winner": {
                                "username": "badabaaaang",
                                "krill": 103291200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 212,
                            "start": "2022-09-01T00:00:00.000Z",
                            "end": "2022-10-01T00:00:00.000Z",
                            "winner": {
                                "username": "The_Mediator",
                                "krill": 88119200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 211,
                            "start": "2022-08-01T00:00:00.000Z",
                            "end": "2022-09-01T00:00:00.000Z",
                            "winner": {
                                "username": "clutchup",
                                "krill": 69510800,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 201,
                            "start": "2022-07-01T00:00:00.000Z",
                            "end": "2022-08-01T00:00:00.000Z",
                            "winner": {
                                "username": "clutchup",
                                "krill": 149555800,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 196,
                            "start": "2022-06-01T00:00:00.000Z",
                            "end": "2022-07-01T00:00:00.000Z",
                            "winner": {
                                "username": "Marty_Gale",
                                "krill": 192348000,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 191,
                            "start": "2022-05-01T00:00:00.000Z",
                            "end": "2022-06-01T00:00:00.000Z",
                            "winner": {
                                "username": "Marwyn",
                                "krill": 118799300,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 190,
                            "start": "2022-04-01T00:00:00.000Z",
                            "end": "2022-05-01T00:00:00.000Z",
                            "winner": {
                                "username": "iClckSht",
                                "krill": 106977200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 180,
                            "start": "2022-03-01T00:00:00.000Z",
                            "end": "2022-04-01T00:00:00.000Z",
                            "winner": {
                                "username": "HandyJay",
                                "krill": 110157100,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 177,
                            "start": "2022-02-01T00:00:00.000Z",
                            "end": "2022-03-01T00:00:00.000Z",
                            "winner": {
                                "username": "clutchup",
                                "krill": 106393700,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 169,
                            "start": "2022-01-01T00:00:00.000Z",
                            "end": "2022-02-01T00:00:00.000Z",
                            "winner": {
                                "username": "Marty_Gale",
                                "krill": 129101400,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 151,
                            "start": "2021-12-01T00:00:00.000Z",
                            "end": "2022-01-01T00:00:00.000Z",
                            "winner": {
                                "username": "taata1602",
                                "krill": 53989400,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 150,
                            "start": "2021-11-01T00:00:00.000Z",
                            "end": "2021-12-01T00:00:00.000Z",
                            "winner": {
                                "username": "BudDink",
                                "krill": 107768600,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 149,
                            "start": "2021-10-01T00:00:00.000Z",
                            "end": "2021-11-01T00:00:00.000Z",
                            "winner": {
                                "username": "Ject",
                                "krill": 74111200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 148,
                            "start": "2021-09-01T00:00:00.000Z",
                            "end": "2021-10-01T00:00:00.000Z",
                            "winner": {
                                "username": "iClckSht",
                                "krill": 85555000,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 147,
                            "start": "2021-08-01T00:00:00.000Z",
                            "end": "2021-09-01T00:00:00.000Z",
                            "winner": {
                                "username": "pokerplayerr",
                                "krill": 81501100,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 141,
                            "start": "2021-07-01T00:00:00.000Z",
                            "end": "2021-08-01T00:00:00.000Z",
                            "winner": {
                                "username": "cryptodobkey",
                                "krill": 120946000,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 136,
                            "start": "2021-06-01T00:00:00.000Z",
                            "end": "2021-07-01T00:00:00.000Z",
                            "winner": {
                                "username": "HandyJay",
                                "krill": 67259900,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 126,
                            "start": "2021-05-01T00:00:00.000Z",
                            "end": "2021-06-01T00:00:00.000Z",
                            "winner": {
                                "username": "Pikachu55",
                                "krill": 138040200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 123,
                            "start": "2021-04-01T00:00:00.000Z",
                            "end": "2021-05-01T00:00:00.000Z",
                            "winner": {
                                "username": "pokerplayerr",
                                "krill": 130998700,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 115,
                            "start": "2021-03-01T00:00:00.000Z",
                            "end": "2021-04-01T00:00:00.000Z",
                            "winner": {
                                "username": "lilb1tcoin",
                                "krill": 86488500,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 110,
                            "start": "2021-02-01T00:00:00.000Z",
                            "end": "2021-03-01T00:00:00.000Z",
                            "winner": {
                                "username": "redapple",
                                "krill": 105019200,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 109,
                            "start": "2021-01-01T00:00:00.000Z",
                            "end": "2021-02-01T00:00:00.000Z",
                            "winner": {
                                "username": "HandyJay",
                                "krill": 412388800,
                                "prize": 1500000
                            }
                        },
                        {
                            "id": 100,
                            "start": "2020-12-01T00:00:00.000Z",
                            "end": "2021-01-01T00:00:00.000Z",
                            "winner": {
                                "username": "veganhippie",
                                "krill": 113715900,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 95,
                            "start": "2020-11-01T00:00:00.000Z",
                            "end": "2020-12-01T00:00:00.000Z",
                            "winner": {
                                "username": "acemonth",
                                "krill": 128066800,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 89,
                            "start": "2020-10-01T00:00:00.000Z",
                            "end": "2020-11-01T00:00:00.000Z",
                            "winner": {
                                "username": "sunbear",
                                "krill": 170570900,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 88,
                            "start": "2020-09-01T00:00:00.000Z",
                            "end": "2020-10-01T00:00:00.000Z",
                            "winner": {
                                "username": "acemonth",
                                "krill": 113881600,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 82,
                            "start": "2020-08-01T00:00:00.000Z",
                            "end": "2020-09-01T00:00:00.000Z",
                            "winner": {
                                "username": "JamesNewman",
                                "krill": 146775400,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 77,
                            "start": "2020-07-01T00:00:00.000Z",
                            "end": "2020-08-01T00:00:00.000Z",
                            "winner": {
                                "username": "BertBert",
                                "krill": 183084700,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 72,
                            "start": "2020-06-01T00:00:00.000Z",
                            "end": "2020-07-01T00:00:00.000Z",
                            "winner": {
                                "username": "Marwyn",
                                "krill": 132573700,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 66,
                            "start": "2020-05-01T00:00:00.000Z",
                            "end": "2020-06-01T00:00:00.000Z",
                            "winner": {
                                "username": "dz2374556",
                                "krill": 131165100,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 57,
                            "start": "2020-04-01T00:00:00.000Z",
                            "end": "2020-05-01T00:00:00.000Z",
                            "winner": {
                                "username": "TeddyRugs",
                                "krill": 329355700,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 51,
                            "start": "2020-03-01T00:00:00.000Z",
                            "end": "2020-04-01T00:00:00.000Z",
                            "winner": {
                                "username": "badabingboom",
                                "krill": 199112300,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 46,
                            "start": "2020-02-01T00:00:00.000Z",
                            "end": "2020-03-01T00:00:00.000Z",
                            "winner": {
                                "username": "badabingboom",
                                "krill": 125817700,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 41,
                            "start": "2020-01-01T00:00:00.000Z",
                            "end": "2020-02-01T00:00:00.000Z",
                            "winner": {
                                "username": "leggieblufs1",
                                "krill": 125265400,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 35,
                            "start": "2019-12-01T00:00:00.000Z",
                            "end": "2020-01-01T00:00:00.000Z",
                            "winner": {
                                "username": "leggieblufs1",
                                "krill": 130744000,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 29,
                            "start": "2019-11-01T00:00:00.000Z",
                            "end": "2019-12-01T00:00:00.000Z",
                            "winner": {
                                "username": "acemonth",
                                "krill": 114704000,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 24,
                            "start": "2019-10-01T00:00:00.000Z",
                            "end": "2019-11-01T00:00:00.000Z",
                            "winner": {
                                "username": "GambleGamble",
                                "krill": 216738900,
                                "prize": 3000000
                            }
                        },
                        {
                            "id": 23,
                            "start": "2019-09-01T00:00:00.000Z",
                            "end": "2019-10-01T00:00:00.000Z",
                            "winner": {
                                "username": "GottaGig",
                                "krill": 131408900,
                                "prize": 3000000
                            }
                        }
                    ]
                };
                // const { data } = await leaderBoardService.getHallOfFamer(when);
                setLoading(false);
                setLeaderboard(data);
            } catch (e) {
                console.log("error fetching data leaderboard last month " + e);
            }
        };

        fetchData();
    }, [when]);

    return (
        <div>
            <div>
                <HofTable data={leaderboard?.winners} title={title} color={color ? color : ''} loading={loading}/>
            </div>
        </div>
    );
}