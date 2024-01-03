$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY < 50){
            $('.navbar').removeClass('position-fixed')
            $('.navbar').removeClass('sticky-Top')
        }else{
            $('.navbar').addClass('position-fixed')
            $('.navbar').addClass('sticky-Top')

        }
    })
    
    
    $('.video-overlay').hide(1000)

    $('.play').click(function(){
        $('.video-overlay').show(1000)
        // $('.video-overlay').removeClass('d-none')
    })
    $('.close').click(function(){
        $('.video-overlay').hide(1000)
    })

    $('.video-overlay2').hide(1000)

    $('.play2').click(function(){
        $('.video-overlay2').show(1000)
        // $('.video-overlay').removeClass('d-none')
    })
    $('.close2').click(function(){
        $('.video-overlay2').hide(1000)
    })

    $('.play3').click(function(){
        $('.video-overlay3').show(1000)
        // $('.video-overlay').removeClass('d-none')
    })
    $('.close3').click(function(){
        $('.video-overlay3').hide(1000)
    })

    $('.play4').click(function(){
        $('.video-overlay4').show(1000)
        // $('.video-overlay').removeClass('d-none')
    })
    $('.close4').click(function(){
        $('.video-overlay4').hide(1000)
    })


    $('.play5').click(function(){
        $('.video-overlay5').show(1000)
        // $('.video-overlay').removeClass('d-none')
    })
    $('.close5').click(function(){
        $('.video-overlay5').hide(1000)
    })


    $('.play6').click(function(){
        $('.video-overlay6').show(1000)
        // $('.video-overlay').removeClass('d-none')
    })
    $('.close6').click(function(){
        $('.video-overlay5').hide(1000)
    })
})