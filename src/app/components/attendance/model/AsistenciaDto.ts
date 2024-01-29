export class AsistenciaDto {
  idadolescente: number = 0;
  idactiviti: number = 0;
  asistencia: string = '';
  date: string;

  constructor() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    this.date = `${year}-${month}-${day}`;
  }

}
