$(document).ready(function(){
    $.ajax({
            url: "https://raw.githubusercontent.com/s-omas/test-mechanism/master/mechanism_index.json",
            type: 'get',
            success: function(response){
                sessionStorage.setItem('mechanism_index', JSON.stringify(response));
            }
     });
});
