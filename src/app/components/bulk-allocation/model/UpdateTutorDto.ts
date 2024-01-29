export class TutorDto {
    teenId: number = 0;
}

export class UpdateTutorDto{
    legalGuardianId:number = 0;
    description: string = '';
    teens: TutorDto[] | undefined;
    start_date: string = "";
    register_date: string;

    constructor() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
    
        this.register_date = `${year}-${month}-${day}`;
      }
    
}