// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDFV0GfZqZrHhLgtP_dEFZwiPLq3074qz8",
    authDomain: "valwithorphans.firebaseapp.com",
    databaseURL: "https://valwithorphans-default-rtdb.firebaseio.com",
    projectId: "valwithorphans",
    storageBucket: "valwithorphans.appspot.com",
    messagingSenderId: "934499208463",
    appId: "1:934499208463:web:329106a0012d7bff9e427a",
    measurementId: "G-HT76JMY76Q"
};
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
//firebase.analytics(); 

getData();

function submitForm() {
    // Initiate Variables With Form Content 
    var mname = $("#name").val().toString();
    var mphone = $("#phone").val().toString();
    var mdate = $("#date-picker").val().toString();
    var amont = $("#amont").val().toString();
    var mmessage = $("#message").val().toString();

    if (mname == "" || mphone == "" || mdate == "" || amont == "" || mmessage == "") {
        submitMSG(false, "Did you fill in the form properly?");
    }
    else {
        firebase.database().ref("VERIFIED_PAYMENT/").push({
            Name: mname,
            Phone_No: mphone,
            Date_of_Donation: mdate,
            Amount: amont,
            Message: mmessage
        }, function (error) {
            if (error) {
                window.alert("Error! Unable to post your donation!");
                submitMSG(false, "Error! Unable to post your donation!")
            } else {
                formSuccess();
            }
        });
    }
    // getData();
}

function getData() {
    firebase.database().ref('VERIFIED_PAYMENT').once('value', function (mresponse) {
        mresponse.forEach(function (child) {
            //child.Date_of_Donation = new Date(child.Date_of_Donation).toLocaleDateString('en-GB');
            var childKey = child.key;
            var Name = child.val().Name;
            var Phone_No = child.val().Phone_No;
            var Date_of_Donation = child.val().Date_of_Donation;
            var Amount = child.val().Amount;
            var Message = child.val().Message;
            var model = {
                Name: Name, Phone_No: Phone_No,
                Date_of_Donation: Date_of_Donation, Amount: Amount, Message: Message
            };
            //console.log(model);
            viewModel.AgentDataSource.data().push(model);
            //console.log(viewModel.AgentDataSource);
            //document.getElementById("data").innerHTML = data;
        });
    })
}

function formSuccess() {
    $("#reservationForm")[0].reset();
    window.alert("You donation has been sucessfully submitted for approval.");
    submitMSG(true, "You donation has been sucessfully submitted for approval.")
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
