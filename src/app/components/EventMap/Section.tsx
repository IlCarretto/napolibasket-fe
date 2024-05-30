import React, { useContext, useEffect, useRef } from "react";
import { Group } from "./react-konva";
import SubSection from "./SubSection";
import {
    SECTION_TOP_PADDING,
    getSectionWidth,
    getSubsectionWidth,
} from "./layout";
import {  useEventTotal } from "@/app/context/EventTotalContext";
import { ISectionData } from "./type";

interface ISectionProps {
    section: ISectionData;
    x: number;
    y: number;
    onHoverSeat: (name: string | null, position?: { x: number; y: number }) => void;
    onSelectSeat: (name: string) => void;
    onDeselectSeat: (name: string) => void;
    selectedSeatsIds: string[];
}

const Section: React.FC<ISectionProps> = ({
    section,
    x,
    y,
    onHoverSeat,
    onSelectSeat,
    onDeselectSeat,
    selectedSeatsIds,
}) => {
    const containerRef = useRef<any>(null);
    const { hoverArea } = useEventTotal();

    // Caching will boost rendering
    // We just need to recache on some changes
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.cache();
        }
    }, [section, selectedSeatsIds, hoverArea]); // Include hoverArea here to recache on hoverArea change

    let lastSubsectionX = 0;

    return (
        <Group y={y} x={x} ref={containerRef}>
            {section.subsections && section.subsections.map((subsection) => {
                const subWidth = getSubsectionWidth(subsection);
                const pos = lastSubsectionX;
                lastSubsectionX += subWidth;

                return (
                    <SubSection
                        x={pos}
                        y={SECTION_TOP_PADDING}
                        key={subsection.settore_name}
                        data={subsection}
                        width={subWidth}
                        onHoverSeat={onHoverSeat}
                        onSelectSeat={onSelectSeat}
                        onDeselectSeat={onDeselectSeat}
                        selectedSeatsIds={selectedSeatsIds}
                    />
                );
            })}
        </Group>
    );
};

export default React.memo(Section);
