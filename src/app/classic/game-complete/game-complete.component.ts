import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Operator } from 'src/app/Operator';
import { ServiceOperatorsService } from 'src/app/service-operators.service';

import * as confetti from 'canvas-confetti';


@Component({
  selector: 'app-game-complete',
  templateUrl: './game-complete.component.html',
  styleUrls: ['./game-complete.component.scss']
})
export class GameCompleteComponent implements OnInit {
  operator: Operator;
  numberOfTries: number = 0;


  constructor(public serviceOperators: ServiceOperatorsService, private renderer2: Renderer2, private elementRef: ElementRef) {
    this.operator = this.serviceOperators.getChosenOperator();
    this.numberOfTries = this.serviceOperators.getOperatorsTried().length;
  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.confetti();
  }

  
  // https://www.npmjs.com/package/canvas-confetti

  public confetti(): void {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
 
    const myConfetti = confetti.create(canvas, {
      resize: true
    });

    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };
    
    function fire(particleRatio: number, opts: any) {
      myConfetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });


    /*var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min: number, max:number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      myConfetti({
        particleCount: 3,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: (Math.random() * skew) - 0.2
        },
        colors: ['#2F7018', '#ffffff', '#2F7018'],
        shapes: ['circle', 'square'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }());*/

  }

}
