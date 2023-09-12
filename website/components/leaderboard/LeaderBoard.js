import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import LeaderBoardTable from "./LeaderBoardTable";
// import { leaderBoardService } from '../../services';

export default function LeaderBoard({when, title, color, tableClassName}) {

    const [leaderBoard, setLeaderBoard] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = {
                    "end": "2023-08-21T00:00:00.000Z",
                    "id": 272,
                    "last_updated": "2023-08-21T00:02:23.591Z",
                    "results": [
                        {
                            "krill": 70442400,
                            "prize": 500000,
                            "username": "Umbrella"
                        },
                        {
                            "krill": 38672500,
                            "prize": 300000,
                            "username": "veganhippie"
                        },
                        {
                            "krill": 28726900,
                            "prize": 200000,
                            "username": "butterspoker"
                        },
                        {
                            "krill": 27654800,
                            "prize": 100000,
                            "username": "BillySwords"
                        },
                        {
                            "krill": 24972900,
                            "prize": 50000,
                            "username": "iKidYouNot"
                        },
                        {
                            "krill": 22360200,
                            "prize": 50000,
                            "username": "Iluvdonks"
                        },
                        {
                            "krill": 21867400,
                            "prize": 50000,
                            "username": "lilb1tcoin"
                        },
                        {
                            "krill": 21284200,
                            "prize": 50000,
                            "username": "duahuansohn"
                        },
                        {
                            "krill": 20145500,
                            "prize": 50000,
                            "username": "Unglues"
                        },
                        {
                            "krill": 19371800,
                            "prize": 50000,
                            "username": "FrostyBets"
                        },
                        {
                            "krill": 19094400,
                            "username": "Rubin"
                        },
                        {
                            "krill": 17882300,
                            "username": "asianflushie"
                        },
                        {
                            "krill": 17882300,
                            "username": "kingsvsaces"
                        },
                        {
                            "krill": 16971400,
                            "username": "MrDolce"
                        },
                        {
                            "krill": 16487200,
                            "username": "aab"
                        },
                        {
                            "krill": 16388500,
                            "username": "Callmyblufff"
                        },
                        {
                            "krill": 15971500,
                            "username": "callmefool83"
                        },
                        {
                            "krill": 13753100,
                            "username": "SendBTC_here"
                        },
                        {
                            "krill": 12414900,
                            "username": "masterstone"
                        },
                        {
                            "krill": 11615700,
                            "username": "GenieTheFish"
                        },
                        {
                            "krill": 11207800,
                            "username": "noobaf"
                        },
                        {
                            "krill": 10865700,
                            "username": "taata1602"
                        },
                        {
                            "krill": 10312400,
                            "username": "LuckyCPS"
                        },
                        {
                            "krill": 10046300,
                            "username": "theking15"
                        },
                        {
                            "krill": 10013100,
                            "username": "uglywoman"
                        }
                    ],
                    "start": "2023-08-14T00:00:00.000Z",
                    "type": "weekly"
                };
                // const { data } = await leaderBoardService.getLeaderBoards(when);
                let res = data?.results;
                if (when === 'lastweek' || when === 'lastmonth') {
                    res = _.filter(data?.results, function (o) {
                        return o.prize > 0;
                    });
                }
                setLoading(false);
                setLeaderBoard(res);
            } catch (e) {
                console.log("error fetching data leaderboard last month " + e);
            }
        };

        fetchData();
    }, [when]);

    return (
        <div>
            <div>
                <LeaderBoardTable tableClassName={tableClassName} type={when} data={leaderBoard} title={title}
                                  color={color ? color : ''} loading={loading}/>
            </div>
        </div>
    );
}