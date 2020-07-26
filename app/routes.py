from flask import render_template, flash, redirect, url_for
from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hola Mundo!"

@app.route('/potenciometro', methods=['GET','POST'])
def mostrar_valor():
    import serial
    ser = serial.Serial('COM3', 9600)
    return ser.readline()