const express = require('express');
const router = express();

router.get('/categories', (req, res) => {
    const data = [
        {
            _id: 1,
            name: 'Fasilkom',
        },
        {
            _id: 2,
            name: 'Talk',
        },
    ];

    res.status(200).json ({
        data,
    });
});

module.exports = router;
