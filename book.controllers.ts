import type { Request, Response } from "express";

      const arrofbook = [
    {
        id: 1, 
        title: 'Over Coat',
         author: 'Ghulam Abbas',
         year: 2020
    },
    {
        id: 2,
         title: 'Gods of Small Things', 
        author: 'Arundhati Roy',
        year: 1997
    },
    {
        id: 3,
         title: 'The Book Thief',
         author: 'Markus Zusak',
         year: 2005
    },
];
type BookInput = {
    title?: string;  
    author?: string;
    year?: number;
};

    export const getAllBooks = (req: Request, res: Response) => {
        try{
        res.status(200).json({
            message: 'All books retrieved successfully',
         books:arrofbook
        });
        
    } catch (error) {
        res.status(500).json({
             message: 'Internal server error' 
            });
    }
    };
    
export const createBook = (req: Request, res: Response) => {
       if(!req.body.title||!req.body.author||!req.body.year) { 
res.status(400).json({
     message: 'Missing required fields' 
    });
    }
        
    
        
        arrofbook.push(req.body);
        return res.status(201).json({
            message: 'Book created successfully',
            book: req.body
        });
    }
 


export const updateBook = (req: Request, res: Response) => {
    const bookId = Number(req.params.id);
    const bookIndex = arrofbook.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
         res.status(404).json({
            message: 'Book not found',
        });
    }
arrofbook[bookIndex] = {...arrofbook[bookIndex],...req.body};
res.status(200).json({
    message:'Book updated successfully',
    book:arrofbook[bookIndex]
});
}
    export const deleteBook = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index =arrofbook.findIndex((book) => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = arrofbook.splice(index,1)[0];

  return res.status(200).json({
    message: "Book deleted successfully",
    book: deletedBook
  });
};