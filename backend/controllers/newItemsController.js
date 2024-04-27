import {ChecklistItem} from '../models/newItemsModel.js';



const getNewItems = (req, res, next) => {
   try {

    ChecklistItem.find()
         .then(items => res.json(items))
         .catch(err => res.status(400).json('Error: ' + err));
   } catch (error) {
        res.status(500).json({ message: error.message });
   }
    };

const addNewItems = (req, res, next) => {
  try {
      const newItem = new ChecklistItem({ 
          title: req.body.title,
          checklistItems: req.body.checklistItems
      });
  
      newItem.save()
          .then(() => res.json('New item added!'))
          .catch(err => res.status(400).json('Error: ' + err));
  } catch (error) {
        res.status(500).json({ message: error.message });
  }
}

const getSingleItem = (req, res, next) => {
    try {
        ChecklistItem.findById(req.params.id)
            .then(item => res.json(item))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
}

export { getNewItems, addNewItems , getSingleItem };