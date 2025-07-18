const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jobsRoute = require('./routes/jobs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/jobs', jobsRoute);
<<<<<<< HEAD
app.use(require('./vaultStatsRoute'));
app.use(require('./nodeSoulLog'));
app.use(require('./obfuscationBait'));
app.use(require('./soulprintLoader'));
app.use(require('./legacyScore'));

=======
>>>>>>> 865297188b33778ee0043fc41823c9663ae65614

app.get('/', (req, res) => res.send('NOXO Backend API Running'));

app.listen(PORT, () => {
  console.log(`✅ NOXO backend live on http://localhost:${PORT}`);
});
