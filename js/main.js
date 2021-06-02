$(document).ready(function(){
    $.ajax({
            url: "https://raw.githubusercontent.com/s-omas/test-mechanism/master/mechanism_index.json",
            type: 'get',
            success: function(response){
		var m_index = JSON.parse(response)
		sessionStorage.setItem('mechanism_index', m_index);
                for (key in m_index){
			var mech_obj = m_index[key]
			var mech_description = mech_obj["description"]
			$("#m_container").append('<div class="row"><div class="card"><div class="card-body"><h5 class="card-title">' + key + '</h5><p class="card-text">' + mech_description + '</p><a mechanism="' + key + '" href="#" class="select_mechanism btn btn-primary">Select</a></div></div></div>');	
		}
            }
     });
     $(".select_mechanism").on('click', function(){
	     var m_index = sessionStorage.getItem('mechanism_index');
	     var mechanism_name = $(this).attr('mechanism')
	     var m_url = m_index[mechanism_name]["url"]
	     alert(m_url)
	     $.ajax({
	          url: m_url,
                  type: 'get',
                  success: function(response){
                  	var mechanism = JSON.parse(response)
			sessionStorage.setItem('mechanism', mechanism)
		  }
     	     });

     });	
});
