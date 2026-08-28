import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { HealthResponseDto } from './dto/health-response.dto';

@Controller({
    path: 'health',
    version: '1',
})
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    @ApiOperation({ summary: 'Application healthy check' })
    @ApiOkResponse({ type: HealthResponseDto })
    public healthCheck() {
        return this.healthService.healthCheck();
    }
}
