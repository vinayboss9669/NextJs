import fs from 'fs';
export default async function handler(req,res){
    if(req.method==="POST"){
         let data=await fs.promises.readdir('contactdata');
         fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
            .then(() => {
                res.status(200).json({message:"Post request received",data:req.body})
            })
            .catch((err) => {
                console.error('Error writing file', err);
                res.status(500).json({message:"Internal Server Error"})
            })
        }
        else{
            res.status(400).json({message:"This method is not allowed"})
        }
}
   
