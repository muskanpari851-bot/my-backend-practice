import {Router} from 'express';

import { 
    getAllBooks, createBook, updateBook,deleteBook
    } from '../controllers/book.controllers.js';

const bookRouter = Router();

bookRouter.get('/getbooks', getAllBooks);
bookRouter.post('/createbook', createBook);
bookRouter.put('/updatebook/:id', updateBook);
bookRouter.delete('/deletebook/:id', deleteBook);

export default bookRouter;