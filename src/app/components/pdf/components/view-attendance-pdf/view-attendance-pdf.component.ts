import { Component } from '@angular/core';
import { ViewService } from '../../service/view.service';
import { AttendanceService } from 'src/app/components/attendance/services/attendance.service';

@Component({
  selector: 'app-view-attendance-pdf',
  templateUrl: './view-attendance-pdf.component.html',
  styleUrls: ['./view-attendance-pdf.component.scss']
})
export class ViewAttendancePDFComponent {
  activitiesList: any[] = [];
  programsList: any[] = [];
  idactiviti:any;
  idPrograms:any;

  constructor(private viewPDFService: ViewService, private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.listPrograms();
  }

  generarPDF(idactivity: number) {
    this.viewPDFService.generarPDFAttendance(idactivity).subscribe((res) => {
      const file = new Blob([res], { type: 'application/pdf' });
      const url = URL.createObjectURL(file);
      const pdfWindow = window.open();
      if (pdfWindow) {
        pdfWindow.location.href = url;
      } else {
        alert('El navegador bloqueó la apertura de la ventana emergente. Por favor, asegúrate de desbloquear las ventanas emergentes para este sitio.');
      }
    })
  }

  listActivities(id:any) {
    this.attendanceService.listActivities(id).subscribe((res: any) => {
      this.activitiesList = res;
    })
  }

  listPrograms(){
    this.attendanceService.listPrograms().subscribe((res:any) => {
      this.programsList = res;
    })
  }
}

export class ViewAttendancePdfComponent {
}
