import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    imgSrc: string = '../../../assets/image/cat.png'
    imgAlt: string = 'cat'

    id = new Date()
    intervalId : any;
    constructor() {
      console.log("Constructo")
    }
    ngOnInit(){
      console.log("on init")

    }

    tick(){
      this.intervalId = setInterval(() => {
        this.id = new Date()
        console.log(this.id)
      })
    }

    ngOnChanges(){
      console.log("on change")
    }

    ngDoCheck(){
      console.log("do check")
    }

    ngAfterContentChecked(){
      console.log("After content checked")
    }

    ngAfterViewInit(){
      console.log("after view init")
    }

    ngAfterViewChecked(){
      console.log("after view checked")
    }

    ngOnDestroy(){
      console.log("on Destroy")
      clearInterval(this.intervalId)
      console.log("interval cleared")
    }
}
