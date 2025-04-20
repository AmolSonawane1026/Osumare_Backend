const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Task API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
