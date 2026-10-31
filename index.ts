import express from "express";
const app = express();
app.use("/home", (req, res) => {
    res.status(200).json("iam muskan");
});
app.use("/about", (req, res) => {
    res.status(200).json("iam inter student");
});
app.use("/contact", (req, res) => {
    res.status(200).json("iam interested in web development");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});