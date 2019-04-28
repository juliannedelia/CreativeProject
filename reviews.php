<!DOCTYPE html>
<html>
<head>
	<title>Reviews</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="reviews.css">
</head>
<body>

	<?php

		$nameErr = $emailErr = $starsErr =  "";
		$name = $email = $stars = $comment =  "";

		if ($_SERVER["REQUEST_METHOD"] == "POST") 
		{
		  //check name
		  if (empty($_POST["name"])) 
		    {
		      $nameErr = "Name is required";
		    } 
		    else 
		    {
		      $name = test_input($_POST["name"]);
		      if (!preg_match("/^[a-zA-Z ]*$/",$name)) 
		      {
		        $nameErr = "Only letters and white space allowed"; 
		      }
		    }

		  //check email
		  if (empty($_POST["email"])) 
		  {
		    $emailErr = "Email is required";
		  } 
		  else 
		  {
		    $email = test_input($_POST["email"]);
		    if (!preg_match("/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/", $email)) 
		    {
		      $emailErr = "Invalid email format"; 
		    }
		  }

		  //check comment
		  if (empty($_POST["comment"])) 
		  {
		    $comment = "";
		  } 
		  else 
		  {
		    $comment = test_input($_POST["comment"]);
		  }

		  //check stars
		  if (empty($_POST["stars"])) 
		  {
		    $starsErr = "Rating is required";
		  } 
		  else 
		  {
		    $stars = test_input($_POST["stars"]);
		  }
		}

		function test_input($data) {
		  $data = trim($data);
		  $data = stripslashes($data);
		  $data = htmlspecialchars($data);
		  return $data;
		}

		$txt = "reviews.txt"; 
		if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comment']) && isset($_POST['stars'])) 
		{ 
			$fh = fopen($txt, 'a'); 
			$txt = '-- NEW REVIEW -- ' . "\n" . 'Name: ' . $_POST['name'] . "\n" . 'Email: ' . $_POST['email'] . "\n" . 'Comment: ' . $_POST['comment']. "\n" . $_POST['stars'] . '/5 stars ' . "\n"; 
			fwrite($fh,$txt); 
			fclose($fh); 
		}

		$opentxt = fopen("reviews.txt", "r") or die("Unable to open file!");

	?>

	<nav id="menu">
	<ul> 
		<li> <a href="index.html"> Home </a> </li> 
		<li> <a href="resume.html"> Resume </a> </li>
		<li> <a href="photogallery.html"> Photo Gallery </a> </li>
		<li> <a href="contact.html"> Contact </a> </li>
		<li> <a href="reviews.php">Reviews </a> </li>
	</ul>
	</nav>

	<h1>Reviews</h1>
	<p id="description">I hope you enjoyed visiting my site! If you like what you see, please feel free to leave a rating and review! Just enter your name, your email, a rating out of 5 stars, and a comment about what you liked the best! </p>

	<div id="forum">
	<h2>Leave a Review!</h2>
	<p><span class="error">* required field</span></p>
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
		Name: <input type="text" name="name" value="<?php echo $name;?>">
		<span class="error">* <?php echo $nameErr;?></span>
  	<br><br>
 
  		E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  		<span class="error">* <?php echo $emailErr;?></span>

  	<br><br>

  		Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  	
  	<br><br>

  		Stars:
  		<input type="radio" name="stars" <?php if (isset($stars) && $stars=="1") echo "checked";?> value="1">1
  		<input type="radio" name="stars" <?php if (isset($stars) && $stars=="2") echo "checked";?> value="2">2
  		<input type="radio" name="stars" <?php if (isset($stars) && $stars=="3") echo "checked";?> value="3">3 
  		<input type="radio" name="stars" <?php if (isset($stars) && $stars=="4") echo "checked";?> value="4">4
  		<input type="radio" name="stars" <?php if (isset($stars) && $stars=="5") echo "checked";?> value="5">5  
  		<span class="error">* <?php echo $starsErr;?></span>
  	<br><br>
  		<input type="submit" name="submit" value="Submit">  
	</form>
	</div>

	<div id="output">
	<?php
		echo "<h2>Your Input:</h2>";
		echo "Your name: " . $name;
		echo "<br>";
		echo "Your email: " . $email;
		echo "<br>";
		echo "Your comment: " . $comment;
		echo "<br>";
		echo $stars . "/5 stars";
	?>
	</div>
	
	<div id="reviewsoutput">
	<?php

		echo "<h2>Previous Reviews:</h2>"; 
		echo fread($opentxt, filesize("reviews.txt")) . "\n";
		fclose($opentxt);

	?>
	</div>

	<div id="backtotop">
		<p> <a href="#menu"> Back to top</a> </p>
	</div>

</body>
</html>








