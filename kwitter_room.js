

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username;

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCfHeLdTqvCrahJflhxBu2VHj_CgFFir1g",
      authDomain: "speeed-73707.firebaseapp.com",
      databaseURL: "https://speeed-73707-default-rtdb.firebaseio.com",
      projectId: "speeed-73707",
      storageBucket: "speeed-73707.appspot.com",
      messagingSenderId: "904019596812",
      appId: "1:904019596812:web:132549b24e4df6614a4029"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function addRoom() {
      window.location = "kwitter_page.html";
}

