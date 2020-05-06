$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

// save & update========================================================

$(document).on("click", "#btnSave", function(event) {
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

	var type = ($("#hiddocNoSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "DoctorsAPI",
		type : type,
		data : $("#formDoctor").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onDoctorSaveComplete(response.responseText, status);
		}

	});

});

// Remove========================================================

$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "DoctorsAPI",
		type : "DELETE",
		data : "docNo=" + $(this).data("docno"),
		dataType : "text",
		complete : function(response, status) {
			onDoctorDeleteComplete(response.responseText, status);
		}
	});

});

// Update===============================================================

$(document)
		.on(
				"click",
				".btnUpdate",
				function(event) {
					$("#hiddocNoSave")
							.val(
									$(this).closest("tr").find(
											'#hiddocNoUpdate').val());
					// $("#docNo").val(
					// $(this).closest("tr").find('td:eq(0)').text());
					$("#docID").val(
							$(this).closest("tr").find('td:eq(0)').text());
					$("#dName").val(
							$(this).closest("tr").find('td:eq(1)').text());
					$("#address").val(
							$(this).closest("tr").find('td:eq(2)').text());
					$("#contactNumber").val(
							$(this).closest("tr").find('td:eq(3)').text());
					$("#speciality").val(
							$(this).closest("tr").find('td:eq(4)').text());
					$("#description").val(
							$(this).closest("tr").find('td:eq(5)').text());
					$("#docCharges").val(
							$(this).closest("tr").find('td:eq(6)').text());
					$("#visitingHospitals").val(
							$(this).closest("tr").find('td:eq(7)').text());

				});

// Client-Model========================================================

/*
 * function onDoctorSaveComplete(response, status) { if (status == "success") {
 * 
 * var resultSet = JSON.parse(response);
 * 
 * if (resultSet.status.trim() == "success") {
 * 
 * $("#alertSuccess").text("Successfully saved."); $("#alertSuccess").show();
 * $("#divDoctorGrid").html(resultSet.data);
 *  } else if (resultSet.status.trim() == "error") {
 * 
 * $("#alertError").text(resultSet.data); $("#alertError").show(); } } else if
 * (status == "error") {
 * 
 * $("#alertError").text("Error while saving."); $("#alertError").show();
 *  } else {
 * 
 * $("#alertError").text("Unknown error while saving..");
 * $("#alertError").show();
 *  }
 * 
 * $("#hiddocNoSave").val(""); $("#formDoctor")[0].reset(); }
 */

function onDoctorSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divDoctorGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hiddocNoSave").val("");
	$("#formDoctor")[0].reset();
}

function onDoctorDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();

			$("#divDoctorGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

function validateDoctorForm() {

	// DOCID
	if ($("#docID").val().trim() == "") {
		return "Insert doctor id.";
	}

	// DOC_NAME
	if ($("#dName").val().trim() == "") {
		return "Insert doctor name.";
	}

	// ADDRESS
	if ($("#address").val().trim() == "") {
		return "Insert address.";
	}

	// CONTACT_NO
	if ($("#contactNumber").val().trim() == "") {
		return "Insert contact number.";
	}

	// is numerical value
	var phone = $("#contactNumber").val().trim();
	if (!$.isNumeric(phone)) {
		return "Insert a numerical digits for Contact number.";
	}

	// SPECIALIRITY
	if ($("#speciality").val().trim() == "") {
		return "Insert speciality.";
	}

	// DESCRIPTION
	if ($("#description").val().trim() == "") {
		return "Insert description.";
	}

	// DOCTOR_CHARGERS
	if ($("#docCharges").val().trim() == "") {
		return "Insert doctor chargers.";
	}

	// VISITIG_HOSPITALS
	if ($("#visitingHospitals").val().trim() == "") {
		return "Insert hospital name.";
	}

	// is numerical value
	var chargers = $("#docCharges").val().trim();
	if (!$.isNumeric(chargers)) {
		return "Insert a numerical value for Doctor chargers.";
	}

	return true;

}
