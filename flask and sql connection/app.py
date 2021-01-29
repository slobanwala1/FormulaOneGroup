from flask import Flask, render_template, url_for, jsonify

app = Flask(__name__)

records = [{'name':'John'},{'name':'Suzy'}]
circuitList = [{"circuit_name":"Albert Park Grand Prix Circuit", "lat": "-37.8497", "lng":"144.968"},
               {"circuit_name":"Bahrain International Circuit", "lat": "26.0325", "lng":"50.5106"},
               {"circuit_name":"Shanghai International Circuit", "lat":"31.3389", "lng":"121.22"},
               {"circuit_name":"Baku City Circuit", "lat":"40.3725", "lng":"49.8533"},
               {"circuit_name":"Circuit de Barcelona-Catalunya", "lat":"41.57", "lng":"2.26111"},
               {"circuit_name":"Circuit de Monaco", "lat":"43.7347", "lng":"7.42056"},
               {"circuit_name":"Circuit Gilles Villeneuve", "lat":"45.5", "lng":"-73.5228"},
               {"circuit_name":"Circuit Paul Ricard", "lat":"43.2506", "lng":"5.79167"},
               {"circuit_name":"Red Bull Ring", "lat":"47.2197", "lng":"14.7647"},
               {"circuit_name":"Silverstone Circuit", "lat":"52.0786", "lng":"-1.01694"}]



@app.route('/')
def entry():
    return render_template('index.html', data = circuitList)

@app.route('/2019')
def access_data():
    # results = []
    # results = jsonify(circuitList)
    # return render_template('index.html', data = records, data2 = circuitList)
    return render_template('index.html', data = circuitList)
    # if year == '2019':
    #     results = jsonify(circuitList)
    #     # return render_template('index.html', data = records, data2 = circuitList)
    #     return render_template('index.html', data = records, data2 = results)
    # else:
    #     # return render_template('index.html', data = records, data2 = circuitList)
    #     return jsonify(circuitList)


# @app.route('/dashboard/<data>')
# def access_databoard():
#     return render_templa

if __name__ == "__main__":
    app.run()
