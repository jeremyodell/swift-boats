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
    this.items = af.list('/swift-boat-vet', {});
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
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
        headerName: 'Dates',
        field: 'dates',
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
      {
        headerName: 'ID',
        field: 'id',
      }

    ];
  }

  public onCellDoubleClicked(event: any): void {
    console.log(event);
    this.item = this.af.object('/swift-boat-vet/' + event.data.$key);
  }

}
