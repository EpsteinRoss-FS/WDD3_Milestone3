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

              
      var faireListLink = document.querySelectorAll(".faireListLink");
      var faireSearchLink = document.querySelectorAll(".faireSearchLink");
      var homeLink = document.querySelectorAll(".homeLink");
      
      
      faireListLink[0].addEventListener("click", (e) => this.listFaires(e));
      faireSearchLink[0].addEventListener("click", (e) => this.searchPage(e));
      homeLink[0].addEventListener("click", (e) => this.homeLink(e));

    }
      


    listFaires() {
      console.log("faireListClicked");
    }

    searchPage(){
      console.log("searchLinkClicked");
    }

    homeLink(){
      console.log("homeWasClicked");
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


