import React from 'react';
import { Rect, Line, Circle, Group } from 'react-konva';


interface IBasketballCourtProps {
  x: number,
  y: number,
  maxSectionWidth: number,
}


const courtWidth = 500;
export const courtHeight = 300;
const lineWidth = 2;
const halfCourtCircleRadius = 60;
const keyWidth = 160;
const keyHeight = 100;
const keyCircleRadius = 40;



const BasketballCourt = ({ x,
  maxSectionWidth,
  y }: IBasketballCourtProps) => {

  return (
    // <Stage width={courtWidth} height={courtHeight}>
    <Group>
      {/* Court Background */}
      <Rect
        x={(maxSectionWidth - courtWidth) / 2}
        y={y}
        width={courtWidth}
        height={courtHeight}
        fill="#ff7f0e"
      />
      {/* Court Border */}
      <Rect
        x={(maxSectionWidth - courtWidth) / 2}
        y={y}
        width={courtWidth}
        height={courtHeight}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      {/* Center Circle */}
      <Circle
        x={((maxSectionWidth - courtWidth) / 2) + courtWidth / 2}
        y={y + courtHeight / 2}
        radius={halfCourtCircleRadius}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      {/* Half Court Line */}
      <Line
        points={[maxSectionWidth / 2, y , maxSectionWidth / 2, y +courtHeight]}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      {/* Key Areas */}
      {/* <Rect
        x={0}
        y={(courtHeight - keyHeight) / 2}
        width={keyWidth}
        height={keyHeight}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      <Circle
        x={keyWidth}
        y={courtHeight / 2}
        radius={keyCircleRadius}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      <Rect
        x={courtWidth - keyWidth}
        y={(courtHeight - keyHeight) / 2}
        width={keyWidth}
        height={keyHeight}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      <Circle
        x={courtWidth - keyWidth}
        y={courtHeight / 2}
        radius={keyCircleRadius}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      /> */}
      {/* Three-Point Lines */}
      {/* <Line
        points={[keyWidth, 0, keyWidth, (courtHeight - keyHeight) / 2]}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      <Line
        points={[keyWidth, courtHeight, keyWidth, (courtHeight + keyHeight) / 2]}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      <Line
        points={[
          courtWidth - keyWidth, 0,
          courtWidth - keyWidth, (courtHeight - keyHeight) / 2
        ]}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      <Line
        points={[
          courtWidth - keyWidth, courtHeight,
          courtWidth - keyWidth, (courtHeight + keyHeight) / 2
        ]}
        stroke="#062f6e"
        strokeWidth={lineWidth}
      />
      <Circle
        x={keyWidth}
        y={courtHeight / 2}
        radius={courtWidth / 6}
        stroke="#062f6e"
        strokeWidth={lineWidth}
        angle={180}
        rotation={90}
      />
      <Circle
        x={courtWidth - keyWidth}
        y={courtHeight / 2}
        radius={courtWidth / 6}
        stroke="#062f6e"
        strokeWidth={lineWidth}
        angle={180}
        rotation={-90}
      /> */}
      {/* Basket Hoops */}
      {/* <Circle
        x={20}
        y={courtHeight / 2}
        radius={7.5}
        stroke="#062f6e"
        strokeWidth={lineWidth}
        fill="orange"
      />
      <Circle
        x={courtWidth - 20}
        y={courtHeight / 2}
        radius={7.5}
        stroke="#062f6e"
        strokeWidth={lineWidth}
        fill="orange"
      /> */}
    </Group>
    // </Stage>
  );
};

export default BasketballCourt;
