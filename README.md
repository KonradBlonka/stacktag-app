# MEDIPORTA - Zadanie rekrutacyjne Junior React Developer

Do napisania programu użyto Vite, Typescript, React, TailwindCSS

Do zainstelowania programu (uruchamianie jak w treści zadania):

- skopiować repozytorium
- "npm ci"
- "npm start" do włączenia programu
- "npm run storybook" do włączenia Storybook

## Program

Tagi są ściągane z API StackOverflow.

Użytkownik może wybrać w jaki sposób mają zostać pokazane tagi: tabela lub siatka kart.

Tagi można sortować na 6 sposobów:

- Name - alfabetycznie (ASC: od A-Z, DESC: od Z-A)
- Popular: ze względu na popularność (ASC: najmniej znane, DESC: najpopularniejsze)
- Activity: od daty wysłania ostatniego zapytania z danym tagiem (ASC: od najstarszych, DESC: od najnowszych)
  Zmiana sortowania ustawia stronę na pierwszą. Można także wybierać kolejne strony za pomocą 'Next' i Previous'

Liczba elementów jest konfigurowana przez pole liczbową nad tabelą.
Użyto restrykcji by użytkownik nie miał błędu związanego z ściąganiem zbyt dużej ilości danych z API.
Liczbę elementów na stronie można ustawić od 1 do 100.

Przygotowano odpowiednie stany dla etapu ładowania danych i błędów przy pobieraniu.

Do gotowych komponentów użyto Shadcn.

Do zarządzania stanem i pobieraniem danych użyto biblioteki react-query (obecnie TanStack Query v5)

Stworzono Storybook, który tylko przedstawia komponenty. Nie udało się zrealizować interakcji między komponentami.
