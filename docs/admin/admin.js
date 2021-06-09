/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
   return `<table > 
   <tr> 
       <td>Client:</td> 
       <td> ${d.userName} </td> 
   </tr> 
   <tr> 
   <td>E-mail:</td> 
   <td> ${d.userEmail} </td> 
</tr> 
<tr> 
<td>Year:</td> 
<td> ${d.userYear} </td> 
</tr> 
<td>Date:</td> 
<td>${d.userDate} </td> 
</tr> 
<tr> 
<td>Hour:</td> 
<td>${d.hour} </td> 
</tr> 
<tr> 
<td>Payment Method:</td> 
<td>${d.payment} </td> 
</tr> 
<tr> 
<td>Order:</td> 
<td>${d.userOrder} </td> 
</tr> 
<tr> 
<td>Id:</td> 
<td> ${d.id} </td> 
</tr> 
<tr> 
<td>Total:</td> 
<td> ${d.total} </td> 
</tr> 
<tr> 
<td>Products:</td> 
  <td>  
    
  ${d.products.map(function(product){
      console.log(d.products)
        return `<ul >
            <li>Product: ${product.name} </li>
            <li>Price: ${product.price } </li>
            <li>Quantity: ${product.quantity } </li>
            <li>Total: ${product.total } </li>

            </ul>`;
    })}</td>

</tr> 
   
</table>`;  
} // end format

$(document).ready(function() {
    setTimeout(function () {
        var table = $('#tableAdmin').DataTable({
            "data": finaldata,
            select:"single",
            "columns": [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": '',
                    "render": function () {
                        return '<i style="hover:pointer" class=" fa fa-plus-square" aria-hidden="true"></i>';
                    },
                    width:"15px"
                },
                { "data": "id" },
                { "data": "userOrder" },
                { "data": "userDate" },
                { "data": "userName" },
                { "data": "payment" },
                { "data": "total" }
    
            ],
            "order": [[1, 'desc']]
        });
         
        // Add event listener for opening and closing details
        $('#tableAdmin tbody').on('click', 'td.details-control', function () {
    
          
            var tr = $(this).closest('tr');
            var tdi = tr.find("i.fa");
            var row = table.row(tr);
     
            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                     tr.removeClass('shown');
                     tdi.first().removeClass(' fa-minus-square');
                     tdi.first().addClass(' fa-plus-square');
            }
            else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
                tdi.first().removeClass(' fa-plus-square');
                tdi.first().addClass(' fa-minus-square');
            }
        } ); 
    },4000)
} );

//--------------------------------------

 var firebaseConfig = {
    apiKey: "AIzaSyDyCW4etpqbBUiUpLE05pQYws7qsTDfNHc",
    authDomain: "test-e52bf.firebaseapp.com",
    databaseURL: "https://test-e52bf.firebaseio.com",
    projectId: "test-e52bf",
    storageBucket: "test-e52bf.appspot.com",
    messagingSenderId: "915499804726",
    appId: "1:915499804726:web:c156b5269c839ac21f9097"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var sales= []
firebase.firestore().collection("sales")
.onSnapshot(function(querySnapshot) {
    
        
        querySnapshot.forEach(function(doc) {
            console.log(doc.data())
            sales.push(doc.data())
        })
        finaldata=sales
});


