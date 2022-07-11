import type { Application } from "express";
import express from "express";
import { getClient, formatCommands } from "./iot";

const app: Application = express();
