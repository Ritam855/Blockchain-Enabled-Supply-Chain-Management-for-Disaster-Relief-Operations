import { Token } from '../Variable.js';


export const ReliefCampSignup = (reliefcamp)=>{
    return fetch(`http://localhost:3000/api/reliefcamp`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            "X-Access-Token": Token,
            
        },
        body:JSON.stringify(reliefcamp)
    })
    .then((resposne)=>{
        return resposne
    })
    .catch((err)=>console.log(err))
}

export const OsdmaSignup = (reliefcamp)=>{
  return fetch(`http://localhost:3000/api/osdma`,{
      method: "POST",
      headers:{
          Accept: "application/json",
          "Content-Type":"application/json",
          "X-Access-Token": Token,
          
      },
      body:JSON.stringify(reliefcamp)
  })
  .then((resposne)=>{
      return resposne
  })
  .catch((err)=>console.log(err))
}

export const DistributorSignup = (reliefcamp)=>{
  return fetch(`http://localhost:3000/api/distributor`,{
      method: "POST",
      headers:{
          Accept: "application/json",
          "Content-Type":"application/json",
          "X-Access-Token": Token,
          
      },
      body:JSON.stringify(reliefcamp)
  })
  .then((resposne)=>{
      return resposne
  })
  .catch((err)=>console.log(err))
}

export const CivilianSignup = (reliefcamp)=>{
  return fetch(`http://localhost:3000/api/civilians`,{
      method: "POST",
      headers:{
          Accept: "application/json",
          "Content-Type":"application/json",
          "X-Access-Token": Token,
          
      },
      body:JSON.stringify(reliefcamp)
  })
  .then((resposne)=>{
      return resposne
  })
  .catch((err)=>console.log(err))
}

export const CreateRelief = (reliefcamp)=>{
  return fetch(`http://localhost:3000/api/reliefitem`,{
      method: "POST",
      headers:{
          Accept: "application/json",
          "Content-Type":"application/json",
          "X-Access-Token": Token,
          
      },
      body:JSON.stringify(reliefcamp)
  })
  .then((resposne)=>{
      return resposne
  })
  .catch((err)=>console.log(err))
}

export const ReliefCampSignin = (participant) => {
    return fetch(`http://localhost:3000/api/system/identities/issue`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Access-Token": Token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  }