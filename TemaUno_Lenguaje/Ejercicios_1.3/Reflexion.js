/*
REFLEXION - EJERCICIO 1.3 1.
¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?
R= La diferencia principal es que un módulo nativo como fs ya viene incluido cuando instalas Node.js, o sea, 
no necesitas descargar nada extra para usarlo. Ya forma parte del sistema y está listo para funcionar desde el principio.
En cambio, un módulo de NPM como sillyname no viene incluido. 
Ese lo crean otros desarrolladores y lo suben a internet en la plataforma de npm. Para poder usarlo, 
primero tienes que instalarlo con el comando npm install.




2. Investigando la sintaxis: 
¿Qué diferencia existe entre 'require' (CommonJS) y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.
R=La diferencia más importante está en cómo y cuándo se cargan los módulos.
require pertenece al sistema CommonJS y carga los módulos en el momento en que el programa se está ejecutando (de forma dinámica). 
O sea, cuando el código llega a esa línea, en ese momento lo carga.
En cambio, import pertenece a los ES Modules (ESM) y carga los módulos antes de que el código empiece a ejecutarse. 
Es decir, primero organiza todas las importaciones y luego corre el programa.





3. Sobre el archivo 'package.json': 
a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio? 
b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package. json?




*/
