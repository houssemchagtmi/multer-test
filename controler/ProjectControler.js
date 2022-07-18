const ImageSchema = require("../models/ImageSchema");

const addImage = async (req, res) => {
  try {
    const imageName = req.file?.path.slice(14, req.file?.path.length);
    console.log(req.file)

    const url = '"http://localhost:3000/profile/' + imageName;
    console.log(url);

    const existingImage = await ImageSchema.findOne({ name: req.body.name });

    if (existingImage) {
      return res.status(400).json({
        success: false,
        message: "exist ",
        data: "",
      });
    }

    const newImage = new ImageSchema({
      name: req.body.name,
      image: url,
      description: req.body.description,
      
    });
    await newImage.save();
    return res.status(200).json({
      success: true,
      message: "good job",
      data: newImage,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err });
  }
};

const getImage = async (req,res)=>{
try {
  const image = await ImageSchema.findById(req.params.id)
  return res.status(200).json({
    success: true,
    message: "there is your image: ",
    data: image,
  });} catch (error) {
    return res.status(400).json({ success: false, message: error });

}
}
const getAllImages = async (req,res)=>{
try {

  const image = await ImageSchema.find()
  return res.status(200).json({
    success: true,
    message: "there is your all images: ",
    data: image,
  });} catch (error) {
    return res.status(400).json({ success: false, message: error });

}
}

const updateImage = async (req,res)=>{
  try {
    const image = await ImageSchema.findByIdAndUpdate(req.params.id,  { $set: { ...req.body } },
      { new: true })
    return res.status(200).json({
      success:true,
      message:'update image successfuly',
      data:image,
    })
  } catch (error) {
    return res.status(400).json({success:false,message:error})
  }
}
const deleteImage = async (req,res)=>{
  try {
    const image = await ImageSchema.findOneAndDelete(req.params.id)
    return res.status(200).json({
      success:true,
      message:'delete image successfuly',
      data:image,
    })
  } catch (error) {
    return res.status(400).json({success:false,message:error})
  }
}

module.exports = {
  addImage,
  getImage,
  getAllImages,
  deleteImage,
  updateImage,
};
