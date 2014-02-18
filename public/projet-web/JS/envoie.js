function envoie() {
    
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;
    var arobase = mail.indexOf('@');
    var point = mail.indexOf('.');
    var test =1;
    
    
    if(nom==="" || prenom==="" || message===""){
        alert("Tous les champs doivent être remplis");
        test=0;        
    }
    
    if(arobase===-1 || point===-1){
        alert("L'adresse mail n'est pas valide");
    }
    
    if(arobase!==-1 && test===1 && point!==-1) {
        var mailto_link = 'mailto:staff@mairie_lyons.fr';
        
        return true;
    }
    
    
    else{
        return false;
    }
}

function chargeimg(){
    var img = new Image();
img.src="../images/checkb.jpg";
}