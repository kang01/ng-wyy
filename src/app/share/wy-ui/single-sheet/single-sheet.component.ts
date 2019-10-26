import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SongSheet } from 'src/app/services/data-types/common.types';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush//检测策略
})
export class SingleSheetComponent implements OnInit {

  @Input() sheet: SongSheet;
  @Output() onPlay = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  playSheet(id: number) {
    this.onPlay.emit(id)
  }

}
