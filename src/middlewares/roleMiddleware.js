import jwt from "jsonwebtoken";

function roleMiddleware(roles) {
  return (req, res, next) => {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({
          detail: {
            user: "User is not logged in.",
          },
        });
      }
      const { isAdmin: userRoles } = jwt.verify(token, process.env.JWT_SECRET);
      let hasRole = false;
      userRoles.forEach((element) => {
        if (roles.includes(element)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return res.status(403).json({
          detail: {
            access: "You don't have access.",
          },
        });
      }
      next();
    } catch (e) {
      return res.status(403).json({
        detail: {
          user: "User is not logged in.",
        },
      });
    }
  };
}

export default roleMiddleware;
