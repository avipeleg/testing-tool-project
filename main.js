const express = require('express');
const app = express();

app.get('/', (req, res) => { // end pint - routh '/' - forword slash, mention the first page of the website. 
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Minimal Page</title>
        </head>
        <body>
          <h1>Home Page</h1>
          <a href="/products">Products</a><br>
          <a href="/faq">FAQ</a><br>
          <script src="/index.js"> </script>
        </body>
      </html>
    `);
});

app.get('/products', (req, res) => { // end pint - routh '/' - forword slash, mention the first page of the website. 
  //res.send('Hello from Express!'); This equal to the below code   

  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Minimal Page</title>
        </head>
        <body>
          <h1>Products</h1>
          <a href="/"> Home </a><br>
          <script src="/index.js"> </script>
        </body>
      </html>
    `)
});

app.get('/faq', (req, res) => { // end pint - routh '/' - forword slash, mention the first page of the website. 
  //res.send('Hello from Express!'); This equal to the below code   
  // // שורה 38 זה הטיפול בראוט ושורה 42 מחזירה מחרוזת שהיא קוד הטמל שבין מבקשת להחזיר את האינדס ג׳אווה סקריפט 
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Minimal Page</title>
        </head>
        <body>
          <h1>FAQ</h1>
          <a href="/"> Home </a><br>
          <a href="/products"> Products </a><br>
          
          <script src="/index.js"> </script> 
        </body>
      </html>
    `)
});

app.get('/about', (req, res) => { // end pint - routh '/' - forword slash, mention the first page of the website. 
  res.send('About US - from Express!');
});

app.get('/index.js', (req, res) => { // end pint - routh '/' - forword slash, mention the first page of the website. 
  res.send('console.log("this is the index js file !!!!!")'); // מחזירה מחרוזת והבראוזר מפרש את זה אחרת 
});


// יצירה של ראוט שהוא חלק מהאי פי איי 
app.get('/api/data1', (req, res) => { // end pint - routh '/' - forword slash, mention the first page of the website. 
  const obj1 = { firstName: 'avi', lastName: 'peleg' }  // הגדרת אובייקט עם שני שדות
  const obj1json = JSON.stringify(obj1); // ממיר את האובייקט לג׳יסון ושומר אותו  בקבוע
  res.json(obj1json); // בשורה הזו מחזירים את מחרוזת הג׳יסון מהשרת לקליינט  
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//  שני הקבצים אינדקס ומיין הם שני קבצים בתכלית השוני - שונים מאוד 
//  והקובץ מיין הוא בצד השרת ומי שמריץ אותו האינטרפריטר של נוד  
//  הקובץ אינקס למעשה מופעל על ידי הטמל ולכן הוא ג׳אווה סקריפ שרץ בצד הלקוח על ידי הבראוזר שהוא הקליינט
// חשוב לבדוק האם הקובץ ג׳אווה סקריפט רק בשרת אן בקלייננט - סופר חשוב לבדוק ולדעת 