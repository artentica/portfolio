$(document).ready(function(){
        hideall();
        $('html').click(function(){
        //cache le menu si clique en dehors des icone ou du texte
        closeall();
        });
        
        
        $('.iconehistoire').click(function(event){
            closeall();
            if($('.submenuhistoire').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.submenuhistoire').slideDown();
                event.stopPropagation();
            }
        });
        
        $('.iconegeo').click(function(event){
            closeall();
            if($('.submenugeo').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.submenugeo').slideDown();
                event.stopPropagation();
            }
        });
        
        $('.iconetransport').click(function(event){
            closeall();
            if($('.submenutransport').is(':visible')){}//fermé immédiatement fonction invisible inexistante
            
            else{
                $('.submenutransport').slideDown();
                event.stopPropagation();
            }
        });
    });//fin de la fonction main
    
    function closeall(){
        $('.submenuhistoire').slideUp();
        $('.submenugeo').slideUp();
        $('.submenutransport').slideUp();
    }
    
    function hideall(){
        $('.submenuhistoire').hide();
        $('.submenugeo').hide();
        $('.submenutransport').hide();
    }
  
    