import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EntidadService } from '../../component-funcionality/services/entidad/entidad.service';

interface FoodWithLink {
  value: string;
  viewValue: string;
  link: string;
}

@Component({
  selector: 'app-entidad-form',
  templateUrl: './entidad-form.component.html',
  styleUrls: ['./entidad-form.component.scss']
})
export class EntidadFormComponent {

  entidadesForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<EntidadFormComponent>,
              private fb: FormBuilder,
              public entidadesService: EntidadService) { }

  ngOnInit(): void {
    this.initEntidadesForm();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  initEntidadesForm() {
    this.entidadesForm = this.fb.group({
      id: [null],
      nombre: ['',[Validators.required]],
      ruc: [null, [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      contacto: ['', [Validators.required, Validators.pattern('^9[0-9]{8}$')]],
      direccion: ['',[Validators.required]],
      estado: ['A'],
    });

    if (this.entidadesService.entidadSelected) {
      this.entidadesForm.patchValue(this.entidadesService.entidadSelected);
    }
  }

  saveEntidades() {
    if (this.entidadesService.entidadSelected) {
      this.updateEntidad();
    } else {
      this.createEntidades();
    }
  }

  createEntidades() {
    console.log('Datos de Entidades Cooperantes:', this.entidadesForm.value)
    this.entidadesService.create(this.entidadesForm.value).subscribe(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro completado con éxito',
        showConfirmButton: false,
        timer: 3000, // Duración más larga para una sensación más elegante
        toast: true, // Usa el modo "toast"
        background: '#40c2d3', // Color de fondo personalizado
        color: '#ffffff', // Texto en color blanco para contraste
        customClass: {
          popup: 'custom-toast' // Clase personalizada para estilos adicionales
        }
      });

      console.log('Se guardo correctamente:', res);
      this.entidadesForm.reset();
      this.onClose();
    })
  }

  updateEntidad() {
    console.log('Datos de Entidades Cooperantes:', this.entidadesForm.value)
    this.entidadesService.update(this.entidadesForm.value).subscribe(res => {
      console.log('Se actualizó correctamente', res);
      this.entidadesForm.reset();
      this.onClose();
    })
  }

  ngOnDestroy() {
    this.entidadesService.entidadSelected = undefined;
  }

}
