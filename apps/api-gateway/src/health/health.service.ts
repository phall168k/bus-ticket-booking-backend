import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    public healthCheck() {
        return {
            status: 'healthy',
            uptime: process.uptime(),
        };
    }
}
