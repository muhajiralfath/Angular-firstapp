import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  people: string[] = ["Fauzan", "Edy", "Akbar", "Heru"]

  getPeople(){
    let result: string = ""
    for (let person of this.people) {
        result += person + " "
    }
    return result
  }

  trainee = [
    {
      name: "Heru",
      address: "Bandung"
    },
    {
      name: "Edy suedy",
      address: "Toba"
    },
    {
      name: "Heru Lagi",
      address: "Bekasi"
    },
    {
      name: "Heru & Fauzan",
      address: "Bahagia"
    }
  ]
}
