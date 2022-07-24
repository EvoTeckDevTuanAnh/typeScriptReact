import { log } from 'console';
import React from 'react';
import './App.css';
import axios from 'axios';
import PokemonColection from './component/PokemonColection'
// ví dụ cách đặt biến trong type script v
// typescript giúp khai báo type cho biến để tránh lỗi
// let name: string = 'daniel'
// let age: number = 12;
// let sleep: boolean = false;
// let myproject: string[] = ['daniel', 'hello']
// let object: {
//   name: string,
//   age: number,
// } = {
//   name: '',
//   age: 12,
// }
// type student = {
//   name : string , 
//   age : number,
// }

// let studentA: student =  {
//   name : '',
//   age : 12,
// }
// type và interface rất là similar với nhau nhưng chỉ khác nhau là thg type không được mở ra để khai thác ko giống như interface ;

// interface Student2 {
//   name : string ,
//   age : number ,
// }

//cách tạo type cho function
// với kiểu return là number và biến gửi vào là number
// const printSomething: (age:number) => number = (age:number) => {
//   console.log('hello')
//   return age;
// }

// // extendingtype 
// type name = {
//   name : string ,
// }
// type studentDetail = name & {
//   age:number ,
//   address : string ,
// }
// let student:studentDetail = {
//   name : 'Student',
//   age : 12 , 
//   address : ''
// }

// interface Name2 {
//   name : string ,
// }
// interface Student2 extends Name2 {
//   age : number,
//   address? : string, // thêm dấu ? để khi mà extend thiếu cũng ko sao
// }
// let student2:Student2 = {
//   name : "oke",
//   age : 12,
// }

// còn nếu muốn code react với typeScript 
// react.fc để xác nhận đây là 1 component react sử dụng typescript
interface PokemonDetail {
  name: string,
  url: string,
  sprites: {
    front_default: string,
  },
  id: number
}
const App: React.FC = () => {
  // khai bao typescript trong trong react voi 1 array string 
  const [pokemons, setPokemons] = React.useState<PokemonDetail[]>([]);
  const getPokemon = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    // lay chi tiet thong tin cua pokemon
    const data = res.data.results;
    data.forEach(async (pokemon: PokemonDetail) => {
      const poke = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
      setPokemons((p) => [...p, poke.data]);
    })
  }
  React.useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <PokemonColection pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
