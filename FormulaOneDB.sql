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
	url VARCHAR(100),
 	PRIMARY KEY(raceId),
	FOREIGN KEY(circuitId) REFERENCES circuits(circuitId),
	FOREIGN KEY(circuit_name) REFERENCES circuits(circuit_name)
);

CREATE TABLE constructors (
	constructorId INT NOT NULL,
	Name_Rank INTEGER NOT NULL,
	Character_Name VARCHAR(150) NOT NULL,
	PRIMARY KEY(Season_Year_Aired, Character_Name),
	FOREIGN KEY(Season_Year_Aired) REFERENCES Season_Year(Season_Year_Aired)
);

CREATE TABLE Guest_Stars_All (
	Season_Number INT NOT NULL,
	Guest_Star_Name VARCHAR(150) NOT NULL,
	Episode_title VARCHAR(150) NOT NULL,
	PRIMARY KEY(Guest_Star_Name, Episode_title),
	FOREIGN KEY(Season_Number) REFERENCES Season_Year(Season_Number)
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