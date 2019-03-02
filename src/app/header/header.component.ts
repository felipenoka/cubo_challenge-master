import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'cb-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  
  }
  
  ngAfterContentInit() {
    (() => {
      const nav = document.getElementById('nav-cubo');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 1.5) {
          nav.classList.add("fixed-top");
          document.body.style.paddingTop = "90px";
        } else {
          nav.classList.remove("fixed-top");
          document.body.style.paddingTop = "0px";
        }
      });
    })()
  }
}