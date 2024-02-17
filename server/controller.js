module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["you might possibly not die.", "you might possibly have a skeleton inside you.", "you may or maybe wont meet a totally hot ghost babe..."]

        let randomI = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomI]

        res.status(200).send(randomFortune)
    },
    findHouse: (req, res) => {
        const IPadd = `your mom's house: 308 Negra Arroyo Lane, Albuquerque, New Mexico`
        res.status(200).send(IPadd)
    },
    killButton: (req, res) => {
        res.status(200).send()
    },
    postStuff: (req, res) => {
        const gug = req.body.beans
        res.status(200).send(gug)
    }

}