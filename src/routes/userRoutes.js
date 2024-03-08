const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// MongoDB bağlantı URL'si
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Veritabanına bağlanma
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('MongoDB\'ye başarıyla bağlandı.');
    } catch (error) {
        console.error('MongoDB bağlantısı sırasında bir hata oluştu:', error);
    }
}

connectToMongoDB();

router.post('/users', async (req, res) => {
    try {
        const userData = req.body; // POST isteğinden gelen veriler
        const database = client.db('stajUygulaması'); // Veritabanı adı
        const collection = database.collection('users'); // Koleksiyon adı

        // Veriyi ekleme
        const result = await collection.insertOne(userData);
        console.log(`${result.insertedCount} adet kullanıcı eklendi.`);
        res.status(201).send('Kullanıcı başarıyla eklendi.');
    } catch (error) {
        console.error('Kullanıcı ekleme sırasında bir hata oluştu:', error);
        res.status(500).send('Kullanıcı eklenirken bir hata oluştu.');
    }
});

module.exports = router;
