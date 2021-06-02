$(document).ready(function(){
    $.ajax({
            url: "https://raw.githubusercontent.com/s-omas/test-mechanism/master/mechanism_index.json",
            type: 'get',
            success: function(response){
		var m_index = JSON.parse(response)
		sessionStorage.setItem('mechanism_index', response);
                for (key in m_index){
			var mech_obj = m_index[key]
			var mech_description = mech_obj["description"]
			$("#m_container").append('<div class="row"><div class="card"><div class="card-body"><h5 class="card-title">' + key + '</h5><p class="card-text">' + mech_description + '</p><a mechanism="' + key + '" class="select_mechanism btn btn-primary">Select</a></div></div></div>');	
		}
            }
     });
     $(document).on('click', ".select_mechanism", function(){
            var mechanism = $(this).attr('mechanism');
	    var m_index = JSON.parse(sessionStorage.getItem('mechanism_index'));
	    var my_url = m_index[mechanism]["url"]
	    $.ajax({
	    	url: my_url,
		type: 'get',
		success: function(response){
			sessionStorage.setItem('mechanism', response);
		})
	    });
     });
});
