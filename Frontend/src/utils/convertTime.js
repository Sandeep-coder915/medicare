const convertTime=time=>{
    const timeparts=time.split(":")
    let hours=parseInt(timeparts[0])
    const minutes=parseInt(timeparts[1])

    let meridian ='am'

    if(hours>=12){
       meridian='pm' 
       if(hours>12){
        hours-=12
       }
    }
    return hours.toString().padStart(2)+  ":" +minutes.toString().padStart(2,'0')+" "+meridian

}

export default convertTime; 