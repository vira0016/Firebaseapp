            $(document ).ready(function() {
    
    LoadData();
    
    function LoadData(){
        moviesRef.get().then(function(querySnapshot) {
            LoadTableData(querySnapshot)
        });
    }
    function LoadTableData(querySnapshot){
        var tableRow='';
        querySnapshot.forEach(function(doc) {
            var document = doc.data();
            tableRow += '<tr>';
            tableRow += '<td class="fname">' + document.fName + '</td>';
            tableRow += '<td class="sname">' + document.sName + '</td>';
            tableRow += '<td class="tname">' + document.tName + '</td>';
            tableRow+='<td class="deleteStudent"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>';
            tableRow += '<tr>'; 
        });
        $('tbody.tbodyData').html(tableRow);    
    }
    
    //get all the data on app startup
    $('#createMovies').click(function(){
        $('.MoviesForm').css("display", "block");
        $('#dynamicBtn').text('Save Changes')
    });

    $('#dynamicBtn').click(function(){
        //employee form values
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var tname = $("#tname").val();
 

        //check if you need to create or update an employee
        if($(this).text() == "Save Changes"){
            
            var docuName = fname.charAt(0)+"."+lname;
            db.collection("movies").doc(docuName).set({
                fName:fname,
                sName:lname,
                tName:tname
            }).then(function(docRef){
                $('#operationStatus').html('<div class="alert alert-success"><strong>Success!</strong>  movie     </div>').delay(2500).fadeOut('slow');
                $('.MoviesForm').css("display", "none");
                LoadData();
            }).catch(function(error){
            $('#operationStatus').html('<div class="alert alert-danger"><strong>Error!</strong> movie  </div>').delay(2500).fadeOut('slow');
            });
        }
        else{
        }
    });

    // Cancel the movie form
    $('#cancel').click(function(){
        $('.MoviesForm').css("display", "none");
    });

    // Get the data of the movie you want to edit
    $("tbody.tbodyData").on("click","td.editMovies", function(){
        $('.MoviesForm').css("display", "block");
        $('#dynamicBtn').text('Update Movies');

        $("#fname").val($(this).closest('tr').find('.fname').text());
        $("#lname").val($(this).closest('tr').find('.lname').text());
        $("#tname").val($(this).closest('tr').find('.tname').text());
  
    });
            


    $("tbody.tbodyData").on("click","td.Movies", function(){
        //Get the Employee Data
        var fName = $(this).closest('tr').find('.fname').text(); //First Name
        var lName = $(this).closest('tr').find('.lname').text(); //Last Namevar docName=fName.charAt(0)+"."+lName;
        
        db.collection("Student").doc(docuName).delete().then(function(){
                $('#operationStatus').html('<div class="alert alert-success"><strong>Update!</strong>Student was deleted!</div>').delay(2500).fadeOut('slow');
                $('.studentForm').css("display","none");
                LoadData();
            }).catch(function(error){
                     $('#operationStatus').html('<div class="alert alert-danger"><strong>Error!</strong>Student was not deleted!</div>').delay(2500).fadeOut('slow');
                     });
        
       
    });

    $("#searchMovies" ).change(function() {
        console.log('You entered: ', $(this).val());
      });
});