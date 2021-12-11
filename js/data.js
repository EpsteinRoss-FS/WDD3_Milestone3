let api = "https://api.npoint.io/9d9a33985bc8d000eb50";

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