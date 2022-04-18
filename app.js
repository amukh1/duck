var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let xx = eval(this.responseText)
        console.log(xx)
        for(i=0;i<this.responseText.length;i++){
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `Username: ${xx[i].UserName} | Score: ${xx[i].Kills} | Rank: #${i + 1}`;
            document.getElementById("scores").appendChild(newDiv);
        }
    }
};
xhttp.open("GET", "https://api.amukh1.dev/getAll", true);
xhttp.send();

