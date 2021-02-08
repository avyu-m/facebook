//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCfHeLdTqvCrahJflhxBu2VHj_CgFFir1g",
      authDomain: "speeed-73707.firebaseapp.com",
      databaseURL: "https://speeed-73707-default-rtdb.firebaseio.com",
      projectId: "speeed-73707",
      storageBucket: "speeed-73707.appspot.com",
      messagingSenderId: "904019596812",
      appId: "1:904019596812:web:132549b24e4df6614a4029"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("sos").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("sos").value = " ";
}


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
