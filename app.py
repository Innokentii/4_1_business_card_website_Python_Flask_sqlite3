from flask import Flask, render_template, request, jsonify, Response, send_file
import sqlite3 as SQL
import io

# Функция запуска сайта
app = Flask(__name__)
def create_app():
    return app

PATH_SQL = 'database/SQLite3_base.db' # путь до базы данных;

#===============================================================#
#                    Глобальные переменные                      #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#


#===============================================================#
#                Работа_с_базой_данных_SQLite3                  #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#

# создание базы данных для изображений;
connect = SQL.connect(PATH_SQL)
cursor = connect.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS image(
               num int,
               img blob
               )""")
connect.commit()
connect.close

#===============================================================#
#                     Работа с запросами                        #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#

# Запрос "POST";
@app.route('/post_request_1', methods=['POST'])
def post_request_1_f():
    post_request = request.get_json(force=True)
    post_request = [post_request['name_basket']]
    if request.method == 'GET':
        return None
    return post_request

# Запрос "GET";
@app.route('/get_request_1', methods=['GET'])
def get_request_1_f():
    data = 1
    search_object = ''
    if request.method == 'POST':
        return Response(search_object, content_type='application/octet-stream')
    return jsonify(data)

#===============================================================#
#                      Функции и классы                         #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#

#===============================================================#
#                    Работа со страницами                       #
#VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV#

# Рендер тела сайта (запуск сайта);
@app.route('/')
@app.route('/main')
def main_f():
    render_template('main.html')
    return render_template('1_main.html')
# Рендер страницы "ГЛАВНАЯ";
@app.route("/1_main")
def _1_main_f():
    return render_template("1_main.html")
