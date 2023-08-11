import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  imgSrc: string = '../../../assets/image/cat.png'
  imgAlt: string = 'cat'

  fullName: string = 'My Name is <strong> Al fath</strong>'
  color:string = 'blue'
  number: number = 0

  styles = {
    color: 'blue',
    fontSize: '5rem',
    fontWeight: '600'
  }

  isDisabled: boolean = false
  isClicked : boolean = false
  stop: boolean = false

  ngOnInit(){
    setTimeout(() => {
      this.isDisabled = !this.isDisabled
    }, 5000)
  }
  increment(){
    this.number++
  }
  decrement(){
    this.number--
  }

  plusFunc(){
    if (!this.isClicked){
      this.isClicked = !this.isClicked
      if (!this.stop){
        setInterval(() => {
          this.number++
          if (this.number > 5) this.color = 'red'
        }, 1000)
      } else {
        return
      }
    }
  }
  stopFunc(){
    this.stop = true
  }

  message:string = "Mouse Hover Me"
  mOver(){
    this.message = "Thank you for Hover me"
  }
  mOut(){
    this.message = "Hover me Again :"
  }
  name: string = ""
  onKeypress(e: any):void {
    console.log(e)
    console.log(e.target.value)
    this.name = e.target.value
  }

  tes: any[] = []
  isActive: boolean = false


}
