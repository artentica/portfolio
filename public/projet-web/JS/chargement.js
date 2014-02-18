function charge_page(){     //  recupere la valeur de p dans l'URL
    
    var u = document.location.href;
    var reg;
    reg = new RegExp('(\\?|&|^)'+'p'+'=(.*?)(&|$)');
    var matches = u.match(reg);
    if(matches === null){
        return 0;
    }
    return matches[2] !== undefined ? decodeURIComponent(matches[2]).replace(/\+/g,' ') : '';               
}            

function choix(){   //  fait correspondre le numero avec la page
    
    var page = charge_page();
    var rub;
        if( page ==10){
            rub ='equipe';
        }
        else if( page == 9){
            rub = 'tour_de_france';
        }
        else if( page == 8){
            rub = 'don_du_sang';
        }
        else if( page == 7){
            rub = 'croix_rouge';
        }
        else if ( page == 6){
            rub = 'bluely';
        }
        else if (page == 5){
            rub = 'mentions-legales';
        }
        else if( page == 4){
            rub = 'info-pratique';
        }
        else if( page == 3){
            rub = 'contact';
        }
        else if( page == 2){ 
            rub = 'gastronomie';
        }
        else if( page == 1){  
            rub = 'patrimoine';
        }
        else{
            rub = 'presentation';
        }
        
    document.getElementById('contenu').innerHTML = '<object data="HTML/'+rub+'.html" type="text/html" />';
}
