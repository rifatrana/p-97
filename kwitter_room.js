
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem ("user_name");

document.getElementById("user_name").innerHTML  = "Welcome"  + user_name + "!";
 
function addRoom()
{
      Room_name = document.getElementById ("room_name").value;
      firebase.database().ref("/").child(Room_name).update(
            {
                  purpose: "adding room name"
            }
      );
      localStorage.setItem("room_name" , Room_name);
      window.location = "kwitter_page.html" ;

}

function getData()
{
      firebase.database().ref("/").on ("value" , function(snapshot){doc
            Room_name = childKey;
            console.log("ROOM NAME - " + Room_names
            );
            row = " < div class = ' room_name' id=" +Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML+=row;
            
            
      }
      );
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
