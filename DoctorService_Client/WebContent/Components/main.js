$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// save=========================================================

$(document).on(
		"click",
		"#btnSave",
		function(event) {
			// Clear status messages---------------------
			$("#alertSuccess").text("");
			$("#alertSuccess").hide();
			$("#alertError").text("");
			$("#alertError").hide();

			// Form validation-------------------
			var status = validateDoctorForm();

			// If not valid
			if (status != true) {
				$("#alertError").text(status);
				$("#alertError").show();
				return;
			}

			// If valid-----------------------
			var doctor = getDoctorCard($("#txtName").val().trim(), 
					$("#txtName").val().trim(),
					$("#txtName").val().trim(), 
					$("#txtName").val().trim(), 
					$("#txtName").val().trim(), 
					$("#txtName").val().trim(), 
					$("#txtName").val().trim(),
					$("#txtName").val().trim());
					
			$("#colDoctors").append(doctor);

			$("#alertSuccess").text("Saved successfully.");
			$("#alertSuccess").show();
			$("#formDoctor")[0].reset();

		});

// Remove========================================================

$(document).on("click", ".remove", function(event) {
	$(this).closest(".doctor").remove();

	$("#alertSuccess").text("Removed successfully.");
	$("#alertSuccess").show()

});

// Client-Model========================================================

function validateDoctorForm() {
	
	// DOCID
	if ($("#txtName").val().trim() == "") {
		return "Insert doctor id.";
	}

	// DOC_NAME
	if ($("#txtName").val().trim() == "") {
		return "Insert doctor name.";
	}
	
	// ADDRESS
	if ($("#txtName").val().trim() == "") {
		return "Insert address.";
	}
	
	// CONTACT_NO
	if ($("#txtName").val().trim() == "") {
		return "Insert contact number.";
	}
	
	// SPECIALIRITY
	if ($("#txtName").val().trim() == "") {
		return "Insert speciality.";
	}
	
	// DESCRIPTION
	if ($("#txtName").val().trim() == "") {
		return "Insert description.";
	}
	
	// DOCTOR_CHARGERS
	if ($("#txtName").val().trim() == "") {
		return "Insert doctor chargers.";
	}
	
	// VISITIG_HOSPITALS
	if ($("#txtName").val().trim() == "") {
		return "Insert hospital name.";
	}
	
	 return true;
}

//==============================================================================
function getDoctorCard(name, gender, year) {
	
	var doctor = "";
	doctor += "<div class=\"student card bg-light m-2\"  " +
			"style=\"max-width: 10rem; float: left;\">";
	doctor += "<div class=\"card-body\">";
	doctor += title + " " + name + ",";
	doctor += "<br>";
	doctor += yearNumber + " year";
	doctor += "</div>";
	doctor += "<input type=\"button\" value=\"Remove\"  class=\"btn btn-danger remove\">";
	doctor += "</div>";

	return doctor;
}
