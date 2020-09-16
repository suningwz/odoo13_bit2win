function hideSeverityLevels(e) { 

	if(isIssue(e)==true){
		setParamsForIssue(e); 
		
	} else if (isQuestion(e)==true){
		setParamsForQuestion(e); 
		
	} else { 
		setParamsForConfiguration(e); 
	}
}


function isIssue(e){
	return (e.selectedIndex=='2')
}

function isQuestion(e){
	return (e.selectedIndex=='1')
}

/* Issue */
function setParamsForIssue(e){
		// Environment, obbligatorio: Production/UAT/Development-Test (li vedo tutti)
		document.getElementById('select_environment').options[1].style.display = 'inline-block'; 
		document.getElementById('select_environment').options[2].style.display = 'inline-block';	
		document.getElementById('select_environment').options[2].style.display = 'inline-block';
		document.getElementById('select_environment').classList.add('o_website_form_required'); 
		document.getElementById('select_environment').required="True"; 
		
		// Severity, obbligatorio: Comestic/Minor/Major/Critical
		document.getElementById('select_severity').options[1].style.display = 'inline-block'; 
		document.getElementById('select_severity').options[2].style.display = 'inline-block'; 
		document.getElementById('select_severity').options[3].style.display = 'inline-block'; 
		document.getElementById('select_severity').options[4].style.display = 'inline-block';
		document.getElementById('container_environment').classList.add('o_website_form_required');
		
		document.getElementById('select_severity').required="True";
		
		document.getElementById('container_environment_desc').classList.add('o_website_form_required')
		document.getElementById('environment_id_desc').required="True";
		
		document.getElementById('container_granted').classList.add('o_website_form_required');
		document.getElementById('granted_user').required="True";
		
		document.getElementById('container_release_id').classList.add('o_website_form_required');
		document.getElementById('release_id').required="True";
		
		document.getElementById('container_priority').classList.add('o_website_form_required')
		document.getElementById('select_severity').required="True";
	
		document.getElementById('container_impact').classList.add('o_website_form_required');
		document.getElementById('impact_id').required="True";
		
		document.getElementById('container_subject').classList.add('o_website_form_required');
		document.getElementById('subject').required="True";
	
		document.getElementById('container_user_who_found').classList.remove('o_website_form_required');
		document.getElementById('user_who_found').removeAttribute("required");
		
		document.getElementById('container_description').classList.add('o_website_form_required');
		document.getElementById('description').required="True";
}

function setParamsForQuestion(e){
		// Environment, Non obbligatorio: Production/UAT/Development-Test (li vedo tutti)
		document.getElementById('select_environment').options[1].style.display = 'inline-block'; 
		document.getElementById('select_environment').options[2].style.display = 'inline-block';	
		document.getElementById('select_environment').options[2].style.display = 'inline-block';
		document.getElementById('select_environment').classList.remove('o_website_form_required')
		document.getElementById('select_environment').removeAttribute("required"); 
		
		// Severity, non obbligatorio: Cosmetic/Minor
		document.getElementById('select_severity').options[1].style.display = 'inline-block'; 
		document.getElementById('select_severity').options[2].style.display = 'none'; 
		document.getElementById('select_severity').options[3].style.display = 'inline-block'; 
		document.getElementById('select_severity').options[4].style.display = 'none'; 
		document.getElementById('select_severity').removeAttribute("required"); 
		
		document.getElementById('container_environment_desc').classList.remove('o_website_form_required');
		document.getElementById('environment_id_desc').removeAttribute("required"); 
		
		document.getElementById('container_granted').classList.remove('o_website_form_required');
		document.getElementById('granted_user').removeAttribute("required"); 
		
		document.getElementById('container_release_id').classList.remove('o_website_form_required');
		document.getElementById('release_id').removeAttribute("required");
		
		document.getElementById('container_priority').classList.remove('o_website_form_required');
		document.getElementById('select_severity').removeAttribute("required");
		
		document.getElementById('container_impact').classList.remove('o_website_form_required');
		document.getElementById('impact_id').removeAttribute("required");

		document.getElementById('container_subject').classList.add('o_website_form_required');
		document.getElementById('subject').required="True";
		
		document.getElementById('container_user_who_found').classList.remove('o_website_form_required');
		document.getElementById('user_who_found').removeAttribute("required");
	
		document.getElementById('container_description').classList.add('o_website_form_required');		
		document.getElementById('description').required="True";
		
}

function setParamsForConfiguration(e){
		document.getElementById('select_environment').options[1].style.display = 'inline-block'; 
		document.getElementById('select_environment').options[2].style.display = 'none';	
		document.getElementById('select_environment').options[3].style.display = 'inline-block';
		document.getElementById('select_environment').classList.remove('o_website_form_required')
		document.getElementById('select_environment').removeAttribute("required");
		
		document.getElementById('select_severity').options[1].style.display = 'inline-block'; 
		document.getElementById('select_severity').options[2].style.display = 'none'; 
		document.getElementById('select_severity').options[3].style.display = 'inline-block'; 
		document.getElementById('select_severity').options[4].style.display = 'none';
		document.getElementById('select_severity').removeAttribute("required"); 
		
		document.getElementById('container_environment_desc').classList.add('o_website_form_required');
 		document.getElementById('environment_id_desc').required="True"
 
 		document.getElementById('container_granted').classList.add('o_website_form_required');
 		document.getElementById('granted_user').required="True"
 		
 		document.getElementById('container_release_id').classList.add('o_website_form_required');
 		document.getElementById('release_id').required="True";
 		
 		document.getElementById('container_priority').classList.remove('o_website_form_required');
 		document.getElementById('select_severity').removeAttribute("required"); 
 		
 		document.getElementById('container_impact').classList.remove('o_website_form_required');
		document.getElementById('impact_id').removeAttribute("required");
	
		document.getElementById('container_subject').classList.add('o_website_form_required');
		document.getElementById('subject').required="True";
	
		document.getElementById('container_user_who_found').classList.remove('o_website_form_required');
		document.getElementById('user_who_found').removeAttribute("required");
	
		document.getElementById('container_description').classList.add('o_website_form_required');
		document.getElementById('description').required="True";
 
}

