import { Request, Response } from "express";

const express = require('express');
const app = express();
const port = 3000;

app.get('/' , (req: Request , res: Response) => {
    console.log("Hello bro...");
});

app.listen(port , () => {
    console.log("Reqfly listening on port 3000 !!!");
});