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
  { href: '#forschung', image: '/images/lagerfeuer-bg-400.jpg', alt: 'Forschung', label:'Forschung'},
{href:'#koerper-erleben','image':'/images/lagerfeuer-bg-400.jpg','alt':'Korperlich erleben','label':'Korperlich erleben'},
{href:'#umsetzung','image':'/images/lagerfeuer-bg-400.jpg','alt':'Umsetzung bei uns','label':'Umsetzung'},
{href:'#konzentration ','image ':'/ images /l ager f eu er-b g -4 O0 . j pg ','a1t ': Warum Soil to Table auch Konzentrationsarbeit ist , labe l : Konzentration }, 
];
---

<Mai nLayout title="Soil to Tab le - Komm Raus">
 <Hero titl e="Soil to Tab le" subtitl e="Vom Boden auf den Teller,vom Kreislauf ins Verstehen." imag e= "lage r-feue r-b g" />

 <Section class ="soil-overview">
   <div class= "prose max-w-none">
     <h2>Inhalte auf einen Blick</h2>

<section id="#worum-es-geht"><divclass="content-panel">

<h2 > Worum es geht </h2>

<p > Wenn wir uber Ernahrung sprechen,
beginnen wir meistens beim Teller .
Was soll ich essen? Was ist gesund? Was nicht?
Wir beginnen einen Schritt fruher beim Boden .
Denn was auf dem Teller landet ,
hangt davon ab ,
was im Boden passiert .
Ein lebendiger Boden voller Mikroorganismen ,
Pilznetzwerke und Kleinstlebewesen bringt andere Lebensmittel hervor als ein ausgelaugter ,
verdichteter Boden,
der nur noch durch synthetischen Dunger funktioniert.
Die Nahrstoffdichte,
die Vielfalt der sekundaren Pflanzenstoffe,
die Ballaststoffkomplexitat -
all das wird nicht erst in der Kuch e entschieden,
sondern im Erdreich.</p>

<p>Gleichzeitig zeigt die Forschung der letzten zwanzig Jahre,dass das,was wir essen,nicht nur unseren Korper beeinflusst,sondern uber das Darmmikrobiom auch unsere Stimmung.unsere Konzentration.unser Immunsystem und unsere Stressverarbeitung.Der Darm ist kein isoliertes Verdauungsorgan - er ist ein Okosystem mit uber tausend Bakterienarten.das in standiger Kommunikation mit dem Gehirn steht.</p>

<p>Unser Soil-to-Table-Ansatz verbindet diese beiden Seiten:
Was im Boden passiert bestimmt was auf den Teller kommt bestimmt was im Darm passiert beeinflusst wie wir denken,fuhlen und entscheiden.Ein fundamentaler biologischer Kreislauf ub erlebenswichtiges Wissen.</p>


</section></div>


<!-- SECTION -->
<section id="#kreislauf">< divclass ="c ont ent-p anel">

<h2>Ein Kreislauf,k ein Einbahnstrasse</ h2 >

<p > Die meisten Menschen erleben Ernährung als Einbahnstraße :
Lebensmittel werden gekauft,zubereitetgegessen.Woher sie kommen und was mit Rest en passier t bleibt unsic htbar.InderNatur gibteskeineEinbahnstrassen-Esgi btKreise:

<ul><li>Sonne treibt Photosynthese an.Pflanzen fixieren Kohlenstoff und füttern über ihre Wurzeln dasBodenmikrobiom.DasBodenmikrobiommobilisiert Mineralien,d iePflanzeaufnimmtinNährsto ff,Ballastst offeundsekundärePflanz en stuff umwandelt.DasLebensmit tel wirdgegessen.Ballastst off,Pflanz en stuff erreichendenDarm,wodasDamMikrob io m si ezukurzkettigen Fettsäuren,

Neurotransmitter-Vorläufern un dbioaktiven Stoffen fermentier t.

DieseStoffestärken dieDar mbarriere,

regulieren da sImmunsyst emunda beeinflussenüberden Vagusner vda sGehirn .

Da sGehirn ermöglicht klareEntscheidungen .

UnsereEntscheidungen bestimmen ,

welcheLandwirtschaftwirfinanzieren .

DieLandwirtschaftbestimmtdenZustand desBod ens.

DerKreisschliesstsich.</li></ul>


<b>DieserKreis kanninbeideRichtigungenlaufen:</b>


Aufwartsspirale :

LebendigerBoden nährsto ffreicheLevensm ittel vielfältigesDar mmikrob iom bessere Kognition&Stimmung bewusst ere Entscheidungen Unterstützung regenerativer Land wirtschaft lebendi gererB ode n


Abwartsspirale :

DegradierterBo den näh rstoffarmeL ebensmit tel
verarmtesDarrmik robiom
beeinträchtigteKo gnition
schlechterE nt scheidunge n
weitere Bodendegradation


UnserSo il-t o-T able-Ans atzzielt darauf,diesenKr ei sl aufan mögl ichsvielenSt ellen Erfahr baru nd verständ lichzu machen unde rw omö glichi ch,inRi c ht ungder Auf wärt ss piralezubewegen.


</section ></div><!-- END SECT ION --> 


<!-- SECT ION -- >
<section id="#forschung">< divclass ="c ont ent-p anel">

<h2>Forschungsstand:Wasse legtdieFor schun gna he?</ h2 >

<b>BODEN UNDLEBENSMITTELQUALITÄT </b >
Di eN ähr stoff dichte von L eb ens mitteln is t ü ber dieletztenJahrzehn te messba rg sunkenegabzwische nen-
unteranderemmi tderArtwie Bödenbewirt sc ha ft etwerde nforsc hungze igt dassm ikrobielleVielfal tim Bo -
denmithöhere N ähr stoffdic hteeinembreiteresSpektrumansekun därenPf lanzenstof feninden darauffolgen -
dense lwac hs end en P fl anz enkorre liert.EinBodenderMy k orrhiza-Pilze,Bakteri en,P rotozoon u ndReg enlumen -

einfun ktionierendesNah rung snetzbild et,s tell tpflanzenandereu ndvielfältig ereN ähr sto ftez urVerfügu ngalseinBo de-

der,nurno chexternDuengerfunktion iert.


<b>DASDARMMIKROBIOM </b >
Dasmen schlicheDamMikr obiomeinesderamintensi vsterforsch tenGebiete lerletztenzwanzigJahre.Eini-
gederam besten dokumentiertenZusammenhäng:

