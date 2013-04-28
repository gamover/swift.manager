var $path = require('path'),

    $swift = require('swift.mvc'),
    $express = $swift.express,
    $consolidate = require('consolidate'),
    $swig = require('swig');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$swift/*.disableLog()*/.init(function (err, app)
{
    if (err)
    {
        console.log(err);
        return;
    }

    //
    // настройка приложения
    //

    app.configure(function ()
    {
        app.set('view engine', 'swig');

        app.use($express.favicon());
        app.use($express.static($path.join(__dirname, 'public')));
    });

    app.configure('production', 'test', function ()
    {
        app.use($express.logger());
        app.use($express.bodyParser());
        app.use($swift.dbManager.connector());
        app.use($swift.router.endslash);
        app.use(app.router);
        app.use(function (req, res) { throw new Error().status = 404; });
    });

    app.configure('development', function ()
    {
        app.use($express.logger('dev'));
        app.use($express.bodyParser());
        app.use($swift.dbManager.connector());
        app.use($swift.router.endslash);
        app.use(app.router);
        app.use(function (req, res) { throw new Error().status = 404; });
        app.use($express.errorHandler());
    });

    //
    // swig
    //

    app.engine('.swig', $consolidate.swig);

    $swig.init({
        root: $swift.configurator.getConfig().swift.path.app + '/view',
        allowErrors: true
    });

    //
    // подключение модулей
    //

    $swift.moduleManager
        .loadModule('index')
        .$swift()
        .run(function (err) { if (err) console.log(err); console.log('Поехали!'); })
    ;
});