/*
RelaxSite class is capable of storing
* the name of the centre
* information about all the zones
* info about doors
* info about cards.
This RelaxSite class implements the enclosed RelaxCentre interface.
*/

class RelaxSite implements RelaxCentre {
    centreName: string;
    zoneName: string;
    cardId: number;
    doorNumber: number;

    constructor(centreName: string, zoneName: string, private zone: Zone, cardId: number, doorNumber: number,
                private card: Card, private door: Door, private zonesList: Zone[] = [], private cards: string,
                private cardsList: Card[] = [], private doorsList: Door[] = []) {
        this.centreName = centreName;
        this.zoneName= zone.getName();
        this.cardId = card.cardId;
        this.doorNumber = door.getDoorNumber();
        this.zone = zone;
        this.card = card;
        this.door = door;
        this.zonesList = zonesList;
        this.cards = zone.showListOfCard();
        this.doorsList = doorsList;
        this.cardsList = cardsList;

    }
    
    getCentreName(): string {
        //return this.centreName;
        return "Poznan Relax Centre";
    }

    addZone(): void {
        this.zonesList.push();
    }

    addCard(): void{
        this.zone.addCard(this.card);
    }

    addDoor(): void{
        this.doorsList.push();
    }

    findZone(zoneName: string): Zone{
        return this.zone;
    }
    
    findCard(cardId: number): Zone{
        if(this.zone.hasCard(cardId)) {
            return this.zone;
        }
        return null;
    }

    move(card: Card, doorNumber: number): string {
        if(this.zone.isCardAllowToEnter(card) == true) {
            console.log("Card ${card} is requesting to enter door ${doornumber}");
        }
        else if(this.zone.getRating() > card.getRating()) {
            console.log("The card's rating is lower than the rating of the zone");
        }
        else if(this.cards.length+1>this.zone.getCapacity()) {
            console.log("Entry to the destination zone exceeds its maximum capacity");
        }
        else if(this.card.hasEnoughCredits() == false) {
            console.log("The card does not have enough credits")
        }
        //else if(this.card.)
        //Refusal to enter a zone, because card is not listed in the source zone for the door used
        return null;
    }

    canMove(card: Card, door: Door): boolean {
        if(this.zone.isCardAllowToEnter(card) == true){
            return true;
        }
    }
    
    cardsInZone(zone: Zone): string {
        return this.zone.showListOfCard();   
    }

    /**
   * Returns a string representation of all the cards in all zones
   * @return {string} a string representation of all cards in all zones
   **/
    cardsInAllZones(): string{
        for(let zone of this.zonesList) {
            for(let card of this.cardsList) {
                return this.zone.showListOfCard();
            }
        }
    }
    
    moveToOutside(card: Card): void {
        this.move(card,1)
    }

    moveAllToOutside(): void {
        for (let zone of this.zonesList) {
            for(let card of this.cardsList){
                this.moveToOutside(card);
            }
          }
    }
}
