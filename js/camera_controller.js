/**
 * Created by mgilbert on 6/24/17.
 */



/**
 * Button in Top div, OnClick func run the func 1 / 4 (3 -2 -1) timer func
 *
 * At the end do an Ajax post with Finish message (set up spinner, blank out Snap Me Button, get back gif and display)
 *
 *
 *
 *
 *
 *
 *
 */



var photoController = (function PublicAPI(){


         // var $chartcanvas = $("[rel='js-charts']");
         // var chartsCounter = 1;





        function takePhotos(evt) {
            /// makes ajax call, supplies, render(id) as callback

            // CANVAS SPINNER WIP
            // var newspin = Object.create(Spinner);
            // newspin.init(id);

            var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#7FFFD4' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}

    var $countdown = $("#countdown");
    console.log("reached the countdown on click");

            //gray out and disable the SNAPME button
            $(evt.target).prop('disabled', true);


            // append the empty innHTML H1 element
            $countdown.append("<h1 class='text-center Display-1 bgcountdown' style='padding:200px 0px 0px 0px'  id='photoCountdown'></h1>");

            // start the loop (for 1 -4) {  innerText = i/4   function { 3 , 2, 1, POST sync snapcommand   }           }


            function endCountdown() {
  // logic to finish the countdown here
                console.log("got to end");
}






    // function handleTimer() {
    //     if (count === 5) {
    //         clearInterval(timer);
    //         endCountdown();
    //     } else {
    //         $('#photoCountdown').html("PHOTO: " +count+"/4");
    //         $.ajax({url:'/snap', data:{search: count}, async:false}).done(function(data){
    //
    //     console.log(data);
    //
    // } );
    //         count++;
    //     }
    // }
    //
    // var count = 1;
    // var timer = setInterval(function () {
    //     handleTimer(count);
    // }, 1000);

            var numberOfPhotos = 5;


     function startPhotoTimer() {
            var photocount = 4;

            numberOfPhotos--
            if (numberOfPhotos === 0) {
                // ajax cleanup.
                console.log("got to the end")
                // spinner
                // on done remove spinner and enable the button prop disabled false
            } else {
                var phototimer = setInterval(function () {
                    photonumber(photocount);
                    photocount--;
                    if (photocount === 0) clearInterval(phototimer);
                }, 1000);


            }

       }


    function photonumber(c) {
        if (c === 1){

               $.ajax({url:'/snap', data:{search: c}}).done(startPhotoTimer());
               } else {
                // set innerhtml with count value
                thecount = c - 1;
                $('#photoCountdown').html("PHOTO:"+thecount);
                            }
        }

    startPhotoTimer();








            }

// var target = document.getElementById('chart1')
// var spinner = new Spinner(opts).spin(target);


    // $.ajax({url:'/search', data:{search: searchstring}, spinner}).done(function(data){
    //
    //     console.log(data)
    //     render(data)
    //     spinner.stop();
    //
    // } );




        function render(data) {

            console.log("the data is: "+ data);

        }

        function init (){
        /// instantiate onClick attribute for the Snap Me button
        /// add the coundown timer func as the callback for the onClick
        $("[rel='snapme']").on("click", takePhotos);


        }


    return {
            init: init
        }


    /// reference to parent div (itself pane) here
    /// reference chartcounter




})();