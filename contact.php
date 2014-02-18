<!doctype html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="Author" content="Vincent Riouallon" />
	<meta name="robots" content="all, index, follow" /> 
	<title>Vincent RIOUALLON</title>
	<link rel="stylesheet" href="CSS/menu.css" type="text/css" />
	<link rel="stylesheet" href="CSS/style.css" type="text/css" />
	<link rel="stylesheet" href="CSS/font.css" type="text/css" />
	
</head>
<body>
	<?php include("menu.php"); ?>
		<div id="page">
		<h2>Contact</h2>

	
		
		<form id="form" method="POST" action="mailto:vincent.riouallon@isen.fr?subject=Stage"  enctype="text/plain">
			<fieldset>
			<legend>Vos Coordonnées</legend>
			<p>
				<label for="Nom">Votre Nom :</label><input type="text" name="Nom" id="Nom" placeholder="Dupond" required/>
			</p>
			<p>
				<label for="Prenom">Votre Prenom :</label><input type="text" name="Prenom" id="Prenom" placeholder="Charles" required/>
			</p>
			<p>
				<label for="mail">Votre mail :</label><input type="email" name="email" id="mail" placeholder="charles.dupond@mail.com" required/>
			</p>
			<p>
				<label for="tel">Votre numéro de téléphone :</label><input type="tel" name="tel" id="tel" placeholder="0123456789" required/>
			</p>
			</fieldset>
			<fieldset>
			<legend>Message</legend>
			<p>
				<label for="message"></label><br />
				<textarea name="message" id="message"  rows="10" cols="75" placeholder="Bonjour, " required></textarea>
			</p>
			</fieldset>
			<p>
				<input type="submit" value="Envoyer"/>
				<input type="reset" value="Tout effacer" />
			</p>
		</form>
	</div>
</body>
</html>