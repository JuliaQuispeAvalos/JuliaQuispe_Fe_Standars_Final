import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsComponent } from './forms/forms.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TeenPrincipalComponent } from './teen/teen-principal/teen-principal.component';
import { TeenFormComponent } from './teen/teen-form/teen-form.component';
import { AsignationPrincipalComponent } from './asignation/asignation-principal/asignation-principal.component';
import { AsignationFormComponent } from './asignation/asignation-form/asignation-form.component';
import { FuncionaryPrincipalComponent } from './funcionary/funcionary-principal/funcionary-principal.component';
import { FuncionaryFormComponent } from './funcionary/funcionary-form/funcionary-form.component';
import { ArchivosComponent } from './archivos/archivos/archivos.component';
import { WelcomePrincipalComponent } from './welcome/welcome-principal/welcome-principal.component';
import {BulkAllocationComponent} from "./bulk-allocation/components/bulk-allocation/bulk-allocation.component";
import {ViewFuncionaryComponent} from "./pdf/components/view-funcionary/view-funcionary.component";
import {AttendanceComponent} from "./attendance/components/attendance/attendance.component";
import {CheckInComponent} from "./check-in/components/check-in/check-in.component";
import {ViewAddressComponent} from "./pdf/components/view-address/view-address.component";
import {ViewAttendanceComponent} from "./view-attendance/components/view-attendance/view-attendance.component";
import {ViewAttendancePDFComponent} from "./pdf/components/view-attendance-pdf/view-attendance-pdf.component";
import {ActivitiesPrincipalComponent} from "./activities/activities-principal/activities-principal.component";
import {ActivitiesFormComponent} from "./activities/activities-form/activities-form.component";
import {HistorialPrincipalComponent} from "./historial/historial-principal/historial-principal.component";
import { AsignacionprogramsFormComponent } from './asignacionprograms/asignacionprograms-form/asignacionprograms-form.component';
import { AsignacionprogramsListComponent } from './asignacionprograms/asignacionprograms-list/asignacionprograms-list.component';
import { EntidadListComponent } from './entidad/entidad-list/entidad-list.component';
import { EntidadFormComponent } from './entidad/entidad-form/entidad-form.component';
import { NotificacionFormComponent } from './notificaciones/notificacion-form/notificacion-form.component';
import { NotificacionListComponent } from './notificaciones/notificacion-list/notificacion-list.component';
import { DialogComponentComponent } from './confirm-dialog/dialog-component/dialog-component.component';
import { AsignationActTeenFormComponent } from './asignationActTeen/asignation-act-teen-form/asignation-act-teen-form.component';
import { AsignationActTeenPrincipalComponent } from './asignationActTeen/asignation-act-teen-principal/asignation-act-teen-principal.component';
import { OperationalunitPrincipalComponent } from './operationalunit/operationalunit-principal/operationalunit-principal.component';
import { OperationalunitFormComponent } from './operationalunit/operationalunit-form/operationalunit-form.component';
import { ProgramFormComponent } from './program/program-form/program-form.component';
import { ProgramPrincipalComponent } from './program/program-principal/program-principal.component';
import {UnitprogramFormComponent} from "./unitprogram/unitprogram-form/unitprogram-form.component";
import {UnitprogramPrincipalComponent} from "./unitprogram/unitprogram-principal/unitprogram-principal.component";
import { AdolescentFormComponent } from './programs/adolescent-form/adolescent-form.component';
import { AdolescentListComponent } from './programs/adolescent-list/adolescent-list.component';
import { ModalComponent } from './programs/modal/modal.component';
import { TransDistComponent } from './programs/trans-dist/trans-dist.component';



@NgModule({
    imports: [
        CommonModule,
        FeatherModule.pick(allIcons),
        DemoFlexyModule,
        ButtonsComponent,
        SlideToggleComponent,
        SliderComponent,
        ToolbarComponent,
        ProgressSnipperComponent,
        SnackbarComponent,
        MenuComponent,
        TabsComponent,
        ExpansionComponent,
        ChipsComponent,
        ProgressComponent,
        FormsComponent,
        AlertsComponent,
        GridListComponent,
        TooltipsComponent,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
  ],
  declarations: [
    TeenPrincipalComponent,
    TeenFormComponent,
    AsignationPrincipalComponent,
    AsignationFormComponent,
    FuncionaryPrincipalComponent,
    FuncionaryFormComponent,
    ArchivosComponent,
    WelcomePrincipalComponent,
    AttendanceComponent,
    ViewFuncionaryComponent,
    CheckInComponent,
    ViewAddressComponent,
    ViewAttendanceComponent,
    ViewAttendancePDFComponent,
    BulkAllocationComponent,
    ActivitiesPrincipalComponent,
    ActivitiesFormComponent,
    HistorialPrincipalComponent,
    AsignacionprogramsFormComponent,
    AsignacionprogramsListComponent,
    EntidadListComponent,
    EntidadFormComponent,
    NotificacionFormComponent,
    NotificacionListComponent,
    DialogComponentComponent,
    AsignationActTeenFormComponent,
    AsignationActTeenPrincipalComponent,
    OperationalunitPrincipalComponent,
    OperationalunitFormComponent,
    ProgramFormComponent,
    ProgramPrincipalComponent,
    UnitprogramFormComponent,
    UnitprogramPrincipalComponent,
    AdolescentFormComponent,
    AdolescentListComponent,
    ModalComponent,
    TransDistComponent,

  ]
})
export class ComponentsModule { }
