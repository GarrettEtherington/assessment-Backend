

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)

const IPBtn = document.getElementById(`findIPAddress`)

const findHouse = () => {
    axios.get("http://localhost:4000/api/home/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

IPBtn.addEventListener(`click`, findHouse)

const dedBTN = document.getElementById(`deadButton`)

const killBtn = () => {
    axios.delete("http://localhost:4000/api/ded/")
    .then(res => {
        if(res.status === 200){
            dedBTN.remove()
        }
    })
}

dedBTN.addEventListener(`click`, killBtn)


 const smer = document.getElementById(`pp`)

 const postPP = () => {
    axios.post("http://localhost:4000/api/poste/", {beans:`Back end make my poor little brain hurt.`})
    .then(res => {
        const sting = res.data
        smer.innerHTML = sting
    })
 }

ugh.addEventListener(`click`, postPP)