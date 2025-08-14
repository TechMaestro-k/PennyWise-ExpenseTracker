const express=require('express')

const {
    getAllExpense,
    addExpense,
    deleteExpense
} = require('../controllers/expenseControllers')

const {protect}= require('../middleware/authMiddleware')
const router=express.Router();

router.post('/add',protect,addExpense)
router.get('/get',protect,getAllExpense)
router.delete('/:id',protect,deleteExpense)

module.exports = router;
