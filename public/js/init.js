window.onNextjsAppDidMount = function() {
/*
  * reframe.js - Reframe.js: responsive iframes for embedded content
  * @version v2.2.7
  * @link https://github.com/dollarshaveclub/reframe.js#readme
  * @author Jeff Wainwright <jjwainwright2@gmail.com> (http://jeffry.in)
  * @license MIT
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(!(-1!==r.className.split(" ").indexOf(n)||-1<r.style.width.indexOf("%"))){var d=(r.getAttribute("height")||r.offsetHeight)/(r.getAttribute("width")||r.offsetWidth)*100,f=document.createElement("div");f.className=n;var s=f.style;s.position="relative",s.width="100%",s.paddingTop=d+"%";var a=r.style;a.position="absolute",a.width="100%",a.height="100%",a.left="0",a.top="0",r.parentNode.insertBefore(f,r),r.parentNode.removeChild(r),f.appendChild(r)}}}});

// Handle responsive video embeds
window.addVideoEmbedsHandlers = function() {
  reframe('iframe[src*="youtube.com"],iframe[src*="vimeo.com"]');
};

window.removeVideoEmbedsHandlers = function() {
  const frameWrappers = document.querySelectorAll('.js-reframe');
  if (frameWrappers) {
    for (let i = 0; i < frameWrappers.length; i += 1) {
      const frameWrapper = frameWrappers[i];
      const frame = frameWrapper.firstChild;
      frame.removeAttribute('style');
      frameWrapper.parentNode.insertBefore(frame, frameWrapper);
      frameWrapper.parentNode.removeChild(frameWrapper);
    }
  }
};

// Handle main navigation menu toggling on small screens
function navToggleHandler(e) {
  e.preventDefault();
  document.body.classList.toggle('menu--opened');
}

window.addMainNavigationHandlers = function() {
  const menuToggle = document.querySelectorAll('.menu-toggle');
  if (menuToggle) {
    for (let i = 0; i < menuToggle.length; i++) {
      menuToggle[i].addEventListener('click', navToggleHandler, false);
    }
  }
};

window.removeMainNavigationHandlers = function() {
  document.body.classList.remove('menu--opened');
  const menuToggle = document.querySelectorAll('.menu-toggle');
  if (menuToggle) {
    for (let i = 0; i < menuToggle.length; i++) {
      menuToggle[i].removeEventListener('click', navToggleHandler, false);
    }
  }
};

// Sticky header
var offsetY = 0;
var ticking = false;

window.addEventListener('scroll', function (e) {
  offsetY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      handleHeader(offsetY);
      ticking = false;
    });
    ticking = true;
  }
});

function handleHeader(scrollPos) {
  if (scrollPos > 0) {
    document.body.classList.add('has--scrolled');
  } else {
    document.body.classList.remove('has--scrolled');
  }
}

};