import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column } from '../../../types/common';
import { CommonModule } from '@angular/common';
import { formatData } from '../../../utils/formatter';

@Component({
  selector: 'app-readonly-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './readonly-table.component.html',
  styleUrl: './readonly-table.component.css'
})
export class ReadonlyTableComponent {
  @Input() data!: any[];
  @Input() columns!: Column[];
  @Input() editBtn?: boolean;

  @Output() rowSelect = new EventEmitter<any>();
  @Output() rowDblClick = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<any>();

  selectedNdx?: number;

  onRowSelect(rowData: any, ndx: number) {
    if(ndx === this.selectedNdx) {
      this.selectedNdx = undefined;
      this.rowSelect.emit(null);
    } else {
      this.selectedNdx = ndx;
      this.rowSelect.emit(rowData);
    }
  }

  handleDoubleClick(rowData: any) {
    this.rowDblClick.emit(rowData);
  }

  getDataField(data: any, col: Column): string {
    if(col.subfield != null || col.subfield != undefined) {
      let retVal = data[col.field as keyof Object][col.subfield as keyof Object];
      return formatData(retVal, col.formatter).toString();
    } else {
      let retVal = data[col.field as keyof Object];
      return formatData(retVal, col.formatter).toString();
    }
  }

  editEvent(rowData: any) {
    this.onEdit.emit(rowData);
  }
}
