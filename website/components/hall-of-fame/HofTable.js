import React from 'react';
import moment from 'moment';
const formatNumber = n => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

function HofTable(props) {
    return (
        <>
            <table>
                <tbody>
                    <tr className={`${props.color ? props.color : ''}`}><th width="30%" colSpan="4">{props.title ? props.title : ''}</th></tr>
                    <tr>
                        <td>#</td>
                        <td>Username</td>
                        <td>Krill</td>
                        <td>Week Ending</td>
                    </tr>

                    {(props.loading && !props.data) &&
                        <tr><td colSpan="4" className="loading text-center">Loading...</td></tr>
                    }
                    {!props.loading && props.data &&
                        props.data?.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{row.winner.username}</td>
                                    <td>{formatNumber(row.winner.krill / 10000)}</td>
                                    <td>{moment(row.end).format('MM/DD/YYYY')}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </ table>
        </>
    )
}

export default HofTable;