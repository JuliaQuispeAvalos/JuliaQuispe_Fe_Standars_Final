import { Component } from '@angular/core';
import { ViewService } from '../../service/view.service';
import { TeenService } from 'src/app/components/component-funcionality/services/teen/teen.service';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.scss']
})
export class ViewAddressComponent {

  attorneyData: any[] = [];
  idTeen:any;
  constructor(private viewPDFService: ViewService,public _teenService: TeenService,){}

  ngOnInit(): void {
    this.findAllDataAttorney();
  }

  generarPDF(idTeen:number) {
    this.viewPDFService.generarPDFAddress(idTeen).subscribe((res) => {
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


  findAllDataAttorney() {
    this._teenService
      .findAll()
      .subscribe((dataFindAttorney: any) => {
        // console.log('Data Attorney: ', dataFindAttorney); //--------- // Running successfully
        this.attorneyData = dataFindAttorney;
      });
  }

}
