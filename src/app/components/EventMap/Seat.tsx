import React from "react";
import { Circle } from "./react-konva";
import { SEAT_SIZE } from "./layout";
import { ISeatData, SeatStatus } from "./type";
import { ColorSelector, getColor } from "./utils";
import { useEventTotal } from "@/app/context/EventTotalContext";

interface ISeatProps {
    data: ISeatData;
    isSelected: boolean;
    settoreId: number;
    x: number;
    y: number;
    onHover: (name: string | null, position?: { x: number; y: number }) => void;
    onDeselect: (name: string) => void;
    onSelect: (name: string) => void;
    price: { description: string }[];
    line: string
}

const Seat: React.FC<ISeatProps > = ({ isSelected, data, settoreId, x, y, onHover, onDeselect, onSelect, line, price }) => {
    const { hoverArea, addManualTicket, removeTicket, } = useEventTotal();
    const isBooked = data.status === SeatStatus.BOOKED;
    const isHided = data.status === SeatStatus.HIDE;

    const color = getColor(isBooked, isSelected, isHided, ColorSelector[settoreId], hoverArea, settoreId);

    const handleMouseEnter = (e: any) => {
        if (isHided) return;
        e.target._clearCache();
        onHover(data.name, e.target.getAbsolutePosition());
        const container = e?.target?.getStage()?.container();
        if (container) {
            container.style.cursor = isBooked ? "not-allowed" : "pointer";
        }
    };

    const handleMouseLeave = (e: any) => {
        onHover(null);
        const container = e?.target?.getStage()?.container();
        if (container) {
            container.style.cursor = "";
        }
    };

    const handleClick = () => {
        if (isBooked || isHided) return;

        if (isSelected) {
            removeTicket({
                id: settoreName + line + data.number,
                sector: settoreName,
                line: line,
                description: price[0].description,
                place: data.number
            })
            onDeselect(data.name)

        } else {
            onSelect(data.name)
            addManualTicket({
                id: settoreId + line + data.number,
                line: line,
                place: data.number,
                section_id: settoreId
            })
        };
    };

    return (
        <Circle
            x={x}
            y={y}
            radius={SEAT_SIZE / 2}
            fill={color}
            strokeWidth={1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onTap={handleClick}
            onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleClick();
                }
            }}
            tabIndex={0} // Makes the Circle focusable for accessibility
        />
    );
};

export default React.memo(Seat, (prevProps, nextProps) => {
    return (
        prevProps.isSelected === nextProps.isSelected &&
        prevProps.data.status === nextProps.data.status &&
        prevProps.settoreId === nextProps.settoreId &&
        prevProps.x === nextProps.x &&
        prevProps.y === nextProps.y &&
        prevProps.hoverArea === nextProps.hoverArea
    );
});
