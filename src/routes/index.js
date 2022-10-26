const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('prueba 2');
});

module.exports = router;