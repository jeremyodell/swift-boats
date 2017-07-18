import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GridOptions } from 'ag-grid';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/core/data/data.service';

@Component({
  selector: 'app-sailors',
  templateUrl: './sailors.component.html',
  styleUrls: ['./sailors.component.css']
})
export class SailorsComponent implements OnInit {
  private gridOptions: GridOptions;
  allVets: FirebaseListObservable<any[]>;
  item:  FirebaseObjectObservable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.error('in sailors comp');
    this.allVets = this.dataService.allVets;
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: 'PCF',
        field: 'boadId',
      },
      {
        headerName: 'First Name',
        field: 'firstName',
        width: 100
      },
      {
        headerName: 'Middle Name',
        field: 'middleName',
        width: 100
      },
      {
        headerName: 'Last Name',
        field: 'lastName',
        width: 100
      },
      {
        headerName: 'Rank',
        field: 'rank',
        width: 100
      },
      {
        headerName: 'Start Date',
        field: 'startDate',
        width: 100
      },
      {
        headerName: 'End Date',
        field: 'endDate',
        width: 100
      },
      {
        headerName: 'Base',
        field: 'base',
        width: 100
      },
      {
        headerName: 'Comments',
        field: 'comment',
      },

    ];
  }

  public onCellDoubleClicked(event: any): void {
    console.log(event);
    // this.item = this.af.object('/vets/' + event.data.$key);
  }


}
