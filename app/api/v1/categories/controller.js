const Categories = require('./model');

const create = async ( req , res , next) => {
    try {
        const { name } = req.body;
        const result = await Categories.create({ name });
        res.status(201).json ({
            data: result,
        });
    }catch (err) {
        next (err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await Categories.find().select('_id name');
        res.status(200).json ({
            data: result,
        });
    } catch(err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await Categories.findOne({ _id: id });
        
        if (!result) {
            return res.status(404).json({ message: 'Id Categories tidak ditemukan '});
        }
        
        res.status(200).json ({
            data: result,
        });
    } catch(err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
  
      // cari dan update categories berdasarkan field _id
      const result = await Categories.findOneAndUpdate(
        { _id: id },
        { name },
        { new: true, runValidators: true } // menampilkan data baru dan menjalankan validation
      );
  
      res.status(200).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const destroy = async (req, res, next) => {
    try {
      const { id } = req.params;
      
      // cari dan hapus categories berdasakan field _id
      const result = await Categories.findByIdAndRemove(id);
      res.status(200).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

module.exports = {
    index,
    create,
    find,
    update,
    destroy
};