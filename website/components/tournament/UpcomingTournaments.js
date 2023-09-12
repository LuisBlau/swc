import React, {useState, useEffect} from 'react';
import TournamentRow from './TournamentRow';
// import { ApiService } from '../../services';

export default function UpcomingTournaments(props) {

    const [tournaments, setTournaments] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // const { data } = await ApiService.getTournament();
                const data = {
                    "tournaments": [
                        {
                            "b": 47000,
                            "e": 28,
                            "ef": 3000,
                            "gt": "Hold'em",
                            "i": 190540979,
                            "lt": "NL",
                            "m": 3000,
                            "n": "NLH Turbo [15k GTD]",
                            "s": "Completed",
                            "sd": "2023-08-22 19:00:29"
                        },
                        {
                            "b": 0,
                            "e": 38,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190600770,
                            "lt": "NL",
                            "m": 1000,
                            "n": "500+ Krill Tuesday 6-Max Step 0 Satellite [4 Seats]",
                            "s": "Completed",
                            "sd": "2023-08-22 20:00:00"
                        },
                        {
                            "b": 10000,
                            "e": 25,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190598185,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Tuesday 6-Max Satellite [3 Seats GTD]",
                            "s": "Completed",
                            "sd": "2023-08-22 21:30:30"
                        },
                        {
                            "b": 5000,
                            "e": 7,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190533267,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Nightly Special Hyper Satellite [1 Seat GTD]",
                            "s": "Completed",
                            "sd": "2023-08-22 22:05:30"
                        },
                        {
                            "b": 23500,
                            "e": 8,
                            "ef": 1500,
                            "gt": "Hold'em",
                            "i": 189728537,
                            "lt": "NL",
                            "m": 3000,
                            "n": "PhattDaddy Phun Rebuy [4.5k GTD]",
                            "s": "Completed",
                            "sd": "2023-08-22 23:00:00"
                        },
                        {
                            "b": 94000,
                            "e": 30,
                            "ef": 6000,
                            "gt": "Hold'em",
                            "i": 190541299,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Tuesday NLH 6-Max [30k GTD]",
                            "s": "Completed",
                            "sd": "2023-08-23 01:00:45"
                        },
                        {
                            "b": 4700,
                            "e": 44,
                            "ef": 300,
                            "gt": "Hold'em",
                            "i": 190554958,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Daily Crumb [2k GTD]",
                            "s": "Completed",
                            "sd": "2023-08-23 01:30:51"
                        },
                        {
                            "b": 2500,
                            "e": 8,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190575625,
                            "lt": "NL",
                            "m": 1000,
                            "n": "LNS Hyper Satellite [1 Seat GTD]",
                            "s": "Completed",
                            "sd": "2023-08-23 05:00:50"
                        },
                        {
                            "b": 23500,
                            "e": 17,
                            "ef": 1500,
                            "gt": "Hold'em",
                            "i": 190582563,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Late Night Slurk [4k GTD]",
                            "s": "Completed",
                            "sd": "2023-08-23 06:00:45"
                        },
                        {
                            "b": 0,
                            "e": 27,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190738443,
                            "lt": "NL",
                            "m": 1000,
                            "n": "100+ Krill 25 uBTC Satellite [6 Seats GTD]",
                            "s": "Completed",
                            "sd": "2023-08-23 12:30:15"
                        },
                        {
                            "b": 2500,
                            "e": 17,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190738527,
                            "lt": "NL",
                            "m": 1000,
                            "n": "The Mini Deep Satellite [3 Seats GTD]",
                            "s": "Completed",
                            "sd": "2023-08-23 13:30:30"
                        },
                        {
                            "b": 0,
                            "e": 31,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190726689,
                            "lt": "NL",
                            "m": 1000,
                            "n": "100+ Krill NLH 15k GTD Step 0 Satellite [5 Seats]",
                            "s": "Completed",
                            "sd": "2023-08-23 14:30:00"
                        },
                        {
                            "b": 0,
                            "e": 55,
                            "ef": 0,
                            "gt": "Short Deck Hold'em",
                            "i": 190759475,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Short Deck Freeroll [20 Chips]",
                            "s": "Running",
                            "sd": "2023-08-23 15:30:00"
                        },
                        {
                            "b": 23500,
                            "e": 6,
                            "ef": 1500,
                            "gt": "Hold'em",
                            "i": 190628883,
                            "lt": "NL",
                            "m": 1000,
                            "n": "The Mini Deep [7.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 16:00:29"
                        },
                        {
                            "b": 5000,
                            "e": 8,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190691412,
                            "lt": "NL",
                            "m": 1000,
                            "n": "NLH Turbo 15k GTD Satellite [2 Seats GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 16:05:29"
                        },
                        {
                            "b": 5000,
                            "e": 1,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190732292,
                            "lt": "NL",
                            "m": 1000,
                            "n": "NLH Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 17:30:29"
                        },
                        {
                            "b": 5000,
                            "e": 1,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190691445,
                            "lt": "NL",
                            "m": 1000,
                            "n": "NLH Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 18:00:30"
                        },
                        {
                            "b": 47000,
                            "e": 1,
                            "ef": 3000,
                            "gt": "Hold'em",
                            "i": 190691262,
                            "lt": "NL",
                            "m": 3000,
                            "n": "NLH Turbo [15k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 19:00:29"
                        },
                        {
                            "b": 141000,
                            "e": 1,
                            "ef": 9000,
                            "gt": "Hold'em",
                            "i": 190650716,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Afternoon Standard [25k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 20:00:00"
                        },
                        {
                            "b": 25000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190727831,
                            "lt": "NL",
                            "m": 1000,
                            "n": "NLH 30k GTD Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 21:00:15"
                        },
                        {
                            "b": 50000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190727851,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Wednesday Bounty Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 21:30:29"
                        },
                        {
                            "b": 141000,
                            "e": 1,
                            "ef": 9000,
                            "gt": "Hold'em",
                            "i": 190691309,
                            "lt": "NL",
                            "m": 3000,
                            "n": "NL Hold'em [30k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 22:00:29"
                        },
                        {
                            "b": 5000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190665274,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Nightly Special Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 22:05:30"
                        },
                        {
                            "b": 47000,
                            "e": 1,
                            "ef": 3000,
                            "gt": "Hold'em",
                            "i": 190670118,
                            "lt": "NL",
                            "m": 1000,
                            "n": "The Nightly Special [12.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-23 23:00:30"
                        },
                        {
                            "b": 50000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190678227,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Wednesday Bounty Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 00:00:30"
                        },
                        {
                            "b": 23500,
                            "e": 0,
                            "ef": 1500,
                            "gt": "Hold'em",
                            "i": 189850917,
                            "lt": "NL",
                            "m": 3000,
                            "n": "SwC Fish Fry [7.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 01:00:29"
                        },
                        {
                            "b": 188000,
                            "e": 0,
                            "ef": 12000,
                            "gt": "Hold'em",
                            "i": 190347845,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Wednesday Big Bounty [60k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 01:00:45"
                        },
                        {
                            "b": 4700,
                            "e": 0,
                            "ef": 300,
                            "gt": "Hold'em",
                            "i": 190686154,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Daily Crumb [2k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 01:30:50"
                        },
                        {
                            "b": 94000,
                            "e": 0,
                            "ef": 6000,
                            "gt": "Hold'em",
                            "i": 190694668,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Sniper Stack NLH [15k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 03:00:29"
                        },
                        {
                            "b": 5000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190694666,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Midnight Madness Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 03:00:50"
                        },
                        {
                            "b": 47000,
                            "e": 0,
                            "ef": 3000,
                            "gt": "Hold'em",
                            "i": 190701601,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Midnight Madness Turbo [10k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 04:00:45"
                        },
                        {
                            "b": 2500,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190707926,
                            "lt": "NL",
                            "m": 1000,
                            "n": "LNS Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 05:00:50"
                        },
                        {
                            "b": 23500,
                            "e": 0,
                            "ef": 1500,
                            "gt": "Hold'em",
                            "i": 190714342,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Late Night Slurk [4k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 06:00:45"
                        },
                        {
                            "b": 47000,
                            "e": 0,
                            "ef": 3000,
                            "gt": "Hold'em",
                            "i": 190720011,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Sniper Stack NLH [5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 07:00:29"
                        },
                        {
                            "b": 9400,
                            "e": 0,
                            "ef": 600,
                            "gt": "Hold'em",
                            "i": 190724281,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Tiny Turbo NLH [1.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 08:00:29"
                        },
                        {
                            "b": 48000,
                            "e": 0,
                            "ef": 2000,
                            "gt": "Hold'em",
                            "i": 190730101,
                            "lt": "NL",
                            "m": 1000,
                            "n": "NLH Hyper Turbo [3k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 09:00:30"
                        },
                        {
                            "b": 4700,
                            "e": 0,
                            "ef": 300,
                            "gt": "Hold'em",
                            "i": 190735134,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Mini Crumb Turbo [1k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 10:00:00"
                        },
                        {
                            "b": 9400,
                            "e": 0,
                            "ef": 600,
                            "gt": "Hold'em",
                            "i": 190744840,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Tiny Turbo NLH [1.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 12:00:29"
                        },
                        {
                            "b": 24000,
                            "e": 0,
                            "ef": 1000,
                            "gt": "Hold'em",
                            "i": 190750683,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Cup of Tea Hyper Turbo [1.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 13:00:00"
                        },
                        {
                            "b": 2500,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190758496,
                            "lt": "NL",
                            "m": 1000,
                            "n": "The Mini Deep Satellite [2 Seats GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 13:30:30"
                        },
                        {
                            "b": 2500,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190760778,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Mini Deep Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 15:00:50"
                        },
                        {
                            "b": 23500,
                            "e": 1,
                            "ef": 1500,
                            "gt": "Hold'em",
                            "i": 189988060,
                            "lt": "NL",
                            "m": 3000,
                            "n": "PhattDaddy Thirsty Thursday [4.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-24 23:30:00"
                        },
                        {
                            "b": 88000,
                            "e": 0,
                            "ef": 12000,
                            "gt": "Hold'em",
                            "i": 189995377,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Thursday Doubles [A] [25k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-25 01:00:40"
                        },
                        {
                            "b": 88000,
                            "e": 0,
                            "ef": 12000,
                            "gt": "Hold'em",
                            "i": 189995379,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Thursday Doubles [B] [25k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-25 01:00:50"
                        },
                        {
                            "b": 94000,
                            "e": 0,
                            "ef": 6000,
                            "gt": "Hold'em",
                            "i": 190150374,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Friday Night Fight PKO [40k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-26 01:00:50"
                        },
                        {
                            "b": 0,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190249804,
                            "lt": "NL",
                            "m": 1000,
                            "n": "500+ Krill Little BTC Freeroll [2 Seats]",
                            "s": "Announced",
                            "sd": "2023-08-26 18:30:00"
                        },
                        {
                            "b": 25000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190259680,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Saturday Special Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-26 20:00:45"
                        },
                        {
                            "b": 141000,
                            "e": 0,
                            "ef": 9000,
                            "gt": "Hold'em",
                            "i": 190346892,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Saturday Special [50k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-26 21:00:45"
                        },
                        {
                            "b": 23500,
                            "e": 1,
                            "ef": 1500,
                            "gt": "Short Deck Hold'em",
                            "i": 190283678,
                            "lt": "NL",
                            "m": 3000,
                            "n": "PhattDaddy Short Deck [4.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-26 23:30:00"
                        },
                        {
                            "b": 470000,
                            "e": 0,
                            "ef": 30000,
                            "gt": "Hold'em",
                            "i": 190346873,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Saturday 5k NLH [75k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 01:00:50"
                        },
                        {
                            "b": 9400,
                            "e": 0,
                            "ef": 600,
                            "gt": "Hold'em",
                            "i": 190670116,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Training Day Rebuy [2.5K GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 01:15:00"
                        },
                        {
                            "b": 5000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190377097,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Little BTC Satellite [2 Seats GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 17:00:00"
                        },
                        {
                            "b": 470000,
                            "e": 0,
                            "ef": 30000,
                            "gt": "Mixed",
                            "i": 190377095,
                            "lt": "FL",
                            "m": 1000,
                            "n": "Sunday HORSE High Roller [20k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 17:00:10"
                        },
                        {
                            "b": 47000,
                            "e": 0,
                            "ef": 3000,
                            "gt": "Mixed",
                            "i": 190732487,
                            "lt": "FL",
                            "m": 1000,
                            "n": "Sunday HORSE [5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 17:30:30"
                        },
                        {
                            "b": 50000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190384208,
                            "lt": "NL",
                            "m": 1000,
                            "n": "BIG BTC Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 18:00:30"
                        },
                        {
                            "b": 5000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190391610,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Little BTC Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 19:00:10"
                        },
                        {
                            "b": 470000,
                            "e": 0,
                            "ef": 30000,
                            "gt": "Mixed",
                            "i": 190391644,
                            "lt": "FL",
                            "m": 1000,
                            "n": "Sunday 12-Game [20k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 19:00:50"
                        },
                        {
                            "b": 47000,
                            "e": 0,
                            "ef": 3000,
                            "gt": "Hold'em",
                            "i": 190397452,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Little BTC! [25k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 20:00:00"
                        },
                        {
                            "b": 25000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190404344,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Medium BTC Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 21:00:00"
                        },
                        {
                            "b": 188000,
                            "e": 0,
                            "ef": 12000,
                            "gt": "Hold'em",
                            "i": 190410703,
                            "lt": "NL",
                            "m": 3000,
                            "n": "The Medium BTC! [80k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 22:00:29"
                        },
                        {
                            "b": 50000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190411380,
                            "lt": "NL",
                            "m": 1000,
                            "n": "BIG BTC Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 22:05:00"
                        },
                        {
                            "b": 470000,
                            "e": 1,
                            "ef": 30000,
                            "gt": "Hold'em",
                            "i": 190416706,
                            "lt": "NL",
                            "m": 1000,
                            "n": "The BIG BTC! [200k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-27 23:00:30"
                        },
                        {
                            "b": 50000,
                            "e": 0,
                            "ef": 0,
                            "gt": "Hold'em",
                            "i": 190424738,
                            "lt": "NL",
                            "m": 1000,
                            "n": "HU Shootout Hyper Satellite [1 Seat GTD]",
                            "s": "Registering",
                            "sd": "2023-08-28 00:00:00"
                        },
                        {
                            "b": 470000,
                            "e": 0,
                            "ef": 30000,
                            "gt": "Hold'em",
                            "i": 190432326,
                            "lt": "NL",
                            "m": 128,
                            "n": "Sunday HU Shootout - No Late Reg [25k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-28 01:05:50"
                        },
                        {
                            "b": 94000,
                            "e": 0,
                            "ef": 6000,
                            "gt": "Hold'em",
                            "i": 190550947,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Monday Big Bounty [30k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-29 01:00:29"
                        },
                        {
                            "b": 23500,
                            "e": 0,
                            "ef": 1500,
                            "gt": "Hold'em",
                            "i": 190678229,
                            "lt": "NL",
                            "m": 3000,
                            "n": "PhattDaddy Phun Rebuy [4.5k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-29 23:00:00"
                        },
                        {
                            "b": 94000,
                            "e": 0,
                            "ef": 6000,
                            "gt": "Hold'em",
                            "i": 190683456,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Tuesday NLH 6-Max [30k GTD]",
                            "s": "Registering",
                            "sd": "2023-08-30 01:00:45"
                        },
                        {
                            "b": 2400,
                            "e": 0,
                            "ef": 100,
                            "gt": "Hold'em",
                            "i": 190298156,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Doobbiment Hyper (Private)",
                            "s": "Registering",
                            "sd": "2023-09-03 01:30:00"
                        },
                        {
                            "b": 4700,
                            "e": 0,
                            "ef": 300,
                            "gt": "Hold'em",
                            "i": 190305244,
                            "lt": "NL",
                            "m": 3000,
                            "n": "Doobbiment Reg (Private)",
                            "s": "Registering",
                            "sd": "2023-09-03 02:30:00"
                        },
                        {
                            "b": 39700,
                            "e": 0,
                            "ef": 2300,
                            "gt": "Hold'em",
                            "i": 190673541,
                            "lt": "NL",
                            "m": 1000,
                            "n": "Doobby Does \"High Stakes\" [4.20k GTD]",
                            "s": "Registering",
                            "sd": "2023-09-05 23:20:00"
                        }
                    ]
                };
                setLoading(false);
                setTournaments(data.tournaments);
            } catch (e) {
                console.log("error fetching data leaderboard last month " + e);
            }
        };

        fetchData();
    }, []);


    return (
        <section className="tournament-table upcoming-table">
            <div className="container">
                <h2>UPCOMING BITCOIN POKER TOURNAMENTS</h2>
                <div className="table-tournament table-poker table-responsive">
                    <table>
                        <thead>
                        <tr>
                            <th>Start</th>
                            <th>TOURNAMENT NAME</th>
                            <th className="mobile-v">GAME</th>
                            <th>BUY-IN</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>

                        <tbody>
                        {(loading) &&
                        <tr>
                            <td colSpan="5" className="loading text-center">Loading...</td>
                        </tr>
                        }
                        {!loading && tournaments && tournaments?.filter(t => (t.s === "Registering" || t.s === "Late Registration"))?.filter((t, i) => i < props.lines)?.map((element) => {
                            return (
                                <TournamentRow data={element} key={element.i}/>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}