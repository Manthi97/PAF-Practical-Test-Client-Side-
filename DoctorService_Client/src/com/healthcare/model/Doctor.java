package com.healthcare.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class Doctor {

	public Connection connect() {
		Connection con = null;

		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/healthcare_system", "root", "");

			// For testing
			System.out.println("Successfully Connected");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;

	}

	// insert

	public String insertDoctor(String docID, String dName, String address, String contactNumber, String speciality,
			String description, String docCharges, String visitingHospitals) {
		String output = "";
		try {

			Connection con = connect();

			if (con == null) {
				return "Error while connecting to the database for inserting.";
			}

			// create a prepared statement
			String query = " insert into doctor(`docNo`,`docID`,`dName`,`address`,`contactNumber`,`speciality`,`description`,`docCharges`,`visitingHospitals`)"
					+ " values (?, ?, ?, ?, ?, ?,?,?,?)";
			PreparedStatement preparedStmt = con.prepareStatement(query);

			// binding values
			preparedStmt.setInt(1, 0);
			preparedStmt.setString(2, docID);
			preparedStmt.setString(3, dName);
			preparedStmt.setString(4, address);
			preparedStmt.setString(5, contactNumber);
			preparedStmt.setString(6, speciality);
			preparedStmt.setString(7, description);
			preparedStmt.setDouble(8, Double.parseDouble(docCharges));
			preparedStmt.setString(9, visitingHospitals);

			// execute the statement
			preparedStmt.execute();
			con.close();

			String newDoctor = readDoctor();
			output = "{\\\"status\\\":\\\"success\\\",\\\"data\\\": \\\"\" + newDoctor + \"\\\"}";
		} catch (Exception e) {
			output = "{\\\"status\\\":\\\"sucess\\\",\\\"data\\\": \\\"Error while inserting the doctor.\\\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}

//view

	public String readDoctor() {

		String output = "";
		try {

			Connection con = connect();
			if (con == null) {
				return "Error while connecting to the database for reading.";
			}

			// Prepare the html table to be displayed

			output = "<table border='1'><tr><th>Doctor Id</th><th>Doctor Name</th><th>Address</th><th>ContactNo</th><th>Speciality</th><th>Description"
					+ "</th><th>Doctor Charger</th><th>Visiting Hospital</th><th>Update</th><th>Remove</th></tr>";
			String query = "select * from doctor";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);

			// iterate through the rows in the result set
			while (rs.next()) {
				String docNo = Integer.toString(rs.getInt("docNo"));
				String docID = rs.getString("docID");
				String dName = rs.getString("dName");
				String address = rs.getString("address");
				String contactNumber = rs.getString("contactNumber");
				String speciality = rs.getString("speciality");
				String description = rs.getString("description");
				String docCharges = Double.toString(rs.getDouble("docCharges"));
				String visitingHospitals = rs.getString("visitingHospitals");

				// Add into the html table
				output += "<tr><td><input id='hidDoctorIDUpdate' name='hidDoctorIDUpdate' type='hidden' value='" + docNo
						+ "'>" + docID + "</td>";
				output += "<td>" + dName + "</td>";
				output += "<td>" + address + "</td>";
				output += "<td>" + contactNumber + "</td>";
				output += "<td>" + speciality + "</td>";
				output += "<td>" + description + "</td>";
				output += "<td>" + docCharges + "</td>";
				output += "<td>" + visitingHospitals + "</td>";

				// buttons
				output += "<td><input name='btnUpdate' type='button' value='Update' class='btnUpdate btn btn-secondary'></td>"
						+ "<td><input name='btnRemove' type='button' value='Remove' class='btnRemove btn btn-danger' data-docID='"
						+ docID + "' " + "></td></tr>";	
				
				//output += "<td><input name='btnUpdate' type='button' value='Update' class='btnUpdate btn btn-secondary'></td>"
						//+ "<td><input name='btnRemove' type='button' value='Remove' class='btnRemove btn btn-danger' data-docID='"
						//+ docID + "'>" + "></td></tr>";	
				
			}
			con.close();

			// Complete the html table
			output += "</table>";

		} catch (Exception e) {
			output = "Error while reading the doctors.";
			System.err.println(e.getMessage());
		}
		return output;
	}

	// update

	public String updateDoctor(String docNo, String docID, String dName, String address, String contactNumber,
			String speciality, String description, String docCharges, String visitingHospitals) {
		String output = "";
		try {
			Connection con = connect();

			if (con == null) {
				return "Error while connecting to the database for updating.";
			}

			// create a prepared statement
			String query = "UPDATE doctor SET docID=?,dName=?, address=?,contactNumber=?,speciality=?, description=?,docCharges=?,visitingHospitals=? WHERE docNo=?";
			PreparedStatement preparedStmt = con.prepareStatement(query);

			// binding values
			preparedStmt.setString(1, docID);
			preparedStmt.setString(2, dName);
			preparedStmt.setString(3, address);
			preparedStmt.setString(4, contactNumber);
			preparedStmt.setString(5, speciality);
			preparedStmt.setString(6, description);
			preparedStmt.setDouble(7, Double.parseDouble(docCharges));
			preparedStmt.setString(8, visitingHospitals);
			preparedStmt.setInt(9, Integer.parseInt(docNo));

			// execute the statement
			preparedStmt.execute();
			con.close();

			String newDoctor = readDoctor();
			output = "{\\\"status\\\":\\\"success\\\", \\\"data\\\": \\\"\" + newDoctor + \"\\\"}";
		} catch (Exception e) {
			output = "{\"status\":\"error\", \"data\": \"Error while updating the doctor.\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}

	// delete

	public String deleteDoctor(String docNo) {
		String output = "";
		try {

			Connection con = connect();
			if (con == null) {
				return "Error while connecting to the database for deleting.";
			}

			// create a prepared statement
			String query = "delete from doctor where docNo=?";
			PreparedStatement preparedStmt = con.prepareStatement(query);

			// binding values
			preparedStmt.setInt(1, Integer.parseInt(docNo));
			// execute the statement
			preparedStmt.execute();
			con.close();

			String newDoctor = readDoctor();
			output = "{\\\"status\\\":\\\"success\\\", \\\"data\\\": \\\"\" + newDoctor + \"\\\"}";
		} catch (Exception e) {
			output = "{\\\"status\\\":\\\"error\\\", \\\"data\\\": \\\"Error while deleting the item.\\\"}";
			System.err.println(e.getMessage());
		}
		return output;
	}

}
