from flask import Flask, render_template, request, jsonify, Response
import sqlite3 as SQL
from flask import Flask, render_template, request, jsonify, Response
import sqlite3 as SQL

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
cursor.execute("""CREATE TABLE IF NOT EXISTS image(img blob)""")
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

# Запрос "GET и POST" на вывод из базы данных изображений;
data_work_image_load = -1 # (счетчик_загрузки изображений);
@app.route('/get_image_load', methods=['GET', 'POST'])
def get_image_load_get_f():
    global data_work_image_load
    if data_work_image_load == 16:
        data_work_image_load = -1
    connect = SQL.connect(PATH_SQL)
    cursor = connect.cursor()
    cursor.execute('SELECT img FROM image')
    search_object = list(row[0] for row in cursor.fetchall())
    connect.commit()
    connect.close
    data_work_image_load += 1
    return Response(search_object[data_work_image_load], content_type='application/octet-stream')

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
