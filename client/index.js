document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4002/api/compliment/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};


document.getElementById("fortuneButton").onclick = function () {
        axios.get("http://localhost:4002/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

document.getElementById("fortuneButton").submit = function () {
        axios.delete("http://localhost:4002/api/fortune/")
        .then(function (response) {
            const data = response.data;
            prompt(data)
        })
}

document.getElementById('userSubmit').submit = function () {
        axios.post("http://localhost:4002/api/users/")
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }
);
















