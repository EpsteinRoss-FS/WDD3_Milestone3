let api = "https://api.npoint.io/9d9a33985bc8d000eb50";

// let key = "$2b$10$BNk2NfD6YHjUH0E9g5V67eSJDZso/Ow0QUupLrd1yC1.a3bmzleb2";

class Data {
    static async getLists() {
        let listItems;
        await fetch(api)
            .then((response) => response.json())
            .then((responseAsJson) => {
                listItems = responseAsJson;
            })
            .catch((error) => {
                console.log("An Error Occurred:", error);
            });

        return listItems

    }
}