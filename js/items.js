function PreguntasyRespuestas(preguntaId, textoPregunta, respuestaCorrectaId, textoRespuestaCorrecta, respuestasPosibles) {
    
  this.preguntaId = preguntaId;
  this.textoPregunta = textoPregunta;
  this.respuestaCorrectaId = respuestaCorrectaId;
  this.textoRespuestaCorrecta = textoRespuestaCorrecta;    
  this.respuestasPosibles = respuestasPosibles;
}      
  
let item1 = new PreguntasyRespuestas(1, "¿Qué son los baos?", 1, "Vigas que en unión con las cuadernas conforman el soporte de la cubierta", 
["Piezas robustas que continúa a la quilla y terminan el buque por la popa",
"Piezas que continúan la quilla en el extremo de proa de la embarcación",
"Canto superior del costado de un buque", 
"Ninguna es la correcta"]);

let item2 = new PreguntasyRespuestas(2, "¿Cuál es el puño de amura?", 2, "El puño comprendido entre el pujamen y el gratil", 
["Puño al que se le sujeta la driza",
"El puño comprendido entre la baluma y el gratil",
"Puño inferior en el que se afirma la escota",
"Ninguna es la correcta"]);

let item3 = new PreguntasyRespuestas(3, "¿Qué es la carlinga?", 3, "Herraje en donde encaja el pie del mástil", 
["Orificio de la cubierta por el cual se erige el mástil, cuando éste es pasante",
"Cable que sostiene el palo lateralmente y hacia popa",
"Mecanismo que sirve para impedir que la botavara se eleve por efecto del viento",
"Ninguna es la correcta"]);

let item4 = new PreguntasyRespuestas(4, "¿Qué son las relingas?", 4, "Cabos que refuerzan el borde de algunas velas y facilitan su inserción en la ranura del mástil o botavara", 
["Orificios practicados en las velas que sirven para reducir la superficie vélica",
"Refuerzos insertados en la vela que sirven para sostener la baluma y darle forma",
"Ojales metálicos por donde se pasan los cabos de las velas",
"Ninguna es la correcta"]);

let item5 = new PreguntasyRespuestas(5, "¿Cuál de las siguientes veles presenta mayor superficie?", 5, "Genoa 1", 
["Genoa 3",
"Foque",
"Tormentín",
"Ninguna es la correcta"]);

let item6 = new PreguntasyRespuestas(6, "¿Qué es la botavara?", 6, "Palo horizontal unida al mástil por medio del pinzote sobre la que se sujeta el pujamen de una vela", ["Cable sobre el que se enverga la vela proel y que además soporta el palo impidiendo que caiga a popa",
"Pieza metálica sujeta al casco desde donde se sostiene el obenque",
"Palo vertical que sostiene la arboladura",
"Ninguna es la correcta"]);

let item7 = new PreguntasyRespuestas(7, "La capacidad del barco para sostenerse sobre la superficie del agua se denomina…", 7, "Flotabilidad", 
["Habitabilidad",
"Navegabilidad",
"Estabilidad",
"Ninguna es la correcta"]);

let item8 = new PreguntasyRespuestas(8, "Nombre el aparejo que cuenta con un solo palo y dos velas en proa", 8, "Cutter", 
["Queche",
"Yol",
"Sloop",
"Ninguna es la correcta"]);

let item9 = new PreguntasyRespuestas(9, "¿A qué refiere el término jarcia firme?", 9, "Conjunto de cables (estays y obenques) que sostienen el palo del barco", 
["Ninguna es la correcta",
"Cabos utilizados para sujetar las velas",
"Mecanismo que sirve para impedir que la botavara se eleve",
"Varanda en forma de V a proa del barco"]);

let item10 = new PreguntasyRespuestas(10, "¿Cómo se llama el nombre del palo a popa del palo mayor en un aparejo Queche?", 10, 
"Mesana", 
["Trinquete",
"Yankee",
"Cutter",
"Ninguna es la correcta"]);

let item11 = new PreguntasyRespuestas(11, "Navegando a un descuartelar el barco recibe el viento…", 11, "Entre la amura y el través", 
["De manera perpendicular a la línea de crujía",
"Por la popa",
"Entre el través y la aleta",
"Ninguna es la correcta"]);

let item12 = new PreguntasyRespuestas(12, "En un spring de proa se amarra el barco", 12, "Desde su proa hacia cornamusa del muelle que se  encuentra a popa del barco", 
["Desde su popa hacia la cornamusa del muelle que se encuentra a proa del barco",
"Desde su proa hacia la cornamusa del muelle que se encuentra por delante de la proa del barco",
"Desde su popa hacia la cornamusa del muelle que se encuentra a por detrás de la popa del barco",
"Ninguna es la correcta"]);

let item13 = new PreguntasyRespuestas(13, "¿Cuál de los siguientes nudos debo realizar para formara una gaza?", 13, "As de guía", 
["Llano",
"Ballestrinque",
"Lasca",
"Ninguna es la correcta"]);

let item14 = new PreguntasyRespuestas(14, "Seleccione el nombre de la maniobra por la cual la popa del barco atraviesa el eje del viento", 14, "Virar en redondo", 
["Virar por avante",
"Bordejear",
"Derivar",
"Ninguna es la correcta"]);

let item15 = new PreguntasyRespuestas(15, "¿Qué acción realiza el barco al orzar?", 15, "Dirige su proa hacia barlovento", 
["Dirige su proa hacia sotavento",
"Cae a babor",
"Cae a estribor",
"Ninguna es la correcta"]);

let item16 = new PreguntasyRespuestas(16, "Un chicote es…", 16, "La parte más corta del cabo que se utiliza para hacer un nudo", 
["Una forma que se realiza sobre un cabo a fin de estibarlo convenientemente",
"La parte más larga del cabo que no interviene en el nudo",
"Un lazo cerrado que se obtiene plegando un cabo sobre sí mismo",
"Ninguna es la correcta"]);

let item17 = new PreguntasyRespuestas(17, "¿Qué quiere decir “filar”?", 17, "Liberar lentamente la tensión de la escota en función de aumentar el ángulo que forma la vela con la línea de crujía", 
["Jalar de la ”escota” para disminuir el ángulo que forma la vela con la línea de crujía",
"Jalar de la “driza” de la vela para izarla a tope",
"Soltar la “driza” a fin que la vela caiga sobre cubierta",
"Ninguna es la correcta"]);

let item18 = new PreguntasyRespuestas(18, "¿En cuál de las siguientes situaciones una embarcación se encuentra amurada a estribor?", 18, "Cuando recibe el viento por la banda estribor", 
["Cuando recibe el viento por la banda babor",
"Cuando recibe el viento por la proa",
"Cuando recibe el viento por la popa",
"Ninguna es la correcta"]);

let item19 = new PreguntasyRespuestas(19, "¿Qué casco es conveniente elegir si deseamos poseer una embarcación de recreo rápida?", 19, "Casco en “V”", 
["Casco redondo",
"Casco plano",
"Casco inflable",
"Ninguna es la correcta"]);

let item20 = new PreguntasyRespuestas(20, "Seleccione el ciclo de motor a cuatro tiempos correcto:", 20, "Admisión - Compresión - Expansión - Escape", 
["Admisión - Compresión - Aspiración - Escape",
"Admisión - Aspiración - Expansión - Escape",
"Explosión - Compresión - Expansión - Escape",
"Ninguna es la correcta"]);

let item21 = new PreguntasyRespuestas(21, "En el momento que se produce la chispa en la bujía…", 21, "Ambas válvulas (de admisión y escape) se encuentran cerradas", 
["La válvula de admisión se encuentra abierta y la de escape cerrada",
"La válvula de escape se encuentra cerrada y la de admisión abierta",
"Ambas válvulas (de admisión y escape) se encuentran abiertas",
"Ninguna es la correcta"]);

let item22 = new PreguntasyRespuestas(22, "¿Qué causa la explosión en un motor diesel?", 22, "El combustible sobrecalentado a causa de la comprensión", 
["La bujía sobrecalentada",
"El gas sobrecalentado a causa de la compresión",
"La chispa de la bujía",
"Ninguna es la correcta"]);

let item23 = new PreguntasyRespuestas(23, "¿Cuál es el comportamiento de la hélice dextrógira?", 23, "Gira en sentido horario cuando la embarcación avanza", 
["Gira en sentido antihorario siempre",
"Gira en sentido horario siempre",
"Gira en sentido horario cuando la embarcación retrocede",
"Ninguna es la correcta"]);

let item24 = new PreguntasyRespuestas(24, "¿Cuál es la velocidad a la cual se debe ingresar a puerto?", 24, "Mínima velocidad de gobierno", 
["Velocidad de planeo (mínima)",
"Velocidad máxima",
"En planeo",
"Ninguna es la correcta"]);

let item25 = new PreguntasyRespuestas(25, "¿Cuál es la forma correcta de atracar con corriente en un muelle?", 25, "De proa a la corriente", 
["De popa a la corriente",
"De proa al muelle",
"De popa al muelle",
"Ninguna es la correcta"]);

let item26 = new PreguntasyRespuestas(26, "¿Qué es un incendio clase A?", 26, "El que se origina en sustancia sólidas", 
["El originado en circuitos eléctricos",
"El que se origina en sustancias líquidas o gaseosas",
"El originado por la combinación de determinados compuestos químicos",
"Ninguna es la correcta"]);

let item27 = new PreguntasyRespuestas(27, "¿A qué se llama capear a palo seco?", 27, "Maniobra en la cual se arrían todas las velas dejando el barco a la deriva", 
["Maniobra por la cual la embarcación se coloca a la “capa” acuartelando el foque con el timón a sotavento",
"Maniobra en la cual se navega a favor del temporal",
"Maniobra en la cual se utiliza el “ancla de mar",
"Ninguna es la correcta"]);

let item28 = new PreguntasyRespuestas(28, "¿En qué situación se recomienda el remolque por largo?", 28, "Cuando se necesita remolcar una embarcación en mar abierto", 
["Cuando se necesita remolcar una embarcación en lugares pequeños",
"Cuando la embarcación a remolcar es chica",
"Cuando la embarcación a remolcar es grande",
"Ninguna es la correcta"]);

let item29 = new PreguntasyRespuestas(29, "¿Qué tipo de llamada originamos con la frase “PAN PAN”?", 29, "Llamada de urgencia", 
["Llamada de seguridad",
"Llamada de socorro",
"Solicitud de parte meteorológico",
"Ninguna es la correcta"]);

let item30 = new PreguntasyRespuestas(30, "Si observamos un buque que exhibe la bandera N por sobre la C, sabemos que…", 30, "Está pidiendo auxilio", 
["Maniobrará para caer a babor",
"Está garreando",
"Tiene un buzo sumergido",
"Ninguna es la correcta"]);

let item31 = new PreguntasyRespuestas(31, "¿Para qué se utiliza el canal 16?", 31, "Llamada y socorro", 
["Comunicación con Prefectura Argentina",
"Comunicación con Prefectura Uruguaya",
"Avisos a navegantes y partes meteorológicos",
"Ninguna es la correcta"]);

let item32 = new PreguntasyRespuestas(32, "En caso de caer al agua ¿qué se recomienda hacer?", 32, "Conservar la calma y gastar la menor energía posible", 
["Nadar hasta alcanzar el barco",
"Sacarse la ropa para quitarse peso",
"Comprobar si hay peligros inminentes buceando",
"Ninguna es la correcta"]);

let item33 = new PreguntasyRespuestas(33, "Mencione los elementos que componen el tetraedro del fuego", 33, "Oxígeno, temperatura, material combustible y reacción en cadena", 
["Material combustible, temperatura y oxígeno",
"Temperatura, material combustible, oxígeno y radiaciones",
"Material combustible, gas, reacción en cadena y oxígeno",
"Ninguna es la correcta"]);

let item34 = new PreguntasyRespuestas(34, "¿Qúe nombre reciben las quemaduras ocasionadas en la epidermis, dermis e hipodermis?", 34, "Quemaduras de 3er grado", 
["Quemaduras de 1er grado",
"Quemaduras de 2do grado"
,"Quemaduras de 4to grado"
,"Ninguna es la correcta"]);

let item35 = new PreguntasyRespuestas(35, "¿Qué significa un cuadrado sobre un círculo negro?", 35, "Pedido de auxilio", 
["Hombre al agua",
"Solicitud de paso",
"Aviso de temporal",
"Ninguna es la correcta"]);

let item36 = new PreguntasyRespuestas(36, "Cuando dos barcos a vela reciben viento por la misma banda…", 36, "Debe maniobrar el que se encuentre a barlovento", 
["Tiene prioridad el que esta amurado a babor",
"Tiene prioridad el que está a barlovento",
"Debe maniobrar el que está amurado a estribor",
"Ninguna es la correcta"]);

let item37 = new PreguntasyRespuestas(37, "¿Cómo es la luz de la boya de peligro aislado?", 37, "Luz blanca, grupos de dos destellos", 
["Luz azul 1 seg., ocultación 0,5 seg., luz amarilla 1 seg., ocultación 0,5 seg.",
"Luz blanca con ritmo isofásico",
"Luz verde con ritmo 2+1",
"Ninguna es la correcta"]);

let item38 = new PreguntasyRespuestas(38, "En caso de que dos embarcaciones de propulsión mecánica se encuentra de vuelta encontrada ¿cuál debe maniobrar?", 38, "Ambos, cayendo a estribor", 
["Ambos, cayendo a babor",
"El que se encuentra a sotavento",
"El que se encuentra amurado a estribor",
"Ninguna es la correcta"]);

let item39 = new PreguntasyRespuestas(39, "¿Qué significan dos pitadas largas y una corta?", 39, "Pretendo alcanzarle por su banda de estribor", ["Pretendo alcanzarle por su banda de babor",
"Estoy de acuerdo con su maniobra",
"No comprendo su maniobra",
"Ninguna es la correcta"]);

let item40 = new PreguntasyRespuestas(40, "Cuando un buque iza dos esferas negras ¿qué está indicando?", 40, "Que se encuentra sin gobierno", 
["Que navega con capacidad de maniobra restringida",
"Que navega restringido por su calado",
"Que se está dedicando a la pesca",
"Ninguna es la correcta"]);

let item41 = new PreguntasyRespuestas(41, "Cuando dos buques de propulsión mecánica se encuentran en situación de cruce ¿cuál debe maniobrar?", 41, "El que tenga al otro por su costado de estribor", 
["El que tenga al otro por su costado de babor",
"El que navegue más rápido",
"El más pequeño",
"Ninguna es la correcta"]);

let item42 = new PreguntasyRespuestas(42, "¿Cuál es el ángulo de iluminación de las luces de costado de una embarcación?", 42, "112,5°", 
["360º",
"135º",
"225º",
"Ninguna es la correcta"]);

let item43 = new PreguntasyRespuestas(43, "¿Qué luces de condición debe exhibir un buque restringido por su calado?", 43, "Tres luces rojas todo horizonte alineadas verticalmente", 
["Dos luces rojas todo horizonte alineadas verticalmente",
"Tres luces blancas todo horizonte alineadas verticalmente",
"Dos luces blancas todo horizonte alineadas verticalmente",
"Ninguna es la correcta"]);

let item44 = new PreguntasyRespuestas(44, "Navegando de noche vemos una luz que destella 6 + 1 ¿qué estamos viendo?", 44, "Una boya cardinal Sur", 
["Una boya de peligro aislado",
"Una boya de aguas seguras",
"Una boya cardinal Norte",
"Ninguna es la correcta"]);

let item45 = new PreguntasyRespuestas(45, "¿Cuál es la marca de tope de una boya lateral de babor en el sistema IALA B?", 45, "Un cilindro verde", 
["Un cono verde",
"Un cono rojo",
"Un cilindro rojo",
"Ninguna es la correcta"]);

let item46 = new PreguntasyRespuestas(46, "Navegando con viento sur…", 46, "Recibimos el viento por babor si vamos al Oeste", 
["Recibimos el viento por babor si vamos al Este",
"Recibimos el viento de proa si vamos al Norte",
"Recibimos el viento por estribor si vamos al Oeste",
"Ninguna es la correcta"]);

let item47 = new PreguntasyRespuestas(47, "La clasificación de las nubes es respecto a…", 47, "Su altura", 
["Su forma",
"Su color",
"Su dirección",
"Ninguna es la correcta"]);

let item48 = new PreguntasyRespuestas(48, "¿Qué son las isobaras?", 48, "Son líneas que unen puntos de igual presión atmosférica", 
["Son líneas que unen puntos de igual sondaje",
"Son líneas que unen puntos de igual temperatura",
"Son líneas que unen puntos de igual humedad relativa",
"Ninguna es la correcta"]);

let item49 = new PreguntasyRespuestas(49, "¿En qué sentido corren los vientos en un anticiclón?", 49, "Salen en sentido antihorario", 
["Salen en sentido horarios",
"Entran en sentido horario",
"Entran en sentido antihorario",
"Ninguna es la correcta"]);

let item50 = new PreguntasyRespuestas(50, "¿Qué tipo de nube son las cirrus?", 50, "Altas", 
["Medias",
"Bajas",
"De desarrollo vertical",
"Ninguna es la correcta"]);

let item51 = new PreguntasyRespuestas(51, "¿Cuál es la nube de mayor desarrollo vertical?", 51, "Cumulonimbus", 
["Altocúmulus",
"Cúmulus",
"Stratocúmulus",
"Ninguna es la correcta"]);

let item52 = new PreguntasyRespuestas(52, "Desde dónde sopla un viento terral?", 52, "Desde la costa", 
["Desde el mar",
"Desde el norte",
"Desde el sur",
"Ninguna es la correcta"]);

let item53 = new PreguntasyRespuestas(53, "¿De qué sector proviene el viento pampero?", 53, "SW", 
["SE",
"NE",
"NW",
"Ninguna es la correcta"]);

let item54 = new PreguntasyRespuestas(54, "La presión atmosférica se mide en…", 54, "Milibares", 
["Grados centígrados",
"Nudos",
"Grados Fahrenheit",
"Ninguna es la correcta"]);

let item55 = new PreguntasyRespuestas(55, "¿Cuáles son las dos magnitudes con las que se mide el viento?", 55, "Dirección y fuerza", 
["Fuerza y temperatura",
"Dirección y temperatura",
"Humedad y dirección",
"Ninguna es la correcta"]);

let item56 = new PreguntasyRespuestas(56, "¿Qué signo recibe la declinación magnética cuando es oeste (W)?", 56, "Negativo", 
["Positivo",
"Nulo",
"Indistinto",
"Ninguna es la correcta"]);

let item57 = new PreguntasyRespuestas(57, "Navegando a un rumbo compás de 100°, con una declinación magnética de 4° W y un desvío de compás de -3°, ¿cuál es el rumbo verdadero que llevo?", 57, "93°", 
["99°",
"101°",
"94°",
"Ninguna es la correcta"]);

let item58 = new PreguntasyRespuestas(58, "En el caso de poseer un rumbo verdadero de 38° y un abatimiento de 9° a babor, ¿qué rumbo compás tengo que seguir?", 58, "47°", 
["27°",
"38°",
"31°",
"Ninguna es la correcta"]);

let item59 = new PreguntasyRespuestas(59, "¿Qué instrumental utilizamos para conocer la velocidad o la distancia navegada?", 59, "La corredera", 
["La sonda",
"El anemómetro",
"El escandallo",
"Ninguna es la correcta"]);


let item60 = new PreguntasyRespuestas(60, "Tomando como referencia el año 2021, seleccione la declinación magnética (aproximada y redondeando al menor número) si vemos en el carta náutica los siguientes datos: 8° 25 W 2014 (8 W)", 60, "9°", 
["7°",
"10°",
"9,2°",
"Ninguna es la correcta"]);

let item61 = new PreguntasyRespuestas(61, "¿Desde que línea contamos la longitud?", 61, "Meridiano de Greenwich", 
["Paralelo del observador",
"Polo",
"Ecuador",
"Ninguna es la correcta"]);

let item62 = new PreguntasyRespuestas(62, "¿En qué escala se leen las distancias medidas en la carta?", 62, "En la de las latitudes", 
["En la regla",
"En la que de el profesor",
"En la de longitud",
"Ninguna es la correcta"]);

let item63 = new PreguntasyRespuestas(63, "¿Cómo se llaman en Argentina el ángulo formado entre el Norte y la visual a un punto notable de la costa?", 63, "Marcación", 
["Demora",
"Enfilación",
"Isobata",
"Ninguna es la correcta"]);

let item64 = new PreguntasyRespuestas(64, "¿Qué nombre recibe el régimen de mareas que consta de dos bajamares y dos pleamares?", 64, "Semidiurnas", ["Sicigias",
"Cuadratura",
"Diurnas",
"Ninguna es la correcta"]);

let item65 = new PreguntasyRespuestas(65, "¿Qué es la duración de la marea?", 65, "Es la diferencia entre la hora de la plea y la hora de la baja", ["Momento en que se alcanza la bajamar y comienza la creciente",
"Momento en que finaliza la creciente y comienza la bajante",
"Cantidad de agua que tiene el barco por debajo de la quilla",
"Ninguna es la correcta"]);

let item66 = new PreguntasyRespuestas(66, "¿Que es el codaste?", 66, "Refuerzo del espejo", 
["Refuerzo de los baos",
"Encastre de las cuadernas",
"Canto superior de la quilla",
"Ninguna es la correcta"]);

let item67 = new PreguntasyRespuestas(67, "¿Que es el puntal?", 67, "Altura desde la cubierta hasta la quilla", 
["Altura desde al agua a la parte superior de la cubierta",
"Ancho maximo de la manga",
"Altura que incluye el calado",
"Ninguna es la correcta"]);

let item68 = new PreguntasyRespuestas(68, "¿Con qué características de las embarcaciones a vela se relaciona el par adrizante?", 68, "Estabilidad", ["Estanqueidad",
"Estabilidad",
"Habilitabilidad",
"Ninguna es la correcta"]);

let item69 = new PreguntasyRespuestas(69, "¿A que IALA pertenece la Argentina?", 69, "B", 
["A",
"D",
"No pertenece al IALA",
"Ninguna es la correcta"]);

let item70 = new PreguntasyRespuestas(70, "¿Cuál es el significado de la sigla R.I.P.A.?", 70, "Reglamento internacional para prevenir abordajes", ["Régimen interno para abordajes",
"Régimen internacional para prevenir abordajes",
"Reglamento interno de Prefectura Argentina",
"Ninguna es la correcta"]);

let item71 = new PreguntasyRespuestas(71, "El arganeo es una pieza del…", 71, "Ancla", 
["Motor de 2 tiempos",
"Anclaje de la botavara",
"Jarcia firme",
"Ninguna es la correcta"]);

let item72 = new PreguntasyRespuestas(72, "¿Por dónde debo pasar una boya verde?", 72, "Entrando al puerto, dejándola a babor", 
["Saliendo de puerto, dejándola a babor",
"Por cualquier banda, entrando a puerto",
"Entrando al puerto, dejándola a estribor",
"Ninguna es la correcta"]);

let item73 = new PreguntasyRespuestas(73, "Navegando de noche veo una luz blanca con grupo de 3 destellos. ¿Por dónde debor pasarla?", 73, "Por el este", 
["Por el norte",
"Por el oeste",
"Por cualquier lugar, pero con precaución",
"Ninguna es la correcta"]);

let item74 = new PreguntasyRespuestas(74, "¿Qué significa una boya de color rojo-verde-rojo?", 74, "Canal preferido a babor", 
["Canal preferido a estribor",
"Canal para circular con cuidado",
"Boya de estribor",
"Ninguna es la correcta"]);

let item75 = new PreguntasyRespuestas(75, "¿Qué significa una boya con rayas verticales blancas y rojas?", 75, "Aguas seguras", 
["Canal preferido a estribor",
"Peligro aislado",
"Prohibido amarrar",
"Ninguna es la correcta"]);

let item76 = new PreguntasyRespuestas(76, "¿Qué angulo abarca la la luz de tope?", 76, "225°", 
["360°",
"112,5°",
"135°",
"Ninguna es la correcta"]);

let item77 = new PreguntasyRespuestas(77, "Seleccione la afirmación correcta respecto de la luz de remolque", 77, "Es de color amarillo y posee un ángulo de 135°", 
["Es blanca y posee un ángulo de 135°",
"Es de color amarillo y posee un ángulo de 225°",
"Es azul y posee un ángulo de 125°",
"Ninguna es la correcta"]);

let item78 = new PreguntasyRespuestas(78, "¿Qué es la amura?", 78, "Tercio delantero del costado del buque", 
["Parte trasera del barco",
"Tercio trasero del costado de un buque",
"Concavidad con bancadas para timonear",
"Ninguna es la correcta"]);

let item79 = new PreguntasyRespuestas(79, "¿Qué se conoce como regala?", 79, "Moldura que se coloca en la unión entre la cubierta y las bandas", ["Canaleta que sirve para envergar las velas",
"Parte del casco que queda por encima de la línea de flotación",
"Canto superior de los bordes del barco",
"Ninguna es la correcta"]);

let item80 = new PreguntasyRespuestas(80, "¿Qué es el quebranto?", 80, "Forma que presente el casco del buque donde el sector medio está mas elevado que su proa y su popa", 
["Percha que unida al mástil a través del pinzote",
"Compartimento en proa para enrollar la vela",
"Curvatura del casco en sentido longitudinal con proa y popa mas elevadas que el sector medio",
"Ninguna es la correcta"]);

let item81 = new PreguntasyRespuestas(81, "¿Qué es la roda?", 81, "Pieza sólida ubicada sobre la quilla a proa de la embarcación", 
["Perfil que unen las cuadernas y base de cubierta",
"Caja donde se guarda el ancla",
"Pieza transversal unida a la quilla y que forma el armazón del barco",
"Ninguna es la correcta"]);

let item82 = new PreguntasyRespuestas(82, "¿Qué son las cuadernas?", 82, "Vigas curvadas que parten desde la quilla y forman el armazón del barco", ["Vigas que sirven de base a la cubierta",
"Libreta de bitácora",
"Molde de fibra de vidrio que unen los baos",
"Ninguna es la correcta"]);

let item83 = new PreguntasyRespuestas(83, "¿A qué refiere el término eslora en flotación?", 83, "Longitud medida desde proa a popa al nivel de la línea de flotación.", 
["Longitud máxima total entre los extremos más distantes de proa a popa",
"Parte del casco que no se encuentra sumergida",
"Peso del barco expresado en toneladas métricas",
"Ninguna es la correcta"]);

let item84 = new PreguntasyRespuestas(84, "¿Qué es el desplazamiento?", 84, "Peso del barco expresado en toneladas métricas", 
["Cantidad de millas recorridas en un determinado momento",
"Estropada del barco",
"Desplazamiento lateral del barco",
"Ninguna es la correcta"]);

let item85 = new PreguntasyRespuestas(85, "¿Qué se conoce con el nombre de mecha?", 85, "Eje metálico que une la pala del timón con rueda o caña", ["Herramienta para hacer agujeros",
"Elemento componente del motor diesel",
"Perno de pastecas o motones",
"Ninguna es la correcta"]);

let item86 = new PreguntasyRespuestas(86, "¿Qué se conoce con el nombre de fogonadura?", 86, "Orificio en proa por el cual pasa el palo", ["Compartimento utilizado en buques a vapor",
"Elemento metálico que sostiene los obenques",
"Elemento metálico donde se hace firme el estay proel",
"Ninguna es la correcta"]);

let item87 = new PreguntasyRespuestas(87, "¿Qué son las burdas?", 87, "Cabos o cables regulables que sujetan el palo lateralmente y hacia popa", 
["Cable que sostiene el palo desde proa",
"Escotas utilizadas en ocasiones de temporal",
"Conjunto de cables de acero que sostienen el palo desde los costados y al centro sobre la cubierta",
"Ninguna es la correcta"]);

let item88 = new PreguntasyRespuestas(88, "¿Qué son los cadenotes?", 88, "Elementos metálicos sujetos al casco donde se hacen firmes los obenques", ["Refuerzos utilizados para el ancla",
"Herrajes verticales fijados en el borde de la cubierta",
"Puño de la vela sujeta al cabo",
"Ninguna es la correcta"]);

let item89 = new PreguntasyRespuestas(89, "¿Qué es el vang?", 89, "Aparejo que impide que la botavara se eleve por efecto del viento", 
["Pieza a través del cual se conecta la botavara al palo",
"Cable que sostiene la botavara",
"Una de las escotas de la vela proel",
"Ninguna es la correcta"]);

let item90 = new PreguntasyRespuestas(90, "¿Qué es un portaespía?", 90, "Herraje con forme de C que sirve para reduce la fricción de los cabos con otros bordes del barco", 
["Herraje firme a cubierta que se utiliza para sujetar cabos",
"Roldana que sirve para desviar la trayectoria de cabos",
"Pieza con forma de dos cuernos que sirve para hacer firmes cabos",
"Ninguna es la correcta"]);

let item91 = new PreguntasyRespuestas(91, "¿Qué son los rizos?", 91, "Conjunto de orificios practicados en la vela y que sirven para reducir el velamen", ["Doblez que se genera en la vela cuando ésta no porta",
"Conjunto de cabos utilizados para sujetar la vela mayor cuando ésta se encuentra arriada",
"Deformaciones de los cabos producidas cuando se retuercen",
"Ninguna es la correcta"]);

let item92 = new PreguntasyRespuestas(92, "¿Qué longitud de cabo se recomienda utilizar para anclar con buen tiempo?", 92, "5 veces la profundidad", ["10 veces la profundidad",
"15 veces la profundidad",
"De 9 a 10  veces la profundidad",
"Ninguna es la correcta"]);

let item93 = new PreguntasyRespuestas(93, "¿Cómo se denomina el fondeo en el que se utilizan dos anclas a proa una a estribor y otra a babor?", 93, "Barbas de gato", 
["Abarloado",
"Fondeo con anclas engalgadas",
"Largos de proa",
"Ninguna es la correcta"]);

let item94 = new PreguntasyRespuestas(94, "¿Qué matafuego sería el más apto para una embarcación deportiva?", 94, "De polvo clase ABC", 
["De gas carbónico",
"De agua",
"De hidrógeno",
"Ninguna es la correcta"]);

let item95 = new PreguntasyRespuestas(95, "¿Qué significa la expresión correr el temporal?", 95, "Navegar en el mismo sentido que el temporal", ["Navegar en contra del temporal",
"Arriar todas las velas",
"Navegar a la capa",
"Ninguna es la correcta"]);

let item96 = new PreguntasyRespuestas(96, "¿En que categoría cae un velero navegando a motor con las velas izadas?", 97, "Buque a vela", 
["Buque a motor",
"Buque a vela y motor",
"Buque sin gobierno",
"Ninguna es la correcta"]);

let item97 = new PreguntasyRespuestas(97, "Todo buque está obligado a mantener en todo momento una eficaz vigilancia visual y auditiva", 97, "Siempre", ["Nunca",
"Depende de las condiciones de navegación",
"Si el capitán así lo ordena",
"Ninguna es la correcta"]);

let item98 = new PreguntasyRespuestas(98, "¿Cómo se llaman en Argentina el ángulo formado entre la línea de crujía y un objeto determinado?", 98, "Demora", 
["Marcación",
"Enfilación",
"Isobata",
"Ninguna es la correcta"]);

let item99 = new PreguntasyRespuestas(99, "Cuando dos barcos a vela reciben el viento por bandas contrarias…", 99, "Debe maniobrar el que lo reciba por su banda babor", 
["Tiene prioridad el que esta amurado a babor",
"Tiene prioridad el que está a barlovento",
"Debe maniobrar el que está amurado a estribor",
"Ninguna es la correcta"]);

let item100 = new PreguntasyRespuestas(100, "¿Cómo se llama la marea que en un lugar X del planeta tiene una pleamar y dos bajamares por día o viceversa?", 100, "Marea mixta", 
["Marea de sicigia",
"Marea diurna",
"Marea semidiurna",
"Marea de cuadratura",
"Ninguna es la correcta"]);

let item101 = new PreguntasyRespuestas(101, "En las mareas de Sicigia la amplitud de la marea es:", 101, "Mayor que en cuadratura", 
["Menor que en cuadratura",
"Igual que en cuadratura",
"No cambia",
"Ninguna es la correcta"]);

let item102 = new PreguntasyRespuestas(102, "Se considera buque que alcanza a aquel que se aproxima a otro viniendo...", 102, "En un ángulo mayor a 22,5° a popa medido desde el través del buque alcanzado",
["En un ángulo menor a 22,5° a popa medido desde el través del buque alcanzado",
"En un ángulo menor a 135° a popa medido desde el través del buque alcanzado",
"En un ángulo mayor a 135° a popa medido desde el través del buque alcanzado",
"Ninguna es la correcta"]);

let item103 = new PreguntasyRespuestas(103, "En caso de que un velero y un buque de propulsión mecánica menor a 50 metros se encuentra en situación de cruce, ¿cuál debe maniobrar?", 103, "El buque de propulsión mecánica",
["El velero",
"El que tenga al otro por su costado estribor",
"El que reciba el viento por su amura de babor",
"El que esté a barlovento"]);

let item104 = new PreguntasyRespuestas(103, "¿Qué altura de marea necesito para poder navegar en un lugar con una profundidad de 0,6mts sabiendo que mi embarcación cala 1,5mts y que necesito 15cm de margen de seguridad?", 103, "1,05 mts",
["0,9 mts",
"1,95 cm",
"2,25 mts",
"2,1 mts"]);



let contenedorItems = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
  item24,
  item25,
  item26,
  item27,
  item28,
  item29,
  item30,
  item31,
  item32,
  item33,
  item34,
  item35,
  item36,
  item37,
  item38,
  item39,
  item40,
  item41,
  item42,
  item43,
  item44,
  item45,
  item46,
  item47,
  item48,
  item49,
  item50,
  item51,
  item52,
  item53,
  item54,
  item55,
  item56,
  item57,
  item58,
  item59,
  item60,
  item61,
  item62,
  item63,
  item64,
  item65,
  item66,
  item67,
  item68,
  item69,
  item70,
  item71,
  item72,
  item73,
  item74,
  item75,
  item76,
  item77,
  item78,
  item79,
  item80,
  item81,
  item82,
  item83,
  item84,
  item85,
  item86,
  item87,
  item88,
  item89,
  item90,
  item91,
  item92,
  item93,
  item94,
  item95,
  item96,
  item97,
  item98,
  item99,
  item100,
  item101,
  item102,
  item103,
  item104
];

export { contenedorItems }