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
    constructor() {
        console.log("Controller initialized...");
        (this.model = new Model()),
            (this.view = new View()),
            this.faireList;

        this.getLists();

        this.content = document.getElementById("content");


        let faireListLink = document.querySelectorAll(".faireListLink");
        let faireSearchLink = document.querySelectorAll(".faireSearchLink");
        let homeLink = document.querySelectorAll(".homeLink");


        faireListLink[0].addEventListener("click", (e) => this.listFaires(e));
        faireSearchLink[0].addEventListener("click", (e) => this.searchPage(e));
        homeLink[0].addEventListener("click", (e) => this.homeLink(e));
    }



    listFaires() {
        console.log("faireListClicked");

        let displayFaires = new Event("displayFaires");

        displayFaires.faireList = this.faireList;

        document.dispatchEvent(displayFaires);

        for (let i = 0; i < this.faireList.length; i++) {

            // let element = document.getElementById("faire-id-" + (i+1)).parentElement.children[0].children[0].innerHTML;
            let element = document.getElementById("faire-id-" + (i + 1));
            element.addEventListener("click", (e) => this.viewMoreClicked(i));
        }

    }

    searchPage() {
        console.log("searchLinkClicked");
    }

    homeLink() {
        console.log("homeWasClicked");
    }

    async getLists() {
        this.faireList = await Data.getLists();
        console.log("Faire list is: " + this.faireList);
    }

    viewMoreClicked(e) {

        let displaySingleFaire = new Event("displaySingleFaire");
        displaySingleFaire.selectedFaire = this.faireList[e];
        document.dispatchEvent(displaySingleFaire);
    }
}

class Model {
    constructor() {
        let lists;
        console.log("Model initialized...");
    }
}

class View {
    constructor() {
        console.log("View Initialized...");

        this.html;
        document.addEventListener("displayFaires", (e) => this.displayFaires(e));

        document.addEventListener("displaySingleFaire", (e) => this.displaySingleFaire(e));

    }

    displayFaires(e) {
        let faires = e.faireList;


        this.html = Utils.faireListHTML(faires);
        let content = document.getElementById("content");

        content.innerHTML = this.html;
    }

    displaySingleFaire(e) {
        this.html = Utils.singleFairePage(e);
        content.innerHTML = this.html;

    }
}

window.addEventListener('load', function(event) {

    (function() {
        this.app = App.getInstance();
    })();
})