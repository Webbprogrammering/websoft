`use trict`;
const express = require(`express`);
const router = express.Router();

function generateLottoNumbers() {
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
    return data.lotto;
}

router.get(`/`, (req, res) => {
    let data = {};
    data.date = new Date();
    res.render(`index`, data);
});

router.get("/lotto", (req, res) => {
    const lottoNumbers = generateLottoNumbers();
    res.render(`lotto`, {lottoNumbers: lottoNumbers});
});

router.get("/lotto-json", (req, res) => {
    const lottoNumbers = generateLottoNumbers();
    const userInputString = req.query.row;
    if (userInputString === undefined) {
        res.send(lottoNumbers);
        return;
    }
    const userInput = userInputString.split(",").map(Number);
    const numbersFound = lottoNumbers.filter((value => userInput.includes(value)));
    const result = {
        score: (`${numbersFound.length} out of ${lottoNumbers.length}`),
        lottoDraw: lottoNumbers,
        userInput: userInput,
        numbersFound: numbersFound,
    };
    res.send(result);
});

module.exports = router;