var GameManager = function(){
    var _this = this;
    //créer le div #time-display
    this.timeDisplay = '<div id="time-display"></div>';
    this.container;
    this.timer;
    // Méthdes
    this.initTime = function(){
       // console.log(document.getElementsByClassName("container"));
        
        //Ajout de l'élement dans l'html
        this.container = document.getElementsByClassName("container")[0];
        this.container.innerHTML = _this.timeDisplay;
        // mettre en place des chiffres 0:00
        document.getElementById("time-display").innerHTML = "00:00";
        this.timer = setInterval(this.changeTimeDisplay, 1000);
    }
    //
    this.initDisplay = function (){
        //Redimension du container pour qu'il fasse la hauteur de l'écran
       this.container.style.height = window.innerHeight + "px"
    }
    //Listener
    this.changeTimeDisplay = function (){
        console.log("une Seconde !!!");
        
    }

    // Appel de la méthode.
    this.initTime();
    this.initDisplay();

};