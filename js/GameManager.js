var GameManager = function(){
    var _this = this;
    //
    this.timeDisplay = '<div id="time-display"></div>';
    this.container;
    // Méthdes
    this.initTime = function(){
        //Ajout de l'élement dans l'html
        this.container = document.getElementsByClassName("container")[0];
        this.container.innerHTML = _this.timeDisplay;
        // mettre en place des chiffres 0:00
        document.getElementById("time-display".innerHTML = "00:00")
    }
    //
    this.initDisplay = function (){
        //Redimension du container pour qu'il fasse la hauteur de l'écran
       this.container.style.height
    }

    // Appel de la méthode.
    this.initTime();

};