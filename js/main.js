// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

// <div id="page-wrap">
//
//   <h1 id="top"></h1>
//
//   <ul>
//     <li><a href="#two">Scroll to Section Two</a></li>
//     <li><a href="#three">Scroll to Section Three</a></li>
//   </ul>
//
//   <h2 id="one">Section One</h2>
//
//   <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.   facilisis luctus, metus</p>
//
//   <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
//
//   <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.   facilisis luctus, metus</p>
//
//   <h2 id="two">Section Two</h2>
//
//   <p><a href="#top">Top</a></p>
//
//   <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.       facilisis luctus, metus</p>
//
//   <h2 id="three">Section Three</h2>
//
//   <p><a href="#top">Top</a></p>
//
//   <p>quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
//
// </div>
//
//
// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function() {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    500
  );
});
