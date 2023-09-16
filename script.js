var splide = new Splide( '.splide',{
    type: 'loop',
    speed: 500,
    perPage: 1,
    focus: 'center',
    updateOnMove: true,
    trimSpace: false,
    omitEnd: true,
    mediaQuery: 'min',
    pagination: false,
    arrows: false,
    direction: 'ttb',
    height: '100%',
    breakpoints: {
        475: {
            gap: '20px',
            direction: 'ltr',
            arrows: true,
            perPage: 3,
        },
        1024: {
            perPage: 4,
        }
    }
} )

var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
  
  // Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
    var end  = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();