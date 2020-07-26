# Se encarga de cargar las librerias
# Configurar las bases de datos, etc
from flask import Flask

app = Flask(__name__)

from app import routes
