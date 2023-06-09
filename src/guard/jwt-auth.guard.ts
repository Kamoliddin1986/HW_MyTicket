import { JwtService } from '@nestjs/jwt/dist';
import {Injectable,ExecutionContext, CanActivate, UnauthorizedException} from '@nestjs/common'
import { Observable } from 'rxjs';


@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    console.log("Guard>>>>>>>>>");
    
    const req = context.switchToHttp().getRequest()
    const authHeader = req.headers.authorization;
    if(!authHeader){
        throw new UnauthorizedException({
            message: 'tokon yo'
        })
    }

    const bearer = authHeader.split(' ')[0]
    const token = authHeader.split(' ')[1];
    if(bearer !== 'Bearer' || !token){
        throw new UnauthorizedException({
            message: "Token hato"
        });
    }

    let user: any;
    try {
        user = this.jwtService.verify(token,{secret:process.env.ACCESS_TOKEN_KEY})
        req.user = user
        console.log(user);        
    } catch (error) {
        throw new UnauthorizedException({
            message: "Token hato verify"
        });
    }
    return true
}
}