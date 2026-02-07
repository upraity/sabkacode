<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <title>Nav Bar</title>
    <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "otqed8ed9r");
</script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            
        }

        header {
            background-color: #3498db;
            color: #fff;
            text-align: center;
            padding: 1em;
        }

        header img{
            height:10%;
            width:10%;
        }

        nav {
            background-color: #2c3e50;
            color: #fff;
            text-align: center;
            padding: 0.5em;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            padding: 0.5em 1em;
            display: inline-block;
        }

        nav a:hover {
           // background-color: #555;//#2c3e50;
           background-color: rgba(0, 0, 0, 0.4);
        }

        nav .dropdown {
            display: inline-block;
        }

        nav .dropdown-content {
            display: none;
            position: absolute;
            background-color: #2c3e50;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        nav .dropdown:hover .dropdown-content {
            display: block;
        }

        main {
            padding: 20px;
        }

        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background-color: #ecf0f1;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
        }

        .card:hover {
            background-color: #3498db;
            color: #fff;
        }

        footer {
            background-color: #34495e;
            color: #fff;
            text-align: center;
            padding: 1em;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        a{
            text-decoration:none;
            color:black;
        }
        .goto{
            background-color: #4caf50;
            color: #fff;
            padding: 15px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 19px;
            transition: background-color 0.3s ease;
            position: fixed;
            bottom: 60px;
            right: 20px;
            height:53px;
        }
         .goto:hover{
            background-color:#3498db;
        }
         .whats{
            background-color: #4caf50;
            color: #fff;
            padding: 12px 13.5px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 30px;
            transition: background-color 0.3s ease;
            position: fixed;
            bottom: 70px;
            right: 20px;
            height:57px;

        }
         .whats1:hover{
            background-color:#3498db;
        }
         .whats1 {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 11px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 35px;
            transition: background-color 0.3s ease;
            position: fixed;
            bottom: 140px;
            right: 20px;
            height: 57px;
            width:53.5px;
        }
         .whats:hover{
            background-color:#3498db;
        }
        .whats2 {
            /* background-color: #4caf50; */
            /* color: #fff; */
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 30px;
            transition: background-color 0.3s ease;
            position: fixed;
            bottom: 205px;
            right: 20px;
            height: 55px;
        }
         .whats2:hover{
            background-color:#3498db;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

    table {
      width: 100%;
      border-collapse: collapse;
      animation: fadeIn 2s ease; /* Apply the animation to the table */
    }

    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    main h2{
        color:#3498db;
    } 
    .program p {
        text-indent:center;
    }
    .p{
    font-weight: bold;
    color: red;
    font-family: Monospace, Verdana, Geneva, Tahoma, sans-serif;
    }
    .down {
    width: 30%;
    height: 50px;
    background-color: #3498db;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    color:white;
    font-weight:bold;
    }
    #pageCount{
        color:transparent;
    }
    </style>
</head>

<body>

    <header>
        <!--<img src="1.png" alt="SabkaCode Logo">-->
        <h1>SabkaCode</h1>
        <p>with coding</p>
        <!-- Placeholder for logo image -->
        
    </header>

    <nav>
        <a href="https://sabkacode.artizote.com">Home</a>
        <div class="dropdown">
	    <a href="/notes">Notes</i></a>
            <!--<div class="dropdown-content">
                <a href="https://dj.000.pe/c">C</a><br>
                <a href="https://dj.000.pe/html">Html</a><br>
                <a href="https://dj.000.pe/maths">Maths</a><br>
                <a href="https://dj.000.pe/de">DE</a><br>
                <a href="https://dj.000.pe/cpp">Cpp</a><bR>
                <a href="https://dj.000.pe/dsa">DSA</a><br>
                <a href="https://dj.000.pe/nm">NM</a><br>
                <a href="https://dj.000.pe/os">OS</a><br>
                <a href="https://dj.000.pe/coa">COA</a><br>
                <a href="https://dj.000.pe/dbms">DBMS</a><br>
                <a href="https://dj.000.pe/stats">Stats</a><br>
                <a href="https://dj.000.pe/php">PHP</a><br>                
                <a href="https://dj.000.pe/java">JAVA</a><br>
                <a href="https://dj.000.pe/ai">AI</a><br>
            </div>-->
        </div>
        <div class="dropdown">
            <a href="#">Resources</i></a>
            <div class="dropdown-content">
                <!--<a href="#">Result</a><br>
                <a href="">Projects</i>
                    <ul>
                        <li>qUizZY LoOP</li>
                        <li>Add Data</li>
                    </ul>
		</a>-->
		<a href="/jee">Jee Paper</a><br>
                <a href="https://dj.000.pe/admitcard">Admitcard</a><br>
                <a href="https://dj.000.pe/frontpage">Front Page</a><br>
		<a href="/p">Previous Papers</a><br>
		<a href="https://djupraity.artizote.com/encrypt">d&Encrypt Tool</a><br>
        <a href="https://whatsapp.com/channel/0029VaElLRrAYlUMk0qIHX1G">Join Channel</a><br>
	    </div>
        </div>
        <a href="/contactus">Contact Us</a>
      
    </nav>
    <button class="whats1" onclick="tele()"><i class="fa-brands fa-telegram"></i></button>
    <img class="whats2" src="https://htmlify.me/djdj/youtube/arattai-logo.png" width="55px" height="55px" onclick="arattai()">
    <button class="whats" onclick="whats()"><i class="fab fa-whatsapp whatsapp-icon"></i></button>
    <!--<button class="goto" onclick="goto()">Go</button>-->

    <footer>
        <!-- Add footer content, copyright information, etc. -->
        &copy; 2025 SabkaCode. All rights reserved.
    </footer>
    <script src="counter.js">hello</script>
<script>
    /*function goto(){
        window.location.href = "https://dj.000.pe/old";
    }*/
    function whats(){
        window.location.href = "https://wa.me/918938870794";
        // window.location.href = "https://whatsapp.com/channel/0029VaElLRrAYlUMk0qIHX1G";
    }
    function tele(){
        window.location.href = "https://t.me/sabkacode";
    }
    function arattai(){
        window.location.href = "https://chat.arattai.in/groups/n43545f313238383531313639383036383535383136355f32303030353332363533342d47437c3031303134303039303132333137363136323533383832353530";
    }
</script>
</body>
</html>

