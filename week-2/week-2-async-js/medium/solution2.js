// in 24 hours format

// function update(){
//     console.clear();
//     let start = new Date()
//     const hours = start.getHours()
//     const minutes = start.getMinutes()
//     const seconds = start.getSeconds()
//     console.log(`${hours}:${minutes}:${seconds}`);
// }
// setInterval(update,1000)

// in 12 hours format
function update(){
        console.clear();
        let start = new Date()
        const hours = ((start.getHours()+11)%12 + 1)
        const minutes = start.getMinutes()
        const seconds = start.getSeconds()
        const ampm = start.getHours() >= 12 ? "PM" :"AM"
        console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}
setInterval(update,1000)