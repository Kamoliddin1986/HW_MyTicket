import { CanActivate, Injectable, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';


@Injectable()
export class isCustomerGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(
        context: ExecutionContext,
    ){
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        if(!authHeader){
            throw new UnauthorizedException({
                message: 'token yuq'
            })
        }

        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];
        if(bearer !== 'Bearer' || !token){
            throw new UnauthorizedException({
                message: "Tokenda hatolik"
            });
        }

    
        let user: any;
        try {
            user = await this.jwtService.verifyAsync(token, {secret:process.env.ACCESS_TOKEN_KEY})
        } catch (error) {
            throw new UnauthorizedException({
                message: "Token xato"
            })
        } 

        console.log(user);
        
        if(user.role != 'customer'){

            throw new ForbiddenException({
                message: "Siz customer emassiz"
            })
            

        }

       
        return true
    } 
}