import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
  }
  paramsIid: string = ""
  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      console.log("PARAMS: ", params['id'])
      this.paramsIid = params['id']
    })
  }

  moveToChildA(): void{
    this.router.navigateByUrl("/component-a/child-a")
  }


}
