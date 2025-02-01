from flask import Flask, request, jsonify, make_response
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  

def get_schedule(class_name, day):
    schedules = {
        "monday": [
            {"lesson": "1", "subject": "Алгебра", "teacher": "Майорова Т.А.", "time": "09:00", "place": "11"},
            {"lesson": "2", "subject": "Геометрия", "teacher": "Иванов И.И.", "time": "10:00", "place": "12"},
            {"lesson": "3", "subject": "Физика", "teacher": "Петров П.П.", "time": "11:00", "place": "13"},
            {"lesson": "4", "subject": "Химия", "teacher": "Сидоров С.С.", "time": "12:00", "place": "14"},
            {"lesson": "5", "subject": "История", "teacher": "Кузнецова А.А.", "time": "13:00", "place": "15"},
            {"lesson": "6", "subject": "Литература", "teacher": "Смирнова Н.Н.", "time": "14:00", "place": "16"}
        ],
        "tuesday": [
            {"lesson": "1", "subject": "Физика", "teacher": "Петров П.П.", "time": "09:00", "place": "13"},
            {"lesson": "2", "subject": "Химия", "teacher": "Сидоров С.С.", "time": "10:00", "place": "14"},
            {"lesson": "3", "subject": "История", "teacher": "Кузнецова А.А.", "time": "11:00", "place": "15"},
            {"lesson": "4", "subject": "Литература", "teacher": "Смирнова Н.Н.", "time": "12:00", "place": "16"},
            {"lesson": "5", "subject": "Алгебра", "teacher": "Майорова Т.А.", "time": "13:00", "place": "11"},
            {"lesson": "6", "subject": "Геометрия", "teacher": "Иванов И.И.", "time": "14:00", "place": "12"}
        ],
  
    }
    return schedules.get(day, [])

@app.route('/api/v1/get_schedule', methods=['GET'])
def get_schedule_api():
    class_name = request.args.get('class')
    day = request.args.get('day')
    
    if class_name and day:
        schedule = get_schedule(class_name, day)
        response = make_response(jsonify(schedule), 200)
        response.headers['Content-Type'] = 'application/json; charset=utf-8'
        return response
    else:
        response = make_response(jsonify({"error": "Class and day parameters are required"}), 400)
        response.headers['Content-Type'] = 'application/json; charset=utf-8'
        return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)