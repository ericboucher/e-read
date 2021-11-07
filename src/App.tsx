import React, { useEffect, useState } from 'react';
import './App.css';
import { getUrlData } from './services/getUrlData';
import { getReadableArticle } from './services/readability';

const articleUrl = 'https://atlantico.fr/article/decryptage/comment-les-bobos-ont-accouche-de-notre-democratie-malade--et-c-est-leur-pere-a-tous-qui-se-livre-a-un-grand-mea-culpa--thibault-muzergues';

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
