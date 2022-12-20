// Get input values 
let fname = document.getElementById('name').value;
let email = document.getElementById('email').value;
let subject = "Feedback Email";
let message = document.getElementById('message').value;


function sendEmail() {
    console.log("Inside Email Fuctions")
	Email.send({
	Host: "smtp.gmail.com",
	Username : "pansaresamiksha@gmail.com",
	Password : "",
	To : 'pansaresamiksha@gmail.com',
	From : "pansaresamiksha@gmail.com",
	Subject : message + email + fname ,
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}


// const sendMail = (e) => {
//     e.preventDefault()
//     const message = encodeURIComponent(document.getElementById('message').value)
//     Email.send({
//         Host : "smtp.yourisp.com",
//         Username : "username",
//         Password : "password",
//         To : 'pansaresamiksha@gmail.com',
//         From : "you@isp.com",
//         Subject : encodeURIComponent("This is my subject"),
//         Body : message
//     }).then(
//       message => alert(message)
//     ).catch( err => {
//         alert(err)
//     });
// }