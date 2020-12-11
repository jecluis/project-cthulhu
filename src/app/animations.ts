import { animate, animateChild, query, style, transition, trigger, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('welcome => setup', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('750ms ease-in', style({left: '-100%'}))
        ]),
        query(':enter', [
          animate('750ms ease-in', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild())
    ])
]);

export const fadeInOutAnimation =
  trigger('routeFadeAnimations', [
    transition('welcome => setup', [
      query(':enter', [
        style({opacity: 0, position: 'absolute'})
      ], { optional: true }),
      group([
        query(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0, position: 'absolute'}))
        ], {optional: true}),
        query(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1, position: 'absolute'}))
        ], {optional: true})
      ])
    ])
  ]);