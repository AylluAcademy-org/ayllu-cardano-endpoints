import type { Application } from "express";
import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app: Application = express();
const port = process.env['PORT'];

