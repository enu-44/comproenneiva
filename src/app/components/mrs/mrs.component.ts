import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
declare const Mrs: any;
declare var $: any;


@Component({
    selector: 'app-mrs',
    templateUrl: './mrs.component.html',
    styleUrls: ['./mrs.component.scss'],
})
export class MrsComponent implements OnInit {
    @ViewChild('MrsDiv') MrsDiv: ElementRef;
    @Input() mrsId: string;
    @Input() data: string = '[]';
    @Output() dataOut = new EventEmitter<Object>();
    myMrs: any;

    constructor() { }
    ngOnInit() {        
      $( function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );
      } );
    }
}
