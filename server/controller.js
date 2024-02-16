module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["you will be large.", "thou shall find a coin.", "you may or may not win the lottery..."]

        let randomI = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomI]

        res.status(200).send(randomFortune)
    }

}