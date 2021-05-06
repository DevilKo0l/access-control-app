/**
 * A door provides a one-way connection between two zones. It
 * has a door number and information about both the source and
 * the destination zone
 *
 */
class Door {

    constructor(
        private sourceZone: Zone,
        private destinationZone: Zone,
        private doorNumber: number
    ){
        this.destinationZone = destinationZone;
        this.sourceZone = sourceZone;
        this.doorNumber = doorNumber;
    }

    public getSourceZone = ():Zone => this.sourceZone;
    public getDestinationZone = ():Zone => this.sourceZone;
    public getDoorNumber = (): number => this.doorNumber;
}
    
