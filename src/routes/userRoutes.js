const express = require('express');
const User = require('./src/models/users.js');
const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const { username, password, name, surname, email } = req.body;
        
        // Yeni bir kullanıcı nesnesi oluştur
        const newUser = new User({
            username,
            password,
            name,
            surname,
            email
        });

        // Yeni kullanıcıyı veritabanına kaydet
        const savedUser = await newUser.save();

        res.status(201).json(savedUser); // 201 Created durumuyla yeni kullanıcıyı yanıt olarak döndür
    } catch (error) {
        res.status(400).json({ message: error.message }); // Hata durumunu yanıt olarak döndür
    }
});

module.exports = router;
