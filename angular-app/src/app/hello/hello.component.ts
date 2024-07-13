import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit {
  title!: string;
  message!: string;
  styleClass!: string;
  count!: number;
  input?: string;
  inputDisply!: string;

  constructor() {
    // setInterval(
    //   () => {
    //     this.styleClass = this.styleClass == 'red' ? 'yellow' : 'red';
    //     console.log(this.styleClass);
    //   }, 1000);
  }

  ngOnInit() {
    this.title = 'しんじチャレンジ！！';
    this.message = 'ボタンをクリック';
    this.styleClass = 'red';
    this.count = 0;
    this.inputDisply = '綾波：こんな時どうすればいいの？\nしんじ：';
  }

  doClick() {
    ++this.count;
    this.message = this.count % 2 ? this.count + '日目、逃げちゃだめだ' : this.count + '日目、逃げそう、、、'
    // if (this.count % 2) {
    //   this.message = this.count + "日目、逃げちゃだめだ"
    // }
    // else {
    //   this.message = this.count + "日目、逃げそう、、、"
    // }
  }

  doType(val: string) {
    this.input = val;
    this.inputDisply = '綾波：こんな時どうすればいいの？\nしんじ：' + this.input;
  }


}
