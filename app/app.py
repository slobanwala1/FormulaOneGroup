from flask import Flask, render_template, url_for, jsonify
import sys

app = Flask(__name__)

records = [{'name':'John'},{'name':'Suzy'}]
circuitList = [{"circuit_name":"Albert Park Grand Prix Circuit", "lat": "-37.8497", "lng":"144.968", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Bahrain International Circuit", "lat": "26.0325", "lng":"50.5106", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Shanghai International Circuit", "lat":"31.3389", "lng":"121.22", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Baku City Circuit", "lat":"40.3725", "lng":"49.8533", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit de Barcelona-Catalunya", "lat":"41.57", "lng":"2.26111", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit de Monaco", "lat":"43.7347", "lng":"7.42056", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit Gilles Villeneuve", "lat":"45.5", "lng":"-73.5228", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Circuit Paul Ricard", "lat":"43.2506", "lng":"5.79167", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Red Bull Ring", "lat":"47.2197", "lng":"14.7647", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"},
               {"circuit_name":"Silverstone Circuit", "lat":"52.0786", "lng":"-1.01694", "url":"https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/2col/image.png"}]

top speed, lap time for each lap of that race,

line graph:
all drivers on race
x = number of lap
y = time

circuitDashboard = [{"teamName":"test1", "driver1_name":"", "driver2_name":"", "driver1_topSpeed":"", "driver2_topSpeed":"", "circuit_topSpeed", "driver1_points":"",
                     "driver2_points":"", "circuit_name":"", "driver1_Lap1":"", "driver2_Lap1Time":""},
                     {"teamName":"test1"}]
circuitTopTen = [{"driver_name":"", "teamName":"test1", "time":""}, {"driver_name":"", "teamName":"test1", "time":""}, {"driver_name":"", "teamName":"test1", "time":""},
                 {"driver_name":"", "teamName":"test1", "time":""}, {"driver_name":"", "teamName":"test1", "time":""}, {"driver_name":"", "teamName":"test1", "time":""},
                 {"driver_name":"", "teamName":"test1", "time":""}, {"driver_name":"", "teamName":"test1", "time":""}, {"driver_name":"", "teamName":"test1", "time":""},
                 {"driver_name":"", "teamName":"test1", "time":""}]
mapURl = [{"mapURL":"http://127.0.0.1:5000/2019"}]

@app.route('/')
def entry():
    return render_template('index.html', data = circuitList)

@app.route('/2019')
def access_data():
    return render_template('index.html', data = circuitList)

@app.route('/dashboard/<circuit>')
def access_dashboard(circuit):
    print(circuit, file=sys.stderr)
    return render_template('dashboard-index.html', data = circuitList)

@app.route('/data')
def access_dataTwo():
    return jsonify(circuitList)

@app.route('/data/<request_params>')
def access_dataThree():
    return jsonify(circuitList)

if __name__ == "__main__":
    app.run()
