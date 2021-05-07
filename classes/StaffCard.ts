class StaffCard implements Card {
    private static currentId = 5000;
    protected rating: number = 10;
    protected credits: number = 5;
    cardId: number;
    private fitnessScore: number;
  
    constructor(    
        private memberName: string,
        private staffId: number,        
        private departmentName: string
    ) {      
        this.departmentName = departmentName;        
        this.staffId = staffId;
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

    public getDepartmentName = (): string => this.departmentName;
    public getStaffId = (): number => this.staffId;  
   
    public toString = (): string =>
      "***Member Card***" +
      "\nCard No: " +
      this.cardId +
      "\nName: " +
      this.memberName + 
      "\n Department name"+
      this.departmentName+
      "\nFitness score: " +      
      this.fitnessScore +
      "\n";
  }
  