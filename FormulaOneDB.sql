-- Create all 8 tables for Excellent_Simpson_Analysis db

-- Drop tables using CASCADE to remove dependencies as well
DROP TABLE IF EXISTS circuits CASCADE;

DROP TABLE IF EXISTS races CASCADE;

DROP TABLE IF EXISTS constructors CASCADE;

DROP TABLE IF EXISTS constructor_results CASCADE;

DROP TABLE IF EXISTS constructor_standings CASCADE;

DROP TABLE IF EXISTS results CASCADE;

DROP TABLE IF EXISTS drivers CASCADE;

DROP TABLE IF EXISTS lap_times CASCADE;

DROP TABLE IF EXISTS qualifying CASCADE;

CREATE TABLE circuits (
	circuitId INT NOT NULL UNIQUE,
	circuitRef VARCHAR(50) NOT NULL,
	circuit_name VARCHAR(50) NOT NULL,
 	PRIMARY KEY(circuitId)
);

-- Did not get clean data for all episodes and titles
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

CREATE TABLE Guest_Star_Season (
	Season_Number INT NOT NULL,
	Count_of_Appearances INT NOT NULL,
	PRIMARY KEY(Season_Number),
	FOREIGN KEY(Season_Number) REFERENCES Season_Year(Season_Number)
);

CREATE TABLE Viewers (
	Season_Number INT NOT NULL,
	Number_of_Episodes INT NOT NULL,
	Average_Ep_Viewers_in_mil FLOAT NOT NULL,
	Most_Watched_Ep_Viewer_in_mil FLOAT NOT NULL,
	Episode_Title VARCHAR(150),
	PRIMARY KEY(Season_Number),
	FOREIGN KEY(Season_Number) REFERENCES Season_Year(Season_Number)
);

CREATE TABLE Ratings (
	Season_Number INT NOT NULL,
	Number_of_Episodes INT NOT NULL,
	Season_Rank INT NOT NULL,
	Rating FLOAT NOT NULL,
	PRIMARY KEY(Season_Number),
	FOREIGN KEY(Season_Number) REFERENCES Season_Year(Season_Number)
);

CREATE TABLE Episode_Phrases (
	Season_Number INT NOT NULL,
	Episode_Number INT NOT NULL,
	Most_common_phrase VARCHAR(150) NOT NULL,
	Occurences INT NOT NULL,
	FOREIGN KEY(Season_Number) REFERENCES Season_Year(Season_Number)
);