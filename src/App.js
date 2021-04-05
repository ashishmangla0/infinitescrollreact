
import { useEffect, useState } from 'react';
import './App.css';
let PAGE_NUMBER = 1;
const BASEURL = `https://staging-api.realdevsquad.com/pullrequests/open?page=`;
function App() {
  const [page, setPage] = useState(PAGE_NUMBER);
const [getdata, setGetData] = useState([]);
useEffect(() => {
fetch(`${BASEURL}${page}`)
.then(res => res.json())
.then(json => setGetData([...getdata, ...json.pullRequests]))

},[page])


const  setIsFetchingData = () =>{
  setPage(page + 1);
}

const scrollHandler = () =>{

if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setIsFetchingData();
    }
}


useEffect(() => {
  window.addEventListener("scroll", scrollHandler);

  return () => {window.removeEventListener("scroll", scrollHandler);
  };
}, []);

  return (
    <div className="App">
      <h1>
        Infinte scroll using useEffect
      </h1>
{getdata.length > 0 && getdata.map((item) => <div style={{marginBottom:'50px'}}>
Title: {item.title}
<div>username : {item.username}</div>
<div>state : {item.state}</div>
<div>
createdAt : {item.createdAt}
</div>
<div>
  updated at : {item.updatedAt}
</div>
<div>
  repo : {item.repository}
</div>
<div>
  url: {item.url}
</div>

</div>)}

<footer class="footer_infoRepo__1Q-D0"><p>The contents of this website are deployed from this <a href="https://github.com/Real-Dev-Squad/website-status" target="_blank" rel="noopener noreferrer">open sourced repo</a></p></footer>

    </div>
  );
}

export default App;
