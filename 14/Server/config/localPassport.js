import passport from "passport";
import localPassport from "passport-local";
import User from "../models/user";

const strategy = localPassport.Strategy;

const initLocalPassport = () => {
    passport.use('local' ,new strategy({
        usernameField: "username",
        passwordField: "password"
    }, async (username, password, done) => {
        const user = await User.findUserByUsername(username);
        if (!user) {
            return done(null, null);
        }
        if (!user.verifyPassword(password)) {
            return done(null, null);
        } else {
            return done(null, user)
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await User.findUserById(id);
        return done(null, user);
    });
}

export {
  initLocalPassport
}