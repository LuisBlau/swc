import React
// , { useContext }
from 'react';
// import contentContext from '../../context/content/contentContext';
import Button from '../buttons/Button';
import { BetSlider } from './BetSlider';
import { UIWrapper } from './UIWrapper';

export const GameUI = ({
  currentTable,
  seatId,
  bet,
  setBet,
  raise,
  standUp,
  fold,
  check,
  call,
}) => {
  // const { getLocalizedString } = useContext(contentContext);

  return (
    <UIWrapper>
      <BetSlider
        currentTable={currentTable}
        seatId={seatId}
        bet={bet}
        setBet={setBet}
      />
      <Button
        small
        disabled={
          currentTable.seats[seatId].stack <= 0
        }
        onClick={() => {
          if(currentTable.seats[seatId].stack <= bet)
            raise(currentTable.seats[seatId].stack + currentTable.seats[seatId].bet); //All-in!
          else
            raise(bet + currentTable.seats[seatId].bet); //Raise
        }}
      >
        {currentTable.seats[seatId].stack <= bet?'All-in!':'Raise'}
        {' '}
        {bet >= currentTable.seats[seatId].stack? '':bet}
      </Button>
      <Button small onClick={standUp}>
        Stand Up
      </Button>
      <Button small onClick={fold}>
        Hold
      </Button>
      <Button
        small
        disabled={
          currentTable.callAmount !== currentTable.seats[seatId].bet &&
          currentTable.callAmount > 0
        }
        onClick={check}
      >
        Check
      </Button>
      <Button
        small
        disabled={
          currentTable.callAmount === 0 ||
          currentTable.seats[seatId].bet >= currentTable.callAmount
        }
        onClick={call}
      >
        Call
        {/* {' '}
        {currentTable.callAmount &&
        currentTable.seats[seatId].bet < currentTable.callAmount &&
        currentTable.callAmount <= currentTable.seats[seatId].stack
          ? currentTable.callAmount - currentTable.seats[seatId].bet
          : ''} */}
      </Button>
      {/* <Button
        small
        onClick={() =>
          raise(
            currentTable.seats[seatId].stack + currentTable.seats[seatId].bet,
          )
        }
      >
        All-in!
        ( {currentTable.seats[seatId].stack})
      </Button> */}
    </UIWrapper>
  );
};
