$(document).ready(function(){
    $.ajax({
            url: "https://raw.githubusercontent.com/s-omas/test-mechanism/master/mechanism_index.json",
            type: 'get',
            success: function(response){
		sessionStorage.setItem('mechanism_index', response);
                for (key in response){
			alert(key)
			var mech_obj = response[key]
			var mech_description = mech_obj["description"]
			$("#m_container").append('<div class="row"><div class="card"><div class="card-body"><h5 class="card-title">' + key + '</h5><p class="card-text">' + mech_description + '</p></div></div></div>');	
		}
            }
     });
});
