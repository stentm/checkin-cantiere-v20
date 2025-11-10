export const config={api:{bodyParser:true}};
export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const url="https://sheetdb.io/api/v1/z76rw4k00z4qo";
  try{
    const payload=req.body||{};
    const r=await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({data:[payload]})
    });
    const d=await r.json();
    if(!r.ok){ return res.status(500).json({error:"SheetDB error", d}); }
    return res.status(200).json({success:true});
  }catch(e){
    return res.status(500).json({error:e.toString()});
  }
}


