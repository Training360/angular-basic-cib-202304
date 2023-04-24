import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { User } from "src/app/model/user";
import { ConfigService, ITableColumn } from "src/app/service/config.service";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent<T> {
  @Input() columns: ITableColumn[] = [];

  @Output() onDelete: EventEmitter<T> = new EventEmitter();

  @Output() onEdit: EventEmitter<T> = new EventEmitter();

  @Input() list$: Observable<T[]> = of([]).pipe(
    tap((list) => (this.columnList = Object.keys(list[0])))
  );

  columnList: string[] = [];

  filterPhrase: string = "";

  filterKey: string = "";

  orderColumn: string = "";

  orderDirection: number = 1;

  deleteTrigger(row: T): void {
    this.onDelete.emit(row);
  }

  editTrigger(row: T): void {
    this.onEdit.emit(row);
  }

  onOrder(col: string): void {
    if (col === this.orderColumn) {
      this.orderDirection *= -1;
    } else {
      this.orderDirection = 1;
    }

    this.orderColumn = col;
  }

  fibonacci(n: number, c: number): number {
    var indent = "";
    for (var i = 0; i < c; i++) {
      indent += " ";
    }
    if (n < 2) {
      return 1;
    } else {
      return this.fibonacci(n - 2, c + 4) + this.fibonacci(n - 1, c + 4);
    }
  }
  
}
