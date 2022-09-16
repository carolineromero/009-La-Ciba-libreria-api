# LA CIBA - TU LIBRERÍA FEMINISTA
![logo-pizzaPlanet](./src/assets/img/logo04.png)


## Tabla de Contenidos
1. [Información General](#información-general)
2. [Capturas de Pantalla](#capturas-de-pantalla)
3. [Tecnologías](#tecnologías)
4. [Instalación](#instalación)
5. [Soporte](#soporte)
6. [Hoja de ruta](#hoja-de-ruta)
7. [Colaboración](#colaboración)
8. [Autores](#autores)
9. [FAQs](#faqs)


***
## Información General

Es una web, de una libreria para el centro [La Ciba](https://laciba.gramenet.cat/es/) (centro de recursos para mujeres), ubicado en Santa Coloma de Gramenet, Barcelona. 
Para ayudar en la organización de libros en stock, prestados, disponibles y no disponibles.

*Proyecto en proceso de desarrollo.*   

***

## Capturas de pantalla

![screenshot01.png](/src/assets/img/screenshot01.png)
***
![screenshot02.png](/src/assets/img/screenshot02.png)
***
![screenshot03.png](/src/assets/img/screenshot03.png)

***
## Tecnologías
Lista de tecnologías usadas en el desarrollo del proyecto:
* HTML: Version HTML 5
* CSS: Version CSS3
* Json-Server
* React
* Api rest


***
## Instalación
Como instalar el repositorio:

1. Ingresar en Visual Studio Code
2.  Clonar el proyecto con el comando: 
 ``` 
git clone https://github.com/carolineromero/libreriaApi
```
En Visual Studio Code:
1. Instalar [React.js](https://es.reactjs.org/)
2. Instalar [React-router-dom](https://reactrouter.com/).

***


## Soporte
Si tiene cualquier problema póngase en contacto con: 
> emailEjemplo@gmail.com

***

## Hoja de ruta

En nuestra primera entrega presentamos una librería donde se muestran todos los libros dispobibles en La Ciba.

Los libros son cargados desde una api externa, donde se muestra información de cada uno de ellos.

En la próxima actualización, nuestro objetivo es que tanto los funciones de *Sign In* como el de *Log In* lleven a una página de registro o de inscripción.

Que los iconos de *borrar, editar, crear, "favoritos" y "me gusta"* hagan su función.
Además, de crear una opción de busqueda y de filtrado de libros, poder ver el detalle de cada uno de ellos,crear una paginación de los libros, y crear un entorno responsive.


***
## Colaboración
El proyecto está abierto a cualquier persona que quiera aportar ideas o sugerencias. Podéis contactar con nosotros a través de:

> ejemploEmail@gmail.com

***
## Autores 
[Carolina Romero](https://github.com/carolineromero)  
[Susana Gil](https://github.com/gilsusana)  
[Rosa Becerra](https://github.com/RosaaBecerra)  
[Alexa Olaya](https://github.com/AlexaOlaya81) 


***
## FAQs

Preguntas frecuentes:
1. **¿Tengo problemas con React, no me deja ejecutar la página?**
Mirar si está en el *explorador de archivos*, la carpeta *"node_modules"*. En caso de no estar, ir a la *terminal* y ejecutar el comando
 ``` 
npm i 
```

2. **¿Tengo problemas poder ejecutar Json-server?**

Ejecutar PowerShell en windows ( o terminal en IOS) como *administrador* y ejecutar el siguiente comando: 
 ``` 
Get-ExecutionPolicy -list 
```
y una vez cargada la lista, ejecutar el siguiente comando:
 ``` 
Set-ExecutionPolicy RemoteSigned -Force 
```
