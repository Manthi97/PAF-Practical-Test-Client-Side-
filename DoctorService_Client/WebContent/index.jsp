<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.healthcare.model.Doctor" %>	
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Doctor Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/main.js"></script>

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<h1 class="m-3">Doctor Details</h1>

				<form id="formDoctor" name="formDoctor">
					Doctor ID: <input id="doctortId" name="doctorId" type="text"
						class="form-control form-control-sm"> <br> Doctor
					Name: <input id="doctorName" name="doctorName" type="text"
						class="form-control form-control-sm"> <br> Address: <input
						id="address" name="address" type="text"
						class="form-control form-control-sm"> <br> Contact
					Number: <input id="contactNumber" name="contactNumber" type="text"
						class="form-control form-control-sm"> <br>
					Speciality: <input id="speciality" speciality="address" type="text"
						class="form-control form-control-sm"> <br>
					Description: <input id="description" name="description" type="text"
						class="form-control form-control-sm"> <br> Doctor
					Chargers: <input id="doctorChargers" name="doctorChargers"
						type="text" class="form-control form-control-sm"> <br>
					Visting Hospital Name: <input id="visitingHospitalName"
						name="visitingHospitalName" type="text"
						class="form-control form-control-sm"> <br> <input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidDoctorIDSave" name="hidDoctorIDSave" value="">
				</form>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>

				<br>
				<div id="divDoctoreGrid">
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