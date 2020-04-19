import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }


  

  // mouse_on_sidenav(mouse_pos:boolean)
  // {
  //   if((true) && ($('body').hasClass('g-sidenav-hidden')))
  //   { 
  //     $('body').toggleClass('g-sidenav-show g-sidenav-hidden');
  //     //$('#dash_layout_container').toggleClass('sidenav_show_marginleft sidenav_pinned_marginleft');
  //   }
  //   else
  //   { 
  //     $('body').toggleClass('g-sidenav-hidden g-sidenav-show'); 
  //     //$('#dash_layout_container').toggleClass('sidenav_pinned_marginleft sidenav_show_marginleft');
  //   }

  // }

  ngOnInit() {
    // console.log("g-sidenav-show class added here");
    // $('body').addClass('g-sidenav-show g-sidenav-pinned');
    // $('#dash_layout_container').addClass('sidenav_show_marginleft');
    $("#sidenav-main").on("mouseenter", function() {
      
      $("body").hasClass("g-sidenav-pinned") || $("body").removeClass("g-sidenav-hide").removeClass("g-sidenav-hidden").addClass("g-sidenav-show")
  })
   $("#sidenav-main").on("mouseleave", function() {
      $("body").hasClass("g-sidenav-pinned") || ($("body").removeClass("g-sidenav-show").addClass("g-sidenav-hide"), setTimeout(function() {
          $("body").removeClass("g-sidenav-hide").addClass("g-sidenav-hidden")
      }, 300))
  })
  }

}
