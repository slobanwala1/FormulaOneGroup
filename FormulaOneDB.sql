-- Create all 8 tables for Excellent_Simpson_Analysis db

-- Drop tables using CASCADE to remove dependencies as well
DROP TABLE IF EXISTS circuits CASCADE;

DROP TABLE IF EXISTS races CASCADE;

DROP TABLE IF EXISTS constructors CASCADE;

DROP TABLE IF EXISTS constructor_results CASCADE;

DROP TABLE IF EXISTS constructor_standings CASCADE;

DROP TABLE IF EXISTS drivers CASCADE;

DROP TABLE IF EXISTS results CASCADE;

DROP TABLE IF EXISTS lap_times CASCADE;

DROP TABLE IF EXISTS qualifying CASCADE;



CREATE TABLE circuits (
	circuitId INT NOT NULL UNIQUE,
	circuitRef VARCHAR(50) NOT NULL,
	circuit_name VARCHAR(50) NOT NULL,
 	PRIMARY KEY(circuitId)
);



CREATE TABLE races (
	raceId INT NOT NULL,
	race_year INT NOT NULL,
	round INT NOT NULL,
	circuitId INT NOT NULL,
	circuit_name VARCHAR(50) NOT NULL,
	circuit_date DATE NOT NULL,
	circuit_time TIME,
	url VARCHAR(150),
 	PRIMARY KEY(raceId),
	FOREIGN KEY(circuitId) REFERENCES circuits(circuitId),
	FOREIGN KEY(circuit_name) REFERENCES circuits(circuit_name)
);


CREATE TABLE constructors (
	constructorId INT NOT NULL,
	constructorRef VARCHAR(100) NOT NULL,
	constructor_name VARCHAR(50) NOT NULL,
	nationality VARCHAR(50) NOT NULL,
	url VARCHAR(150),
	PRIMARY KEY(constructorId)
);


CREATE TABLE constructor_results (
	constructorResultsId INT NOT NULL,
	raceId VARCHAR(150) NOT NULL,
	constructorId VARCHAR(150) NOT NULL,
	points INT NOT NULL,
	status INT,
	PRIMARY KEY(constructorResultsId),
	FOREIGN KEY(raceId) REFERENCES races(raceId),
	FOREIGN KEY(constructorId) REFERENCES constructors(constructorId)
);


CREATE TABLE constructor_standings (
	constructorStandingsId INT NOT NULL,
	raceId INT NOT NULL,
	constructorId INT NOT NULL,
	points INT NOT NULL,
	constructor_position INT NOT NULL,
	positionText INT NOT NULL,
	wins INT NOT NULL,
	PRIMARY KEY(constructorStandingsId),
	FOREIGN KEY(raceId) REFERENCES races(raceId),
	FOREIGN KEY(constructorId) REFERENCES constructors(constructorId)
);


CREATE TABLE drivers (
	driverId INT NOT NULL,
	driverRef VARCHAR(50) NOT NULL,
	driver_number INT,
	code VARCHAR(5),
	forename VARCHAR(20) NOT NULL,
	surname VARCHAR(20) NOT NULL,
	dob DATE NOT NULL,
	nationality VARCHAR(20) NOT NULL,
	url VARCHAR(150),
	PRIMARY KEY(driverId)
);


CREATE TABLE results (
	resultId INT NOT NULL,
	raceId INT NOT NULL,
	driverId INT NOT NULL,
	constructorId INT NOT NULL,
	result_number INT NOT NULL,
	grid INT NOT NULL,
	result_position INT,
	positionText VARCHAR(5),
	result_points INT NOT NULL,
	laps INT NOT NULL,
	result_time VARCHAR(50) NOT NULL,
	milliseconds INT,
	fastestLap INT,
	result_rank INT,
	fastestLapTime TIME,
	fastestLapSpeed FLOAT,
	statusId INT NOT NULL,
	PRIMARY KEY(resultId),
	FOREIGN KEY(raceId) REFERENCES races(raceId),
	FOREIGN KEY(constructorId) REFERENCES constructors(constructorId),
	FOREIGN KEY(driverId) REFERENCES drivers(driverId)
);


CREATE TABLE lap_times (
	raceId INT NOT NULL,
	driverId INT NOT NULL,
	lap VARCHAR(150) NOT NULL,
	lap_time_position INT NOT NULL,
	lap_time_seconds TIME NOT NULL,
	milliseconds INT NOT NULL,
	FOREIGN KEY(raceId) REFERENCES races(raceId),
	FOREIGN KEY(driverId) REFERENCES drivers(driverId)
);


CREATE TABLE qualifying (
	qualifyId INT NOT NULL UNIQUE,
	raceId INT NOT NULL,
	driverId INT NOT NULL,
	constructorId INT NOT NULL,
	qualify_number INT NOT NULL,
	qualify_position INT NOT NULL,
	q1 TIME,
	q2 TIME,
	q3 TIME,
 	PRIMARY KEY(qualifyId),
	FOREIGN KEY(raceId) REFERENCES races(raceId),
	FOREIGN KEY(driverId) REFERENCES drivers(driverId),
	FOREIGN KEY(constructorId) REFERENCES constructors(constructorId)
);

