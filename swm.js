/**
 * Created by G@mOBEP
 *
 * Date: 28.04.13
 * Time: 13:32
 */

var Dbuilder = require('swift.utils').DBuilder,

    execDirPath = process.env.PWD,
    args = process.argv.slice(2),
    command = args[0],

    struct = require('./lib/structure/startProject/structure');

if (command === 'startProject')
{
    var dbuilder = new Dbuilder();

    try
    {
        dbuilder
            .setPathToTemplates(__dirname + '/lib/structure/startProject/templates')
            .setDestination(execDirPath)
            .setStruct(struct)
            .build()
        ;
    }
    catch (e)
    {
        console.log('Не удалось создать структуру каталогов (ответ dBuilder: ' + e.message + ')');
    }
}