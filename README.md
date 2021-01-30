# FormulaOneGroup


Formula One is a dynamic, international sport reliant heavily on data and technology. And it lends itself to dynamic data visualizations.

Here are the basics of the sport: There are 10 teams, each with two members. The drivers compete for a championship, based on points scored at each race. A win is 25 points, second place is 18 points, etc. Only the top 10 score points in a race. So half of the drivers won't score a point in any given race, and beacuse of the disparity in cars, some drivers don't score a point all season. Also, the teams are competing for a constructors championship where both drivers' scores are used to determine the winner. So there are two competitions happening at the same time, one where the drivers are competing against each other and one where the two drivers on the same team are competing together. You want to your teammate to do well -- just not better than you.

The two drivers get the same equipment, so comparing results for the two drivers can be a good to determine whether a driver is getting the most out of the car.

In ths analysis, we're analyzing the results from the 2019 season. To do this, we've plotted all of the circuits of the 2019 Formula One season using Leafley. We've included an image of the circuit, which we scraped from Formula1.com. We used the data from a collection of thorough CSVs with data on Formula 1 races going back to 1950. If you hover of ther markers on the map, you'll get a link to a dashboard with a drop down menu listing all of the teams. The dashboard will have a comparison of the points the drivers scored, a gauge with the drivers' total speeds and A LINE CHART WITH THE LAP SPEEDS FOR THE TWO DRIVERS. The dashboard will populated by a database creaed by the csv datavbase and powered by a flask app, that will include a static table with the top 10 finishers from that race.

We chose to focus on a single season. However, time permitted, we could have done an analysis of every season, and we could have performed an analysis to answer the question of who is the greatest Formula 1 driver ever. Also, the next step would be to automate procurement of the data so that information could be updated as the seasons progress.
