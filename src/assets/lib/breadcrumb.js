// javascript to switch from small to large screen configuration, using intersection observer and resize observer

// start from large screen configuration, check to see if the breadcrumb is being cut off

document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) { // if available
    
    // identify the breadcrumb
    var b = document.querySelector(".breadcrumb");
    
    // is there a breadcrumb?
    if (b !== null && b !== undefined) {
    
      // identify the current page title
      var c = document.querySelector(".breadcrumb .current");

      // identify the items in the breadcrumb that are not the first or last items
      var i = Array.from(b.querySelectorAll("li"));
      i.splice(0,1);
      i.splice(-1,1);
      // console.log(i);

      // get the approximate width of the breadcrumb at full size as an initial value
      var w = 0;
      b.querySelectorAll("li *:first-child").forEach(item => w += item.scrollWidth);
      // console.log({w});

      // inner HTML code for the small screen dropdown item
      var dropdown_html = '<a href="#" role="button" id="littlecrumbs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">…</a><div class="dropdown-menu" aria-labelledby="littlecrumbs"></div>';

      // options for the intersection observer
      var c_observer_options = {
        root: document.querySelector('.breadcrumb li:last-child'),
        rootMargin: '0px',
        threshold: 0.95
      }
    
      // callback for the intersection observer
      var c_observer_callback = function(entries, observer) {
        entries.forEach(function(entry) {
          var is_smaller = entry.intersectionRatio <= 0.94999999;
          // console.log({is_smaller});

          // if the screen is too small, change to the small screen context
          // and then observe for when the breadcrumb is big enough again for the large screen context
          if (is_smaller) {

            // stop observing intersections
            c_observer.unobserve(c);

            // transition to small screen context
            b.classList.add('smallscreen');
            var items = b.querySelectorAll("li");
            if (items.length > 2) {
              for(var x=1;x<(items.length - 1);x++) {
                items[x].parentNode.removeChild(items[x]);
              }
            }
            var dropdown = document.createElement("li");
            dropdown.className = "dropdown breadcrumb-item";
            dropdown.innerHTML = dropdown_html;
            c.parentNode.before(dropdown);
            for (var y=0;y < i.length;y++) {
              var l = i[y].querySelector('a').cloneNode(true);
              l.className = "dropdown-item";
              b.querySelector('.dropdown .dropdown-menu').append(l);
            }

            // if resize observer is supported, do it
            if (ResizeObserver) {

              // observer for the breadcrumb
              const b_observer = new ResizeObserver(entries => {
                for (let entry of entries) {
                  var size = entry.contentRect.width;
                  // console.log({size});
                  if (size > w) {

                    // start the intersection observer again
                    c_observer.observe(c);

                    // stop the resize observer
                    b_observer.unobserve(b);

                    // exit the small screen context
                    b.classList.remove('smallscreen');
                    var dd = b.querySelector('.dropdown');
                    dd.parentNode.removeChild(dd);
                    for (var y=0;y < i.length;y++) {
                      c.parentNode.before(i[y]);
                    }
                  }
                }
              });
              b_observer.observe(b);
            }
          }

        });
      };

      // define the observer
      let c_observer = new IntersectionObserver(c_observer_callback,c_observer_options);

      // apply the observer to the items
      c_observer.observe(c);
    }
  }
});