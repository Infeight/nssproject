// document.body.style.backgroundColor = "red"

const events = async()=>{
    const data = await fetch('https://nssproject.onrender.com/events');
  const pdfdata = await fetch('https://nssproject.onrender.com/eventpdf');
  const upevents = await fetch('https://nssproject.onrender.com/upevents');
  const experience = await fetch ('https://nssproject.onrender.com/experience')
  
  const allevents = await data.json()
  const allpdfs = await pdfdata.json()
  const allupevents = await upevents.json()
  const allexperience = await experience.json()

  console.log(allevents)

  allevents.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.name
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deleteeve)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
    alleventdisp.appendChild(eventname)
    alleventdisp.appendChild(delbtn)

    document.getElementById("eventsdisp").append(alleventdisp)
    
  });

  allpdfs.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.name
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deletepdf)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
    alleventdisp.appendChild(eventname)
    alleventdisp.appendChild(delbtn)

    document.getElementById("pdfdisp").append(alleventdisp)
    
  });

  allupevents.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.Title
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deleteupeve)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
    alleventdisp.appendChild(eventname)
    alleventdisp.appendChild(delbtn)

    document.getElementById("upeve").append(alleventdisp)
    
  });

  allexperience.forEach(element => {
    const alleventdisp = document.createElement("div")
    const eventname = document.createElement("li")
    const name = document.createElement("li")
    const delbtn = document.createElement("button")

    eventname.innerHTML = element.Exp.slice(0,35)+"..."
    eventname.style.maxWidth = "60%"
    name.innerText = element.Name.slice(0,16)
    delbtn.innerText = "Delete"
    delbtn.addEventListener("click",deleteexp)

   alleventdisp.className = "alleventdisp"
   eventname.className = "eventname"
   name.className = "stuname"
  
    alleventdisp.appendChild(eventname)

    alleventdisp.appendChild(delbtn)
    alleventdisp.appendChild(name)
    document.getElementById("experience").append(alleventdisp)
    
  });
}
events()

const deleteeve = async(e)=>{

const detail=   {name: e.target.closest('.alleventdisp').querySelector(".eventname").innerText}
  e.target.closest('.alleventdisp').style.backgroundColor = "red"
   await fetch ('http://localhost:5001/deleteevent',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
}
const deletepdf = async(e)=>{
  e.target.closest('.alleventdisp').style.backgroundColor = "red"
  const detail=   {name: e.target.closest('.alleventdisp').querySelector(".eventname").innerText}
  
     await fetch ('http://localhost:5001/deletepdf',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
  }

  const deleteupeve = async(e)=>{
    e.target.closest('.alleventdisp').style.backgroundColor = "red"
    const detail=   {Title: e.target.closest('.alleventdisp').querySelector(".eventname").innerText}
    
       await fetch ('http://localhost:5001/deleteupevent',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
    }

    const deleteexp = async(e)=>{
      e.target.closest('.alleventdisp').style.backgroundColor = "red"
      const detail=   {Name: e.target.closest('.alleventdisp').querySelector(".stuname").innerText}
      
         await fetch ('http://localhost:5001/deleteexp',{method:'post',headers:{"Content-Type": "application/json" },body:JSON.stringify(detail)})
      }
