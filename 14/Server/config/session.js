import session from "express-session";
import connectMongo from "connect-mongo";

const mongoStore = connectMongo(session);

const sessionStore = new mongoStore({
    url: `mongodb://127.0.0.1:27017/toeicTest`,
    autoReconnect: true,
    autoRemove: "native" 
});

let config = (app) => {
    app.use(session({
        key: "express.sid",
        secret: "mySecret",
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60,
            secure: false
        }
    }));
};

export default { config }
