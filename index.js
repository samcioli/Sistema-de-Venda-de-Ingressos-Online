const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes'); 
const eventosRoutes = require('./routes/eventoRoutes');
const clientesRoutes = require('./routes/clienteRoutes');
const ingressosRoutes = require('./routes/ingressoRoutes');
const vendasRoutes = require('./routes/vendaRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', usuarioRoutes);
app.use('/api', eventoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', ingressoRoutes);
app.use('/api', vendaRoutes);

app.listen(port, () => {
    console.log('Servidor iniciado em http://localhost:' + port);
});