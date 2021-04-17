const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;

app.use(cors());

app.use(express.static(__dirname));

app.listen(port, () =>
	console.log(`Server is listening on http://localhost:${port}`)
);
