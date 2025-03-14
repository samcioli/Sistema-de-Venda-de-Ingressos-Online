const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuarioRoutes');
const eventosRouter = require('./routes/eventosRoutes');
const clientesRouter = require('./routes/clientesRoutes');
const ingressosRouter = require('./routes/ingressosRoutes');
const vendasRouter = require('./routes/vendasRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', usuariosRouter);
app.use('/api', eventosRouter);
app.use('/api', clientesRouter);
app.use('/api', ingressosRouter);
app.use('/api', vendasRouter);

app.listen(port, () => {
    console.log('Servidor iniciado em http://localhost:' + port);
});