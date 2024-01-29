import { Component } from '@angular/core';
import { ViewService } from '../../service/view.service';
import { BulkAllocationService } from 'src/app/components/bulk-allocation/services/bulk-allocation.service';

@Component({
  selector: 'app-view-funcionary',
  templateUrl: './view-funcionary.component.html',
  styleUrls: ['./view-funcionary.component.scss']
})
export class ViewFuncionaryComponent {
  idfuncionary: any;
  name:any;
  dataTutor: any[] = [];

  constructor(private viewPDFService: ViewService, private bulkAllocationService: BulkAllocationService,) { }

  ngOnInit(): void {
    this.findAllTutor();
  }

  generarPDF(idfuncionary:number) {
    this.viewPDFService.generarPDFFuncionary(idfuncionary).subscribe((res) => {
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

  findAllTutor() {
    this.bulkAllocationService.findAlltutor().subscribe((res) => {
      this.dataTutor = res
      console.log(res)
    });
  }

}
