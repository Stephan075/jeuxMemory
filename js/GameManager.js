var GameManager = function(){
    var _this = this;
    //créer le div #time-display
    this.timeDisplay = '<div id="time-display"></div>';
    this.container;
    this.time;
    this.timer;
    
    // Méthdes
    this.initTime = function(){
       // console.log(document.getElementsByClassName("container"));
        
        //Ajout de l'élement dans l'html
        this.container = document.getElementsByClassName("container")[0];
        this.container.innerHTML = _this.timeDisplay;
        // mettre en place des chiffres 0:00
        this.time = document.getElementById("time-display");
        this.time.innerHTML = "00:00";
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
        //Récupération du temps affiché (string)
        var  td = _this.time.innerHTML;
        // On Casse la chaine de caractère (en retour on a un array de 2 colonnes [00,00])
        var ts = td.split(':');
        //
        var secondes = parseInt(ts[1])+1;

        //Réinjection du resultat dans le DOM
        _this.time.innerHTML = ts[0] + ":" +secondes;
        
    }

    // Appel de la méthode.
    this.initTime();
    this.initDisplay();

};