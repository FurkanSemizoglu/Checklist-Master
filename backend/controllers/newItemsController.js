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
        console.log("getting fata" , req.body); // Logging the received data from the front-end
    
        try {
            // Creating a new ChecklistItem object using the data received from the front-end
            const newItem = new ChecklistItem({ 
                title: req.body.title,
                checklistItems: req.body.inputFields
            });
    
            // Saving the new ChecklistItem to the database
            newItem.save()
                .then(() => res.json({
                   status: 'Success',
                   message : 'New item added!'
                })) // Sending a success message back to the front-end
                .catch(err => res.status(400).json('Error: ' + err)); // Sending an error message if saving fails
        } catch (error) {
            // Catching any potential errors and sending a 500 status code with an error message
            res.status(500).json({ message: error.message });
        }
    }


const getSingleItem = (req, res, next) => {
    try {
        ChecklistItem.findById(req.body._id || req.params.id    )
            .then(item => res.json(item))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
}

export { getNewItems, addNewItems , getSingleItem };