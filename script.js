


// A $( document ).ready() block.
$( document ).ready(function() {

    


    var map = new jsVectorMap({
        selectedRegions: ["US", "BR", "MA", "JP", "IN", "CN", "SA"  ],
        selector: "#map1",
        map: "world",
        zoomOnScroll: false, // Disable zooming with the scroll wheel
        zoomButtons: false,  // Disable zoom buttons
        onRegionTooltipShow: function (event, tooltip, region) {
            tooltip.css({ backgroundColor: 'transparent'})
            // List of regions where the tooltip should be enabled
            const enabledRegions = ["US", "BR", "MA", "JP", "IN", "CN", "SA"]; // Add region codes here
        
            if (!enabledRegions.includes(region)) {
                // Disable tooltip by preventing it from showing
                // tooltip.text("");
                tooltip.hide()
                return;
            }
        
            // Customize the tooltip for specific enabled regions
            if (region == "US") {
                console.log(region);
                tooltip.text(
                    `<div class="tooltipcustom">
                        <div class = tooltiphead >United States</div>
                        <p>
                            Between 2012 and 2050, the U.S. population of adults aged 65 and older will nearly double, 
                            from 43 to 84 million. In just 11 years — between 2018 and 2029 — the U.S. mandatory spending 
                            on Social Security and Medicare will more than double, from $1.3 trillion to $2.7 trillion per year. 
                            The U.S. Social Security system will become insolvent by 2034 if its current tax and benefit structure is maintained.
                        </p>
                    </div>`,
                    
                    true // Enables HTML
                );
            } else if (region == "BR") {
                tooltip.text(
                    `<div class="tooltipcustom">
                        <div class = tooltiphead>Brazil</div>
                        <p> By 2050, Brazil’s population of older adults will triple. Adults aged 60 or older will make up 25% of the country’s population, while the country’s total population will begin to shrink.</p>
                    </div>`,
                    true
                );
            } else if (region == "MA") {
                tooltip.text(
                    `<div class="tooltipcustom">
                        <div class = tooltiphead>Morocco</div>
                        <p>By 2050, 25% of Morocco’s population will be over 60. In urban areas, the elderly population is expected to double in the span of 9 years, between 2021 and 2030.</p>
                    </div>`,
                    true
                );
            }
            else if (region == "IN") {
                tooltip.text(
                    `<div class="tooltipcustom">
                        <div class = tooltiphead>India</div>
                        <p>By 2050, India’s population of older adults will more than double, from 149 million to 347 million. Older adults will also surpass the number of children in the country.</p>
                    </div>`,
                    true
                );
            }

            else if (region == "JP") {
                tooltip.text(
                    `<div class="tooltipcustom">
                        <div class = tooltiphead>Japan</div>
                        <p>In 2023, Japan recorded more than two deaths for every birth. By 2050, non-workers aged 50 and older could make up roughly 60% of Japan’s population.</p>
                    </div>`,
                    true
                );
            }
            else if (region == "CN") {
                tooltip.text(
                    `<div class="tooltipcustom">
                        <div class = tooltiphead>China</div>
                        <p> By 2050, China will be home to over half a billion adults aged 65 and older. By the same year, for every Chinese retiree, there will be only 1.6 working-age adults. The Chinese government will likely need to increase its age of retirement whether or not biological aging can be therapeutically targeted by then.</p>
                    </div>`,
                    true
                );
            }
            else if (region == "SA") {
                tooltip.text(
                    `<div class="tooltipcustom">
                        <div class = tooltiphead>Saudi Arabia</div>
                        <p>Between 2020 and 2050, Saudi Arabia’s population will see a fivefold increase in adults aged 60 and older. In parallel, its fertility rate will go from 2.2 to 1.8.</p>
                    </div>`,
                    true
                );
            }
        },
        regionStyle: {
            initial: {
                fill: "#000000",
                stroke: "#808080",
                strokeWidth: 1  
            },
        
            selected: { fill: '#808080'},
            selectedHover: { fill: '#FFFFFF', fillOpacity: 1  }
        },

      });

      window.addEventListener("resize", () => {
        map.updateSize();
    });
    
    function toggleFade(selector, shouldFade) {
        if (shouldFade) {
            $(selector).addClass("fade");
        } else {
            $(selector).removeClass("fade");
        }
    }
    
    // toggleFade(".map-cover", true); // To unfade
    // toggleFade(".map-cover", false); // To fade
    
    
    // $(window).scroll(function() {
    //     console.log("Scroll Top:", $(this).scrollTop());
    //   });

    let lastScrollY = window.scrollY;

const targetIds = ['head', 'body', 'body2', 'map', 'body3'];

// Callback for when elements enter/leave the viewport
const intersectionCallback = (entries, observer) => {
    // Determine the scroll direction
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(`${entry.target.id} has entered the viewport!`);
            
            if (entry.target.id == "head") {
                toggleFade(".map-cover", false); // To fade
                $(".lottie-container").show();
                toggleFade(".lottie-container", false); 
                $(".lottie-1").show();
                $(".lottie-2").hide();
                $(".lottie-3").hide();
            }

            if (entry.target.id == "body") {
                console.log(isScrollingDown ? "Scrolling down" : "Scrolling up");

                if (isScrollingDown) {
                    $(".lottie-container").show();
                    setTimeout(() => {
                        toggleFade(".lottie-container", false); 
                        $(".lottie-1").hide();
                        $(".lottie-2").show();
                        const lottiePlayer = document.getElementById("lottie2");
                        // lottiePlayer.restart();  
                        // lottiePlayer.play();  
                        // lottiePlayer.goToAndPlay(0, true);      
                        lottiePlayer.stop(); // Stops the animation
                        lottiePlayer.seek(0); // Sets the playhead to the beginning
                        lottiePlayer.play(); // Starts playing the animation
                    }, 1200);

                    setTimeout(() => {
                        toggleFade(".lottie-container", false); 
                        $(".lottie-2").hide();
                        $(".lottie-3").show();
                        const lottiePlayer2 = document.getElementById("lottie3");
                        // lottiePlayer2.restart();  
                        lottiePlayer2.stop(); // Stops the animation
                        lottiePlayer2.seek(0); // Sets the playhead to the beginning
                        lottiePlayer2.play(); // Starts playing the animation    
                    }, 3500);
                } else {
                    $(".lottie-container").show();
                    toggleFade(".lottie-container", false); 
                    
                    $(".lottie-1").hide();
                    $(".lottie-2").hide()
                    $(".lottie-3").show();
                    // console.log("Handle scroll up for body");
                    // Add your scroll-up logic for "body" here
                }

                toggleFade(".map-cover", false); // To fade
            }

            if (entry.target.id == "body2") {
                toggleFade(".map-cover", false); // To fade
            }

            if (entry.target.id == "map") {
                console.log("map");
                setTimeout(() => {
                    $(".lottie-container").hide();
                }, 800);
                toggleFade(".map-cover", true); // To fade
                $(".lottie-container").addClass("fade");
                const lottiePlayer3 = document.getElementById("lottie4");
                // lottiePlayer.restart();  
                // lottiePlayer.play();  
                // lottiePlayer.goToAndPlay(0, true);      
                lottiePlayer3.stop(); // Stops the animation
                lottiePlayer3.seek(0); // Sets the playhead to the beginning
                lottiePlayer3.play(); // Starts playing the animation
            }

            if (entry.target.id == "body3") {
                toggleFade(".map-cover", false); // To fade
            }
        } else {
            console.log("not map");
        }
    });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(intersectionCallback, {
    root: null, // Default: viewport
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each target element
targetIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        observer.observe(element);
    } else {
        console.warn(`Element with ID "${id}" not found.`);
    }
});

     

   

      


});