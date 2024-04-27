import express from 'express';

import { getNewItems, addNewItems ,getSingleItem} from '../controllers/newItemsController.js';


const router = express.Router();

router.get('/getItems', getNewItems);

router.get('/getSingleItem', getSingleItem);

router.post('/addItems', addNewItems);
  

// This is the default export for this module.
export default router;  