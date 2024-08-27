const jwt = require('jsonwebtoken');
const config = require('../Config/config.json');

class AuthenticateController {
    authenticateToken(request, result, next) {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return result.status(401).json({ error: "Vous n'avez pas accès à cette route" });
        }

        jwt.verify(token, config.SECRET, (error, user) => {
            if (error) {
                return result.status(401).json({ error: "Votre token n'est pas valide" });
            }

            request.user = user;
            next();
        });
    }

    checkPermission(allowedRoles) {
        return (request, result, next) => {
            if (!request.user) {
                return result.status(401).json({ error: "Utilisateur non authentifié" });
            }

            if (allowedRoles.includes(request.user.rôle)) {
                next();
            } else {
                result.status(403).json({ error: "Accès non autorisé" });
            }
        };
    }

    generateToken(user) {
        const payload = {
            id: user.id,
            email: user.email,
            rôle: user.rôle
        };
        return jwt.sign(payload, config.SECRET, { expiresIn: '1h' });
    }
}

module.exports = new AuthenticateController();
