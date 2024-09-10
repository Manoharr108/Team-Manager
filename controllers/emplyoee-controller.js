const operation = require("../models/emplyoee");

exports.AddEmplyoee =async(req, res)=>{
    try{
        let newemp = await operation.create(req.body);
        return res.status(201).json({message:"Successfully added to particular tab!!"});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}

exports.DeleteEmplyoee = async(req, res)=>{
    let {id} = req.params;
    try {
        let emp = await operation.findOneAndDelete({_id:id});
        return res.status(200).json({message:"Successfully deleted from the particlular tab!!"})
    } catch (error) {
        return res.status(500).json({message:"Error, something went wrong!"})
    }
}
exports.ModifyEmployee = async (req, res) => {
    const id = "60f719123456789123456789"; // Replace with a valid ID from your database
    const name = "Test Name";
    const photo = "http://example.com/photo.jpg";
    const role = "Developer";
    const category = "Keep It Up";

    try {
        let emp = await operation.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name: name,
                    photo: photo,
                    role: role,
                    category: category
                }
            },
            { new: true }
        );

        if (!emp) {
            return res.status(404).json({ message: "Employee not found!" });
        }

        return res.status(200).json({ message: "Successfully updated!" });
    } catch (error) {
        console.error('Error while modifying employee:', error);
        return res.status(500).json({ message: "Something went wrong while modifying!" });
    }
};

exports.Emplyoee = async(req,res)=>{
    let {category} = req.params;
    try{
        let emp = await operation.find({category:category});
        return res.status(200).json(emp);
    }
    catch(err){
        return res.status(500).json({message:"something went wrong!!"})
    }
};

exports.AllEmployee = async(req,res)=>{
    try {
        let emp = await operation.find({});
        return res.status(200).json({emp})
    } catch (error) {
        return res.status(500).json({message:"something went wrong!"})
    }
}