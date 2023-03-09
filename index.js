function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  <div class="topnav" id="myTopnav">
        <a href="/">Home</a>
        <a href="#introduction" class="active">My Intro</a>
        <a href="#ProJects">Projects</a>
        <a href="#Skills">Skill</a>
        <a href="#contact">Contact me</a>
        <a href="./Images/Pratik_Kumar_resume.pdf" download>Resume</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
    </div> 