import { Component, ViewChild } from '@angular/core';
import { ViewAttendanceService } from '../../services/view-attendance.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewAttendancePDFComponent } from 'src/app/components/pdf/components/view-attendance-pdf/view-attendance-pdf.component';
import { AttendanceService } from 'src/app/components/attendance/services/attendance.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent {


  dataSource: any[] = [];
  uniqueDates: string[] = [];
  idactividad: any;
  idPrograms: any;
  programsList:any[]=[]
  dateSelection: any;
  activitiesList: any[] = [];
  attendanceColumns: string[] = ['name', 'select', 'fecha'];
  tableDataSources = new MatTableDataSource<any[]>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private viewAttendanceService: ViewAttendanceService,  public dialog: MatDialog,  private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.listPrograms();

  }

  findbyIdActivity(idActivity: any) {
    this.viewAttendanceService.findbyIdActivity(idActivity).subscribe((res) => {
      this.dataSource = res;
      this.tableDataSources = new MatTableDataSource<any[]>(res);
      this.tableDataSources.paginator = this.paginator;
      this.getUniqueDates();
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


  getUniqueDates(){
    const uniqueSet = new Set<string>();
    this.dataSource.forEach(activities => {
      uniqueSet.add(activities.date);
    });
    this.uniqueDates = Array.from(uniqueSet);
  }

  selectionDate(){
    console.log(this.dateSelection)
    const data: any[] = [];
    this.dataSource.forEach(activities => {
      if(activities.date == this.dateSelection){
        data.push(activities)
      };
    });
    this.tableDataSources = new MatTableDataSource<any[]>(data);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ViewAttendancePDFComponent,{
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
