from flask import render_template, flash, redirect, url_for, jsonify
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/potenciometro', methods=['POST'])
def mostrar_valor():
    import serial
    ser = serial.Serial('COM5', 9600)
    ser=ser.readline().decode()
    return jsonify({"serial": ser})