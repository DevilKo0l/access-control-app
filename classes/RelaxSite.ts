/*
RelaxSite class is capable of storing
* the name of the centre
* information about all the zones
* info about doors
* info about cards.
This RelaxSite class implements the enclosed RelaxCentre interface.
*/

class RelaxSite implements RelaxCentre {
    centreName: string = "Poznan Relax Centre";
    private zonesList: Zone[] = [new Zone("Outside",1000,0), new Zone("Reception",100,1), new Zone("Pool",10,3),
                                new Zone("Sauna",2,5), new Zone("Sun Bed",1,1)];
    private cardsList: Card[] = [];
    private doorsList: Door[] = [new Door(this.zonesList[0], this.zonesList[1], 0),
                                new Door(this.zonesList[1], this.zonesList[0], 1),
                                new Door(this.zonesList[1], this.zonesList[2], 2),
                                new Door(this.zonesList[2], this.zonesList[1], 3),
                                new Door(this.zonesList[3], this.zonesList[1], 4),
                                new Door(this.zonesList[1], this.zonesList[4], 5),
                                new Door(this.zonesList[4], this.zonesList[1], 6),
                                new Door(this.zonesList[2], this.zonesList[3], 7)];

    constructor(private zone: Zone, private card: Card, private door: Door,
                private cards: string) {
        this.zone = zone;
        this.card = card;
        this.door = door;
        this.cards = zone.showListOfCard();
    }
    
    getCentreName(): string {
        return this.centreName;
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

    findZone = (zoneName: string): Zone =>
        this.zonesList.find(zone => zone.getName() === zoneName)!;
    
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
        else if(this.zone.getRating() > this.card.getRating()) {
            console.log("You can't enter this zone. Update your rating to the higher");
        }
        else if(this.cards.length+1>this.zone.getCapacity()) {
            console.log("The zone is full, please come later.");
        }
        else if(this.card.hasEnoughCredits() == false) {
            console.log("Your card does not have enough credits. Please top up your card.")
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
        this.move(card, this.door.getDoorNumber())
    }

    moveAllToOutside(): void {
        for (let zone of this.zonesList) {
            for(let card of this.cardsList){
                this.moveToOutside(card);
            }
          }
    }
}
