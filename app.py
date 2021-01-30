from flask import Flask,render_template
import json
app = Flask(__name__)

@app.route("/")
def load_home():
    with open('data_text.txt') as json_file:
        data = json.load(json_file)
    return render_template('home.html', data = data)

if __name__ == "__main__":
    app.run(debug=True)