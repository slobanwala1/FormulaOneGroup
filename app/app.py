from flask import Flask, render_template, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import sys

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/FormulaOneDB"
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class circuitsModel(db.Model):
    __tablename__ = 'circuits'

    circuitid = db.Column(db.Integer, primary_key=True)
    circuitref = db.Column(db.String())
    circuit_name = db.Column(db.String())

    def __init__(self, circuitid, circuitref, circuit_name):
        self.circuitid = circuitid
        self.circuitref = circuitref
        self.circuit_name = circuit_name

    def __repr__(self):
        return f"<Circuit {self.circuit_name}>"

records = [{'name':'John'},{'name':'Suzy'}]
circuitList = [{"circuit_name":"Albert Park Grand Prix Circuit", "lat": "-37.8497", "lng":"144.968", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Bahrain International Circuit", "lat": "26.0325", "lng":"50.5106", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Shanghai International Circuit", "lat":"31.3389", "lng":"121.22", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/China%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Baku City Circuit", "lat":"40.3725", "lng":"49.8533", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit de Barcelona-Catalunya", "lat":"41.57", "lng":"2.26111", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit de Monaco", "lat":"43.7347", "lng":"7.42056", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monaco%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit Gilles Villeneuve", "lat":"45.5", "lng":"-73.5228", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit Paul Ricard", "lat":"43.2506", "lng":"5.79167", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/France%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Red Bull Ring", "lat":"47.2197", "lng":"14.7647", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Silverstone Circuit", "lat":"52.0786", "lng":"-1.01694", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Hockenheimring", "lat":"49.3278", "lng":"8.56583", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Hungaroring", "lat":"47.5789", "lng":"19.2486", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit de Spa-Francorchamps", "lat":"50.4372", "lng":"5.97139", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Autodromo Nazionale di Monza", "lat":"45.6156", "lng":"9.28111", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Marina Bay Street Circuit", "lat":"1.2914", "lng":"103.864", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Sochi Autodrom", "lat":"43.4057", "lng":"39.9578", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Suzuka Circuit", "lat":"34.8431", "lng":"136.541", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Autódromo Hermanos Rodríguez", "lat":"19.4042", "lng":"-99.0907", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit of the Americas", "lat":"30.1328", "lng":"-97.6411", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/United%20States%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Interlagos circuit", "lat":"-23.7036", "lng":"-46.6997", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Yas Marina Circuit", "lat":"24.4672", "lng":"54.6031", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi%20carbon.png.transform/2col/image.png"}]

circuitTeamInfoUS = [{"teamName":"Ferrari", "driver1_name":"Charles Leclerc", "driver2_name":"Sebastian Vettel", "driver1_topSpeed":"206.374", "driver2_topSpeed":"194.262",
                    "circuit_topSpeed":"231.5", "driver1_points":"13", "driver2_points":"0", "circuit_name":"Circuit of the Americas"},
                    {"teamName":"Haas", "driver1_name":"Romain Grosjean", "driver2_name":"Kevin Magnussen", "driver1_topSpeed":"209", "driver2_topSpeed":"219",
                    "circuit_topSpeed":"231.5", "driver1_points":"8", "driver2_points":"3", "circuit_name":"Circuit of the Americas"}]

# circuitTeamLapInfo = [{"Lap":"1", "driver1_LapTime":"104832", "driver2_LapTime":"01:33.7"},{"Lap":"2", "driver1_LapTime":"01:33.7", "driver2_LapTime":"01:33.7"},
#                   {"Lap":"3", "driver1_LapTime":"01:33.7", "driver2_LapTime":"01:33.7"},{"Lap":"4", "driver1_LapTime":"01:33.7", "driver2_LapTime":"01:33.7"},
#                   {"Lap":"5", "driver1_LapTime":"01:33.7", "driver2_LapTime":"01:33.7"}]
TeamLapInfoUS = [{"teamName":"Ferrari","driver":"1", "1":"104832", "2":"102605", "3":"101743", "4":"101504", "5": "101759", "6":"101722", "7":"102576", "8":"102048",
                    "9":"102567", "10":"101953"},
                 {"teamName":"Ferrari","driver":"2", "1":"106688", "2":"104089", "3":"103091", "4":"102300", "5": "102194", "6":"102165", "7":"102603"}]

# Circuit of americas
# circuitid : 69, constructorid: 6, raceid: 1028, driver id: 844, Name: Charles Leclerc, code: LEC
# circuitid : 69, constructorid: 6, raceid: 1028, driver id: 20, Name: sebastian vettel, code: VET
# circuit gilles Villeneuve


mapURL = [{"mapURL":"http://127.0.0.1:5000/2019"}]

@app.route('/')
def entry():
    return render_template('index.html', data = circuitList)

@app.route('/2019')
def access_data():
    return render_template('index.html', data = circuitList)

@app.route('/dashboard/<circuit>')
def access_dashboard(circuit):
    print(circuit, file=sys.stderr)
    return render_template('dashboard-index.html', data = circuit)

@app.route('/data')
def access_dataTwo():
    return jsonify(circuitList)

@app.route('/data/<request_params>')
def access_dataThree(request_params):
    key, value = request_params.split('_')
    if value == 'CircuitInfo':
        if key == 'Circuit of the Americas':
            return jsonify(circuitTeamInfoUS)
        else:
            return jsonify(circuitTeamInfoUS)
    elif value == 'LapInfo':
        if key == 'Circuit of the Americas':
            return jsonify(TeamLapInfoUS)
        else:
            return jsonify(TeamLapInfoUS)
    else:
        return jsonify(circuitList)

if __name__ == "__main__":
    app.run(debug=True)
