module.exports = {
    //
    // директория приложения
    //
    app: {
        type: 'dir',
        include: {
            //
            // директория конфигурации
            //
            config: {
                type: 'dir',
                include: {
                    //
                    // файл конфигурации
                    //
                    'config.js': {
                        type: 'file',
                        template: 'config.js'
                    },
                    //
                    // файл маршрутов
                    //
                    'routes.js': {
                        type: 'file',
                        template: 'routes.js'
                    }
                }
            },
            //
            // директория модулей
            //
            modules: {
                type: 'dir',
                include: {
                    //
                    // модуль "index"
                    //
                    index: {
                        type: 'dir',
                        include: {
                            //
                            // дтректория моделей
                            //
                            model: {
                                type: 'dir',
                                include: {
                                    //
                                    // файл модели "model.js"
                                    //
                                    'model.js': {
                                        type: 'file',
                                        template: 'model.js'
                                    }
                                }
                            },
                            //
                            // директория видов
                            //
                            view: {
                                type: 'dir',
                                include: {
                                    //
                                    // файл вида "view.swig"
                                    //
                                    'index.swig': {
                                        type: 'file',
                                        template: 'view.swig'
                                    }
                                }
                            },
                            //
                            // директория контроллеров
                            //
                            controller: {
                                type: 'dir',
                                include: {
                                    //
                                    // файл контроллера "controller.js"
                                    //
                                    'index.js': {
                                        type: 'file',
                                        template: 'controller.js'
                                    }
                                }
                            },
                            //
                            // директория субмодулей
                            //
                            modules: {
                                type: 'dir',
                                include: {}
                            }
                        }
                    }
                }
            },
            //
            // глобальная директория видов
            //
            view: {
                type: 'dir',
                include: {
                    //
                    // директория шаблонов
                    //
                    layouts: {
                        type: 'dir',
                        include: {
                            //
                            // файл шаблона
                            //
                            'main.swig': {
                                type: 'file',
                                template: 'layout.swig'
                            }
                        }
                    }
                }
            }
        }
    },
    //
    // главный файл приложения
    //
    'app.js': {
        type: 'file',
        template: 'app.js'
    },
    //
    // файл пакетов
    //
    'package.json': {
        type: 'file',
        template: 'package.json'
    }
};