import React from "react";
import { Stage, Layer, Group } from "./react-konva";
import Section from "./Section";
import SeatPopup from "./SeatPopup";
import * as layout from "./layout";
import BasketballCourt, { courtHeight } from "./BasketballCourt";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { useFetch } from "@/app/hooks/useFetch";


const EventMap = () => {

  const containerRef = React.useRef(null);
  const stageRef = React.useRef(null);

  const [scale, setScale] = React.useState(1);
  const [scaleToFit, setScaleToFit] = React.useState(1);
  const [size, setSize] = React.useState({
    width: 1000,
    height: 1000,
    virtualWidth: 1000
  });
  const [virtualWidth, setVirtualWidth] = React.useState(1000);


  const [popup, setPopup] = React.useState({ seat: null });

  const jsonMap = useFetch("./seats-data.json");
  const {  tickets } = useEventTotal();


  // calculate available space for drawing
  React.useEffect(() => {
    const newSize = {
      width: containerRef?.current?.offsetWidth,
      height: containerRef?.current?.offsetHeight
    };
    if (newSize.width !== size.width || newSize.height !== size.height) {
      setSize(newSize);
    }
  });

  // calculate initial scale
  React.useEffect(() => {
    if (!stageRef.current) {
      return;
    }
    const stage = stageRef.current;
    const clientRect = stage.getClientRect({ skipTransform: true });

    const scaleToFitWidth = size.width / clientRect.width;
    const scaleToFitHeight = size.height / clientRect.height;
    const newScale = Math.min(scaleToFitWidth, scaleToFitHeight);


    setScale(newScale);
    setScaleToFit(newScale);
    setVirtualWidth(clientRect.width);
  }, [jsonMap, size]);

  // togle scale on double clicks or taps
  const toggleScale = React.useCallback(() => {
    if (scale === 1) {
      setScale(scaleToFit);
    } else {
      setScale(1);
    }
  }, [scale, scaleToFit]);

  let lastSectionPosition = 0;

  const handleHover = React.useCallback((seat, pos) => {
    setPopup({
      seat: seat,
      position: pos
    });
  }, []);


  const handleSelect = ()=>{}
  const handleDeselect = ()=>{}


  if (jsonMap === null) {
    return <div ref={containerRef}>Loading...</div>;
  }

  const maxSectionWidth = layout.getMaximimSectionWidth(
    jsonMap.seats.sections
  );



  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        width: "100%",
        height: "100%"
      }}
      ref={containerRef}
    >

      <Stage
        ref={stageRef}
        width={size.width}
        height={size.height}
        draggable
        dragBoundFunc={pos => {
          pos.x = Math.min(
            size.width / 2,
            Math.max(pos.x, -virtualWidth * scale + size.width / 2)
          );
          pos.y = Math.min(size.height / 2, Math.max(pos.y, -size.height / 2));
          return pos;
        }}
        onDblTap={toggleScale}
        onDblClick={toggleScale}
        scaleX={scale}
        scaleY={scale}
      >
        <Layer>
          {jsonMap.seats.sections.map((section, index:number) => {
            const height = layout.getSectionHeight(section);
            const position = lastSectionPosition + layout.SECTIONS_MARGIN + (section.image ? courtHeight : 0);
            lastSectionPosition = position + height;
            const width = layout.getSectionWidth(section);

            const offset = (maxSectionWidth - width) / 2;

            return (
              <Group key={index} style={{ backgroundColor: "white" }} >
                {/* Render section component if there's no image */}
                {!section.image && (
                  <Section
                    x={offset}
                    y={position}
                    section={section}
                    selectedSeatsIds={tickets.map(el=>el.id)}
                    onHoverSeat={handleHover}
                    onSelectSeat={handleSelect}
                    onDeselectSeat={handleDeselect}
                  />
                )}
                {!!section.image && (<BasketballCourt
                  maxSectionWidth={maxSectionWidth}
                  x={offset}
                  y={position - (courtHeight / 1.15)} />)}
              </Group>
            );
          })}
        </Layer>
      </Stage>
      {/* draw popup as html */}
      {popup.seat && (
        <SeatPopup
          position={popup.position}
          seat={popup.seat}
          onClose={() => {
            setPopup({ seat: null });
          }}
        />
      )}
    </div>
  );

};

export default EventMap;
