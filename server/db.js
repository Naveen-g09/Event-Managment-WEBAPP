const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://naveengummella:<Password>@eventmanagement.5vsjxw9.mongodb.net/')
.then(() => console.log('Database connected successfully'))
.catch(() => console.log('Database is not connected'))