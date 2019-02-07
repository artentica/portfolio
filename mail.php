<?php
$headers = 'From: Artentica Portrfolio <no-reply@vincentriouallon.fr>' . "\r\n";


        $name= $_POST["name"];
        $business= $_POST["business"];
        $email= $_POST["email"];
        $phone= $_POST["phone"];
        $message= $_POST["message"];

        /*$messagef ='
        Content-Type: text/plain;
	charset="utf-8" Content-Transfer-Encoding: 8bit
        <!DOCTYPE html>
       <html><body><p>Message de '.$name.' de la compagnie: '.$business.'.</p>
       <p>Contact number:</p>
       <ul>
            <li>Email: '.$email.'</li>
            <li>Num.: '.$phone.'</li>
       </ul>
       <p>'.$message.'</p>

       </body></html>';*/
        $messagef ='

Delivered-To: riouallonvincent@gmail.com
Received: by 10.180.103.38 with SMTP id ft6csp264023wib;
        Mon, 16 Mar 2015 19:43:03 -0700 (PDT)
X-Received: by 10.70.131.164 with SMTP id on4mr112337194pdb.100.1426560182137;
        Mon, 16 Mar 2015 19:43:02 -0700 (PDT)
Return-Path: <bounce@ldlc.com>
Received: from mailout.groupe-ldlc.com (mailout.groupe-ldlc.com. [91.211.164.37])
        by mx.google.com with ESMTP id bh1si26192272pdb.191.2015.03.16.19.43.00
        for <riouallonvincent@gmail.com>;
        Mon, 16 Mar 2015 19:43:02 -0700 (PDT)
Received-SPF: pass (google.com: domain of bounce@ldlc.com designates 91.211.164.37 as permitted sender) client-ip=91.211.164.37;
Authentication-Results: mx.google.com;
       spf=pass (google.com: domain of bounce@ldlc.com designates 91.211.164.37 as permitted sender) smtp.mail=bounce@ldlc.com;
       dkim=pass header.i=@ldlc.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
	s=ldlc;
	d=ldlc.com;
	h=domainkey-signature:from:date:subject:to:reply-to:mime-version:x-mailer:message-id:list-unsubscribe:precedence:content-type;
	bh=mpa7Oll5E49NdQNUY9pa8Bn7FbK/urHNTduzaBpcq+o=;
	b=n1hyqIaycSqjn/P6YLDWF0m78Mcq9Fpc/fCHEEYmN0NBQGwI7O0Fp2bOcMVr7qSmf4doLb+djH+fFBLs/GIdVLFuWBMGFwAGC/y//FeTG0gsFcDUOezjqHS8+y+flJ7sruGQ5sBCythLIm4x89bJ3MeOANHDsPqGXonqOPQIPN4=
DomainKey-Signature: a=rsa-sha1; c=nofws; q=dns;
	s=ldlc;
	d=ldlc.com;
	h=From:Date:Subject:To:Reply-To:MIME-Version:X-mailer:Message-ID:List-Unsubscribe:Precedence:Content-Type;
	b=SnQH++o8v8kadujUUCbP1bJXFL5Kg3fWZq3UnL9cnqdirkdtgjD2j9bz+VH8e5Dr58dJ/hyBU2iEnI7YmYL5+LkARqjnDktepVl086GfroOAir1wy5ELELp8hKljiQGgt2AAKoxnlCTVkkPY6blvEuxfzohT8pHMVkt5XwdfyDo=
From: "LDLC NEWS" <mailing@ldlc.com>
Date: Tue, 17 Mar 2015 03:42:23 +0100
Subject: [LDLC] -10% sur tous les SSD
To: <riouallonvincent@gmail.com>
Reply-To: "LDLC NEWS" <mailing@ldlc.com>
MIME-Version: 1.0
X-mailer: nlserver, Build 6.1.0.8064
Message-ID: <NM60A5B87806E4CB1B1NEOPROD@ldlc.com>
List-Unsubscribe: <mailto: bounce@ldlc.com?subject=unsubscribe%3CNM60A5B87806E4CB1B1NEOPROD@ldlc.com%3E>
Precedence: bulk
Content-Type: multipart/alternative;
	boundary="----=_NextPart_121_387607A8.387607A8"

This is a multi-part message in MIME format.

------=_NextPart_121_387607A8.387607A8
Content-Type: text/plain;
	charset="windows-1252"
Content-Transfer-Encoding: 8bit

Une vitesse venue d'ailleurs
---

-10% sur tous les SSD avec le code OVNI

J'en profite >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe78





Pourquoi changer pour un SSD :
---

Votre SSD en vidéo


J'installe mon SSD dans mon PC

Voir la vidéo >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe79


J'installe mon SSD dans mon PC portable

Voir la vidéo >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe7a


Je clone mon disque dur

Voir la vidéo >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe7b




Profitez aussi de cette offre sur :
---
Belgique >>  http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe7c

Suisse >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe7d

Luxembourg >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe7e




Efficacité, simplicité : choisissez les nouveautés Brother >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe7f



_______________________________

*Offre valable uniquement pour les commandes passées en ligne sur www.ldlc.com du 17/03/15 au 18/03/15 minuit dans la limite des stocks disponibles. Réduction de 10% sur tous les disques SSD applicable avec le code "OVNI". Code promotion à indiquer dans le panier au moment de la validation de la commande. Offre limitée à une utilisation par personne, non valable en boutiques LDLC et non valable pour les professionnels.

_______________________________

Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée en 2004, vous bénéficiez d'un droit d'accès, de rectification et d\'opposition aux informations qui vous concernent, que vous pouvez exercer en vous adressant au CIL, Groupe LDLC.com, 18 chemin des Cuers - CS40207 - 69574 DARDILLY CEDEX ; Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
Pour ne plus recevoir les e-mails de LDLC.com, cliquez ici >> http://t.mailing.ldlc.com/r/?id=ta5b8780,6e4cb1b1,6e4cfe80&p1=riouallonvincent%40gmail.com
_______________________________

------=_NextPart_121_387607A8.387607A8
Content-Type: text/html;
	charset="windows-1252"
Content-Transfer-Encoding: quoted-printable

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv=3D"content-type" content=3D"text/html;charset=3Diso-8859-1=
">
<title>LDLC.com | Une vitesse venue d\'ailleurs : -10% sur tous les SSD avec=
 le code OVNI</title>
</head>
<body bgcolor=3D"#f0edce">
<table bgcolor=3D"#f0edce" width=3D"100%" style=3D"table-layout: fixed;">
  <tr>
    <td width=3D"100%" align=3D"center">

      <table border=3D"0" align=3D"center" cellpadding=3D"0" cellspacing=3D=
"0" width=3D"680">
        <tr>
          <td align=3D"center" valign=3D"top" width=3D"680"><font color=3D"=
#9d9d9d" face=3D"Arial" size=3D"1">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe5e&p1=3D%408p0fFkGn3hlA%2BC2RpTSmYse2vgiiPIKfnCfDTfFvLIE%3D" target=
=3D"_blank" _type=3D"mirrorPage" _label=3D"Page miroir" style=3D"color: #9d=
9d9d;">Voir la version en ligne</a>. Pour &ecirc;tre s&ucirc;r de recevoir =
toutes nos newsletters, ajoutez <a href=3D"mailto:mailing@ldlc.com" style=
=3D"text-decoration:underline;color: #9d9d9d;">mailing@ldlc.com</a>&nbsp;&a=
grave; vos contacts </font></td>
        </tr>
      </table>
      <table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" width=3D"680">
        <tr>
          <td width=3D"215" height=3D"80"></td>
          <td height=3D"80" width=3D"250" align=3D"center">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe5f"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/LDLC.png" alt=3D"LDLC.com, HIGH-TECH EXPERIENCE" width=3D"250" height=3D=
"100" style=3D"display: block;" border=3D"0"/></a></td>
          <td width=3D"215" height=3D"80"></td>
        </tr>
      </table>

      <table border=3D"0" align=3D"center" cellpadding=3D"0" cellspacing=3D=
"0" width=3D"680">
        <tr>
          <td height=3D"27" width=3D"89">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe60"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/menu-informatique.png" alt=3D"Informatique" width=3D"89" height=3D"27" s=
tyle=3D"display: block;" border=3D"0"/></a></td>
          <td height=3D"27" width=3D"92">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe61"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/menu-image-son.png" alt=3D"Image et son" width=3D"92" height=3D"27" styl=
e=3D"display: block;" border=3D"0"/></a></td>
          <td height=3D"27" width=3D"120">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe62"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/menu-telephonie-gps.png" alt=3D"T=E9l=E9phonie et GPS" width=3D"120" hei=
ght=3D"27" style=3D"display: block;" border=3D"0"/></a></td>
          <td height=3D"27" width=3D"111">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe63"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/menu-jeux-consoles.png" alt=3D"Jeux et consoles" width=3D"111" height=3D=
"27" style=3D"display: block;" border=3D"0"/></a></td>
          <td height=3D"27" width=3D"110">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe64"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/menu-consommables.png" alt=3D"Consommables" width=3D"110" height=3D"27" =
style=3D"display: block;" border=3D"0"/></a></td>
          <td height=3D"27" width=3D"93">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe65"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/menu-connectique.png" alt=3D"Connectique" width=3D"93" height=3D"27" sty=
le=3D"display: block;" border=3D"0"/></a></td>
          <td height=3D"27" width=3D"93">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe66"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/menu-logiciels.png" alt=3D"Logiciels" width=3D"65" height=3D"27" style=
=3D"display: block;" border=3D"0"/></a></td>
        </tr>
      </table>

      <table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" align=3D"cent=
er" width=3D"720">
        <tr>
          <td valign=3D"top">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe67"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/mailing-01.jpg" width=3D"720" height=3D"277" alt=3D"Une vitesse venue=
 d\'ailleurs " border=3D"0" style=3D"display:block;"/></a>
                    </td>
        </tr>
        <tr>
          <td valign=3D"top">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe68"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/mailing-02.jpg" width=3D"720" height=3D"294" alt=3D"-10% sur tous les=
 SSD avec le code OVNI" border=3D"0" style=3D"display:block;"/></a>
                    </td>
        </tr>
        <tr>
          <td valign=3D"top">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe69"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/mailing-03.jpg" width=3D"720" height=3D"152" alt=3D"J\'en profite" bor=
der=3D"0" style=3D"display:block;"/></a>
                    </td>
        </tr>
                <tr>
          <td valign=3D"top">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe6a"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/mailing-04.jpg" width=3D"720" height=3D"185" alt=3D"Marques" border=
=3D"0" style=3D"display:block;"/></a>
                    </td>
        </tr>
      </table>

      <table cellpadding=3D"0" cellspacing=3D"0" align=3D"center" width=3D"=
680" border=3D"0">
        <tr>
          <td height=3D"13" width=3D"680" style=3D"line-height:13px;font-si=
ze:13px;">&nbsp;</td>
        </tr>
      </table>

      <table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" align=3D"cent=
er" width=3D"720">
        <tr>
          <td valign=3D"top" colspan=3D"3">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe6b"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/guideSSD.jpg" width=3D"720" height=3D"216" alt=3D"Votre SSD en vid&ea=
cute;o" border=3D"0" style=3D"display:block;"/></a>
                    </td>
        </tr>
        <tr>
          <td valign=3D"top">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe6c"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/ssd1.jpg" width=3D"247" height=3D"401" alt=3D"J\'installe mon SSD dans=
 mon PC" border=3D"0" style=3D"display:block;"/></a>
                    </td>
                    <td valign=3D"top">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe6d"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/ssd2.jpg" width=3D"226" height=3D"401" alt=3D"J\'installe mon SSD dans=
 mon PC portable" border=3D"0" style=3D"display:block;"/></a>
                    </td>
                    <td valign=3D"top">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe6e"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/ssd3.jpg" width=3D"247" height=3D"401" alt=3D"Je clone mon disque dur=
" border=3D"0" style=3D"display:block;"/></a>
                    </td>
        </tr>
      </table>

      <table cellpadding=3D"0" cellspacing=3D"0" align=3D"center" width=3D"=
680" border=3D"0">
        <tr>
          <td height=3D"13" width=3D"680" style=3D"line-height:13px;font-si=
ze:13px;">&nbsp;</td>
        </tr>
      </table>

      <table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" width=3D"680">
        <tr>
          <td width=3D"279" height=3D"35">
            <img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/etranger.png" width=3D"279" height=3D"35" alt=3D"Profitez aussi de cette=
 offre sur :" border=3D"0" style=3D"display:block;"/></td>

          <td width=3D"35" align=3D"left" valign=3D"middle">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe6f"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/drapeau-belgique.png" width=3D"35" height=3D"35" alt=3D"Belgique" border=
=3D"0" style=3D"display:block;"/></a></td>
          <td width=3D"98" align=3D"left" valign=3D"middle">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe70" style=3D"color:#1150ba; text-decoration:none; font-family:Arial=
, Gotham, Helvetica, sans-serif; font-size:13px;">       =
     www.ldlc.be</a></td>

          <td width=3D"35" align=3D"left" valign=3D"middle">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe71"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/drapeau-suisse.png" width=3D"35" height=3D"35" alt=3D"Suisse" border=3D"=
0" style=3D"display:block;"/></a></td>
          <td width=3D"98" align=3D"left" valign=3D"middle">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe72" style=3D"color:#1150ba; text-decoration:none; font-family:Arial=
, Gotham, Helvetica, sans-serif; font-size:13px;">       =
     www.ldlc.ch</a></td>

          <td width=3D"35" align=3D"left" valign=3D"middle">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe73"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/template-=
nl/drapeau-luxembourg.png" width=3D"35" height=3D"35" alt=3D"Luxembourg" bo=
rder=3D"0" style=3D"display:block;"/></a></td>
          <td width=3D"98" align=3D"left" valign=3D"middle">
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe74" style=3D"color:#1150ba; text-decoration:none; font-family:Arial=
, Gotham, Helvetica, sans-serif; font-size:13px;">       =
     www.ldlc.lu</a></td>
        </tr>
      </table>

      <table cellpadding=3D"0" cellspacing=3D"0" align=3D"center" width=3D"=
680" border=3D"0">
        <tr>
          <td height=3D"13" width=3D"680" style=3D"line-height:13px;font-si=
ze:13px;">&nbsp;</td>
        </tr>
      </table>

      <table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" width=3D"680" >
        <tr>
          <td align=3D"center"  width=3D"680" height=3D"120" >
            <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b=
1,6e4cfe75"><img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
6-promos-whaa/encart-news-brother-imprimantes.jpg" alt=3D"#EnigmeLDLC" widt=
h=3D"680" height=3D"120" style=3D"display:block;" border=3D"0"/></a></td>
        </tr>
      </table>

      <table cellpadding=3D"0" cellspacing=3D"0" align=3D"center" width=3D"=
680" border=3D"0">
        <tr>
          <td height=3D"13" width=3D"680" style=3D"line-height:13px;font-si=
ze:13px;">&nbsp;</td>
        </tr>
      </table>

      <table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" width=3D"680" >
        <tr>
          <td align=3D"center"  width=3D"680" height=3D"190" >

            <img src=3D"http://media.ldlc.com/newsletters/ldlc/fr/2015-03-1=
7-SSD/jour2.png" width=3D"680" alt=3D"#EnigmeLDLC" style=3D"display:block;"=
 border=3D"0"/></td>
        </tr>
      </table>

      <table cellpadding=3D"0" cellspacing=3D"0" align=3D"center" width=3D"=
680" border=3D"0">
        <tr>
          <td height=3D"13" width=3D"680" style=3D"line-height:13px;font-si=
ze:13px;">&nbsp;</td>
        </tr>
      </table>

      <table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" align=3D"cent=
er" width=3D"680">
        <tr>
          <td width=3D"680" height=3D"13" style=3D"line-height:13px;font-si=
ze:13px;">&nbsp;</td>
        </tr>
      </table>
      <table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" align=3D"cent=
er" width=3D"680">
        <tr>
          <td align=3D"justify">
            <font style=3D"font-family:Arial; font-size:9px; color:#999999;=
">
              *Offre valable uniquement pour les commandes pass=E9es en lig=
ne sur <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb1b1,6e4=
cfe76" style=3D"color:#999999;text-decoration:none;">www.ldlc.com </a>du 17=
/03/15 au 18/03/15 minuit dans la limite des stocks disponibles. R&eacute;d=
uction de 10% sur tous les disques SSD applicable avec le code "OVNI". Code=
 promotion &agrave; indiquer dans le panier au moment de la validation de l=
a commande. Offre limit&eacute;e &agrave; une utilisation par personne, non=
 valable en boutiques LDLC et non valable pour les professionnels.<br/>
              <br>
              Conform&eacute;ment &agrave; la loi &quot;informatique et lib=
ert&eacute;s&quot; du 6 janvier 1978 modifi&eacute;e en 2004, vous b&eacute=
;n&eacute;ficiez d&rsquo;un droit d&rsquo;acc&egrave;s, de rectification et=
 d&rsquo;opposition aux informations qui vous concernent, que vous pouvez e=
xercer en vous adressant au CIL, Groupe LDLC.com, 18 chemin des Cuers - CS4=
0207 - 69574 DARDILLY CEDEX ; Vous pouvez &eacute;galement, pour des motifs=
 l&eacute;gitimes, vous opposer au traitement des donn&eacute;es vous conce=
rnant.<br>
              <a href=3D"http://t.mailing.ldlc.com/r/=3Fid=3Dha5b8780,6e4cb=
1b1,6e4cfe77&p1=3Driouallonvincent%40gmail.com" style=3D"color:#999999;" _l=
abel=3D"Lien de d=E9sinscription" _type=3D"optout">Pour ne plus recevoir le=
s e-mails de LDLC.com, cliquez ici</a>.<br/><br/>
            </font>
          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>
</body>
</html>

------=_NextPart_121_387607A8.387607A8--

        ';



//        PARTIE ENVOI DE MAIL AVEC PEAR MAIL


/*        $from_test = "<no-reply@moviezen.fr>";
        $to_test = $to;
        $subject_test = $subject;
        $message_test = '

       <html><body><p>Vous voulez vous désinscrire pour la séance "'.$seance.'" du '.$date.'.</p>
       <a href="www.moviezen.fr/views/desinscription.php?codedesin='.$temp.'">Cliquez ici pour vous désinscrire</a></body></html>;

        $host = "localhost";
        $port = "25";
        $mime = new Mail_mime();
        $mime->setHTMLBody($message_test);
        $message_test = $mime->get();
        $headers_test = array("From" => $from_test, 'To'=>$to_test,'Subject'=>$subject_test);
        $smtp = Mail::factory('smtp',
                             array('host' => $host,
                                  'port' => $port,
                                  ));
        $mail_test = $smtp->send($to_test,$headers_test,$message_test);

*/



         // Envoi
         mail("riouallonvincent@gmail.com", "Message Portfolio", $messagef, $headers);

                                    ?>
