const SubCategory = require('../models/subCategoryModel');


const create_subcategory = async (req, res) => {

  try {

    const check_sub = await SubCategory.find({ category_id: req.body.category_id });

    if (check_sub.length > 0) {

      let checking = false;
      for (let i = 0; i < check_sub.length; i++) {
        if (check_sub[i]['sub_category'].toLowerCase() === req.body.sub_category.toLowerCase()) {
          checking = true;
          break;
        }
      }

      if (checking === false) {

        const subCategory = new SubCategory({
          category_id: req.body.category_id,
          sub_category: req.body.sub_category
        });
        const sub_cat_data = await subCategory.save();
        res.status(200).send({ sucess: true, msg: "Sub-Category details", data: sub_cat_data });
      }
      else {
        res.status(200).send({ sucess: true, msg: "This subcategory (" + req.body.sub_category + ") is already exists" });
      }

    }
    else {

      // ye else tb chalega jb ki ye data pehle se nahi db me i.e. find() karne pr hme sub_category 
      // nahi milega.

      const subCategory = new SubCategory({
        category_id: req.body.category_id,
        sub_category: req.body.sub_category
      });
      const sub_cat_data = await subCategory.save();

      //jb sub category add ho jati hai to hm user ko kiya message denge::
      res.status(400).send({ success: true, msg: "sub-category details", data: sub_cat_data });
    }




  }
  catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }

}


// delete sub category:::



const delete_subcategory = async (req, res) => {

  try {
    const _id = req.body._id;
    const result = await SubCategory.deleteOne({ _id });
    res.send(result);
  }
  catch (error) {
    res.send(error);
  }

}



module.exports = {
  create_subcategory,
  delete_subcategory
}