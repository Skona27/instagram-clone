// Uncomment this and remove this comment

// import * as React from "react";
//
// interface IProps {}
//
// export const Header: React.FC<IProps> = React.memo(() => {
//   return <header />;
// });

/*

Tak wygląda struktura każdego komponentu React.
Zapis export const Header: React.FC<IProps> oznacza, że eksportujesz komponent o nazwie Header, który jest typu React.FC.
Funkcja React.FC zwraca zawsze JSX. W nawiasach <IProps>, oznacza że propsy tego komponentu mają kształt interfejsu IProps.

Przykład:
IProps {
  height: number;
}

Do komponentu trafi props height typu number.
Żeby się odwołać do number robisz ({number}) => { return ...html... with {number} }

Zapis React.memo() to specjalna funkcja React "pamiętająca" komponenty między poszczególnymi przerenderowaniami.
Jest to wyłącznie wydajnościowe i cały komponent działałby bez tego.

Żeby stylizować komponenty lub znaczniki html używasz propsa css i przekazujesz tam obiekt, który posiada style.
Ważne, że tych styli nie piszesz po css-owemu, tylko tak jak w JS. background-color  ->  backgroundColor

Przykład:
<div css={{ color: "red" }}></div>
Można przekazać tam zmienną np. {{ color: myColor }}

Żeby użyć komponentu Header, przechodzisz do pages/index.tsx, importujesz ten plik jako import {Header} from xxxx
i używasz <Header />. Możesz przekazać jakieś propsy, np height={100}

Spróbuj zrobić prostą nawigację w Header z użyciem floxboxa - takie standardowe -> Logo po lewej, linki po prawej
Spróbuj jako props przekazać wysokość, którą będzie miała nawigacja.

*/
