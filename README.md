<h3>Tehnoloogiad</h3>

- Spring Boot
- Java 21
- Maven
- H2
- Java 21
- Angular


<h3>Käivitamine</h3>

1. Laadida repositoorium alla.
2. Avada kaustas *spring* käsurida ning jooksutada käsk **mvn spring-boot:run**.
3. Kaustas *angular* avada käsurida ning jooksutada käsud:
   - **npm install**;
   - **ng serve open**.


<h3>Programm</h3>

<h5>Filmi soovitamine</h5>

Kasutaja näeb alguses ühe nädala kinokava. Iga filmi jaoks näidatakse selle algusaega, nime, vanuse piirangut, žanrit/žanreid ja keelt. Kinokava filtreerimise võimalust ei ole.
Kui kasutajal on kinokülastuse ajalugu soovitatakse selle põhjal kasutajale filme. Selleks võetakse vaatamisajaloos olevate filmide žanre ning kuvatakse kinokavast kõikide sama žanritega filme. Soovitust tehakse iga päeva jaoks eraldi.


<h5>Istekohtade valimine</h5>

Kasutajale soovitakse alati ühe istekoha. Kinosaali suuruseks on 10 rida ning 10 kohta igas reas. Hõivatud kohad on märgitud punasega, vabad kohad on märgitud rohelisega, kasutaja valitud istekoht on märgitud kollasega. Kohe istekohtade valimisel märgitakse üks soovituslik koht kollasega.
Soovitusliku koha otsimiel alustatkse saali keskelt. Hakatakse iga üleval ja all oleva rea jaoks kontrollima vasakul ja paremal olevaid kohti. Kui leitakse mõni vaba koht, siis soovitatakse see.


<h5>Kasutatud ressurssid</h5>

Eeskuju: https://www.bezkoder.com/spring-boot-jpa-h2-example/ ja https://www.bezkoder.com/angular-16-crud-example/.
Filmide info (nimi, žanr, keel, vanuse piirang) on võetud Apollo lehelt https://www.apollokino.ee/movies.
Kasutajaliidese loomisel juhindusin Angular Material dokumentatsioonist https://material.angular.io/components/categories.


<h5>Lahendus</h5>

Esialgu proovisin projekti natuke teise struktuuriga teha. Kuid lõpude lõpuks sain aru, et ei saa hakkama ning otsustasin kõike lihtsustada.
Projekti lõppversiooni tegemiseks kulus mul ~17 tundi.
