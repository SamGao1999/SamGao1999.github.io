var objPeople = [
    {
        username:"Sam",
        password:"Qq81881664"
    },
    {
        username:"Wilson",
        password:"password"
    },{
        username:"Alex",
        password:"xelA"
    },{
        username:"Guest",
        password:"123"
    },{
        username:"Maycol",
        password:"hahahajaja"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var status = false;

    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            alert(username + " is logged in.")
            status = true;
        }
    }

    if(status==false){
        alert("Login failed")
    }
    else{
        location.href = 'contact.html'
    }

}
