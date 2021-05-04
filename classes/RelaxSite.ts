/*
RelaxSite class is capable of storing
* the name of the centre
* information about all the zones
* info about doors
* info about cards.
This RelaxSite class implements the enclosed RelaxCentre interface.
*/

class RelaxSite implements RelaxCentre {
    public centreName: string;
    public zoneName: string;
    public cardId: number;
    public doorNumber: number;
    public numberOfCardsInZone: string;
    public totalCards: string;

    constructor(centreName: string, zoneName: string, cardId: number, doorNumber: number,
                totalCards: string, numberOfCardsInZone: string) {
        this.centreName = centreName;
        this. zoneName = zoneName;
        this.cardId = cardId;
        this.doorNumber = doorNumber;
        this.totalCards = totalCards;
        this.numberOfCardsInZone = numberOfCardsInZone;
    }
    

    getCentreName(): string {
        return this.centreName;
    }

    addZone(): void {}

    addCard(): void{}

    addDoor(): void{}

    findZone(zoneName: string): Zone{
        return zoneName;
    }
    
    findCard(cardId: number): CardBuilder{
        return Zone;
    }

    move(card: CardBuilder, doorNumber: number): string {
        return card + " " + doorNumber;
    }

    canMove(card: CardBuilder, door: Door): boolean {
        return false;
    }
    
    cardsInZone(zone: Zone): string {
        return this.numberOfCardsInZone;
    }

    cardsInAllZones(): string{
        return this.totalCards;
    }
    
    moveToOutside(card: CardBuilder): void {}

    moveAllToOutside(): void {}
}