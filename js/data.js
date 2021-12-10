let api = "https://api.jsonbin.io/b/61b380bd01558c731cd1e425";

let key = "$2b$10$BNk2NfD6YHjUH0E9g5V67eSJDZso/Ow0QUupLrd1yC1.a3bmzleb2";

class Data {
    static async getLists() {
      let listItems;
    //   await fetch(api)
    //     .then((response) => response.json())
    //     .then((responseAsJson) => {
    //       listItems = responseAsJson;
    //     })
    //     .catch((error) => {
    //       console.log("An Error Occurred:", error);
    //     });

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };
    
    req.open("GET", "https://api.jsonbin.io/v3/b/61b380bd01558c731cd1e425", true);
    req.setRequestHeader("X-Master-Key", "$2b$10$E6c.lmTCy/qwgQStLhxGG.McD5i03tKSZ4ag74eZNljef2u7fJAo6");
    req.send();
      return listItems;
    }
}