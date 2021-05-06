interface Card {
    cardId: number;
    hasEnoughCredits(): boolean;
    useZone(): void;
    toString(): string;
    getName(): string;
    getId(): number;
    getRating(): number;
}



