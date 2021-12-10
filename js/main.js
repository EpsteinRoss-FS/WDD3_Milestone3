class App {
	constructor() {
	  console.log("Creating app...");
	  this.controller = new Controller();
	}
  
	static getInstance() {
	  if (!App.Instance) {
		App.Instance = new App();
  
		return App.Instance;
	  } else {
		throw "Error!  An app is already created!";
	  }
	}
  }


class Controller {
    constructor() 
    {
        console.log("Controller initialized...");
        (this.model = new Model()),
        (this.view = new View())

              
      var fairListLink = document.querySelectorAll(".faireListLink");
  
      console.log(fairListLink);
      fairListLink[0].addEventListener("click", (e) => this.listFaires(e) );
    }
      


    listFaires() {
      console.log("faireListClicked");
    }
}

class Model {
	constructor() 
    {
	  let lists;
	  console.log("Model initialized...");  
    }
}

class View {
    constructor()
    {
        console.log("View Initialized...");
        

        this.html;

    }
}


document.addEventListener('DOMContentLoaded', function(event) {
  (function() {this.app = App.getInstance();})();}
)


