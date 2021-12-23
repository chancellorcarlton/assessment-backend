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

document.getElementById("formSubmit").submit = function () {
        axios.delete("http://localhost:4002/api/goal/")
        .then(function (response) {
            const data = response.data;
            prompt(data)
        })
}
















