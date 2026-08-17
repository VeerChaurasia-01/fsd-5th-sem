const mypromise=new Promise((resolve,reject)=>{
    let age =19;
    if(age>=18){
        resolve("Eligible for vote");
    }else{
        reject("not eligible for vote")
    }
})
// console.log(mypromise);
// mypromise
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));
const checkVoteEligibility =async()=>{
    try{
        const msg = await mypromise;
        console.log(msg);
    }catch(error){
        console.log(error);
    }
}
checkVoteEligibility();