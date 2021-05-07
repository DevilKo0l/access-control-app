class RelaxSite implements RelaxCentre {
    centreName: string = "Poznan Relax Centre";
    private zoneList: Zone[] = [];
    private cardList: Card[] = [];
    private doorList: Door[] = [];

    getCentreName(): string {
        return this.centreName;
    }

    addZone(zone: Zone): void {
        this.zoneList.push(zone)
    }

    
    addCard(card: Card): void {
        this.cardList.push(card);        
    }
   

    addDoor(door: Door): void{
        this.doorList.push(door);
    }

    findZone(zoneName: string): Zone{
        return this.zoneList.find(zone => zone.getName() === zoneName)!;
    }
    
    findCard(cardId: number): Zone{
        const card: Card = this.cardList.find(card => card.getId() == cardId)!;
        for(let zone of this.zoneList)
        {
            if(zone.isCardInTheZone(card)==true)
            {
                return zone;
            }
        }
        return this.zoneList[-1];        
    }

    move(card: Card, doorNumber: number): string{

        const door: Door = this.doorList.find(door => door.getDoorNumber() == doorNumber)!;
        let destinationZone: Zone = door.getDestinationZone();
        let sourceZone:Zone = door.getSourceZone();

        let messenge: string="";
        if(destinationZone.getRating() > card.getRating()) {
            messenge+="You can't enter this zone. Update your rating to the higher";
        }
        
        if(destinationZone?.getNumberOfPeople() == destinationZone?.getCapacity()) {
            messenge+="The zone is full, please come later.";
        }
        
        if(card.hasEnoughCredits() == false) {
            messenge+="Your card does not have enough credits. Please top up your card.";
        }
        destinationZone?.addCard(card);
        sourceZone?.removeCard(card);
        
        return messenge;
    }

    canMove(card: Card, door: Door): boolean {
        let destinationZone: Zone = door.getDestinationZone();        
        if(destinationZone.isCardAllowToEnter(card) == true)
        {
            return true;
        }
        return false;
    }
    
    cardsInZone(zone: Zone): string {
        return zone.showCards();
        
    }

    cardsInAllZones(): string{
        let cardsString: string = "";
        for(let zone of this.zoneList){
            cardsString+=zone.showCards();
        }
        return cardsString;
    }
    
    moveToOutside(card: Card): void {}

    moveAllToOutside(): void {}
}