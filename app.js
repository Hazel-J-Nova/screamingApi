if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const bodyParse = require('bodyParser')
const mongoose = require("mongoose");

const db =""