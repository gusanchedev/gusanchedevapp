const express =  require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Spotify App");
})

module.exports = router;