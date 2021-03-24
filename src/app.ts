import express from 'express';

import router from './router/router';

const app = express();
app.use(express.json());

app.use('/', router);

const port = 5000;

app.listen(port, () => console.log(`running on port ${port}`));