const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    return res.send('Router funcionando');
});

router.get('/paises', (req, res) => {
    const paises = ['España', 'Francia', 'Portugal'];
    return res.send(paises);
});
module.exports = router;