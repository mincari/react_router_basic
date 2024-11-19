import { BrowserRouter, NavLink, Route, Routes, useParams } from 'react-router-dom';
import './App.css';


let contents = [
  {id: 1, title:'UI/UX개발', desc:'사용자 인터페이스~'},
  {id: 2, title:'재사용 가능', desc:'앵귤러 ~'},
  {id: 3, title:'애니메이션 구현', desc:'CSS ~'}
]

function Home() {
  return(
    <>
    <header>
      <h2>프론트엔드 개발자 역할</h2>
      <p>기본언어인 html, css, javascript부터 학습합니다.</p>
    </header>
    <nav>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/qna">Qna</NavLink>
    </nav>
    </>
  )
}

function Tasks() {
  let list = [];
  contents.forEach(item => {
    list.push(
      <li key={item.id}>
        <NavLink to={"/tasks/" + item.id} >{item.title}</NavLink>
      </li>
    )
  })
  return (
    <div>
      <h2>Tasks</h2>
      <p>프론트 개발자의 역할</p>
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
      <Routes>
        <Route path=":task_id" element={<Task/>}></Route>
      </Routes>
    </div>
  )
}


function Task() {
  let params = useParams();
  let task_id = params.task_id;
  let selected_task = {
    title:'',
    desc:''
  }
  const idx = contents.findIndex(item => (item.id === Number(task_id)));
  if (idx === -1) {
    selected_task = {
      title: 'Sorry',
      desc: 'Task Not Found'
    }
  } else {
    selected_task = contents[idx];
  }
  return(
    <div>
      <h3>{selected_task.title}</h3>
      <p>{selected_task.desc}</p>
    </div>
  )
}

function Qna() {
  return (
    <div>
      <h2>Qna</h2>
      <p>Qna...</p>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Frontend Developer</h1>
        <nav>
          <ul className='menu'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/qna">Qna</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tasks/*" element={<Tasks/>}></Route>
          <Route path="/qna" element={<Qna/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
