import express from 'express';
import path from 'path';
const app = express();
const port = 3000;
app.use(express.static(path.resolve('src/public')));
app.listen(port, () => {
    console.log(`Beispiel-App läuft auf Port ${port}`);
});
