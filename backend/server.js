'use static';
const path = require('path');
const express = require('express');
const frontendRouter = require('./routers/frontendRouter.js');

const app = express();

const publicDirPath = path.join(__dirname, '../', 'frontend', 'public');

app.use(express.static(publicDirPath));
app.use(express.json());

app.use(frontendRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
