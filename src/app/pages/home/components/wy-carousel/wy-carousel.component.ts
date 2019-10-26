import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush //变更检测，输入数据没有变化，就不会检测提升策略
})
export class WyCarouselComponent implements OnInit {
  @ViewChild('dot', {static: true}) dotRef: TemplateRef<any>;
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<'pre'|'next'>();
  constructor() { }

  ngOnInit() {
  }

  onChangeSlide(type: 'pre'|'next') {
    this.changeSlide.emit(type);
  }

}
