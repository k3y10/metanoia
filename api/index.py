import os
import datetime
import logging
import base64
import re
import json
from flask import Flask, request, jsonify, send_file, url_for, make_response
import firebase_admin
from firebase_admin import credentials, db, auth, initialize_app, storage
from dotenv import load_dotenv
import pandas as pd
from io import BytesIO
import requests

load_dotenv()
app = Flask(__name__)


if __name__ == '__main__':
    app.run(port=5328)
