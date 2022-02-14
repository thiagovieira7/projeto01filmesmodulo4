"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const filme_module_1 = require("./filme/filme.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(filme_module_1.FilmeModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map