"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var http_1 = __importDefault(require("http"));
var next_1 = __importDefault(require("next"));
var mongoose_1 = __importDefault(require("mongoose"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
// import { server as WSServer } from 'websocket';
var socket_io_1 = require("socket.io");
var get_1 = __importDefault(require("./routes/get"));
var post_1 = __importDefault(require("./routes/post"));
var delete_1 = __importDefault(require("./routes/delete"));
var websocket_routes_1 = __importDefault(require("./websocket-routes"));
var dev = process.env.NODE_ENV !== 'production';
var app = next_1.default({ dev: dev });
var server = express_1.default();
var handle = app.getRequestHandler();
var port = process.env.PORT || 3000;
var Server = /** @class */ (function () {
    function Server(handle) {
        this.handle = handle;
        var servApp = http_1.default.createServer(server);
        server.use(express_1.default.static('public'));
        server.use(body_parser_1.default.json());
        server.use(express_fileupload_1.default({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            limits: { fileSize: 50 * 1024 * 1024 },
            abortOnLimit: true,
            responseOnLimit: 'File size limit has been reached',
        }));
        this.database();
        this.get();
        this.post();
        this.delete();
        this.websockets(servApp);
        servApp.listen(port, function (err) {
            if (err)
                throw err;
            console.log("> Ready on localhost:" + port + " - env " + process.env.NODE_ENV);
        });
    }
    Server.prototype.get = function () {
        server.get('/test', get_1.default.test);
        // get pizzas
        server.get('/pizza/:pizzaID', get_1.default.getOnePizza);
        server.get('/pizzas', get_1.default.getPizzas);
        // get sauce
        server.get('/sauce/:sauceID', get_1.default.getOneSauce);
        server.get('/sauces', get_1.default.getSauces);
        // orders
        server.get('/orders-list', get_1.default.getOrders);
        server.get('/finnish-order/:id', get_1.default.finnishOrder);
        // next routes
        server.get('*', this.handle);
    };
    Server.prototype.post = function () {
        server.post('/test', post_1.default.test);
        // login system & user routes
        server.post('/register', post_1.default.register);
        server.post('/login', post_1.default.login);
        server.post('/authorisation', post_1.default.authorisation);
        server.post('/update-user-details', post_1.default.updateUserDetails);
        // upload routes
        server.post('/upload/pizza', post_1.default.pizzaPhotoUpload);
        server.post('/upload/sauce', post_1.default.saucePhotoUpload);
        // panel routes
        server.post('/panel/add-pizza', post_1.default.addPizza);
        server.post('/panel/add-sauce', post_1.default.addSauce);
        // online order
        server.post('/create-checkout-session', post_1.default.createCheckoutSession);
        server.post('/payment/finnish-order', post_1.default.finnishOrder);
        server.post('/edit-order-status', post_1.default.editOrderStatus);
        server.post('/archive-order', post_1.default.archiveOrder);
        // messanges from customers
        server.post('/create-new-message', post_1.default.createNewMessage);
    };
    Server.prototype.delete = function () {
        server.delete('/test', delete_1.default.test);
        server.delete('/pizza', delete_1.default.deletePizza);
        server.delete('/sauce', delete_1.default.deleteSauce);
    };
    Server.prototype.database = function () {
        mongoose_1.default
            .connect(process.env.DB_URI, { useNewUrlParser: true })
            .then(function () { return console.log('connected to database'); })
            .catch(function (err) { return console.error(err); });
    };
    Server.prototype.websockets = function (server) {
        var io = new socket_io_1.Server(server, {});
        io.on('connection', websocket_routes_1.default.connection);
    };
    return Server;
}());
app
    .prepare()
    .then(function () {
    new Server(handle);
})
    .catch(function (ex) {
    console.error(ex.stack);
    process.exit(1);
});
