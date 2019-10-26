import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { SingerService } from 'src/app/services/singer.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent
  carouselActiveIndex = 0;
  banners: Banner[]
  tags: HotTag[]
  songSheets: SongSheet[]
  singers: Singer[]

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, hotTags, songSheets, singers]) => {
      this.banners = banners;
      this.tags = hotTags;
      this.songSheets = songSheets;
      this.singers = singers;
    })
  }

  ngOnInit() {
  }
  // 轮播图小圆点为红色
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }
  // 轮播图两边按钮事件
  changeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]()
  }
  // 获取播放歌单的ID
  onPlaySheet(id:number) {
    console.log(id);
    
  }
}
