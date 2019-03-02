import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'cb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  ngAfterContentInit() {
    () => {
      let nav = document.querySelector('#nav-cubo');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 1.5) {
            nav.classList.add("fixed-top");
            document.body.style.paddingTop = '70';
        }else {
          nav.classList.remove("fixed-top");
          document.body.style.paddingTop = '0';
        }
      });
    }
  }
}

// $(function () {
//   var nav = $('#nav-cubo');
//   $(window).scroll(function () {
//       if ($(this).scrollTop() > 1.5) {
//           nav.addClass("fixed-top");
//           $('body').css('padding-top', 70);
//       } else {
//           nav.removeClass("fixed-top");
//           $('body').css('padding-top', 0);
//       }
//   });
// });