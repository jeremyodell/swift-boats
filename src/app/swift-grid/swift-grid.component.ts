import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-swift-grid',
  templateUrl: './swift-grid.component.html',
  styleUrls: [ './swift-grid.component.css' ]
})
export class SwiftGridComponent {

  private gridOptions: GridOptions;
  items: FirebaseListObservable<any[]>;
  item:  FirebaseObjectObservable<any>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/vets', {});
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
    this.item = this.af.object('/vets/' + event.data.$key);
  }

}
