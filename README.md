# kbc
a simple kbc game(quiz)
<!DOCTYPE html>
<html>
<head>
        <meta name="veiwport" content="width=device-width,initial-scale=1">
	<title>Simple quiz</title>
	<link rel="stylesheet" href="simple_quiz.css">
        <script src="simple_quiz.js"></script>
</head>
<body>
	<div id="container"><div class="parallax"></div>
        <header>
        	<h1>QUIZ</h1>
        	<p>Test your <strong>Technical </strong>knowledge</p>
        </header>
        <section>
        	<div id="results"></div>
        	<form id="quizform" onsubmit="return submitAnswers()">
        		<h3 class="font">1.Which was the first search engine on internet</h3>
        		<input type="radio" name="q1" value="a" id="q1a"> a. Google<br>
        		<input type="radio" name="q1" value="b" id="q1b"> b. Archie<br>
        		<input type="radio" name="q1" value="c" id="q1c"> c. ALtavista<br>
        		<input type="radio" name="q1" value="d" id="q1d"> d. WAIS<br>

        		<h3 class="font">2. The first computer virus is known as:</h3>
        		<input type="radio" name="q2" value="a" id="q2a"> a. Creeper virus<br>
        		<input type="radio" name="q2" value="b" id="q2b"> b. Rabbit<br>
        		<input type="radio" name="q2" value="c" id="q2c"> c. Elk Cloner<br>
        		<input type="radio" name="q2" value="d" id="q2d"> d. SCA Virus<br>

        		<h3 class="font">3. 1024 bit equals how many bytes</h3>
        		<input type="radio" name="q3" value="a" id="q3a"> a. 1 byte<br>
        		<input type="radio" name="q3" value="b" id="q3b"> b. 128 byte<br>
        		<input type="radio" name="q3" value="c" id="q3c"> c. 32 byte<br>
        		<input type="radio" name="q3" value="d" id="q3d"> d. 64 byte<br>

        		<h3 class="font">4. Where is the headquater of microsoft located?</h3>
        		<input type="radio" name="q4" value="a" id="q4a"> a. Texas<br>
        		<input type="radio" name="q4" value="b" id="q4b"> b. Washington<br>
        		<input type="radio" name="q4" value="c" id="q4c"> c. New York<br>
        		<input type="radio" name="q4" value="d" id="q4d"> d. California<br>

        		<h3 class="font">5. .gif is an extension of:</h3>
        		<input type="radio" name="q5" value="a" id="q5a"> a. Video<br>
        		<input type="radio" name="q5" value="b" id="q5b"> b. Image<br>
        		<input type="radio" name="q5" value="c" id="q5c"> c. Audio<br>
        		<input type="radio" name="q5" value="d" id="q5d"> d. Word<br>

        		<h3 class="font">6. Which computer program converts Assembly language to Machine language?</h3>
        		<input type="radio" name="q6" value="a" id="q6a"> a. Interpreter<br>
        		<input type="radio" name="q6" value="b" id="q6b"> b. Compiler<br>
        		<input type="radio" name="q6" value="c" id="q6c"> c. Assembler<br>
        		<input type="radio" name="q6" value="d" id="q6d"> d. Comparator<br>

        		<h3 class="font">7. A folder in Windows cannot be made with name:</h3>
        		<input type="radio" name="q7" value="a" id="q7a"> a. can<br>
        		<input type="radio" name="q7" value="b" id="q7b"> b. made<br>
        		<input type="radio" name="q7" value="c" id="q7c"> c. make<br>
        		<input type="radio" name="q7" value="d" id="q7d"> d. con<br>

        		<h3 class="font">8. What is the size of a word document created?</h3>
        		<input type="radio" name="q8" value="a" id="q8a"> a. 1MB<br>
        		<input type="radio" name="q8" value="b" id="q8b"> b. 32MB<br>
        		<input type="radio" name="q8" value="c" id="q8c"> c. 64MB<br>
        		<input type="radio" name="q8" value="d" id="q8d"> d. 128MB<br>

        		<h3 class="font">9. What is the number of primary partitions created on a hard-disk?</h3>
        		<input type="radio" name="q9" value="a" id="q9a"> a. 1<br>
        		<input type="radio" name="q9" value="b" id="q9b"> b. 2<br>
        		<input type="radio" name="q9" value="c" id="q9c"> c. 3<br>
        		<input type="radio" name="q9" value="d" id="q9d"> d. 4<br>

        		<h3 class="font">10. Which company first developed tha Java programming language?</h3>
        		<input type="radio" name="q10" value="a" id="q10a"> a. Google<br>
        		<input type="radio" name="q10" value="b" id="q10b"> b. Microsoft<br>
        		<input type="radio" name="q10" value="c" id="q10c"> c. IBM<br>
        		<input type="radio" name="q10" value="d" id="q10d"> d. Sun Microsystems<br><br>

        		<input type="submit" value="Submit Answers">
        	</form>
        </section><br><br>
        <footer>Copyright &copy;2020 All Rights Reserved</footer>

</body>
</html>
