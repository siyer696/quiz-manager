import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGaurd } from './local-auth.gaurd';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGaurd)
    @Post('login')
    async login(@Request() req): Promise<any> {
        return req.user;
    }

}
