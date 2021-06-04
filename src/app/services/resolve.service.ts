import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CommentService} from "./comment.service";

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Observable<any[]>> {

  constructor(private commentService: CommentService) { }

  resolve(): Observable<any[]> {
    return this.commentService.getComments();
  }


}
