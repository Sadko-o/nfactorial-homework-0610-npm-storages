$(document).ready(function() {
    $("#formOne").submit(function(event) {
      $('#result').text("One day, my friend " + $('#personName').val() + " was visiting New York and ran into "  + $('#character').val() + ". " + $('#personName').val() + " ran "  +  $('#adverb').val() + " to meet " + $('#character').val() + ". But " + $('#character').val() + " turned out to be very "+ $('#adjective').val() + " and "+ $('#personName').val() + " did not enjoy the meeting.");
      $("#story").show();
      event.preventDefault();
    });

    $("#formTwo").submit(function(event) {
      var width = $('#width').val();
      var height = $('#height').val();
      var numColors = $('#colors').val();

      var bits; 
      if (numColors>=1 && numColors<=2) {
         bits=1;
      } else if (numColors>=3 && numColors<=4) {
         bits=2;
      } else if (numColors>=5 && numColors<=8) {
         bits=3;
      } else if (numColors>=9 && numColors<=16) {
         bits=4;
      } else if (numColors>=17 && numColors<=32) {
         bits=5;
      } else if (numColors>=33 && numColors<=64) {
         bits=6;
      } else if (numColors>=65 && numColors<=128) {
         bits=7;
      } else {
         bits=8;
      }

      var colorTableSize = numColors*3;
      var totalPixels = width*height;
      var bytes = (totalPixels * bits)/8;   
      var size = colorTableSize + bytes;
      var sizeBytes = size/1000;

      console.log(width);
      if (sizeBytes<50) {
        $('#result2').text("Success! Your file size is "+sizeBytes + " KB");
      } else {
        $('#result2').text("Fail! Your file size is " +sizeBytes+ " KB");
      }
      $("#res").show();
      event.preventDefault();
    });
  }
  

  );

  function setLightTheme(){
    localStorage.setItem("theme", "light");
    const root = document.getElementById("main")
    root.className = "light"
  }
  function setDarkTheme(){
    localStorage.setItem("theme", "dark");
    const root = document.getElementById("main")
    root.className = "dark"
  }

  function getValue(){
    const theme = localStorage.getItem("theme");
    const root = document.getElementById("main");
    document.cookie = "username=Johny Depp; expires=Wed, 22 Jun 2022 00:00:00 GMT";
    root.className = theme;
  }
