class StaffCard implements CardBuilder {
    private static currentId = 50000;
    cardId: number;
    private fitnessScore = 0;
  
    constructor(    
        private memberName: string,
        private rating: number,
        private credits: number,
          
    ) {      
        this.rating = rating;
        this.credits = credits;
        this.cardId = StaffCard.currentId++;    

        this.cardId = StaffCard.currentId++;
    }
    creditNumber(): number {
      throw new Error("Method not implemented.");
    }
  
   
    public getName = (): string => this.memberName;
  
    
    public getId = (): number => this.cardId;  
    
    public getRating = (): number => this.rating;
    
    public useZone = (): void => {
        this.fitnessScore += 1;
    };
    
    public hasEnoughCredits = (): boolean => true;
  
   
    public toString = (): string =>
      "***Member Card***" +
      "\nCard No: " +
      this.cardId +
      "\nName: " +
      this.memberName +
      "\nRating: " +
      this.rating +
      "\nCredits: " +
      this.credits +
      "\nFitness score: " +
      this.fitnessScore +
      "\n";
  }
  