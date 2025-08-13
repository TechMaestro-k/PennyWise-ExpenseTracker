const express=require('express')

const {
    getAllIncome,
    addIncome,
    deleteIncome
} = require('../controllers/incomeControllers')

const {protect}= require('../middleware/authMiddleware')
const router=express.Router();

router.post('/add',protect,addIncome)
router.get('/get',protect,getAllIncome)
router.delete('/:id',protect,deleteIncome)

module.exports = router;
