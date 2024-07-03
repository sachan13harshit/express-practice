const express = require('express');
const app = express();
app.use(express.json());
let courses = [{ id : 1, name : "java"} ,
                { id : 2, name : "node"} ,
                { id : 3, name : "react"} ];
app.get('/courses', (req, res) => {
   res.json(courses);
});

app.post('/courses', (req, res) => {
    const course = {
        id : courses.length + 1,
        name : req.body.name
    };
    courses.push(course);
    res.save(course);
    res.json(course);
}
);

app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    course.name = req.body.name;
    res.json(course);
}
);


app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.json(course);
}
);

app.listen(3000, () => console.log('Server started'));