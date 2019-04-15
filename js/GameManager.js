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
        //On  incrémente de 1 seconde
        var secondes = parseInt(ts[1])+1;
        //On récupère les minutes
        var minutes = parseInt(ts[0])

        //Vérifier si les secondes son à 60 (avec un modulo pour l'exercice de style)
        if(secondes % 60==0){
            minutes++;
            secondes = 0;
        }

        // On vérifie si le nombre est inférieur à 10
        if(secondes <10) secondes = "0"+secondes;
        if(minutes==2) console.log("gameOver");

        // On vérifie si le nombre est inférieur à 10 on ajoute un "0"
        if(minutes <10) minutes = "0"+minutes;
        

        //Réinjection du resultat dans le DOM
        _this.time.innerHTML = minutes + ":" +secondes;
        
    }

    // Appel de la méthode.
    this.initTime();
    this.initDisplay();



};