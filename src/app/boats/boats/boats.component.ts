import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GridOptions } from 'ag-grid';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/core/data/data.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  private gridOptions: GridOptions;
  allSwiftBoats: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.allSwiftBoats = this.dataService.allSwiftBoats;
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: 'Boat Name',
        field: 'boatName',
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
        headerName: 'Comments',
        field: 'comment',
      },
      {
        headerName: 'Call Sign',
        field: 'callSignName',
      },
      {
        headerName: 'Color Code',
        field: 'idColorCode',
      },
      {
        headerName: 'Trainer',
        field: 'trainder',
      },
      {
        headerName: 'Lost',
        field: 'destroyed',
      },

    ];
  }

  public onCellDoubleClicked(event: any): void {
    console.log(event);
    // this.item = this.af.object('/vets/' + event.data.$key);
  }

}
