import React from "react";
import { Group, Text } from "./react-konva";
import Seat from "./Seat";
import { SEATS_DISTANCE, SUBSECTION_PADDING, SEAT_SIZE } from "./layout";
import { ISeatData, ISubSectionData } from "./type";


interface ISubSectionProps {
    data: ISubSectionData;
    x: number;
    y: number;
    width: number;
    onHoverSeat: (name: string | null, position?: { x: number; y: number }) => void;
    onSelectSeat: (name: string) => void;
    onDeselectSeat: (name: string) => void;
    selectedSeatsIds: string[];
}


export default ({
    width,
    x,
    y,
    data,
    onHoverSeat,
    onSelectSeat,
    onDeselectSeat,
    selectedSeatsIds,
}: ISubSectionProps) => {
    return (
        <Group x={x} y={y}>
            {Object.keys(data.seats_by_rows).map((rowKey, rowIndex) => {
                const row = data.seats_by_rows[rowKey];
                return (
                    <React.Fragment key={rowKey}>
                        {row.map((seat: ISeatData, seatIndex: number) => {
                            return (
                                <Seat
                                    price={data.prices}
                                    line={rowKey}
                                    settoreId={data.section_id}
                                    key={seat.name}
                                    x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                                    y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                                    data={seat}
                                    onHover={onHoverSeat}
                                    onSelect={onSelectSeat}
                                    onDeselect={onDeselectSeat}
                                    isSelected={selectedSeatsIds.indexOf(seat.name) >= 0}
                                />
                            );
                        })}
                        <Text
                            text={rowKey}
                            x={SUBSECTION_PADDING - SEATS_DISTANCE}
                            y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING - SEAT_SIZE / 2}
                            fontSize={SEAT_SIZE}
                            key={"label-left" + rowKey}
                        />
                    </React.Fragment>
                );
            })}
            <Text fontSize={16} text={data.settore_name} width={width} align="center" y={-25} />
        </Group>
    );
};
