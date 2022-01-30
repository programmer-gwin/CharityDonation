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

<<<<<<< HEAD
function setData() {
    firebase.database().ref("PAYMENT_SUMMARY/").set({
        EducationPercentage: "0.00",
        FoodPercentage: "30.00",
        ShelterPercentage: "30.00",
        FundPercentage: "12.04",
        TotalDonationAmount: "60200",
        TotalDonationTarget: "500000",
    }, function (error) {
        if (error) {
            window.alert("Error! Unable to post your donation!");
        } else {
            window.alert("Success! Your donation has been posted successully!");
        }
    });
}

function getData() {
    firebase.database().ref('PAYMENT_SUMMARY').once('value', function (child) {
        var EducationPercentage = child.val().EducationPercentage;
        var FoodPercentage = child.val().FoodPercentage;
        var ShelterPercentage = child.val().ShelterPercentage;
        var FundPercentage = child.val().FundPercentage;
        var TotalDonationAmount = child.val().TotalDonationAmount;
        var TotalDonationTarget = child.val().TotalDonationTarget;
        var model = {
            EducationPercentage: EducationPercentage, FoodPercentage: FoodPercentage,
            ShelterPercentage: ShelterPercentage, FundPercentage: FundPercentage,
            TotalDonationAmount: TotalDonationAmount, TotalDonationTarget: TotalDonationTarget
        };
        //console.log(model);
        viewModel.SummaryData = model;
        setDataView(model);
    })
}

function setDataView(model) {
    $("#ProvidedEducation").width(model.EducationPercentage + "%");
    $("#ProvidedEducationText").text(model.EducationPercentage + "%");
    $("#FoodResources").width(model.FoodPercentage + "%");
    $("#FoodResourcesText").text(model.FoodPercentage + "%");
    $("#ShelterArrangement").width(model.ShelterPercentage + "%");
    $("#ShelterArrangementText").text(model.ShelterPercentage + "%");
    $("#FundUtilization").width(model.FundPercentage + "%");
    $("#FundUtilizationText").text(model.FundPercentage + "%");
    $("#DonationTargetText").text("₦ " + model.TotalDonationTarget);
    $("#TotalDonationText").text("₦ " + model.TotalDonationAmount);

    // var AmountCircleHTML = "<div style=\"display:inline;width:200px;height:200px;\"><canvas width=\"200\" height=\"200px\"></canvas><input type=\"text\" class=\"dial\" data-step=\"100\" data-fgcolor=\"#5cb85c\" data-thickness=\".3\" value=\""
    //     + model.TotalDonationAmount + "\" data-min=\"0\" data-max=\""
    //     + model.TotalDonationTarget + "\" data-displayprevious=\"true\" style=\"width: 104px; height: 66px; position: absolute; vertical-align: middle; margin-top: 66px; margin-left: -152px; border: 0px; background: none; font: bold 25px Arial; text-align: center; color: rgb(92, 184, 92); padding: 0px; appearance: none;\"></div>";
    //document.getElementById("TotalDonationAmountDiv").innerHTML = AmountCircleHTML;

    var AmountCircleHTML = "<div class=\"progress-circle p" + model.FundPercentage
        + "\"><span>" + model.FundPercentage + "%</span><div class=\"left-half-clipper\"><div class=\"first50-bar\"></div><div class=\"value-bar\"></div></div></div>";

    $("#TotalDonationAmountDiv").html(AmountCircleHTML);

}

=======
>>>>>>> 49e2db0566f65c1614b5a0d12e085d3a7590d9ac
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
<<<<<<< HEAD
        firebase.database().ref("UNVERIFIED_PAYMENT/").push({
=======
        firebase.database().ref("VERIFIED_PAYMENT/").push({
>>>>>>> 49e2db0566f65c1614b5a0d12e085d3a7590d9ac
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

<<<<<<< HEAD
function getDataList() {
=======
function getData() {
>>>>>>> 49e2db0566f65c1614b5a0d12e085d3a7590d9ac
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
