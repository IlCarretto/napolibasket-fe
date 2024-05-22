import React from "react";
import { Stage, Layer } from "./react-konva";
import Section from "./Section";
import SeatPopup from "./SeatPopup";
import * as layout from "./layout";
import { Image, Rect } from "react-konva";

const useFetch = (url: string) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);
  return data;
};

const EventMap = () => {
  const jsonData = useFetch("./seats-data.json");
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

  const [selectedSeatsIds, setSelectedSeatsIds] = React.useState([]);

  const [popup, setPopup] = React.useState({ seat: null });

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

    const scaleToFit = size.width / clientRect.width;
    setScale(scaleToFit);
    setScaleToFit(scaleToFit);
    setVirtualWidth(clientRect.width);
  }, [jsonData, size]);

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

  const handleSelect = React.useCallback(
    seatId => {
      const newIds = selectedSeatsIds.concat([seatId]);
      setSelectedSeatsIds(newIds);
    },
    [selectedSeatsIds]
  );

  const handleDeselect = React.useCallback(
    seatId => {
      const ids = selectedSeatsIds.slice();
      ids.splice(ids.indexOf(seatId), 1);
      setSelectedSeatsIds(ids);
    },
    [selectedSeatsIds]
  );

  if (jsonData === null) {
    return <div ref={containerRef}>Loading...</div>;
  }

  const maxSectionWidth = layout.getMaximimSectionWidth(
    jsonData.seats.sections
  );

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "lightgrey",
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
          {jsonData.seats.sections.map((section, index) => {
            const height = layout.getSectionHeight(section);
            const position = lastSectionPosition + layout.SECTIONS_MARGIN;
            lastSectionPosition = position + height;
            const width = layout.getSectionWidth(section);

            const offset = (maxSectionWidth - width) / 2;

            return (
              <div key={index}>
                {/* Render section component if there's no image */}
                {!section.image && (
                  <Section
                    x={offset}
                    y={position}
                    height={height}
                    section={section}
                    selectedSeatsIds={selectedSeatsIds}
                    onHoverSeat={handleHover}
                    onSelectSeat={handleSelect}
                    onDeselectSeat={handleDeselect}
                  />
                )}

                {/* Render image component if there's an image URL in 'section.image' */}
                {section.image && (
                  <div style={{ backgroundColor: "red" }}>
                    <Rect
                      x={width/4} // Adjust these as needed for image placement
                      y={position} // Adjust these as needed for image placement
                    width={width/2}
                    height={height*2.5}
                    fill="orange"
                    strokeWidth={1}
                    stroke="lightgrey"
                    cornerRadius={5}
                />
                    <Image

                      x={offset} // Adjust these as needed for image placement
                      y={position} // Adjust these as needed for image placement

                      width={width} // Adjust these as needed for image size
                      height={height} // Adjust these as needed for image size
                      src={section.image} // Replace with the actual image URL from 'section.image'
                      image={undefined} />
                  </div>
                )}
              </div>
            );
          })}
        </Layer>
      </Stage>
      {/* draw popup as html */}
      {popup.seat && (
        <SeatPopup
          position={popup.position}
          seatId={popup.seat}
          onClose={() => {
            setPopup({ seat: null });
          }}
        />
      )}
    </div>
  );

};

export default EventMap;
