import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;

userColl = ([{
             personId: 1,
             name: 'john doe',
             addr: 'placeholder',
             age: '1'
           }]);

  constructor(private _data: DataService) { }

  ngOnInit() {

    this._data.castA.subscribe(res => this.userColl = res);

      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
          dataRows: [
              ['', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
          ]
      };
  }

}
