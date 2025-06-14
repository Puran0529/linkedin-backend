const express = require('express');
const cors = require('cors');
const scrapeRoute = require('./routes/scrape');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/scrape', scrapeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));