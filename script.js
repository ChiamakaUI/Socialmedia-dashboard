let toggler = document.getElementById("toggle_mode");

toggler.addEventListener("change", toggleTheme);

function toggleTheme() {
  console.log(toggler.checked);

  let header = document.getElementById("header");
  let mainCard = document.querySelectorAll(".total_followers");
  let subCard = document.querySelectorAll(".pages");
  let headingText = document.querySelectorAll(".bold_text");
    let paragraphText = document.querySelectorAll(".normal_text");
    let themeText = document.getElementById("mode_text");

    if (toggler.checked == true) {
      
    document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
        themeText.innerHTML = 'Light Mode';

    for (let i = 0; i < mainCard.length; i++) {
      mainCard[i].style.backgroundColor = "hsl(228, 28%, 20%)";
    }

    for (let j = 0; j < subCard.length; j++) {
      subCard[j].style.backgroundColor = "hsl(228, 28%, 20%)";
    }

    for (let k = 0; k < headingText.length; k++) {
      headingText[k].style.color = "hsl(0, 0%, 100%)";
    }

    for (let l = 0; l < paragraphText.length; l++) {
      paragraphText[l].style.color = "hsl(228, 34%, 66%)";
    }
    } else {
        
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        themeText.innerHTML = "Dark Mode";

    for (let i = 0; i < mainCard.length; i++) {
      mainCard[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    }

    for (let j = 0; j < subCard.length; j++) {
      subCard[j].style.backgroundColor = "hsl(227, 47%, 96%)";
    }

    for (let k = 0; k < headingText.length; k++) {
      headingText[k].style.color = "hsl(230, 17%, 14%)";
    }

    for (let l = 0; l < paragraphText.length; l++) {
      paragraphText[l].style.color = "hsl(228, 12%, 44%)";
    }
  }
}
