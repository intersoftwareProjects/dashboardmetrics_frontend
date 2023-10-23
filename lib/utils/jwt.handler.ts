import { JwtPayload, verify } from "jsonwebtoken";

function verifyJWT(jwt: string): JwtPayload | undefined {
  const JWT_SECRET = process.env.JWT_SECRET;
  if(JWT_SECRET){
    const decodedJwt: JwtPayload = verify(jwt, JWT_SECRET) as JwtPayload;
    return decodedJwt;
  }
}

export { verifyJWT };
