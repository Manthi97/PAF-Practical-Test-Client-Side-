<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.healthcare.model.Doctor" %>	
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Doctor Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.3.1.min.js"></script>
<script src="Components/main.js"></script>
<link rel="stylesheet" href="Components/style.css">

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8 mt-4">
			<div class="note">
				<h1 class="m-3">Doctor Details</h1> </div>

				<form id="formDoctor" name="formDoctor">
					Doctor ID: <input id="docID" name="docID" type="text"
						class="form-control form-control-sm"> <br> Doctor
					Name: <input id="dName" name="dName" type="text"
						class="form-control form-control-sm"> <br> 
					Address: <input id="address" name="address" type="text"
						class="form-control form-control-sm"> <br> Contact
					Number: <input id="contactNumber" name="contactNumber" type="text"
						class="form-control form-control-sm"> <br>
					Speciality: <input id="speciality" name="speciality" type="text"
						class="form-control form-control-sm"> <br>
					Description: <input id="description" name="description" type="text"
						class="form-control form-control-sm"> <br> Doctor
					Chargers: <input id="docCharges" name="docCharges"
						type="text" class="form-control form-control-sm"> <br>
					Visting Hospital Name: <input id="visitingHospitals"
						name="visitingHospitals" type="text"
						class="form-control form-control-sm"> <br> <input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hiddocNoSave" name="hiddocNoSave" value="">
				</form>

<br>


		<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>

				<br>
				<br>
				<div id="divDoctorGrid">
					<%
						Doctor doctorObj = new Doctor();
						out.print(doctorObj.readDoctor());
					%>
				</div>


			</div>
		</div>

	</div>

</body>
</html>