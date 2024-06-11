// import axios from 'axios';

// var em = "email";
// var fn = "firstname";
// var ln = "lastname";
// var phn = "phone";
// export default async function handler(req, res) {
//     console.log('aspl',req.body)
//     // const { firstname, lastname, email, number, company, text } = req.body;

//     payload = {
//       "properties": [
//         {
//           "property": "email",
//           "value": email
//         },
//         {
//           "property": "firstname",
//           "value": firstname
//         },
//         {
//           "property": "lastname",
//           "value": lastname
//         },
//         {
//           "property": "phone",
//           "value": number
//         }
        
//       ]
//     };

//     const { payload } = req.body;
//     // const url = "https://ashapurasoftechinc.myfreshworks.com/crm/sales/api/contacts";
//     const url = "https://api.hubapi.com/contacts/v1/contact/?hapikey=13e5b0e3-6cfc-4d10-87ab-382a72c10f36";
//     // var data = JSON.stringify({"contact":{"first_name":firstname,"last_name":lastname,"email":email,"mobile_number":number}});
//     var data = JSON.stringify(req.body);
//     // previous token >> 'Authorization': 'Token token=pzdFzpZTlphlBT6SpYEgsQ', 

//     var config = {
//     method: 'post',
//     url: 'https://api.hubapi.com/contacts/v1/contact/?hapikey=13e5b0e3-6cfc-4d10-87ab-382a72c10f36',
//     headers: { 
//         'Content-Type': 'application/json'
//     },
//     data : data
//     };

//     axios(config)
//     .then(function (response) {
//     console.log(JSON.stringify(response.data));
//     res.status(200).send(JSON.stringify(response.data))
//     })
//     .catch(function (error) {
//     console.log(error);
//     res.status(500).send(error.message)
//     });

//     //old method

//     // export default async function handler(req, res) {
//     //     console.log('aspl',req.body)
//     //     const { firstname, lastname, email, number, company, text } = req.body;
//     //     const url = "https://ashapurasoftechinc.myfreshworks.com/crm/sales/api/contacts";
//     //     // var data = JSON.stringify({"contact":{"first_name":firstname,"last_name":lastname,"email":email,"mobile_number":number}});
//     //     var data = JSON.stringify(req.body);
    
//     //     var config = {
//     //     method: 'post',
//     //     url: 'https://ashapurasoftechinc.myfreshworks.com/crm/sales/api/contacts',
//     //     headers: { 
//     //         'Authorization': 'Token token=pzdFzpZTlphlBT6SpYEgsQ', 
//     //         'Content-Type': 'application/json'
//     //     },
//     //     data : data
//     //     };
    
//     //     axios(config)
//     //     .then(function (response) {
//     //     console.log(JSON.stringify(response.data));
//     //     res.status(200).send(JSON.stringify(response.data))
//     //     })
//     //     .catch(function (error) {
//     //     console.log(error);
//     //     res.status(500).send(error.message)
//     //     });

// // old method ends here

//     // const data = await axios.post(url)
//     // res.status(200).send(data)
//     // const data = {
//     //     // Update the email here
//     //     to: 'example@gmail.com',
//     //     from: email,
//     //     subject: 'Hi there',
//     //     text: text,
//     //     html: `
//     //         <b>From:</b> ${name} <br /> 
//     //         <b>Number:</b> ${number} <br /> 
//     //         <b>Subject:</b> ${subject} <br /> 
//     //         <b>Message:</b> ${text} 
//     //     ` 
//     // };
//     // try {
//         // const response = await mailer.sendMail(data);
//         // const { firstname, lastname, email, number, company, text } = req.body;
//         // const payload = {"contact":{"first_name":firstname, "last_name":lastname, "email": email,"mobile_number":number}};
//         // await axios.post('https://ashapurasoftechinc.myfreshworks.com/crm/sales/api/contacts',{"contact":{"first_name":"James", "last_name":"Sampleton (sample)", "email": "aspltest34@gmail.com","mobile_number":"1-926-555-9303"}},{
//         //     'headers': {
//         //         'Content-Type': 'application/json',
//         //         'Authorization': 'Token token=pzdFzpZTlphlBT6SpYEgsQ'
//         //     }}).then((response) => {
//         //     res.status(200).send(response)
//         //     console.log('response',response)
//         // })
//         // .catch((error) => {
//         //     console.log('error',error)
//         //     res.status(500).send(error)
//         //     // dispatch({
//         //     //   type: ERROR_FINDING_USER
//         //     // })
//         // });
//     // } catch (error) {
//     //     console.log(error);
//     //     res.status(500).send("Error proccessing charge");
//     // }
// }
