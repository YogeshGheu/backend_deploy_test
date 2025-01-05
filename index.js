import express from "express";
import "dotenv/config";

const app = express();

const URL = "https://api.github.com/users/yogeshgheu";

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/twitter", (req, res) => {
	res.send("<a href='https://x.com'>Twitter</a>");
});

app.get("/login", (req, res) => {
	res.send("<h1>My name is yogesh</h1>");
});

app.get("/github", async (req, res) => {
	const req = await fetch(URL);
	const response = await res.json();
	res.json(response);
});

app.listen(process.env.PORT, () => {
	console.log(`app is running on port : ${process.env.PORT}`);
});
