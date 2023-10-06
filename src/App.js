import "./styles.css";
import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

`;

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: orangered;
	height: 20vh;
	border-bottom: solid;
`;
const Main = styled.main``;

const Logo = styled.img`
	width: 10vw;
`;
const NavBar = styled.nav`
	width: 30vw;
	ul {
		display: flex;
		justify-content: space-around;
		list-style: none;
		color: #ffffff;
		font-size: 30px;
	}
`;
const Imagem = styled.div`
	background-repeat: no-repeat;
	background-size: 40% 70%;
	background-position: center center;
	background-image: url("https://encurtador.com.br/emvDJ");
	height: 70vh;
`;

export default function App() {
	return (
		<>
			<EstiloGlobal />
			<Header>
				<Logo src="https://encurtador.com.br/hqDP7" alt="" />
				<NavBar>
					<ul>
						<li>Inicio</li>
						<li>Contato</li>
						<li>Como Chegar</li>
					</ul>
				</NavBar>
			</Header>
			<Main>
				<Imagem></Imagem>
			</Main>
		</>
	);
}
