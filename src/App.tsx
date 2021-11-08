import React, { useEffect, useState } from 'react';
import './App.css';
import { getUrlData } from './services/getUrlData';
import { getReadableArticle } from './services/readability';

const articleUrl = 'https://www.lemonde.fr/planete/article/2021/11/08/covid-19-en-allemagne-le-taux-d-incidence-a-atteint-201-1-sur-les-sept-derniers-jours_6101374_3244.html';

function App() {

  const [acrticleInfo, setArticleInfo] = useState({title: 'loading...'});

  useEffect(() => {
    getUrlData(articleUrl)
    .then((articleDocument) => {
      const readableArticle = getReadableArticle(articleDocument)
      setArticleInfo(readableArticle)
    }
     
   );
  }, [])
  
  return (
    <div className="App">
      <header>
        <p>
          Hello e-read. Let's make it easier to get your news on the go.
        </p>
        {acrticleInfo.title}
      </header>
    </div>
  );
}

export default App;
