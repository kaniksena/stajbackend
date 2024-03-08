const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes.js');

const app = express();

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/stajUygulaması', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));

// JSON verileri için body-parser middleware'ini kullanın
app.use(express.json());

// Kullanıcı route'larını tanımlayın
app.use('/api', userRoutes);

// Sunucuyu dinlemeye başla
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
