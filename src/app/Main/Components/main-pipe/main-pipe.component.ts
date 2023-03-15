import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-pipe',
  templateUrl: './main-pipe.component.html',
  styleUrls: ['./main-pipe.component.scss']
})
export class MainPipeComponent implements OnInit {
  temperature : number = 0;

  minTemp : number = 0;
  maxTemp : number = 20;



  ngOnInit(): void {
    setInterval(()=>this.temperature++, 1000);
  }

}
