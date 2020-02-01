`use trict`;
const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
    let data = {};
    data.date = new Date();
    res.render(`index`, data);
});

router.get("/lotto", (req, res) => {
    let data = {
        lotto: []
    };
    for (let i = 0; i < 7; i++) {
        const randomNumber = Math.floor((Math.random() * 35) + 1);
        if (data.lotto.includes(randomNumber)) {
            i--;
        } else {
            data.lotto.push(randomNumber);
        }
    }
    data.lotto.sort(
        (a, b) => {
            return a - b
        }
    );
    res.render(`lotto`, data);
});

module.exports = router;