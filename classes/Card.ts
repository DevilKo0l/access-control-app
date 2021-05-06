/**
 * A card is used to move through a door.
 */
interface Card {
    cardId: number;
    hasEnoughCredits(): boolean;
    useZone(): void;
    toString(): string;
    getName(): string;
    getId(): number;
    getRating(): number;
}
