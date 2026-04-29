const fs = require('fs');
const content = `---
import MainLayout from '../layouts/MainLayout.astro';
import Hero from '../components/Hero.astro';
import Section from '../components/Section.astro';
import Card from '../components/Card.astro';
import SectionTeaserGrid from '../components/SectionTeaserGrid.astro';

const teaserItems = [
  { href: '#worum-es-geht', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Worum es geht', label: 'Worum es geht' },
  { href: '#kreislauf', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Ein Kreislauf', label: 'Der Kreislauf' },
  { href: '#forschung', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Forschung', label: 'Forschung' },
  { href: '#koerper-erleben', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Korperlich erleben', label: 'Korperlich erleben' },
  { href: '#umsetzung', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Umsetzung', label: 'Umsetzung' },
  { href: '#konzentration', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Konzentration', label: 'Konzentration' },
  { href: '#leitprinzipien', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Leitprinzipien', label: 'Leitprinzipien' },
  { href: '#nicht-sein', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Nicht sein', label: 'Nicht' },
  { href: '#relevant', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Relevant', label: 'Relevant' },
];
---

<MainLayout title="Soil to Table - Komm Raus">
  <Hero title="Soil to Table" subtitle="Vom Boden auf den Teller, vom Kreislauf ins Verstehen" image="lagerfeuer-bg" />

  <Section class="soil-overview">
    <div class="prose max-w-none">
      <h2>Inhalte auf einen Blick</h2>
      <p>Direkt zu den wichtigsten Bereichen springen:</p>
      <SectionTeaserGrid items={teaserItems} />
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="worum-es-geht">
      <h2>1. Worum es geht</h2>
      <p>Wenn wir uber Ernahrung sprechen, beginnen wir meistens beim Teller. Was soll ich essen? Was ist gesund? Was nicht?</p>
      <p>Wir beginnen einen Schritt fruher - beim Boden.</p>
      <p>Denn was auf dem Teller landet, hangt davon ab, was im Boden passiert. Ein lebendiger Boden voller Mikroorganismen, Pilznetzwerke und Kleinstlebewesen bringt andere Lebensmittel hervor als ein ausgelaugter, verdichteter Boden, der nur noch durch synthetischen Dunger funktioniert. Die Nahrstoffdichte, die Vielfalt der sekundaren Pflanzenstoffe, die Ballaststoffkomplexitat - all das wird nicht erst in der Kuch e entschieden, sondern im Erdreich.</p>
      <p>Gleichzeitig zeigt die Forschung der letzten zwanzig Jahre, dass das, was wir essen, nicht nur unseren Korper beeinflusst, sondern uber das Darmmikrobiom auch unsere Stimmung, unsere Konzentration, unser Immunsystem und unsere Stressverarbeitung. Der Darm ist kein isoliertes Verdauungsorgan - er ist ein Okosystem mit uber tausend Bakterienarten, das in standiger Kommunikation mit dem Gehirn steht.</p>
      <p>Unser Soil-to-Table-Ansatz verbindet diese beiden Seiten: Was im Boden passiert, bestimmt, was auf den Teller kommt. Was auf den Teller kommt, bestimmt, was im Darm passiert. Was im Darm passiert, beeinflusst, wie wir denken, fuhlen und entscheiden. Ein fundamentaler biologischer Kreislauf, ub erlebenswichtiges Wissen.</p>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="kreislauf">
      <h2>2. Ein Kreislauf, kein Einbahnstrasse</h2>
      <p>Die meisten Menschen erleben Ernahrung als Einbahnstrasse: Lebensmittel werden gekauft, zubereitet, gegessen. Woher sie kommen und was mit den Resten passiert, bleibt unsichtbar.</p>
      <p>In der Natur gibt es keine Einbahnstrassen. Es gibt Kreislaufe:</p>
      <ul>
        <li>Sonne treibt Photosynthese an. Pflanzen fixieren Kohlenstoff und futtern uber ihre Wurzeln das Bodenmikrobiom.</li>
        <li>Das Bodenmikrobiom mobilisiert Mineralien, die die Pflanze aufnimmt und in Nahrstoffe, Ballaststoffe und sekundare Pflanzenstoffe umwandelt.</li>
        <li>Das Lebensmittel wird gegessen. Ballaststoffe und Pflanzenstoffe erreichen den Darm, wo das Darmmikrobiom sie zu kurzkettigen Fettsauren, Neurotransmitter-Vorlaufen und bioaktiven Stoffen fermentiert.</li>
        <li>Diese Stoffe starken die Darmbarriere, regulieren das Immunsystem und beeinflussen uber den Vagusnerv das Gehirn.</li>
        <li>Das Gehirn ermoglicht klare Entscheidungen. Unsere Entscheidungen bestimmen, welche Landwirtschaft wir finanzieren.</li>
        <li>Die Landwirtschaft bestimmt den Zustand des Bodens. Der Kreislauf schliesst sich.</li>
      </ul>
      <p><strong>Dieser Kreislauf kann in beide Richtungen laufen:</strong></p>
      <p><strong>Aufwartssspirale:</strong> Lebendiger Boden - nahrstoffreiche Lebensmittel - vielfaltiges Darmmikrobiom - bessere Kognition und Stimmung - bewusstere Entscheidungen - Unterstutzung regenerativer Landwirtschaft - lebendigerer Boden.</p>
      <p><strong>Abwartssspirale:</strong> Degradierter Boden - nahrstoffarme Lebensmittel - verarmtes Darmmikrobiom - beeintrachtigte Kognition - schlechtere Entscheidungen - weitere Bodendegradation.</p>
      <p>Unser Soil-to-Table-Ansatz zielt darauf, diesen Kreislauf an moglichst vielen Stellen erfahrbar und verstandlich zu machen - und, wo moglich, in Richtung der Aufwartssspirale zu bewegen.</p>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="forschung">
      <h2>3. Was die Forschung nahelegt</h2>
      <h3>Boden und Lebensmittelqualitat</h3>
      <p>Die Nahrstoffdichte von Lebensmitteln ist uber die letzten Jahrzehnte messbar gesunken. Das hangt mit vielen Faktoren zusammen - unter anderem mit der Art, wie Beden bewirtschaftet werden. Forschung zeigt, dass mikrobielle Vielfalt im Boden mit einer hoheren Nahrstoffdichte und einem breiteren Spektrum an sekundaren Pflanzenstoffen in den darauf wachsenden Pflanzen korreliert.</p>
      <p>Ein Boden, in dem Mykorrhiza-Pilze, Bakterien, Protozoen und Regenwurmer ein funktionierendes Nahrungsnetz bilden, stellt Pflanzen andere und vielfaltigere Nahrstoffe zur Verfugung als ein Boden, der nur noch durch externen Dunger funktioniert.</p>
      
      <h3>Das Darmmikrobiom</h3>
      <p>Das menschliche Darmmikrobiom ist eines der am intensivsten erforschten Gebiete der letzten zwanzig Jahre. Einige der am besten dokumentierten Zusammenhange:</p>
      <ul>
        <li>Mikrobielle Diversitat im Darm gilt als Marker fur Gesundheit. Ein vielfaltiges Darmmikrobiom ist mit besserer Immunfunktion, stabilerem Stoffwechsel und geringerem Entzundungsgeschehen assoziiert.</li>
        <li>Ballaststoffe sind das Hauptsubstrat fur die Darmbakterien. Sie werden zu kurzkettigen Fettsauren fermentiert - insbesondere Butyrat, das die Darmbarriere starkt und entzundungshemmend wirkt. Die meisten Menschen in westlichen Gesellschaften essen deutlich weniger Ballaststoffe als empfohlen.</li>
        <li>Fermentierte Lebensmittel (unpasteurisiertes Sauerkraut, Kefir, Kimchi, Joghurt mit lebenden Kulturen) erhoen die mikrobielle Diversitat im Darm. Studien zeigen, dass bereits wenige Wochen regelmaessiger Konsum messbare Veranderungen bewirken kann.</li>
        <li>Ultra-verarbeitete Lebensmittel (UPF) schaden dem Mikrobiom und der metabolischen Gesundheit. Je hoher der Anteil an ultra-verarbeiteten Produkten in der Ernahrung, desto geringer die mikrobielle Diversitat und desto hoher die Entzungsmarker.</li>
        <li>Die Gut-Brain-Axis - die bidirektionale Kommunikation zwischen Darm und Gehirn uber den Vagusnerv, Hormone und mikrobielle Metaboliten - ist real und gut dokumentiert. Etwa 90 Prozent des Serotonins im Korper werden im Darm produziert.</li>
      </ul>
      
      <h3>Was plausibel, aber noch nicht abschliessend belegt ist</h3>
      <p>Einige Zusammenhange, die konzeptionell schlussig sind, aber noch weiterer Forschung bedurfen:</p>
      <ul>
        <li>Ob regenerativ angebaute Lebensmittel direkt zu besseren Gesundheitsoutcomes beim Menschen fuhren, ist plausibel, aber kausal noch nicht durchganging belegt.</li>
        <li>Ob und in welchem Umfang Bodenmikroben uber Lebensmittel auf das Darmmikrobiom ubertragen werden, wird erforscht, ist aber noch nicht abschliessend geklart.</li>
        <li>Die Rolle einzelner Mechanismen (wie Zonulin und intestinale Permeabilitat) als universelle Krankheitserklarung ist in der Wissenschaft umstritten.</li>
      </ul>
      <p>Wir unterscheiden in unserer Kommunikation bewusst zwischen dem, was gut belegt ist, dem, was plausibel, aber noch nicht gesichert ist, und dem, was spekulativ ist. Transparenz uber Evidenzgrenzen gehort zu unserem Ansatz.</p>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="koerper-erleben">
      <h2>4. Funf Zusammenhange, die man am eigenen Korper erleben kann</h2>
      <p>Man muss die gesamte Wissenschaft nicht kennen, um die Grundzuge des Systems zu verstehen. Funf einfache Beobachtungen, die viele Menschen nachvollziehen konnen:</p>
      <ol>
        <li><strong>Vielfalt auf dem Teller = Vielfalt im Darm.</strong> Mehr als 30 verschiedene Pflanzen pro Woche - Gemuse, Obst, Krauter, Gewurze, Nusse, Samen, Hulsenfruchte - futtern ein breiteres Spektrum an Darmbakterien. Jede Pflanze liefert etwas andere Ballaststoffe und Pflanzenstoffe.</li>
        <li><strong>Fermentiertes ist mehr als Geschmack.</strong> Unpasteurisiertes Sauerkraut, Kefir oder Kimchi liefern lebende Mikroorganismen und deren Stoffwechselprodukte. Pasteurierte Produkte aus dem Supermarkt - auch wenn sie Sauerkraut heissen - enthalten keine lebenden Kulturen mehr.</li>
        <li><strong>Verarbeitungsgrad entscheidet.</strong> Nicht ob etwas Kohlenhydrate oder Fett enthalt, ist die zentrale Frage, sondern wie stark es verarbeitet wurde. Ein Apfel, Haferflocken und Linsen sind etwas anderes als Fruhstuckscerealien, Fertiggerichte und Softdrinks.</li>
        <li><strong>Der Darm reagiert auf Stress.</strong> Chronischer Stress beeintrachtigt die Darmbarriere, verandert die mikrobielle Zusammensetzung und kann Verdauungsbeschwerden verursachen - unabhangig von der Ernahrung.</li>
        <li><strong>Boden riecht nach Gesundheit.</strong> Ein lebendiger Boden riecht erdig und angenehm - das ist Geosmin, ein Stoff, der von Bodenbakterien produziert wird. Ein toter Boden riecht nach nichts oder faulig.</li>
      </ol>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="umsetzung">
      <h2>5. Wie wir das bei uns umsetzen</h2>
      <p>Soil to Table ist bei uns kein Kurs, den man bucht. Es ist ein Prinzip, das sich durch verschiedene Formate zieht - vom Grunen Klassenzimmer uber Wildkraeuterwanderungen bis zum gemeinsamen Kochen am Feuer.</p>
      
      <h3>Am Boden: Verstehen, woher Nahrung kommt</h3>
      <p>Im Grunen Klassenzimmer und in unseren Gartenmodulen erleben Teilnehmende den ersten Teil des Kreislaufs mit den eigenen Handen:</p>
      <ul>
        <li>Kompost und Wurmfarm: Kuchenabfalle werden zu Humus. Stoffkreislaufe, die im Lehrbuch abstrakt bleiben, werden sichtbar und riechbar.</li>
        <li>Beete anlegen, pflegen, ernten: Vom Samen bis zur Ernte - Pflanzen setzen, giessen, beobachten, warten.</li>
        <li>Bodenleben erkunden: Spatenprobe, Regenwurmer zahlen, Bodengeruch beurteilen, Infiltrationstest.</li>
        <li>Krauter und Wildpflanzen: Erkennen, bestimmen, ernten, verarbeiten.</li>
      </ul>
      
      <h3>In der Verarbeitung: Vom Rohstoff zur Mahlzeit</h3>
      <p>Kochen als Handwerk lernen: Unser Soil-to-Table-Ansatz enthalt einen vollstandigen Kochkurs, der weit uber Rezepte hinausgeht.</p>
      <ul>
        <li>Garstufen und ihre Wirkung: Was passiert mit einer Zwiebel, wenn sie eine Minute in Butter schwitzt? Zwei Minuten? Funf?</li>
        <li>Fleisch und Gargrade: Wann ist Fleisch saftig, wann zah, wann zart?</li>
        <li>Bruhen als Fundament: Aus Knochen, Gemuseresten und Krautern eine Bruhe ziehen.</li>
        <li>Werkzeugkunde: Ein Messer richtig scharfen.</li>
        <li>Kuchenorganisation: Sinnvoll spulen - nicht am Ende, sondern wahrend des Kochens.</li>
        <li>Einkaufen mit Verstand: Zutatenlisten lesen. Saisonalitat verstehen.</li>
      </ul>
      <p>Fermentation als Veredelung: Sauerkraut herstellen, Kefir ansetzen, Sauerteig fuehren.</p>
      <p>Gemeinsam kochen: Aus dem, was geerntet, gesammelt, fermentiert oder eingekauft wurde, eine Mahlzeit zubereiten - am Feuer.</p>
      
      <h3>Am Tisch: Bewusst essen</h3>
      <p>Eine gemeinsame Mahlzeit im Wald, am Feuer oder am langen Tisch ist mehr als Nahrungsaufnahme. Sie ist ein sozialer Moment, ein Ankerpunkt im Tag.</p>
      
      <h3>Im Verstehen: Den Kreislauf sehen</h3>
      <p>Das Ziel ist, dass der Zusammenhang zwischen Boden, Pflanze, Lebensmittel und eigenem Wohlbefinden einmal bewusst erlebt wird. Nicht als Theorie, sondern als Erfahrung.</p>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="konzentration">
      <h2>6. Warum Soil to Table auch Konzentrationsarbeit ist</h2>
      <p>Ein Aspekt, der auf den ersten Blick nicht offensichtlich ist, in der Praxis aber sofort spuerbar wird:</p>
      <p>Die meisten Taetigkeiten im Soil-to-Table-Prozess erfordern ruhige, aufmerksame Hande - und belohnen Fokus unmittelbar.</p>
      <ul>
        <li>Ein Messer schleifen verlangt gleichmaessigen Druck, den richtigen Winkel und Geduld uber Minuten, nicht Sekunden.</li>
        <li>Gemuse schneiden mit einem scharfen Messer fordert Prasenz. Wer gedanklich woanders ist, spuert es sofort.</li>
        <li>Pflanzen setzen und pflegen erfordert eine andere Art von Aufmerksamkeit: Geduld, Beobachtung, Wiederkommen.</li>
        <li>Fermentation begleiten ist ein Uebungsfeld fuer Langfristigkeit: Sauerkraut braucht Tage, Sauerteig braucht Wochen, Kompost braucht Monate.</li>
      </ul>
      <p>Konzentrationsfoerderung, ohne dass jemand Konzentrier dich! sagen muss. Die Taetigkeit selbst ist die Uebung.</p>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="leitprinzipien">
      <h2>7. Leitprinzipien unserer Soil-to-Table-Arbeit</h2>
      <ol>
        <li><strong>Kreislauf statt Einbahnstrasse.</strong> Wo immer moglich, schliessen wir Kreislaufe sichtbar: Kompost wird zu Erde, Erde wird zu Pflanze, Pflanze wird zu Nahrung, Reste werden zu Kompost.</li>
        <li><strong>Vielfalt vor Menge.</strong> Im Boden: viele verschiedene Pflanzen statt Monokultur. Auf dem Teller: viele verschiedene Pflanzenarten statt grosser Mengen weniger Sorten.</li>
        <li><strong>Verarbeitung bewusst wahlen.</strong> Fermentation veredelt. Rohes bewahrt. Ultra-Verarbeitung zerstort. Den Unterschied zu kennen und zu schmecken ist eine grundlegende Kompetenz.</li>
        <li><strong>Beobachten vor Handeln.</strong> Was wachst hier von allein? Wie riecht der Boden? Was passiert, wenn ich das esse?</li>
        <li><strong>Biologische Zeitskalen respektieren.</strong> Boden braucht Jahre. Sauerteig braucht Wochen. Ein Baum braucht Jahrzehnte.</li>
        <li><strong>Einfach anfangen.</strong> Nicht mit dem perfekten System, sondern mit einer Sache: einem Krauterbeet, einem Glas Sauerkraut, einem Komposthaufen.</li>
        <li><strong>Ehrlich uber Evidenz.</strong> Wir unterscheiden zwischen dem, was gut belegt ist, dem, was plausibel, aber noch nicht gesichert ist, und dem, was wir nicht wissen. Keine Heilsversprechen.</li>
      </ol>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="nicht-sein">
      <h2>8. Was dieser Ansatz NICHT ist</h2>
      <ul>
        <li><strong>Keine Diat.</strong> Wir empfehlen kein bestimmtes Ernahrungsmodell - weder vegan noch paleo noch ketogen. Wir orientieren uns an Prinzipien, nicht an Dogmen.</li>
        <li><strong>Keine Therapie.</strong> Bei Verdauungsbeschwerden, Nahrungsmittelunvertraeglichkeiten, Essstoerungen oder anderen gesundheitlichen Problemen empfehlen wir die Zusammenarbeit mit qualifizierten Fachpersonen.</li>
        <li><strong>Kein Landwirtschaftsprojekt.</strong> Wir betreiben keinen landwirtschaftlichen Betrieb. Wir nutzen Garten, Boden und Lebensmittel als Lern- und Erfahrungsraeume.</li>
        <li><strong>Kein geschlossenes System.</strong> Unser Ansatz basiert auf der Konvergenz von Bodenokologie, Mikrobiomforschung und Ernahrungswissenschaft. Wir werden den Ansatz anpassen, wenn neue Erkenntnisse es erfordern.</li>
      </ul>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel" id="relevant">
      <h2>9. Fur wen das besonders relevant ist</h2>
      
      <h3>Schulen und Kitas</h3>
      <p>Das Grune Klassenzimmer integriert Soil-to-Table-Elemente in lehrplanrelevante Module: Stoffkreislaufe in Biologie, einfache Experimente in Physik und Chemie, Ernahrung und Verantwortung in Sachkunde und Sozialkunde.</p>
      
      <h3>Unternehmen und Teams</h3>
      <p>Gemeinsames Kochen am Feuer, Krauter sammeln, Sauerteig ansetzen - diese Formate funktionieren auch in Teamtrainings. Sie erzeugen eine andere Art von Zusammenarbeit: ruhiger, handwerklicher, sinnlicher.</p>
      
      <h3>Familien und Einzelpersonen</h3>
      <p>Wildkraeuterwanderungen, Fermentationsworkshops, Gartenmodule - offene Formate, die praktisches Wissen vermitteln und gleichzeitig Zeit in der Natur bieten.</p>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none content-panel">
      <h2>10. Der Zusammenhang mit unseren anderen Grundlagen</h2>
      <p>Soil to Table ist kein isoliertes Thema bei uns. Es verbindet sich mit den anderen Grundlagen unserer Arbeit:</p>
      <ul>
        <li><strong>Bewegung:</strong> Gartenarbeit, Graben, Tragen, Hocken - die Taetigkeiten im Soil-to-Table-Prozess sind korperliche Arbeit.</li>
        <li><strong>Fokus und Konzentration:</strong> Messer scharfen, Krauter bestimmen, Fermentation beobachten - jede dieser Taetigkeiten trainiert aufmerksame Prasenz.</li>
        <li><strong>Biologisches Fundament:</strong> Ernahrung ist eine der funf Saulen des biologischen Fundaments in unserem Arbeitsmodell.</li>
        <li><strong>Bildung fur nachhaltige Entwicklung (BNE):</strong> Soil to Table macht abstrakte Konzepte wie Kreislaufwirtschaft, Biodiversitat und Nachhaltigkeit konkret und handhabbar.</li>
      </ul>
    </div>
  </Section>

  <Section>
    <div class="prose max-w-none">
      <button id="soil-to-table-anfrage-button" class="btn btn-secondary btn-lg" type="button">
        Anfrage Soil to Table stellen
      </button>
    </div>
  </Section>
</MainLayout>

<script client:load>
  import { bindModalTrigger } from '../scripts/content-enhancements.js';

  document.addEventListener('DOMContentLoaded', () => {
    bindModalTrigger('soil-to-table-anfrage-button');
  });
</script>
`;
fs.writeFileSync('web/src/pages/soil-to-table.astro', content);
console.log('File written successfully');
