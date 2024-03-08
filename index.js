const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('/Users/senakanik/Desktop/stajbackend/stajbackend/src/routes/userRoutes.js');

const app = express();
app.use(bodyParser.json());
// Kullanıcı route'larını tanımlayın
app.use('/api', userRoutes);

// Sunucuyu dinlemeye başla
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
