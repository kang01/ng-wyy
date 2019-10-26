import { Injectable, Inject } from "@angular/core";
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { Singer } from './data-types/common.types';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

type SingerParams = {
    offset: number, //第几页
    limit: number, //显示条数
    cat?: string //歌手类型
}
const defaultParams: SingerParams = {
    offset: 0,
    limit: 9,
    cat: '5001'
}
@Injectable({
    providedIn: ServicesModule
})
export class SingerService {
    constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) {} 
           
    getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
        const params = new HttpParams({fromString: JSON.stringify(args)});
        return this.http.get(this.uri + 'artist/list', {params})
        .pipe(map((res:{artists: Singer[]}) => res.artists))
    }    
}