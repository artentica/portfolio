$(document).ready(function(){
        hideall();
        $('html').click(function(){
        //cache le menu si clique en dehors des icone ou du texte
        closeall();
        });
        
        
        $('.destinybutton').click(function(event){
            closeall();
            if($('.destinysub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.destinysub').slideDown();
                event.stopPropagation();
            }
        });

        $('.leapbutton').click(function(event){
            closeall();
            if($('.leapsub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.leapsub').slideDown();
                event.stopPropagation();
            }
        });

          $('.robotbutton').click(function(event){
            closeall();
            if($('.robotsub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.robotsub').slideDown();
                event.stopPropagation();
            }
        });

        $('.portfoliosansjsbutton').click(function(event){
            closeall();
            if($('.portfoliosansjssub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.portfoliosansjssub').slideDown();
                event.stopPropagation();
            }
        });

        $('.winpixiesbutton').click(function(event){
            closeall();
            if($('.winpixiessub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.winpixiessub').slideDown();
                event.stopPropagation();
            }
        });

        $('.animationbutton').click(function(event){
            closeall();
            if($('.animationsub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.animationsub').slideDown();
                event.stopPropagation();
            }
        });

         $('.erebutton').click(function(event){
            closeall();
            if($('.eresub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.eresub').slideDown();
                event.stopPropagation();
            }
        });

          $('.orizonbutton').click(function(event){
            closeall();
            if($('.orizonsub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.orizonsub').slideDown();
                event.stopPropagation();
            }
        });

           $('.badbutton').click(function(event){
            closeall();
            if($('.badsub').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.badsub').slideDown();
                event.stopPropagation();
            }
        });

        
        
    });//fin de la fonction main
    
    function closeall(){
        $('.destinysub').slideUp();
        $('.leapsub').slideUp();
        $('.robotsub').slideUp();
        $('.portfoliosansjssub').slideUp();
        $('.winpixiessub').slideUp();
        $('.animationsub').slideUp();
        $('.eresub').slideUp();
        $('.orizonsub').slideUp();
        $('.badsub').slideUp();
        
    }
    
    function hideall(){
        $('.destinysub').hide();
        $('.leapsub').hide();
        $('.robotsub').hide();
        $('.portfoliosansjssub').hide();
        $('.winpixiessub').hide();
        $('.animationsub').hide();
        $('.eresub').hide();
        $('.orizonsub').hide();
        $('.badsub').hide();
        
    }
  
    