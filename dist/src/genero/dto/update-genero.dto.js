"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeneroDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_genero_dto_1 = require("./create-genero.dto");
class UpdateGeneroDto extends (0, swagger_1.PartialType)(create_genero_dto_1.CreateGeneroDto) {
}
exports.UpdateGeneroDto = UpdateGeneroDto;
//# sourceMappingURL=update-genero.dto.js.map