import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

export function routerTransition2() {
  return slideToLeft2();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'absolute', width:'100%'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ opacity: 0, transform: 'translate3d(0, -10%, 0)' }),
      animate('.6s ease-in-out', style({ opacity: 1 , transform: 'translate3d(0, 0, 0)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({ opacity: 1, transform: 'translate3d(0, 0%, 0)' }),
      animate('.3s ease-in-out', style({ opacity: 0 , transform: 'translate3d(0, 10%, 0)' }))
    ])
  ]);
}

function slideToLeft2() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'absolute', width:'100%'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ opacity: 0, transform: 'translate3d(0, -10%, 0)' }),
      animate('.6s ease-in-out', style({ opacity: 1 , transform: 'translate3d(0, 0, 0)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({ opacity: 1, transform: 'translate3d(0, 0%, 0)' }),
      animate('.3s ease-in-out', style({ opacity: 0 , transform: 'translate3d(0, -10%, 0)' }))
    ])
  ]);
}