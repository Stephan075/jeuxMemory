var GameManager = function(){
    var_this = this;
    //
    this.timeDisplay = '<div id="time-display"></div>';
    // Méthdes
    this.initTime = function(){
        //Ajout de l'élement dans l'html
        document.getElementsByName(".container")[0].innerHTML = this.timeDisplay
    }

};