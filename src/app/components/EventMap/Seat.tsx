import React, { useEffect, useState } from "react";
import { Circle } from "./react-konva";
import { SEAT_SIZE } from "./layout";
import { ISeatData, SeatStatus } from "./type";
import { ColorSelector, getColor } from "./utils";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { IChoiceMode } from "@/app/context/type";

interface ISeatProps {
    data: ISeatData;
    isSelected: boolean;
    settoreId: number;
    x: number;
    y: number;
    onHover: (name: string | null, position?: { x: number; y: number }) => void;
    onDeselect: (name: string) => void;
    onSelect: (name: string) => void;
    line: string
}

const Seat: React.FC<ISeatProps> = ({ isSelected, data, settoreId, x, y, onHover, onDeselect, onSelect, line }) => {
    const { hoverArea, addManualTicket, removeTicket, mode, tickets } = useEventTotal();
    const isBooked = data.status === SeatStatus.BOOKED;
    const isHided = data.status === SeatStatus.HIDE;
    const isSeatSelected = !!tickets.find(el => el.line === line && el.section_id === settoreId && el.place === data.number);


    const color = getColor(isBooked, isSeatSelected, isHided, ColorSelector[settoreId], hoverArea, settoreId);

    const handleMouseEnter = (e: any) => {
        if (isHided) return;
        e.target._clearCache();
        onHover({ line: line, place: data.number }, e.target.getAbsolutePosition());
        const container = e?.target?.getStage()?.container();
        if (container) {
            container.style.cursor = isBooked ? "not-allowed" : mode === IChoiceMode.BEST_PLACE ? "cursor" : "pointer";
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
        if (isBooked || isHided || mode === IChoiceMode.BEST_PLACE) return;

        if (isSeatSelected) {
            removeTicket(settoreId + line + data.number)
            // onDeselect(data.name)

        } else {
            // onSelect(data.name)
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
        prevProps.onHover === nextProps.onHover && // Ensure correct comparison
        prevProps.onDeselect === nextProps.onDeselect && // Ensure correct comparison
        prevProps.onSelect === nextProps.onSelect && // Ensure correct comparison
        prevProps.line === nextProps.line && // Ensure correct comparison
        prevProps.hoverArea === nextProps.hoverArea &&
        prevProps.tickets === nextProps.tickets
    );
});
