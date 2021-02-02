-- Create all 9 tables for FormulaOneDB

-- Drop tables using CASCADE to remove dependencies as well

DROP TABLE IF EXISTS qualifying CASCADE;

DROP TABLE IF EXISTS lap_times CASCADE;

DROP TABLE IF EXISTS results CASCADE;

DROP TABLE IF EXISTS drivers CASCADE;

DROP TABLE IF EXISTS constructor_standings CASCADE;

DROP TABLE IF EXISTS constructor_results CASCADE;

DROP TABLE IF EXISTS constructors CASCADE;

DROP TABLE IF EXISTS races CASCADE;

DROP TABLE IF EXISTS circuits CASCADE;


CREATE TABLE circuits (
	circuitid INT NOT NULL UNIQUE,
	circuitref VARCHAR(100) NOT NULL,
	circuit_name VARCHAR(100) NOT NULL,
	circuit_location VARCHAR(100) NOT NULL,
	country VARCHAR(100) NOT NULL,
	lat FLOAT NOT NULL,
	lng FLOAT NOT NULL,
	alt INT NOT NULL,
	url VARCHAR(150) NOT NULL,
 	PRIMARY KEY(circuitid)
);



CREATE TABLE races (
	raceid INT NOT NULL UNIQUE,
	race_year INT NOT NULL,
	round INT NOT NULL,
	circuitid INT NOT NULL,
	circuit_name VARCHAR(50) NOT NULL,
	circuit_date VARCHAR(50) NOT NULL,
	circuit_time VARCHAR(50) NOT NULL,
	url VARCHAR(150),
	PRIMARY KEY(raceid),
	FOREIGN KEY(circuitid) REFERENCES circuits(circuitid)
	--FOREIGN KEY(circuit_name) REFERENCES circuits(circuit_name)
);


CREATE TABLE constructors (
 	constructorid INT NOT NULL,
 	constructorref VARCHAR(100) NOT NULL,
 	constructor_name VARCHAR(50) NOT NULL,
 	nationality VARCHAR(50) NOT NULL,
 	url VARCHAR(150),
 	PRIMARY KEY(constructorid)
);


CREATE TABLE constructor_results (
 	constructorresultsid INT NOT NULL UNIQUE,
 	raceid INT NOT NULL,
 	constructorid INT NOT NULL,
 	points INT NOT NULL,
 	status VARCHAR(5) NOT NULL,
 	PRIMARY KEY(constructorresultsid),
 	FOREIGN KEY(raceid) REFERENCES races(raceid),
 	FOREIGN KEY(constructorid) REFERENCES constructors(constructorid)
);


CREATE TABLE constructor_standings (
 	constructorstandingsid INT NOT NULL UNIQUE,
 	raceid INT NOT NULL,
 	constructorid INT NOT NULL,
 	points INT NOT NULL,
 	constructor_position INT NOT NULL,
 	positiontext VARCHAR(5) NOT NULL,
 	wins INT NOT NULL,
 	PRIMARY KEY(constructorstandingsid),
 	FOREIGN KEY(raceid) REFERENCES races(raceid),
 	FOREIGN KEY(constructorid) REFERENCES constructors(constructorid)
 );


CREATE TABLE drivers (
 	driverid INT NOT NULL,
 	driverref VARCHAR(100) NOT NULL,
 	driver_number VARCHAR(3),
 	code VARCHAR(10),
 	forename VARCHAR(20) NOT NULL,
 	surname VARCHAR(20) NOT NULL,
 	dob VARCHAR(20),
 	nationality VARCHAR(20) NOT NULL,
 	url VARCHAR(150),
 	PRIMARY KEY(driverid)
);


CREATE TABLE results (
 	resultid INT NOT NULL,
 	raceid INT NOT NULL,
 	driverid INT NOT NULL,
 	constructorid INT NOT NULL,
 	result_number INT NOT NULL,
 	grid INT NOT NULL,
 	result_position VARCHAR(10) NOT NULL,
 	positiontext VARCHAR(10) NOT NULL,
	positionorder INT NOT NULL,
 	result_points INT NOT NULL,
 	laps INT NOT NULL,
 	result_time VARCHAR(50) NOT NULL,
 	milliseconds VARCHAR(50) NOT NULL,
 	fastestLap VARCHAR(50) NOT NULL,
 	result_rank VARCHAR(50) NOT NULL,
 	fastestlaptime VARCHAR(50),
 	fastestlapspeed VARCHAR(50) NOT NULL,
 	statusid INT NOT NULL,
 	PRIMARY KEY(resultid),
 	FOREIGN KEY(raceid) REFERENCES races(raceid),
 	FOREIGN KEY(constructorid) REFERENCES constructors(constructorid),
 	FOREIGN KEY(driverid) REFERENCES drivers(driverid)
);


CREATE TABLE lap_times (
 	raceid INT NOT NULL,
	driverid INT NOT NULL,
 	lap VARCHAR(150) NOT NULL,
	lap_time_position INT NOT NULL,
 	lap_time_seconds VARCHAR(50) NOT NULL,
 	milliseconds INT NOT NULL,
 	FOREIGN KEY(raceid) REFERENCES races(raceid),
 	FOREIGN KEY(driverid) REFERENCES drivers(driverid)
);


CREATE TABLE qualifying (
 	qualifyid INT NOT NULL UNIQUE,
 	raceid INT NOT NULL,
 	driverid INT NOT NULL,
 	constructorid INT NOT NULL,
 	qualify_number INT NOT NULL,
 	qualify_position INT NOT NULL,
 	q1 VARCHAR(50) NOT NULL,
 	q2 VARCHAR(50) NOT NULL,
 	q3 VARCHAR(50) NOT NULL,
  	PRIMARY KEY(qualifyid),
	FOREIGN KEY(raceid) REFERENCES races(raceid),
	FOREIGN KEY(driverid) REFERENCES drivers(driverid),
 	FOREIGN KEY(constructorid) REFERENCES constructors(constructorid)
);

