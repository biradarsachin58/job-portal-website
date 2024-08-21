const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require('path');
require("dotenv").config();
require("./models/userModels");
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/error");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoute");
const jobTypeRouter = require("./routes/jobTypeRoutes");
const jobRouter = require("./routes/jobRoutes");
const companyRouter = require("./routes/companyRoutes");
const applicationRouter = require("./routes/applicationRoutes");

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("DB connected"))
.catch((err) => console.log(err));


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}))
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());  
app.use(errorHandler);
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api',jobTypeRouter);
app.use('/api',jobRouter);
app.use('/api', companyRouter);
app.use('/api', applicationRouter);

 app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', express.static('uploads'));


//port
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});