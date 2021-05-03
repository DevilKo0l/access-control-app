abstract class Card {   
    protected cardId!: number;
    // hasEnoughCredits(): boolean;
    // getCredits(): number;
    // addCredits(credits: number): void;
    // getId(): number;
    // getName(): string;
    // changeRating(rating: number): void;
    // getRating(): number;
    // useZone(): void;
    // toString(): string;
    constructor(
        protected credits: number,
        protected rating: number,
        protected memberName: string,
    )
    {  
    }
    public abstract hasEnoughCredits: () => boolean;
    public getCredits = (): number => this.credits;
    public addCredits = (credits: number): void => {
        this.credits += credits;
    };

    public getRating =(): number => this.rating;
    public changeRating = (rating: number): void => {
        this.rating = rating;
    };

    public getName = (): string => this.memberName;

    public abstract toString: () => string;
}



