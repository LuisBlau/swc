import React from 'react';

const formatNumber = n => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
function LeaderBoardTable(props) {
    return (
        <>
            <table className={props.tableClassName}>
                <tbody>
                    <tr className={`${props.color ? props.color : ''}`}><th colSpan="4">{props.title ? props.title : ''}</th></tr>
                    <tr>
                        <td style={{  paddingLeft: "30px" }}>#</td>
                        <td>USERNAME</td>
                        <td>KRILL</td>
                        <td>PRIZE</td>
                    </tr>

                    {(props.loading && !props.data) &&
                        <tr><td colSpan="3" className="loading text-center">Loading...</td></tr>
                    }
                    {!props.loading && props.data &&
                        <>
                            {
                                props.data?.map((row, i) => {
                                    return (
                                        <tr key={i}>

                                            <td><span className="badge"> {i + 1}</span></td>
                                            <td>{row.username}</td>
                                            <td>{formatNumber(row.krill / 10000)}</td>
                                            <td>{row.prize ? formatNumber((row.prize / 100)) + ' Chips' : ''}</td>
                                        </tr>
                                    )
                                })
                            }
                        </>
                    }
                </tbody>
            </ table>
        </>
    )
}

export default LeaderBoardTable;