/*
RelaxSite class is capable of storing
* the name of the centre
* information about all the zones
* info about doors
* info about cards.
This RelaxSite class implements the enclosed RelaxCentre interface.
*/

class RelaxSite implements RelaxCentre {
    
    constructor(public centreName: string, public zoneName: string, public cardId: number, public doorNumber: number,
                public totalCards: string, public numberOfCardsInZone: string, public zonesList: string[],
                public cardsList: number[], public doorsList: number[]) {
        this.centreName = centreName;
        this. zoneName = zoneName;
        this.cardId = cardId;
        this.doorNumber = doorNumber;
        this.totalCards = totalCards;
        this.numberOfCardsInZone = numberOfCardsInZone;
        this.zonesList = zonesList;
        this.cardsList = cardsList;
        this.doorsList = doorsList;
    }
    
    getCentreName(): string {
        //return this.centreName;
        return "Poznan Relax Centre";
    }

    addZone(): void {
        this.zonesList.push();
    }

    addCard(): void{
        this.cardsList.push();
    }

    addDoor(): void{
        this.doorsList.push();
    }

    findZone(zoneName: string): Zone{
        return Zone.getName();
    }
    
    findCard(cardId: number): Card{
        if(Zone.cards.find(cardId)) {
            return Card.cardId;
        }
    }

    move(card: Card, doorNumber: number): string {
        zone: Zone;
        if(zone.isCardAllowToEnter() == true) {
            console.log("Card ${card} is requesting to enter door ${doornumber}");
        }
    }

    canMove(card: Card, door: Door): boolean {
        if(card.getRating() >= Zone.getRating() &&
            Zone.getNumberOfPeopleIn() < Zone.getCapacity() && 
            card.hasEnoughCredits() == true) &&
            card.inSourceZone() == true) {
            return true;
        }
        /*Refusal to enter a zone, because the card's rating is lower than the rating of the zone.
        • Refusal to enter a zone, because entry to the destination zone would exceed its maximum
        capacity.
        • Refusal to enter a zone, because the card does not have enough credits
        • Refusal to enter a zone, because card is not listed in the source zone for the door used
        • Successful entry, because none of the above conditions is true
        Additional information */
    }
    
    cardsInZone(zone: Zone): string {
        return Zone.getCardsInZone();        
    }

    /**
   * Returns a string representation of all the cards in all zones
   * @return {string} a string representation of all cards in all zones
   **/
    cardsInAllZones(): string{
        for(let i = 0; i < this.zonesList.length; i++) {
            console.log (i);
        }
        
    }
    
    moveToOutside(card: Card): void {}

    moveAllToOutside(): void {}
}
