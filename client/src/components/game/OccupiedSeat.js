import React from 'react';
import styled from 'styled-components';
import userImages from './userImages';
import { EmptySeat } from './EmptySeat';

const StyledOccupiedSeat = styled(EmptySeat)`
  position: relative;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjQiIGhlaWdodD0iMTY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjQgMTY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN4PSI4MS4zOTQiIGN5PSI4MS4xNjkiIHI9IjYzLjMzNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxLjAxOTkgMCAtMS41MTgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMzk5IiBzdHlsZT0ic3RvcC1jb2xvcjojOGVkNmViIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNDQ3NzgwIi8+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBzdHlsZT0iZmlsbDp1cmwoI2EpIiBkPSJNMTIxLjM5NCA2MC40MTJjLTggMC0xNC45MTMgNy4zMzMtMTguNjY3IDguNjEyIDUuMzMzLTguMTU5IDEyLjIyMi0xNi4zMTggMTIuMjIyLTI2Ljk3IDAtMTUuNzcxLTE0LjQyNi0yNC43MDMtMzIuMjIyLTI0LjcwM3MtMzMuMzMzIDUuNjY2LTMzLjMzMyAyNC40NzdjMCAxMC44NzkgOCAxOS4wMzcgMTMuMzMzIDI3LjE5Ni00LjM2MS0xLjcyNC0xMC42NjctOC42MTItMjEuMzMzLTguNjEyLTE2IDAtMjQgMTQuNzEzLTI0IDMyLjg2MnMxMy4xMzMgMzIuODYyIDI5LjMzMyAzMi44NjJjMTIuMTk5IDAgMjQuMTYzLTkuNzU4IDI5LjMzMy0yMi4zMjZ2MTQuMTY3YzAgMTYuMzE4LTE2IDI3LjE5Ni0xNiAyNy4xOTZoNDIuNjY3cy0xNi0xMC44NzktMTYtMjcuMTk2VjEwMy44MWM1LjE3IDEyLjU2OCAxNy4xMzUgMjIuMzI2IDI5LjMzMyAyMi4zMjYgMTYuMiAwIDI5LjMzMy0xNC43MTMgMjkuMzMzLTMyLjg2Mi4wMDEtMTguMTQ5LTUuMzMzLTMyLjg2Mi0yMy45OTktMzIuODYyeiIvPjwvc3ZnPg==);
  background-color: rgba(33,34,37,.8);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 5px solid #d1a700;
  padding: 0;
  border: ${({ hasTurn }) => (hasTurn ? `none` : `5px solid #6297b5`)};
  transition: all 0.3s;
  transform-origin: center center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  &.hasTurn {
    animation: double-pulse 0.5s forwards;
  }

  .circle-timer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    text-align: center;
    position: absolute;
    z-index: 4;

    .timer-slot {
      position: relative;
      width: 130px;
      height: 130px;
      display: inline-block;
      overflow: hidden;

      .timer-lt,
      .timer-rt {
        border-radius: 50%;
        position: relative;
        top: 50%;
        left: 0;
        z-index: 15;
        border: 5px solid #219653;
        width: 120px;
        height: 120px;
        margin-left: -60px;
        margin-top: -60px;
        border-left-color: transparent;
        border-top-color: transparent;
        z-index: 5;
      }
      .timer-lt {
        animation: 15s linear infinite timer-slide-lt;
        left: 100%;
      }
      .timer-rt {
        animation: 15s linear infinite timer-slide-rt;
      }
    }
  }

  @keyframes double-pulse {
    0% {
      transform: scale(1);
    }

    25% {
      transform: scale(1.5);
    }

    50% {
      transform: scale(1);
    }

    75% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1.1);
    }
  }

  @keyframes timer-slide-lt {
    0% {
      transform: rotate(135deg);
    }
    50% {
      transform: rotate(135deg);
    }
    100% {
      transform: rotate(315deg);
    }
  }
  @keyframes timer-slide-rt {
    0% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(135deg);
    }
    100% {
      transform: rotate(135deg);
    }
  }
`;

export const OccupiedSeat = ({ hasTurn, seatNumber }) => (
  <StyledOccupiedSeat
    hasTurn={hasTurn}
    seatNumber={seatNumber}
    className={hasTurn ? 'hasTurn' : ''}
  >
    {hasTurn && (
      <div className="circle-timer">
        <div className="timer-slot">
          <div className="timer-lt"></div>
        </div>
        <div className="timer-slot">
          <div className="timer-rt"></div>
        </div>
      </div>
    )}
  </StyledOccupiedSeat>
);
