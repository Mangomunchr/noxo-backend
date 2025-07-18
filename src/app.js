const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/xp',     require('./routes/xp'));
app.use('/api/codex',  require('./routes/codex'));
app.use('/api/vault',  require('./routes/vault'));
app.use('/api/job',    require('./routes/job'));
app.use('/api/nodesoul', require('./routes/nodesoul'));
app.use('/api/chaos',    require('./routes/chaos'));
app.use('/api/ritual/timeattack', require('./routes/timeattack'));
app.use('/api/weather',   require('./routes/weather'));
app.use('/api/ritual',    require('./routes/rituals'));
app.use('/api/summonmod', require('./routes/summonmod'));
app.use('/api/founder',   require('./routes/founder'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Noxo backend running on port ${PORT}`);
});

