<?php
$headers = 'From: Artentica Portrfolio <no-reply@vincentriouallon.fr>' . "\r\n";


        $name= $_POST["name"];
        $business= $_POST["business"];
        $email= $_POST["email"];
        $phone= $_POST["phone"];
        $message= $_POST["message"];

        $messagef ='

       <html><body><p>Message de '.$name.' de la compagnie: '.$business.'.</p>
       <p>Contact number:</p>
       <ul>
            <li>Email: '.$email.'</li>
            <li>Num.: '.$phone.'</li>
       </ul>
       <p>'.$message.'</p>

       </body></html>';


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
