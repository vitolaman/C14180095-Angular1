import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  turn = -1;
  inp = ""
  a = 0;
  b = 0;
  tek = 0
  items = [
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"]
  ];

JALAN(a,b) {
  var ca = this.a;
  var cb = this.b;
  var cek = 0;
  if(ca && cb < 6 && ca && cb > 0){
    if(this.items[ca-1][cb-1] == "*"){
      this.turn +=1;
      this.inp = String(this.turn%2);
      this.items[this.a-1][this.b-1] = this.inp;

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          if(this.items[i][j]==this.inp){
              cek +=1;
              if(cek == 4){
                alert('Winner: User '+this.inp);
                  this.items = [
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"]
  ];
              }
              console.log(cek);
            } else{
              cek =0;
              console.log(cek);
            }
        }
      }

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          if(this.items[j][i]==this.inp){
              cek +=1;
              if(cek == 4){
                alert('Winner: User '+this.inp);
                                  this.items = [
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"]
  ];
              }
              console.log(cek);
            } else{
              cek =0;
              console.log(cek);
            }
        }
      }

    } else{
      alert("sudah terisi!");
    }

  } else{
    alert("koordinat salah");
  }

}

}
