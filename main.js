const express = require('express');
const app = express();


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'},
    {id: 5, name: 'course5'}

];

app.get('/', (req, res) => {
    res.send('Salam Elsen');
});
app.get('/api/course', (req, res) => {
    res.send(courses);
});

app.get('/api/course/:id', (req, res) => {
const course= courses.find(c=>c.id === parseInt(req.params.id));
if (!course) res.status(404).send('There is no information about the id you specified.');
res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));