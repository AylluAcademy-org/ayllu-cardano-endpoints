import type { Application } from "express";
import express from "express";
import { getClient, formatCommands } from "./aws/iot";

const app: Application = express();
