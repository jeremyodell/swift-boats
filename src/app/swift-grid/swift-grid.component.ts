import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-swift-grid',
  templateUrl: './swift-grid.component.html',
  styleUrls: ['./swift-grid.component.css']
})
export class SwiftGridComponent {

private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",

                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }

}
