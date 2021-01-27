"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const all_exceptions_filter_1 = require("./config/all-exceptions.filter");
async function bootstrap() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(httpAdapter));
    await app.listen(PORT, () => {
        console.log('server is running');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map