import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { TeenPrincipalComponent } from './components/teen/teen-principal/teen-principal.component';
import { TeenFormComponent } from "./components/teen/teen-form/teen-form.component";
import {AsignationPrincipalComponent} from "./components/asignation/asignation-principal/asignation-principal.component";
import { AsignationFormComponent } from "./components/asignation/asignation-form/asignation-form.component";
import {FuncionaryPrincipalComponent} from "./components/funcionary/funcionary-principal/funcionary-principal.component";
import { FuncionaryFormComponent } from './components/funcionary/funcionary-form/funcionary-form.component';
import { permissionsGuard } from './components/component-funcionality/guards/permissions.guard';
import {WelcomePrincipalComponent} from "./components/welcome/welcome-principal/welcome-principal.component";
import {CheckInComponent} from "./components/check-in/components/check-in/check-in.component";
import {BulkAllocationComponent} from "./components/bulk-allocation/components/bulk-allocation/bulk-allocation.component";
import {AttendanceComponent} from "./components/attendance/components/attendance/attendance.component";
import {ViewAttendanceComponent} from "./components/view-attendance/components/view-attendance/view-attendance.component";
import {ActivitiesPrincipalComponent} from "./components/activities/activities-principal/activities-principal.component";
import {HistorialPrincipalComponent} from "./components/historial/historial-principal/historial-principal.component";
import {NotificacionListComponent} from "./components/notificaciones/notificacion-list/notificacion-list.component";
import {AsignacionprogramsListComponent} from "./components/asignacionprograms/asignacionprograms-list/asignacionprograms-list.component";
import {EntidadListComponent} from "./components/entidad/entidad-list/entidad-list.component";
import { AsignationActTeenFormComponent } from './components/asignationActTeen/asignation-act-teen-form/asignation-act-teen-form.component';
import { AsignationActTeenPrincipalComponent } from './components/asignationActTeen/asignation-act-teen-principal/asignation-act-teen-principal.component';
import {
  OperationalunitPrincipalComponent
} from "./components/operationalunit/operationalunit-principal/operationalunit-principal.component";
import {
  OperationalunitFormComponent
} from "./components/operationalunit/operationalunit-form/operationalunit-form.component";
import {ProgramPrincipalComponent} from "./components/program/program-principal/program-principal.component";
import {ProgramFormComponent} from "./components/program/program-form/program-form.component";
import {
  UnitprogramPrincipalComponent
} from "./components/unitprogram/unitprogram-principal/unitprogram-principal.component";
import {UnitprogramFormComponent} from "./components/unitprogram/unitprogram-form/unitprogram-form.component";
import {TransDistComponent} from "./programs/trans-dist/trans-dist.component";
import {AdolescentFormComponent} from "./programs/adolescent-form/adolescent-form.component";
import {AdolescentListComponent} from "./programs/adolescent-list/adolescent-list.component";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "home", canActivate: [permissionsGuard], component: DashboardComponent },
      { path: "alerts", component: AlertsComponent },
      { path: "asignation", canActivate: [permissionsGuard], component: AsignationPrincipalComponent },
      { path: "forms", component: FormsComponent },
      { path: "teen", canActivate: [permissionsGuard], component: TeenPrincipalComponent },
      { path: "grid-list", component: GridListComponent },
      { path: "menu", component: MenuComponent },
      { path: "tabs", component: TabsComponent },
      { path: "expansion", component: ExpansionComponent },
      { path: "chips", component: ChipsComponent },
      { path: "progress", component: ProgressComponent },
      { path: "toolbar", component: ToolbarComponent },
      { path: "progress-snipper", component: ProgressSnipperComponent },
      { path: "snackbar", component: SnackbarComponent },
      { path: "slider", component: SliderComponent },
      { path: "slide-toggle", component: SlideToggleComponent },
      { path: "tooltip", component: TooltipsComponent },
      { path: "button", component: ButtonsComponent },
      { path: "teen-form", canActivate: [permissionsGuard], component: TeenFormComponent },
      { path: "asignation-form", canActivate: [permissionsGuard], component: AsignationFormComponent },
      { path: "asignation-list", component: AsignationPrincipalComponent },
      { path: "funcionary", canActivate: [permissionsGuard], component: FuncionaryPrincipalComponent },
      { path: "funcionary-form", canActivate: [permissionsGuard], component: FuncionaryFormComponent },
      { path: "welcome", component: WelcomePrincipalComponent},
      {path: "check-in", component: CheckInComponent},
      {path:"entidades", component:EntidadListComponent},
      {path:"programa-actividad", component:AsignacionprogramsListComponent},
      {path:"notificaciones", component:NotificacionListComponent},
      {path: "bulk-Allocation", component: BulkAllocationComponent, canActivate: [permissionsGuard]},
      {path: "attendance", component: AttendanceComponent, canActivate: [permissionsGuard]},
      {path: "view-attendance", component: ViewAttendanceComponent, canActivate: [permissionsGuard]},
      { path: "activities", canActivate: [permissionsGuard], component: ActivitiesPrincipalComponent },
      { path: "historial", canActivate: [permissionsGuard], component: HistorialPrincipalComponent},
      { path: "asignationActTeen-list", canActivate: [permissionsGuard], component: AsignationActTeenPrincipalComponent },
      { path: "asignationActTeen-form", canActivate: [permissionsGuard],  component: AsignationActTeenFormComponent },
      {path:"operativeunit", component: OperationalunitPrincipalComponent},
      {path:"operativeunit-form", component: OperationalunitFormComponent},
      {path:"program",  component: ProgramPrincipalComponent},
      {path:"program-form", component: ProgramFormComponent},
      {path:"unitprogram", component: UnitprogramPrincipalComponent},
      {path:"unitprogram-form", component: UnitprogramFormComponent},
      { path: "trans-dist", component: TransDistComponent },
      { path: "adolescent-form", component: AdolescentFormComponent },
      { path: "adolescent-list", component: AdolescentListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
