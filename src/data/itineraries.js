export const itineraries = [
    {
      id: "roma-storica",
      title: "Roma Storica",
      description: "Viaggio nel tempo attraverso le epoche di Roma",
      duration: "8 ore",
      distance: "5.2 km",
      difficulty: "Facile",
      meals: ["Pranzo"],
      weather: {
        condition: "Soleggiato",
        temperature: 26,
        icon: "☀️"
      },
      highlights: ["Colosseo", "Fori Imperiali", "Pantheon"],
      image: "https://source.unsplash.com/random/500x300/?rome,colosseum",
      mapImage: "https://source.unsplash.com/random/800x400/?rome,map",
      stops: [
        {
          time: "09:00",
          title: "Colosseo",
          description: "Il simbolo di Roma, l'anfiteatro più grande mai costruito",
          duration: "1.5 ore",
          tips: "Evita le code con un ingresso prioritario prenotato alle 9:15",
          story: "Sapevi che il Colosseo poteva ospitare tra i 50.000 e 80.000 spettatori ed era usato per gli spettacoli di gladiatori?",
          photoTip: "Il punto migliore per una foto si trova sul lato nord-est al tramonto"
        },
        {
          time: "11:00",
          title: "Fori Imperiali",
          description: "Il centro della vita politica e religiosa della Roma antica",
          duration: "1.5 ore",
          tips: "Scarica l'audioguida per una comprensione più profonda",
          story: "Questa zona era il vero cuore pulsante dell'antica Roma, dove si svolgevano processioni trionfali, elezioni, discorsi pubblici e processi",
          photoTip: "Dal Campidoglio puoi catturare una vista panoramica di tutti i fori"
        },
        {
          time: "13:00",
          title: "Pausa Pranzo - Trattoria da Giggetto",
          description: "Autentica cucina romana in un ambiente caratteristico",
          duration: "1 ora",
          tips: "Prova la loro specialità: carciofi alla giudia",
          story: "Questo ristorante si trova nel quartiere ebraico, uno dei più antichi d'Europa, abitato sin dal II secolo a.C.",
          photoTip: "Il piatto di carciofi è perfetto per una foto gastronomica"
        },
        {
          time: "14:30",
          title: "Pantheon",
          description: "Tempio dedicato a tutti gli dei, perfettamente conservato",
          duration: "1 ora",
          tips: "Visita durante il mezzogiorno per vedere il raggio di luce che penetra dall'oculus",
          story: "La cupola del Pantheon è ancora oggi la più grande cupola in calcestruzzo non armato del mondo",
          photoTip: "Posizionati sotto l'oculus per una prospettiva unica"
        },
        {
          time: "16:00",
          title: "Fontana di Trevi",
          description: "La più grande e famosa fontana barocca di Roma",
          duration: "45 minuti",
          tips: "Visita nel tardo pomeriggio per evitare la folla",
          story: "La tradizione vuole che gettando una moneta nella fontana con la mano destra sopra la spalla sinistra, si assicuri il ritorno a Roma",
          photoTip: "Il lato sinistro della fontana offre l'angolazione migliore con meno persone"
        },
        {
          time: "17:15",
          title: "Piazza di Spagna",
          description: "Famosa per la sua scalinata monumentale",
          duration: "1 ora",
          tips: "Sali fino in cima per una vista panoramica sulla città",
          story: "La scalinata fu commissionata dal diplomatico francese Étienne Gueffier e collega la piazza alla chiesa di Trinità dei Monti",
          photoTip: "Scatta dalle scale superiori guardando verso la fontana della Barcaccia"
        }
      ],
      transportation: [
        {
          from: "Colosseo",
          to: "Fori Imperiali",
          method: "A piedi",
          duration: "5 minuti",
          details: "Percorso diretto attraverso Via dei Fori Imperiali"
        },
        {
          from: "Fori Imperiali",
          to: "Trattoria da Giggetto",
          method: "Autobus 87",
          duration: "10 minuti",
          details: "Partenza ogni 15 minuti dalla fermata 'Fori Imperiali'"
        },
        {
          from: "Trattoria da Giggetto",
          to: "Pantheon",
          method: "A piedi",
          duration: "12 minuti",
          details: "Attraverso Via dei Giubbonari e Campo de' Fiori"
        },
        {
          from: "Pantheon",
          to: "Fontana di Trevi",
          method: "A piedi",
          duration: "10 minuti",
          details: "Percorso pittoresco attraverso vicoli caratteristici"
        },
        {
          from: "Fontana di Trevi",
          to: "Piazza di Spagna",
          method: "A piedi",
          duration: "10 minuti",
          details: "Attraverso Via dei Condotti, famosa per lo shopping di lusso"
        }
      ]
    },
    {
      id: "roma-arte",
      title: "Tour Artistico di Roma",
      description: "Un percorso tra i principali musei e gallerie d'arte",
      duration: "6 ore",
      distance: "4.5 km",
      difficulty: "Facile",
      meals: ["Spuntino"],
      weather: {
        condition: "Soleggiato",
        temperature: 25,
        icon: "☀️"
      },
      highlights: ["Galleria Borghese", "MAXXI", "Palazzo Barberini"],
      image: "https://source.unsplash.com/random/500x300/?rome,art",
      mapImage: "https://source.unsplash.com/random/800x400/?rome,museum",
      stops: [
        {
          time: "10:00",
          title: "Galleria Borghese",
          description: "Straordinaria collezione di sculture, mosaici e dipinti",
          duration: "2 ore",
          tips: "Prenota i biglietti in anticipo, gli ingressi sono a numero chiuso",
          story: "La galleria ospita capolavori di Bernini, Caravaggio, Raffaello e Tiziano raccolti dal cardinale Scipione Borghese nel XVII secolo",
          photoTip: "La scultura 'Apollo e Dafne' di Bernini è particolarmente fotogenica"
        },
        {
          time: "12:30",
          title: "Pausa Caffè - Caffè delle Arti",
          description: "Elegante caffetteria con vista sui giardini",
          duration: "30 minuti",
          tips: "Prova il loro caffè speciale con un tocco di cannella",
          story: "Il café si trova all'interno della Galleria Nazionale d'Arte Moderna, altro importante museo della città",
          photoTip: "La terrazza offre una vista panoramica perfetta per una foto"
        },
        {
          time: "13:30",
          title: "MAXXI - Museo delle Arti del XXI Secolo",
          description: "Architettura contemporanea e opere d'arte moderne",
          duration: "1.5 ore",
          tips: "Visita il bookshop per pubblicazioni uniche sull'arte contemporanea",
          story: "L'edificio è stato progettato dall'architetto Zaha Hadid e ha vinto il premio Stirling nel 2010",
          photoTip: "Le scale interne offrono prospettive architettoniche sorprendenti"
        },
        {
          time: "15:30",
          title: "Palazzo Barberini",
          description: "Palazzo barocco che ospita la Galleria Nazionale d'Arte Antica",
          duration: "1.5 ore",
          tips: "Non perdere l'affresco del Trionfo della Divina Provvidenza di Pietro da Cortona",
          story: "Il palazzo fu costruito per la famiglia Barberini, una delle più potenti di Roma durante il XVII secolo",
          photoTip: "La scalinata elicoidale di Borromini è un soggetto fotografico unico"
        }
      ],
      transportation: [
        {
          from: "Galleria Borghese",
          to: "MAXXI",
          method: "Autobus 910",
          duration: "20 minuti",
          details: "Fermata a 100 metri dall'ingresso della Galleria"
        },
        {
          from: "MAXXI",
          to: "Palazzo Barberini",
          method: "Metro A",
          duration: "15 minuti",
          details: "Dalla stazione Flaminio alla stazione Barberini"
        }
      ]
    },
    {
      id: "roma-gastronomia",
      title: "Sapori di Roma",
      description: "Tour gastronomico tra i migliori ristoranti e mercati",
      duration: "5 ore",
      distance: "3.8 km",
      difficulty: "Facile",
      meals: ["Pranzo", "Spuntini multipli"],
      weather: {
        condition: "Parzialmente nuvoloso",
        temperature: 24,
        icon: "⛅"
      },
      highlights: ["Mercato di Campo de' Fiori", "Trastevere", "Testaccio"],
      image: "https://source.unsplash.com/random/500x300/?rome,food",
      mapImage: "https://source.unsplash.com/random/800x400/?rome,market",
      stops: [
        {
          time: "10:00",
          title: "Mercato di Campo de' Fiori",
          description: "Storico mercato all'aperto con prodotti freschi e specialità locali",
          duration: "1 ora",
          tips: "Arriva presto per vedere il mercato nel pieno dell'attività",
          story: "La piazza prende il nome dal campo di fiori che esisteva prima che il mercato fosse istituito nel 1869",
          photoTip: "I banchi colorati di frutta e verdura offrono ottime opportunità fotografiche"
        },
        {
          time: "11:30",
          title: "Forno Campo de' Fiori",
          description: "Panetteria storica famosa per la pizza bianca romana",
          duration: "30 minuti",
          tips: "Prova la pizza rossa con la mortadella, una combinazione classica",
          story: "Questo forno utilizza ancora metodi di cottura tradizionali e ricette tramandate da generazioni",
          photoTip: "Fotografa il momento in cui estraggono il pane dal forno"
        },
        {
          time: "12:30",
          title: "Trattoria Da Enzo al 29",
          description: "Autentica trattoria romana nel cuore di Trastevere",
          duration: "1.5 ore",
          tips: "Ordina i carciofi alla romana e la carbonara",
          story: "Trastevere era originariamente un quartiere operaio ed è ora uno dei più caratteristici e amati della città",
          photoTip: "La pasta appena servita con il vapore che sale è un'immagine perfetta"
        },
        {
          time: "14:30",
          title: "Gelateria Fatamorgana",
          description: "Gelato artigianale con ingredienti naturali e combinazioni creative",
          duration: "30 minuti",
          tips: "Prova i gusti stagionali, sempre sorprendenti",
          story: "La fondatrice Maria Agnese è nota per le sue combinazioni uniche come basilico, noci e miele",
          photoTip: "Il cono con tre gusti diversi è visivamente affascinante"
        },
        {
          time: "15:30",
          title: "Mercato Testaccio",
          description: "Mercato coperto moderno con stand gastronomici tradizionali",
          duration: "1 ora",
          tips: "Visita lo stand Mordi e Vai per i panini con le polpette al sugo",
        },
      ],
    },
      
      {
        id: "roma-misteriosa",
        title: "Roma Misteriosa",
        description: "Scopri i lati oscuri e le leggende della Città Eterna",
        duration: "5 ore",
        distance: "4 km",
        difficulty: "Facile",
        meals: ["Aperitivo"],
        weather: {
          condition: "Nuvoloso",
          temperature: 22,
          icon: "☁️"
        },
        highlights: ["Cripta dei Cappuccini", "Basilica di San Clemente", "Passetto di Borgo"],
        image: "https://source.unsplash.com/random/500x300/?rome,mystery",
        mapImage: "https://source.unsplash.com/random/800x400/?rome,dark",
        stops: [
          {
            time: "10:00",
            title: "Cripta dei Cappuccini",
            description: "Una macabra collezione di ossa disposte artisticamente dai monaci cappuccini",
            duration: "1 ora",
            tips: "Fotografia vietata, goditi l'esperienza senza distrazioni",
            story: "Le ossa di oltre 3.700 frati cappuccini decorano le pareti di questa cripta, creando un'atmosfera inquietante ma affascinante",
            photoTip: "All'esterno, l'ingresso decorato è un ottimo sfondo per foto gotiche"
          },
          {
            time: "11:30",
            title: "Basilica di San Clemente",
            description: "Un viaggio nei sotterranei di Roma attraverso tre livelli di storia",
            duration: "1.5 ore",
            tips: "Visita con una guida per scoprire tutti i segreti della basilica",
            story: "Sotto la chiesa barocca si trovano una basilica medievale e resti di un tempio mitraico del II secolo",
            photoTip: "L'affresco del Giudizio Universale nella basilica superiore è imperdibile"
          },
          {
            time: "14:00",
            title: "Passetto di Borgo",
            description: "Un passaggio segreto tra il Vaticano e Castel Sant'Angelo",
            duration: "1 ora",
            tips: "Prenota in anticipo per accedere a questa sezione storica",
            story: "Usato dai papi per fuggire in caso di pericolo, il Passetto ha visto momenti cruciali della storia romana",
            photoTip: "Lo scorcio dalla sommità offre una vista unica su Roma"
          }
        ],
        transportation: [
          {
            from: "Cripta dei Cappuccini",
            to: "Basilica di San Clemente",
            method: "A piedi",
            duration: "15 minuti",
            details: "Attraverso Via del Tritone e Via Cavour"
          },
          {
            from: "Basilica di San Clemente",
            to: "Passetto di Borgo",
            method: "Autobus 81",
            duration: "20 minuti",
            details: "Scendi alla fermata Castel Sant'Angelo"
          }
        ]
      },
      
      {
        id: "roma-verde",
        title: "Roma Verde",
        description: "Un tour tra i parchi e i giardini più belli della città",
        duration: "6 ore",
        distance: "5.5 km",
        difficulty: "Facile",
        meals: ["Pranzo al sacco"],
        weather: {
          condition: "Soleggiato",
          temperature: 24,
          icon: "☀️"
        },
        highlights: ["Villa Borghese", "Orto Botanico", "Gianicolo"],
        image: "https://source.unsplash.com/random/500x300/?rome,park",
        mapImage: "https://source.unsplash.com/random/800x400/?rome,garden",
        stops: [
          {
            time: "09:30",
            title: "Villa Borghese",
            description: "Il polmone verde della città con giardini, musei e laghetti",
            duration: "2 ore",
            tips: "Noleggia una bici per esplorare il parco in modo divertente",
            story: "Originariamente giardino privato della famiglia Borghese, è ora il più amato parco pubblico di Roma",
            photoTip: "Il laghetto con il Tempio di Esculapio è perfetto per una foto romantica"
          },
          {
            time: "12:00",
            title: "Orto Botanico di Roma",
            description: "Un angolo di natura tra piante esotiche e cascate",
            duration: "1.5 ore",
            tips: "La serra tropicale è uno dei luoghi più spettacolari",
            story: "Fondato nel 1883, l'orto botanico ospita oltre 7.000 specie di piante da tutto il mondo",
            photoTip: "I giardini giapponesi sono ideali per foto rilassanti"
          },
          {
            time: "14:30",
            title: "Gianicolo",
            description: "Una delle colline panoramiche più belle di Roma",
            duration: "1 ora",
            tips: "Arriva alle 12:00 per vedere il tradizionale colpo di cannone",
            story: "Dal 1847, ogni giorno a mezzogiorno, un cannone spara a salve per sincronizzare gli orologi delle chiese di Roma",
            photoTip: "Il belvedere offre una vista mozzafiato su tutta la città"
          }
        ],
        transportation: [
          {
            from: "Villa Borghese",
            to: "Orto Botanico",
            method: "Tram 3",
            duration: "15 minuti",
            details: "Scendi alla fermata Orto Botanico"
          },
          {
            from: "Orto Botanico",
            to: "Gianicolo",
            method: "A piedi",
            duration: "10 minuti",
            details: "Percorso attraverso Trastevere e le salite panoramiche"
          }
        ]
      },
      {
        id: "roma-gladiatori",
        title: "Percorso del Gladiatore",
        description: "Un viaggio nella Roma antica seguendo le orme dei gladiatori",
        duration: "7 ore",
        distance: "4.8 km",
        difficulty: "Media",
        meals: ["Pranzo a tema romano"],
        weather: {
          condition: "Soleggiato",
          temperature: 28,
          icon: "☀️"
        },
        highlights: ["Colosseo", "Ludus Magnus", "Terme di Caracalla"],
        image: "https://source.unsplash.com/random/500x300/?rome,gladiator",
        mapImage: "https://source.unsplash.com/random/800x400/?rome,colosseum",
        stops: [
          {
            time: "09:00",
            title: "Colosseo - Interno e Arena",
            description: "Esplorazione dell'arena dove combattevano i gladiatori",
            duration: "2 ore",
            tips: "Prenota il tour dell'arena con accesso speciale al piano dell'arena",
            story: "I gladiatori entravano nell'arena attraverso la Porta Libitinaria, chiamata così in onore di Libitina, dea della morte. Se un gladiatore era ucciso, il suo corpo veniva portato fuori da questa porta.",
            photoTip: "Posizionati nel centro dell'arena guardando verso l'alto per catturare la maestosità dell'anfiteatro"
          },
          {
            time: "11:30",
            title: "Ludus Magnus",
            description: "La principale scuola di addestramento dei gladiatori di Roma",
            duration: "1 ora",
            tips: "Visibile dalla strada, ma molti turisti lo ignorano. Osservalo dall'alto dalla terrazza panoramica vicina",
            story: "Qui i gladiatori si allenavano quotidianamente. Era collegato direttamente al Colosseo tramite un tunnel sotterraneo, permettendo ai gladiatori di entrare nell'arena senza essere visti dal pubblico.",
            photoTip: "I resti delle piccole arene di allenamento offrono un'interessante prospettiva"
          },
          {
            time: "13:00",
            title: "Pranzo - Antica Taberna Romana",
            description: "Ristorante tematico con piatti ispirati all'antica Roma",
            duration: "1.5 ore",
            tips: "Prova il 'puls', una polenta antica romana, e il 'mulsum', vino speziato con miele",
            story: "I gladiatori seguivano una dieta speciale chiamata 'cibus gladiatorius', ricca di proteine e carboidrati, e bevevano una bevanda speciale fatta con cenere di ossa per fortificare il corpo.",
            photoTip: "Le pietanze servite in terracotta ricreano l'atmosfera dell'epoca romana"
          },
          {
            time: "15:00",
            title: "Terme di Caracalla",
            description: "Imponenti terme pubbliche dove si rilassavano anche i gladiatori",
            duration: "1.5 ore",
            tips: "Porta con te dell'acqua, l'area è molto esposta al sole",
            story: "Le terme non erano solo un luogo per lavarsi ma un vero centro sociale dove anche i gladiatori, vere celebrità dell'epoca, venivano riconosciuti e celebrati dal pubblico.",
            photoTip: "I mosaici sul pavimento sono particolarmente fotogenici se ripresi con la luce del pomeriggio"
          },
          {
            time: "17:00",
            title: "Museo della Civiltà Romana - Sezione Gladiatori",
            description: "Esposizione dedicata all'equipaggiamento e alla vita dei gladiatori",
            duration: "1 ora",
            tips: "La ricostruzione in scala del Colosseo è imperdibile",
            story: "Esistevano diverse categorie di gladiatori, come i 'secutor', i 'retiarius' armati di rete e tridente, o i 'thraex' con piccoli scudi e spade curve, ognuno con tattiche e armature specifiche.",
            photoTip: "Le riproduzioni degli elmi decorati offrono dettagli affascinanti"
          }
        ],
        transportation: [
          {
            from: "Colosseo",
            to: "Ludus Magnus",
            method: "A piedi",
            duration: "5 minuti",
            details: "Si trova proprio di fronte al Colosseo, attraversando Via di San Giovanni in Laterano"
          },
          {
            from: "Ludus Magnus",
            to: "Antica Taberna Romana",
            method: "A piedi",
            duration: "10 minuti",
            details: "Percorso lungo Via Labicana"
          },
          {
            from: "Antica Taberna Romana",
            to: "Terme di Caracalla",
            method: "Autobus 118",
            duration: "15 minuti",
            details: "Partenza da Colosseo fino a Terme di Caracalla"
          },
          {
            from: "Terme di Caracalla",
            to: "Museo della Civiltà Romana",
            method: "Metro B + Autobus 714",
            duration: "25 minuti",
            details: "Metro da Circo Massimo a EUR Fermi, poi autobus 714"
          }
        ]
      },
      {
        id: "roma-papale",
        title: "Roma dei Papi",
        description: "Un itinerario attraverso i luoghi del potere papale e della spiritualità",
        duration: "8 ore",
        distance: "5.5 km",
        difficulty: "Media",
        meals: ["Pranzo"],
        weather: {
          condition: "Sereno",
          temperature: 24,
          icon: "☀️"
        },
        highlights: ["Città del Vaticano", "Castel Sant'Angelo", "San Giovanni in Laterano"],
        image: "https://source.unsplash.com/random/500x300/?vatican,pope",
        mapImage: "https://source.unsplash.com/random/800x400/?rome,vatican",
        stops: [
          {
            time: "08:30",
            title: "Basilica di San Pietro",
            description: "Il cuore del cattolicesimo e la più grande basilica del mondo",
            duration: "2 ore",
            tips: "Arriva presto per evitare le code e rispetta il codice di abbigliamento (spalle e ginocchia coperte)",
            story: "La basilica sorge dove, secondo la tradizione, fu sepolto l'apostolo Pietro. La cupola, progettata da Michelangelo, è uno dei simboli più riconoscibili di Roma.",
            photoTip: "Dalla Piazza San Pietro, posizionati in modo che le colonne del Bernini incornicino la cupola"
          },
          {
            time: "11:00",
            title: "Musei Vaticani e Cappella Sistina",
            description: "Una delle più ricche collezioni d'arte al mondo",
            duration: "2.5 ore",
            tips: "Prenota i biglietti online per saltare la fila e concentrati sulle opere principali",
            story: "Papa Giulio II commissionò a Michelangelo gli affreschi della Cappella Sistina. L'artista lavorò per quattro anni (1508-1512) sdraiato su un'impalcatura per dipingere il soffitto.",
            photoTip: "La fotografia è vietata nella Cappella Sistina, ma la Galleria delle Carte Geografiche offre meravigliose opportunità fotografiche"
          },
          {
            time: "13:30",
            title: "Pranzo - Ristorante dei Musei",
            description: "Elegante ristorante con vista sui Giardini Vaticani",
            duration: "1 ora",
            tips: "Il menù del giorno è sempre un'ottima scelta a prezzo ragionevole",
            story: "La gastronomia vaticana combina tradizioni romane con influenze internazionali, riflettendo la natura universale della Chiesa",
            photoTip: "Se siedi vicino alla finestra, puoi catturare una splendida vista dei giardini"
          },
          {
            time: "15:00",
            title: "Castel Sant'Angelo",
            description: "Antica fortezza papale e rifugio in caso di pericolo",
            duration: "1.5 ore",
            tips: "Sali fino alla terrazza per una vista panoramica sulla città",
            story: "Costruito originariamente come mausoleo per l'imperatore Adriano, divenne fortezza papale nel Medioevo. Un corridoio segreto, il Passetto di Borgo, lo collega al Vaticano e fu usato da Papa Clemente VII per fuggire durante il Sacco di Roma del 1527.",
            photoTip: "Dal Ponte Sant'Angelo si ottiene un'ottima inquadratura con le statue angeliche in primo piano"
          },
          {
            time: "17:00",
            title: "Basilica di San Giovanni in Laterano",
            description: "La cattedrale di Roma e la 'chiesa madre' di tutte le chiese cattoliche",
            duration: "1 ora",
            tips: "Non perdere il chiostro con le sue colonne tortili",
            story: "È la più antica basilica dell'Occidente, fondata dall'imperatore Costantino. Fino al XIV secolo i papi risiedevano qui, non in Vaticano, e ancora oggi è la cattedrale ufficiale del Papa come Vescovo di Roma.",
            photoTip: "Il soffitto dorato della navata centrale è particolarmente fotogenico"
          }
        ],
        transportation: [
          {
            from: "Basilica di San Pietro",
            to: "Musei Vaticani",
            method: "A piedi",
            duration: "10 minuti",
            details: "Seguendo le mura vaticane lungo Viale Vaticano"
          },
          {
            from: "Musei Vaticani",
            to: "Ristorante dei Musei",
            method: "A piedi",
            duration: "5 minuti",
            details: "Si trova all'interno del complesso museale"
          },
          {
            from: "Ristorante dei Musei",
            to: "Castel Sant'Angelo",
            method: "A piedi",
            duration: "15 minuti",
            details: "Percorso panoramico lungo Via della Conciliazione"
          },
          {
            from: "Castel Sant'Angelo",
            to: "Basilica di San Giovanni in Laterano",
            method: "Autobus 40 + Metro A",
            duration: "25 minuti",
            details: "Autobus fino a Termini, poi Metro A fino a San Giovanni"
          }
        ]
      },
      {
        id: "roma-sotterranea",
        title: "Roma Sotterranea",
        description: "Esplorazione dei tesori nascosti nel sottosuolo della città eterna",
        duration: "6 ore",
        distance: "4 km",
        difficulty: "Media",
        meals: ["Pranzo"],
        weather: {
          condition: "Qualsiasi (principalmente al coperto)",
          temperature: 18,
          icon: "🏛️"
        },
        highlights: ["Catacombe di San Callisto", "Domus Aurea", "Mitreo di San Clemente"],
        image: "https://source.unsplash.com/random/500x300/?rome,underground",
        mapImage: "https://source.unsplash.com/random/800x400/?rome,catacombs",
        stops: [
          {
            time: "09:30",
            title: "Catacombe di San Callisto",
            description: "Uno dei più grandi e importanti complessi cimiteriali sotterranei di Roma",
            duration: "1.5 ore",
            tips: "Visita guidata obbligatoria, porta una felpa leggera anche d'estate (temperatura costante di 15°C)",
            story: "Queste catacombe prendono il nome da Papa Callisto I e contengono le tombe di 16 papi e numerosi martiri cristiani. Si estendono per circa 20 km su più livelli.",
            photoTip: "La fotografia è spesso limitata, ma l'ingresso e le aree designate offrono buone opportunità"
          },
          {
            time: "11:30",
            title: "Basilica di San Clemente e Mitreo",
            description: "Una chiesa a tre livelli che rappresenta 2000 anni di storia",
            duration: "1 ora",
            tips: "Acquista il biglietto per i sotterranei all'ingresso della basilica",
            story: "Scendendo sotto la basilica medievale si trovano prima una chiesa paleocristiana del IV secolo e poi, al livello più basso, un tempio mitraico del II secolo e una casa romana con tanto di fonte d'acqua ancora funzionante.",
            photoTip: "I mosaici della basilica superiore sono spettacolari, mentre nei livelli inferiori cerca gli antichi affreschi paleocristiani"
          },
          {
            time: "13:00",
            title: "Pranzo - Ristorante Clementino",
            description: "Trattoria tradizionale con piatti romani in un ambiente d'epoca",
            duration: "1.5 ore",
            tips: "Prova la pasta alla gricia, specialità romana meno turistica della carbonara",
            story: "Il locale si trova in un edificio che ha fondamenta di epoca romana, visibili in una piccola sezione del pavimento in vetro",
            photoTip: "La parete di mattoni antichi esposti offre un interessante sfondo"
          },
          {
            time: "15:00",
            title: "Domus Aurea",
            description: "Il palazzo imperiale di Nerone, sepolto e riscoperto",
            duration: "1.5 ore",
            tips: "Prenotazione obbligatoria, il tour include visori di realtà aumentata",
            story: "Dopo l'incendio di Roma del 64 d.C., Nerone fece costruire questo enorme palazzo. Alla sua morte, gli imperatori successivi lo seppellirono completamente per cancellare la sua memoria, costruendoci sopra le Terme di Traiano.",
            photoTip: "Gli affreschi originali del soffitto sono ben illuminati e offrono eccezionali soggetti fotografici"
          },
          {
            time: "17:00",
            title: "Area Archeologica del Vicus Caprarius - La Città dell'Acqua",
            description: "Complesso archeologico sotterraneo con resti di edifici romani e un tratto dell'acquedotto dell'Acqua Vergine",
            duration: "1 ora",
            tips: "Poco conosciuto dai turisti, offre un'esperienza più intima dell'antica Roma",
            story: "Qui passa l'acquedotto che ancora oggi alimenta la Fontana di Trevi. Fu costruito nel 19 a.C. e restaurato più volte nel corso dei secoli.",
            photoTip: "La luce soffusa che si riflette sull'acqua crea un'atmosfera magica per le foto"
          }
        ],
        transportation: [
          {
            from: "Catacombe di San Callisto",
            to: "Basilica di San Clemente",
            method: "Autobus 118 + Metro A",
            duration: "25 minuti",
            details: "Autobus fino a Circo Massimo, poi Metro A fino a San Giovanni"
          },
          {
            from: "Basilica di San Clemente",
            to: "Ristorante Clementino",
            method: "A piedi",
            duration: "5 minuti",
            details: "Si trova a pochi passi dalla basilica"
          },
          {
            from: "Ristorante Clementino",
            to: "Domus Aurea",
            method: "A piedi",
            duration: "15 minuti",
            details: "Piacevole passeggiata passando vicino al Colosseo"
          },
          {
            from: "Domus Aurea",
            to: "Vicus Caprarius",
            method: "Autobus 75",
            duration: "15 minuti",
            details: "Fermata vicino a Fontana di Trevi, poi breve tratto a piedi"
          }
        ]
      }
    ];
      
    console.log("Itinerari caricati dal file:", itineraries.length);
